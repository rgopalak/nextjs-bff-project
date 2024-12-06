// bff/src/index.ts
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/profile', async (req, res) => {
  try {
    // Call your main backend services here
    const profile = await fetchProfileFromMainService();
    res.json({
      name: profile.name,
      email: profile.email,
      // Transform data for frontend needs
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(3001, () => {
  console.log('BFF running on port 3001');
});