
import Focus from '../images/Focus.png';
import Enfocate from '../images/Enfocate.png';
import Cards from '../components/Dinamica/Cards';
import Evaluacion from '../components/Quizz/Evaluacion';
//import './index.css';
const Contact = () => {
	return (
		<section>

			<div className=" mx-auto mt-8 sm:mt-10 ">
				<h1 className="mb-4 text-ternary-dark dark:text-ternary-light text-3xl text-center">Memorama</h1>

				<div
					className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 "
					style={{ height: "1800px" }}
				>
					<Cards />
					<div className="m-20 text-center justify-center mt-20 ">
						<Evaluacion />
					</div>
				</div>
			</div>

		</section>
	);
};

export default Contact;

