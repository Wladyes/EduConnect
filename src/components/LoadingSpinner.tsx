// src/components/LoadingSpinner.tsx
import { CircularProgress, Box } from '@mui/material';

const LoadingSpinner = () => (
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
    <CircularProgress />
  </Box>
);

export default LoadingSpinner;