import * as depth from '@src/style/img/depth.png';
import * as light from '@src/style/img/light.png';
import * as material from '@src/style/img/material.png';
import * as motion from '@src/style/img/motion.png';
import * as scale from '@src/style/img/scale.png';

export default {
  list: [
    {
      hoverImg: null,
      title: 'Home',
      to: '/',
    },
    {
      hoverImg: light,
      title: 'Light',
      to: '/light',
    },
    {
      hoverImg: depth,
      title: 'Depth',
      to: '/depth',
    },
    {
      hoverImg: motion,
      title: 'Motion',
      to: '/motion',
    },
    {
      hoverImg: material,
      title: 'Material',
      to: '/material',
    },
    {
      hoverImg: scale,
      title: 'Scale',
      to: '/scale',
    },
    {
      hoverImg: null,
      title: 'About',
      to: '/about',
    },
  ],
};
