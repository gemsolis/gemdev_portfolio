import Title from "../ui/Title/Title";
import WorkGallery from "../ui/Works/WorksGallery";
import CaseStudyCard from "../ui/Card/CaseStudyCard";

const Projects = () => {
  return (
    <div id="works" className="g-padding g-margin w-full">
      <Title title="Works" subtitle="Projects I Built So Far" />
      <div className="flex flex-col justify-center">
        <WorkGallery />
        <CaseStudyCard />
      </div>
    </div>
  );
};

export default Projects;
