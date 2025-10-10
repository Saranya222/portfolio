import Button from '@/components/form/Button';
import SectionTitle from '@/components/shared/SectionTitle';
import { HiOutlineChartBar, HiOutlineFire } from 'react-icons/hi';
import ProgressBar from '@/components/shared/ProgressBar';

const skills_1 = [
  'Python', 'PySpark', 'Spark', 'Scala', 'Hadoop', 'Pandas', 'NumPy', 'TensorFlow', 'Keras', 'PyTorch', 'SQL',
  'Snowflake', 'AWS', 'S3', 'EC2', 'ECS', 'Lambda', 'Docker', 'Java', 'Spring Boot', 'Angular', 'TypeScript', 'Kafka'
];

const AboutSection = () => {
  return (
    <>
      <SectionTitle>About Me</SectionTitle>

      <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:gap-8">
        {/* Bio */}
        <div>
          <p className="text-base leading-relaxed md:text-lg text-justify">
            Hi, I'm Saranya Tadikonda, a software engineer with a strong foundation in data engineering, machine learning, cloud platforms, and full-stack development.
            I've built and optimized large-scale data pipelines.
            I've also developed full-stack applications where I engineered microservices and event-driven systems that handle millions of transactions daily.
            My experience spans backend development, cloud architecture, and end-to-end pipeline design. I'm now channeling that expertise toward building robust machine learning models and AI-driven products.
          </p>
          <a href="/2025_resume.pdf" download>
            <Button className="mt-5">Download Resume</Button>
          </a>
          {/* <Button className="mt-5">Download Resume</Button> */}
        </div>

        {/* Skills & Progress Bars */}
        <div>
          {/* Progress Bars */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            <div>
              <div className="mb-3 flex justify-between">
                <h6 className="font-semibold">Machine Learning</h6>
                <p>90%</p>
              </div>
              <ProgressBar color="blue" progress={90} />
            </div>
            <div>
              <div className="mb-3 flex justify-between">
                <h6 className="font-semibold">Cloud & Data Engineering</h6>
                <p>90%</p>
              </div>
              <ProgressBar color="amber" progress={90} />
            </div>
            <div>
              <div className="mb-3 flex justify-between">
                <h6 className="font-semibold">Backend</h6>
                <p>85%</p>
              </div>
              <ProgressBar color="rose" progress={85} />
            </div>
            <div>
              <div className="mb-3 flex justify-between">
                <h6 className="font-semibold">Frontend</h6>
                <p>75%</p>
              </div>
              <ProgressBar color="green" progress={75} />
            </div>
          </div>

          {/* Skills under progress bars */}
          <div className="flex flex-wrap justify-center gap-1 mt-6">
            {[...skills_1].map((skill, idx) => (
              <div
                key={idx}
                className="px-2 py-1 rounded-full border-2 border-[#b74b4b] text-[#b74b4b] font-semibold text-sm hover:bg-[#b74b4b] hover:text-white transition"
              >
                {skill}
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-12 mt-6">
            <div className="flex items-center gap-3">
              <HiOutlineChartBar size={50} className="" />
              <div className="text-center">
                <h2 className="text-3xl font-bold">5+</h2>
                <p className="mt-1">Years of Experience</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <HiOutlineFire size={50} className="" />
              <div className="text-center">
                <h2 className="text-3xl font-bold">10+</h2>
                <p className="mt-1">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}

    </>
  );
};

export default AboutSection;
