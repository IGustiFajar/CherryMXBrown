import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
  {
    id: 1,
    name: 'Logitech',
    description: 'Mechanical Logitech',
    price: '$50',
    image: 'https://resource.logitech.com/w_419,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/k840/gallery/k840-gallery-01-new.png?v=1',
  },
  { id: 2, name: 'Rexus', description: 'Mechanical Rexus', price: '$30', image: 'https://rexus.id/wp-content/uploads/2021/04/MP_MX9_05-1.jpg' },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
