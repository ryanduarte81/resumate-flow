import React from 'react';
import { ResumeData } from '@/types/resume';
import { FiMail, FiPhone, FiMapPin, FiGlobe, FiLinkedin, FiGithub, FiCode, FiTool } from 'react-icons/fi';

interface TechnicalTemplateProps {
  data: ResumeData;
}

export const TechnicalTemplate: React.FC<TechnicalTemplateProps> = ({ data }) => {
  const { personalInfo, experience, education, skills, projects, certificates, languages } = data;

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-PT', { year: 'numeric', month: '2-digit' });
  };

  const technicalSkills = skills.filter(skill => skill.category === 'technical');
  const otherSkills = skills.filter(skill => skill.category !== 'technical');

  return (
    <div className="p-8 bg-white text-gray-900 font-mono">
      {/* Header */}
      <div className="border-2 border-gray-900 p-6 mb-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2 tracking-wider">{personalInfo.fullName}</h1>
          <div className="text-lg text-gray-700 mb-4">SOFTWARE DEVELOPER</div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <div className="space-y-1">
              {personalInfo.email && (
                <div className="flex items-center justify-start gap-2">
                  <FiMail className="h-4 w-4" />
                  <span>{personalInfo.email}</span>
                </div>
              )}
              {personalInfo.phone && (
                <div className="flex items-center justify-start gap-2">
                  <FiPhone className="h-4 w-4" />
                  <span>{personalInfo.phone}</span>
                </div>
              )}
              {personalInfo.location && (
                <div className="flex items-center justify-start gap-2">
                  <FiMapPin className="h-4 w-4" />
                  <span>{personalInfo.location}</span>
                </div>
              )}
            </div>
            
            <div className="space-y-1">
              {personalInfo.website && (
                <div className="flex items-center justify-start gap-2">
                  <FiGlobe className="h-4 w-4" />
                  <span className="break-all">{personalInfo.website}</span>
                </div>
              )}
              {personalInfo.linkedin && (
                <div className="flex items-center justify-start gap-2">
                  <FiLinkedin className="h-4 w-4" />
                  <span className="break-all">{personalInfo.linkedin}</span>
                </div>
              )}
              {personalInfo.github && (
                <div className="flex items-center justify-start gap-2">
                  <FiGithub className="h-4 w-4" />
                  <span className="break-all">{personalInfo.github}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 border-b-2 border-gray-900 pb-2">
            {'// '} PROFILE SUMMARY
          </h2>
          <div className="bg-gray-100 p-4 border-l-4 border-gray-900">
            <p className="leading-relaxed">{personalInfo.summary}</p>
          </div>
        </div>
      )}

      {/* Technical Skills */}
      {technicalSkills.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 border-b-2 border-gray-900 pb-2 flex items-center gap-2">
            <FiCode className="h-5 w-5" />
            {'// '} TECHNICAL SKILLS
          </h2>
          <div className="bg-gray-50 p-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {technicalSkills.map((skill) => (
                <div key={skill.id} className="flex justify-between items-center">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-gray-600 text-sm uppercase">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 border-b-2 border-gray-900 pb-2 flex items-center gap-2">
            <FiTool className="h-5 w-5" />
            {'// '} WORK EXPERIENCE
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={exp.id} className="border border-gray-300">
                <div className="bg-gray-900 text-white p-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold">{exp.position}</h3>
                      <p className="text-gray-300">{exp.company} {exp.location && `• ${exp.location}`}</p>
                    </div>
                    <div className="text-right text-sm">
                      <p>{formatDate(exp.startDate)} - {exp.current ? 'CURRENT' : formatDate(exp.endDate)}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  {exp.description && (
                    <p className="mb-3 text-gray-700">{exp.description}</p>
                  )}
                  
                  {exp.achievements.length > 0 && exp.achievements[0] && (
                    <div>
                      <p className="font-semibold mb-2">Key Achievements:</p>
                      <ul className="space-y-1">
                        {exp.achievements.filter(Boolean).map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2">
                            <span className="text-gray-900 font-bold">{'>'}</span>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 border-b-2 border-gray-900 pb-2">
            {'// '} PROJECTS
          </h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id} className="border border-gray-300">
                <div className="bg-gray-100 p-3 border-b border-gray-300">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold">{project.name}</h3>
                    <p className="text-gray-600 text-sm">
                      {formatDate(project.startDate)}{project.endDate && ` - ${formatDate(project.endDate)}`}
                    </p>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="mb-3 text-gray-700">{project.description}</p>
                  
                  {project.technologies.length > 0 && (
                    <div className="mb-3">
                      <p className="font-semibold mb-2">Tech Stack:</p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="bg-gray-900 text-white px-2 py-1 text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {project.highlights.length > 0 && project.highlights[0] && (
                    <div>
                      <p className="font-semibold mb-2">Highlights:</p>
                      <ul className="space-y-1">
                        {project.highlights.filter(Boolean).map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-gray-900 font-bold">{'>'}</span>
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 border-b-2 border-gray-900 pb-2">
            {'// '} EDUCATION
          </h2>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.id} className="bg-gray-50 p-4 border-l-4 border-gray-900">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold">{edu.degree}</h3>
                    <p className="text-gray-700">{edu.institution}</p>
                    <p className="text-gray-600">{edu.field}</p>
                    {edu.description && <p className="text-gray-600 mt-1">{edu.description}</p>}
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600">{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</p>
                    {edu.gpa && <p className="font-semibold">GPA: {edu.gpa}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Other Skills & Languages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {otherSkills.length > 0 && (
          <div>
            <h2 className="text-lg font-bold mb-4 border-b border-gray-900 pb-2">
              {'// '} OTHER SKILLS
            </h2>
            <div className="space-y-2">
              {otherSkills.map((skill) => (
                <div key={skill.id} className="flex justify-between">
                  <span>{skill.name}</span>
                  <span className="text-gray-600 text-sm uppercase">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {languages.length > 0 && (
          <div>
            <h2 className="text-lg font-bold mb-4 border-b border-gray-900 pb-2">
              {'// '} LANGUAGES
            </h2>
            <div className="space-y-2">
              {languages.map((lang) => (
                <div key={lang.id} className="flex justify-between">
                  <span>{lang.name}</span>
                  <span className="text-gray-600 text-sm uppercase">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
