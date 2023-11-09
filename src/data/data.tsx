import { IoFlashOutline } from 'react-icons/io5';
import { AiOutlineTag } from 'react-icons/ai';
interface Pages {
  name: string;
  id: number;
  icon?: any;
}

export const Nav_pages: Pages[] = [
  {
    name: 'Deals Today',
    id: 1,
    icon: <IoFlashOutline />,
  },

  {
    name: 'Special Prices',
    id: 2,
    icon: <AiOutlineTag />,
  },

  {
    name: 'Shop',
    id: 3,
  },

  {
    name: 'Blog',
    id: 4,
  },

  {
    name: 'Pages',
    id: 5,
  },

  {
    name: 'Fresh',
    id: 6,
  },

  {
    name: 'PDF',
    id: 7,
  },
];


