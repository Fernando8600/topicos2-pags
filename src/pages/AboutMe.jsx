import Focus from '../images/ArquetiposSistematicos.png';
import Enfocate from '../images/Enfocate.png';
import Tiempo from '../images/admnTiempo.png';

const About = () => {
	return (
		<section>
			<h1 className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light text-center"> Arquetipos Sistémicos</h1>
			<div className=" m-4 mr-5 font-general-regular text-center  w-full">
				<p className="font-general-small  mb-1 text-ternary-dark dark:text-ternary-light text-center"> Un arquetipo es un patrón o modelo recurrente que se encuentra en sistemas complejos. Estos arquetipos ayudan a comprender ciertas dinámicas y comportamientos comunes en sistemas, lo que a su vez puede ser útil para abordar problemas y tomar decisiones. Algunos ejemplos de arquetipos sistémicos incluyen "Compensación entre proceso y demora", "Erosión de metas", "Adversarios accidentales", entre otros </p>
			</div>
			<div className=" justify-center sm:flex font-general-regular text-center  w-full">

				<div className="mt-5 laptop:mt-10 grid grid-cols-1">
					<div
						className="flex items-center justify-center"
					>

						<div
							className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 mob:h-auto"
							style={{ height: "300px" }}
						>
							<img src={Focus} className="rounded-lg w-96" alt="" />
						</div>
					</div>

				</div>
			</div>
		</section>
	);
};

export default About;


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