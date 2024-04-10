import { loading } from '../../../components/loding/loading';
import { Logo } from '../../../components/logo/logo';
import { El } from '../../../utils/El/El';

export const OnboardingPage = () => {
  return El({
    element: 'div',
    className:
      'flex flex-col items-center justify-around relative top-[30vh] gap-56 ',
    children: [
      El({
        element: 'div',
        className: 'flex  items-center  justify-center  	',
        children: [
          Logo(),

          El({
            element: 'p',
            innerText: 'Shoea',
            className: 'text-3xl font-bold	pl-3		',
          }),
        ],
      }),
      loading(),
    ],
    
  })
};
