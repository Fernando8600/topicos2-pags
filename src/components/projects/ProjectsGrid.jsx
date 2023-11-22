import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
import { ProjectsContext } from '../../context/ProjectsContext';
import ProjectsFilter from './ProjectsFilter';
import profileImage from '../../images/perfil.jpg';


const ProjectsGrid = () => {
	const {
		projects,
		searchProject,
		setSearchProject,
		searchProjectsByTitle,
		selectProject,
		setSelectProject,
		selectProjectsByCategory
	} = useContext(ProjectsContext);

	return (
		<section>
			<div className="block sm:flex sm:gap-10 mt-10 sm:mt-0">
				<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
					<img src={profileImage} className="rounded-lg w-96" alt="" />
				</div>

				<div className="font-general-regular w-full sm:w-3/4 text-left">
					<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
						Fernando Gutiérrez Hernández
					</p>
					<p className=" text-ternary-dark dark:text-ternary-light text-lg">
						gutierrezhernandez.f86@gmail.com
					</p>
					<p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
						Ingenieria de Software
					</p>
				</div>
			</div>
			<div className="text-center block sm:flex sm:gap-10 mt-2 sm:mt-10">

				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					Sobre Mí
				</p>
			</div>


			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
				{selectProject
					? selectProjectsByCategory.map((project) => (
						<ProjectSingle
							title={project.title}
							category={project.category}
							image={project.img}
							key={project.id}
						/>
					))
					: projects.map((project) => (
						<ProjectSingle
							title={project.title}
							category={project.category}
							image={project.img}
							key={project.id}
						/>
					))}
			</div>
		</section>
	);
};

export default ProjectsGrid;
