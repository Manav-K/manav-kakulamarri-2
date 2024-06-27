import styles from "./ProjectsStyles.module.css";
import trender from "../../assets/Untitled design (20).png";
import MalariaDetector from "../../assets/MalariaDetector.png";
import BudGenius from "../../assets/BudGenius (1).png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={trender}
          link="https://github.com/Manav-K/Trender"
          h3="Trender"
          p="Trend Finding App"
        />
        <ProjectCard
          src={MalariaDetector}
          link="https://github.com/Manav-K/Malaria-Cell-Detection"
          h3="Malaria Detector"
          p="Malaria  Learning Model"
        />
        <ProjectCard
          src={BudGenius}
          link="https://github.com/Manav-K/BudGenius"
          h3="BudGenius"
          p="Expense Tracking Application"
        />
      </div>
    </section>
  );
}
export default Projects;
