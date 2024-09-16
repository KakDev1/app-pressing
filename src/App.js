import React from 'react';
import { Button, Typography, Box } from '@mui/material';

function App() {
    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Bienvenue dans notre application de gestion de pressing.
            </Typography>
            <Button variant="contained" color="primary">
                Cliquez-moi !
            </Button>
        </Box>
    );
}

export default App;