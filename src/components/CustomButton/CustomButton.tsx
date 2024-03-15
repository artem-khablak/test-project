import { FC } from 'react';
import Button from '@mui/material/Button';

const CustomButton: FC = () => {
  return (
    <Button
      sx={{
        width: '315px',
        height: '60px',
        bgcolor: '#1B264F',
        color: '#fff',
        borderRadius: '10px',
        letterSpacing: '2px',
        transition: 'background-color 0.3s',
        '&:hover': {
          bgcolor: '#0F1A2C',
        }
      }}
    >
      get started
    </Button>
  );
}

export default CustomButton;