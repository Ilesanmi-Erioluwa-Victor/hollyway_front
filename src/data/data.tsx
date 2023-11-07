import { IoIosFlash } from 'react-icons/io';
import { AiOutlineTag } from 'react-icons/ai';
interface Pages {
  name: string;
  id: number;
  icon?: any;
}

export const Navpages: Pages[] = [
  {
    name: 'Deals Today',
    id: 1,
    icon: <IoIosFlash />,
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
];
