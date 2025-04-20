// postcss.config.mjs
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss(), // Aquí usas el nuevo paquete
    autoprefixer(),
  ],
};