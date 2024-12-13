import ProfessionalExperience from "../../components/ProfessionalExperience";
import FullSkillSet from "../../components/FullSkillSet";
import Education from "../../components/Education";
import FullAbout from "../../components/FullAbout";

export default function Experience() {
  return (
    <main className="min-h-screen pt-20">
      <ProfessionalExperience />
      <FullSkillSet />
      <Education />
      <FullAbout />
    </main>
  );
}
