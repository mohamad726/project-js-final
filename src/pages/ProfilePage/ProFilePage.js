import { Link } from '@/components/Link/Link';
import { Logo } from '@/components/logo/logo';
import { Footer } from '@/layout/footer/footer';
import { El } from '@/utils/El/El';

export function ProfilePage() {
  return El({
    element: 'div',
    className: 'flex flex-col justify-center items-center',
    children: [
      El({
        element:'div',
        className:'w-screen h-screen  bg-gray-100 font-[600]',
        children:[
El({
  element:'div',
  className:'w-screen  mt-[40px]  flex flex-col gap-20 justify-center items-center ',
  children:[
    El({element:'img',
  className:'rounded-full',
src:'../../../src/assets/img/profile.jpg'}),
El({
element:'div',
className:'flex gap-10 text-[30px] ',
children:[
  El({element:'p',innerText:'Mohamad'}),
  El({element:'p',innerText:'Mahomdi'})
]
}),
El({
  element:'div',
  className:'flex gap-10 text-[30px] ',
  children:[
    El({element:'p',innerText:'Mahmodim222@gmail.com'}),
  ]
  }),
  El({
    element:'div',
    className:'flex gap-10 text-[30px] ',
    children:[
      El({element:'p',innerText:'PhoneNumber:09*******17'}),
    ]
    })
  ]
}),
          Footer()
        ]
      })
    ]
  
  });
}
