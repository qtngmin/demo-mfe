import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

const fakeProducts: Product[] = [
  { id: 1, name: 'Product 1', description: 'This is Product 1', price: 29.99 },
  { id: 2, name: 'Product 2', description: 'This is Product 2', price: 39.99 },
  { id: 3, name: 'Product 3', description: 'This is Product 3', price: 49.99 },
];

const ProductPage: React.FC = () => {
  return (
    <Grid container spacing={3} sx={{ ml: 15 }}>
      {fakeProducts.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardContent>
              <Typography variant="h5">{product.name}</Typography>
              <Typography variant="body2">{product.description}</Typography>
              <Typography variant="h6">${product.price}</Typography>
              <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductPage;
