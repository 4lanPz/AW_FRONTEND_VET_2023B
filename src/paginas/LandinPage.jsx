import logoDarkMode from "../assets/dark.png";
import logoFacebook from "../assets/facebook.png";
import logoGithub from "../assets/github.png";
import logoLinkedind from "../assets/linkedin.png";
import logoRocket from "../assets/rocket.webp";
import logocat from "../assets/Cat-landingpage.jpg";
import logoWeb1 from "../assets/vetpage.png";
import logoWeb2 from "../assets/pacientepage.png";
import logoWeb4 from "../assets/loginpage.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export const LandinPage = () => {
  const [darkMode, setdarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800">
        <section>
          <nav className="p-10 mb-12 flex justify-between">
            <h1 className="text-2xl font-bold dark:text-white">Veterinaria</h1>
            <ul className="flex items-center">
            <li><img onClick={()=>setdarkMode(!darkMode)} className='cursor-pointer' src={logoDarkMode} alt="logo" width={40} height={40}/></li>
              <li>
                <Link
                  to="/login"
                  className="bg-gray-600 text-white text-lg px-6 py-2 rounded-full ml-8 hover:bg-gray-900 hover:text-white"
                  href="#"
                >
                  Login
                </Link>
              </li>
            </ul>
          </nav>

          <div className="text-center">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Proyecto Veterinaria Grupo 5
            </h2>
          </div>

          <div className="relative mx-auto  bg-gradient-to-b from-indigo-400 rounded-full w-80 h-80 mt-12 overflow-hidden md:w-96 md:h-96 dark:border-4 border-teal-300">
            <img src={logocat} alt="logo-cat" />
          </div>
        </section>

        <section>
          <div className="bg-gray-200 dark:bg-gray-800  rounded-md">
            <h3 className="text-3xl py-2 dark:text-white">Integrantes</h3>
            <ul className="list-disc pl-6">
              <li className="text-lg py-1 leading-8 text-gray-800 dark:text-white">
                Catani Ariana
              </li>
              <li className="text-lg py-1 leading-8 text-gray-800 dark:text-white">
                Casillas Nataly
              </li>
              <li className="text-lg py-1 leading-8 text-gray-800 dark:text-white">
                Obando Dilan
              </li>
              <li className="text-lg py-1 leading-8 text-gray-800 dark:text-white">
                Falconi Juan
              </li>
              <li className="text-lg py-1 leading-8 text-gray-800 dark:text-white">
                Pañora Cristhian
              </li>
              <li className="text-lg py-1 leading-8 text-gray-800 dark:text-white">
                Perez Alan
              </li>
              <li className="text-lg py-1 leading-8 text-gray-800 dark:text-white">
                Revelo Ingrith
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">
              Imagenes del Proyecto
            </h3>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <img className="rounded-lg object-cover" src={logoWeb1} />
            </div>
            <div className="basis-1/3 flex-1">
              <img className="rounded-lg object-cover" src={logoWeb2} />
            </div>
            <div className="basis-1/3 flex-1">
              <img className="rounded-lg object-fill" src={logoWeb4} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

{
  /* 
                     <div className='md:flex md:flex-wrap lg:flex lg:justify-center gap-10'>
                        <div className='text-center shadow-2xl p-10 rounded-xl my-10 md:w-72 lg:w-96 dark:bg-slate-100'>
                            <img className='mx-auto' src={logoCode} alt="" />
                            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
                            <p className='py-4 text-teal-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias repudiandae aliquid dolores officiis neque. Voluptatem quod nemo, totam iste atque id aspernatur porro laborum, non quo, pariatur nobis natus consectetur?</p>
                            <p className='text-gray-800 py-1'>Tools used</p>
                            <p className='text-gray-800 py-1'>Photoshop</p>
                            <p className='text-gray-800 py-1'>Illustrator</p>
                            <p className='text-gray-800 py-1'>Figma</p>
                        </div>
                        <div className='text-center shadow-2xl p-10 rounded-xl my-10 md:w-72 lg:w-96 dark:bg-slate-300'>
                            <img className='mx-auto' src={logoConsulting} alt="" />
                            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
                            <p className='py-4 text-teal-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias repudiandae aliquid dolores officiis neque. Voluptatem quod nemo, totam iste atque id aspernatur porro laborum, non quo, pariatur nobis natus consectetur?</p>
                            <p className='text-gray-800 py-1'>Tools used</p>
                            <p className='text-gray-800 py-1'>Photoshop</p>
                            <p className='text-gray-800 py-1'>Illustrator</p>
                            <p className='text-gray-800 py-1'>Figma</p>
                        </div>
                        <div className='text-center shadow-2xl p-10 rounded-xl my-10 md:w-72 lg:w-96 dark:bg-slate-100'>
                            <img className='mx-auto' src={logoDesign} alt="" />
                            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
                            <p className='py-4 text-teal-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias repudiandae aliquid dolores officiis neque. Voluptatem quod nemo, totam iste atque id aspernatur porro laborum, non quo, pariatur nobis natus consectetur?</p>
                            <p className='text-gray-800 py-1'>Tools used</p>
                            <p className='text-gray-800 py-1'>Photoshop</p>
                            <p className='text-gray-800 py-1'>Illustrator</p>
                            <p className='text-gray-800 py-1'>Figma</p>
                        </div>
                    {/* </div> */
}

{
  /* <li><img onClick={()=>setdarkMode(!darkMode)} className='cursor-pointer' src={logoDarkMode} alt="logo" width={40} height={40}/></li> */
}

{
  /* <div className='text-5xl flex justify-center gap-16 py-3'>
                        <img src={logoFacebook} alt="logo-redes" width={50} height={50}  className={'dark:border-2 border-teal-300 rounded-full'}/>

                        <img src={logoGithub} alt="logo-redes" width={50} height={50} className={'dark:border-2 border-teal-300 rounded-full'}/>

                        <img src={logoLinkedind} alt="logo-redes" width={50} height={50} className={'dark:border-2 border-teal-300 rounded-full'}/>
                    </div> */
}

{
  /* <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, delectus iure <span className='text-teal-500'>quibusdam</span> quas quaerat itaque, est minima ducimus recusandae illo ipsam numquam nam earum libero <span className='text-teal-500'>deleniti</span> voluptatem! Autem, veniam ut.</p>
                        <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, delectus iure <span className='text-teal-500'>quibusdam</span> quas quaerat itaque, est minima ducimus recusandae illo ipsam numquam nam earum libero <span className='text-teal-500'>deleniti</span> voluptatem! Autem, veniam ut.</p> */
}

{
  /* <div className="basis-1/3 flex-1">
                            <img
                                className="rounded-lg object-cover"
                                src={logoWeb6}
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <img
                                className="rounded-lg object-cover"
                                src={logoWeb5}
                            />
                        </div>
                        <div className="basis-1/3 flex-1 lg:bg-orange-100">
                            <img
                                className="rounded-lg object-cover "
                                src={logoWeb3}
                            />
                        </div> */
}
