import React from 'react';
import { ResumeData } from '@/types/resume';
import { FiMail, FiPhone, FiMapPin, FiGlobe, FiLinkedin, FiGithub } from 'react-icons/fi';

interface CreativeTemplateProps {
  data: ResumeData;
}

export const CreativeTemplate: React.FC<CreativeTemplateProps> = ({ data }) => {
  const { personalInfo, experience, education, skills, projects, certificates, languages } = data;

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-PT', { year: 'numeric', month: 'short' });
  };

  const getSkillLevel = (level: string) => {
    const levels = { beginner: 25, intermediate: 50, advanced: 75, expert: 100 };
    return levels[level as keyof typeof levels] || 50;
  };

  return (
    <div className="flex min-h-full">
      {/* Sidebar */}
      <div className="w-1/3 bg-gradient-to-b from-blue-600 to-blue-800 text-white p-6">
        {/* Profile */}
        <div className="text-center mb-8">
          <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-4xl font-bold">{personalInfo.fullName.charAt(0)}</span>
          </div>
          <h1 className="text-2xl font-bold mb-2">{personalInfo.fullName}</h1>
        </div>

        {/* Contact */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4 pb-2 border-b border-white/30">Contacto</h2>
          <div className="space-y-3 text-sm">
            {personalInfo.email && (
              <div className="flex items-center gap-2">
                <FiMail className="h-4 w-4" />
                <span className="break-all">{personalInfo.email}</span>
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center gap-2">
                <FiPhone className="h-4 w-4" />
                <span>{personalInfo.phone}</span>
              </div>
            )}
            {personalInfo.location && (
              <div className="flex items-center gap-2">
                <FiMapPin className="h-4 w-4" />
                <span>{personalInfo.location}</span>
              </div>
            )}
            {personalInfo.website && (
              <div className="flex items-center gap-2">
                <FiGlobe className="h-4 w-4" />
                <span className="break-all">{personalInfo.website}</span>
              </div>
            )}
            {personalInfo.linkedin && (
              <div className="flex items-center gap-2">
                <FiLinkedin className="h-4 w-4" />
                <span className="break-all">{personalInfo.linkedin}</span>
              </div>
            )}
            {personalInfo.github && (
              <div className="flex items-center gap-2">
                <FiGithub className="h-4 w-4" />
                <span className="break-all">{personalInfo.github}</span>
              </div>
            )}
          </div>
        </div>

        {/* Skills */}
        {skills.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4 pb-2 border-b border-white/30">Competências</h2>
            <div className="space-y-4">
              {skills.slice(0, 8).map(skill => (
                <div key={skill.id}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-white rounded-full h-2 transition-all duration-300"
                      style={{ width: `${getSkillLevel(skill.level)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Languages */}
        {languages.length > 0 && (
          <div>
            <h2 className="text-lg font-bold mb-4 pb-2 border-b border-white/30">Idiomas</h2>
            <div className="space-y-2 text-sm">
              {languages.map(lang => (
                <div key={lang.id} className="flex justify-between">
                  <span>{lang.name}</span>
                  <span className="capitalize">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-white">
        {/* Summary */}
        {personalInfo.summary && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Resumo Profissional</h2>
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
              <p className="text-gray-700 leading-relaxed text-justify">{personalInfo.summary}</p>
            </div>
          </div>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-blue-600 w-1 h-8 mr-3"></span>
              Experiência Profissional
            </h2>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp.id} className="relative pl-8">
                  <div className="absolute left-0 top-2 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="absolute left-2 top-6 w-0.5 h-full bg-blue-200"></div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                        <p className="text-blue-600 font-semibold">{exp.company}</p>
                        {exp.location && <p className="text-gray-600">{exp.location}</p>}
                      </div>
                      <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                        {formatDate(exp.startDate)} - {exp.current ? 'Presente' : formatDate(exp.endDate)}
                      </div>
                    </div>
                    
                    {exp.description && (
                      <p className="text-gray-700 mb-3">{exp.description}</p>
                    )}
                    
                    {exp.achievements.length > 0 && exp.achievements[0] && (
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {exp.achievements.filter(Boolean).map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-blue-600 w-1 h-8 mr-3"></span>
              Formação Académica
            </h2>
            <div className="grid gap-4">
              {education.map((edu) => (
                <div key={edu.id} className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{edu.degree}</h3>
                      <p className="text-blue-600 font-semibold">{edu.institution}</p>
                      <p className="text-gray-600">{edu.field}</p>
                      {edu.description && <p className="text-gray-600 mt-2">{edu.description}</p>}
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600">{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</p>
                      {edu.gpa && <p className="text-blue-600 font-semibold">Média: {edu.gpa}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-blue-600 w-1 h-8 mr-3"></span>
              Projetos
            </h2>
            <div className="grid gap-4">
              {projects.map((project) => (
                <div key={project.id} className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-gray-900">{project.name}</h3>
                    <p className="text-gray-600 text-sm">
                      {formatDate(project.startDate)}{project.endDate && ` - ${formatDate(project.endDate)}`}
                    </p>
                  </div>
                  
                  <p className="text-gray-700 mb-3">{project.description}</p>
                  
                  {project.technologies.length > 0 && (
                    <div className="mb-3">
                      <p className="text-gray-600 font-semibold mb-2">Tecnologias:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {project.highlights.length > 0 && project.highlights[0] && (
                    <ul className="list-disc list-inside text-gray-700">
                      {project.highlights.filter(Boolean).map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};