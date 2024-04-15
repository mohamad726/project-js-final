import { El } from '@/utils/El/El';
import { Header } from './header/headerHome';

export function Layout(Main) {
  return El({
    element: 'div',
    children: [
      Header(),
      Main(), //Footer()
    ],
  });
}
