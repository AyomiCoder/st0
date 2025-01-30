import express from 'express';
import cors from 'cors';
import compression from 'compression';
import { setRoutes } from './routes/index';

const app = express();
const PORT = process.env.PORT || 3000;

// Use only necessary middleware
app.use(cors());
app.use(express.json());
app.use(compression()); 

// Set routes
setRoutes(app);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

function notImplementedCompression(): any {
  throw new Error('Function not implemented.');
}
