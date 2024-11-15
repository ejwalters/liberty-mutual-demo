const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', async (req, res) => {
  const { identifierType, identifierValue } = req.body;

  try {
    const response = await axios.get(
      `https://profiles.segment.com/v1/spaces/YOUR_SPACE_ID/collections/users/profiles/${identifierType}:${identifierValue}/traits`,
      {
        auth: { username: process.env.SEGMENT_WRITE_KEY }
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching profile data' });
  }
});

module.exports = router;
