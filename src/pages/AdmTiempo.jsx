import Focus from '../images/ArquetiposSistematicos.png';
import Enfocate from '../images/Enfocate.png';
import Tiempo from '../images/admnTiempo.png';
import Tiempo2 from '../images/Tiempo2.png';
import Tiempo3 from '../images/Tiempo3.png';
import Tiempo4 from '../images/Tiempo4.png';
import Tiempo5 from '../images/Tiempo5.png';
import Tiempo6 from '../images/Tiempo6.png';

const AdmTiempo = () => {
    return (
        <section>
            <h1 className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light text-center"> Administración del Timepo</h1>
            <div className=" m-4 mr-5 font-general-regular text-center  w-full">
                <a href="https://prezi.com/view/77QArRkALxcqYsq9w3qR/" target="_blank" rel="noopener noreferrer">
                    Presentación
                </a>
            </div>
            <div className=" justify-center sm:flex font-general-regular text-center  w-full">

                <div className="mt-5 laptop:mt-10 grid grid-cols-2">
                    <div
                        className="flex items-center justify-center"
                    >

                        <div
                            className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 mob:h-auto"
                            style={{ height: "300px" }}
                        >
                            <img src={Tiempo} className="rounded-lg w-96" alt="" />
                        </div>
                        <div
                            className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 mob:h-auto"
                            style={{ height: "300px" }}
                        >
                            <img src={Tiempo2} className="rounded-lg w-96" alt="" />
                        </div>
                    </div>

                    <div
                        className="flex items-center justify-center"
                    >
                        <div
                            className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 mob:h-auto"
                            style={{ height: "300px" }}
                        >
                            <img src={Tiempo3} className="rounded-lg w-96" alt="" />
                        </div>
                        <div
                            className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 mob:h-auto"
                            style={{ height: "300px" }}
                        >
                            <img src={Tiempo4} className="rounded-lg w-96" alt="" />
                        </div>
                    </div>
                    <div
                        className="flex items-center justify-center"
                    >
                        <div
                            className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 mob:h-auto"
                            style={{ height: "300px" }}
                        >
                            <img src={Tiempo5} className="rounded-lg w-96" alt="" />
                        </div>
                        <div
                            className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 mob:h-auto"
                            style={{ height: "300px" }}
                        >
                            <img src={Tiempo6} className="rounded-lg w-96" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AdmTiempo;


/*<AboutMeProvider>
<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1, delay: 1 }}
exit={{ opacity: 0 }}
className="container mx-auto"
>
<AboutMeBio />
</motion.div>

<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1, delay: 1 }}
exit={{ opacity: 0 }}
>
<AboutCounter />
</motion.div>

<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1, delay: 1 }}
exit={{ opacity: 0 }}
className="container mx-auto"
>
</motion.div>
</AboutMeProvider> */