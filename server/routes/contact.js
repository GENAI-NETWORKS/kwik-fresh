const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// In-memory store for submissions
const submissions = [];

// Path for persisted JSON file
const dataDir = path.join(__dirname, '../data');
const submissionsFile = path.join(dataDir, 'submissions.json');

// Helper: load existing submissions from file on startup
function loadSubmissions() {
  try {
    if (fs.existsSync(submissionsFile)) {
      const raw = fs.readFileSync(submissionsFile, 'utf-8');
      const parsed = JSON.parse(raw);
      submissions.push(...(parsed || []));
      console.log(`Loaded ${submissions.length} existing contact submissions.`);
    }
  } catch (e) {
    console.warn('Could not load existing submissions:', e.message);
  }
}

// Helper: persist to file
function saveSubmissions() {
  try {
    fs.writeFileSync(submissionsFile, JSON.stringify(submissions, null, 2), 'utf-8');
  } catch (e) {
    console.warn('Could not save submissions to file:', e.message);
  }
}

loadSubmissions();

// POST /api/contact
router.post('/', (req, res) => {
  const { name, phone, address, items } = req.body;

  // Validation
  const errors = {};
  if (!name || name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }
  if (!phone || !/^[6-9]\d{9}$/.test(phone.replace(/\s+/g, ''))) {
    errors.phone = 'Please enter a valid 10-digit Indian mobile number.';
  }
  if (!address || address.trim().length < 10) {
    errors.address = 'Please enter a complete delivery address.';
  }
  if (!items || items.trim().length < 3) {
    errors.items = 'Please describe what items you need.';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  const submission = {
    id: `SUB-${Date.now()}`,
    name: name.trim(),
    phone: phone.trim(),
    address: address.trim(),
    items: items.trim(),
    timestamp: new Date().toISOString(),
    status: 'pending',
  };

  submissions.push(submission);
  saveSubmissions();

  console.log(`\n📦 New contact/order from ${submission.name} (${submission.phone})`);
  console.log(`   Items: ${submission.items}`);
  console.log(`   Address: ${submission.address}\n`);

  res.status(201).json({
    success: true,
    message: `Thank you, ${submission.name}! We received your order and will call you shortly at ${submission.phone}.`,
    submissionId: submission.id,
  });
});

// GET /api/contact — for admin view (optional)
router.get('/', (req, res) => {
  res.json({ total: submissions.length, submissions });
});

module.exports = router;
