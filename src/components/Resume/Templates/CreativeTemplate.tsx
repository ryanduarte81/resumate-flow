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
    <div className="flex min-h-full font-sans">
      {/* Sidebar */}
      <div className="w-1/3 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white p-8 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-20 left-0 w-24 h-24 bg-white/5 rounded-full -translate-x-12"></div>
        
        {/* Profile */}
        <div className="text-center mb-10 relative z-10">
          {personalInfo.profileImage ? (
            <div className="w-32 h-32 mx-auto mb-6">
              <img
                src={personalInfo.profileImage}
                alt="Foto de perfil"
                className="w-32 h-32 rounded-full object-cover border-4 border-white/30 shadow-lg"
              />
            </div>
          ) : (
            <div className="w-32 h-32 bg-gradient-to-br from-white/30 to-white/10 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-white/20 backdrop-blur-sm">
              <span className="text-4xl font-bold font-serif">{personalInfo.fullName.charAt(0)}</span>
            </div>
          )}
          <h1 className="text-2xl font-serif font-bold mb-2 leading-tight">{personalInfo.fullName}</h1>
          <div className="w-16 h-1 bg-white/60 mx-auto rounded-full"></div>
        </div>

        {/* Contact */}
        <div className="mb-10">
          <h2 className="text-lg font-bold mb-6 pb-3 border-b border-white/30 relative">
            <span className="bg-white/10 px-3 py-1 rounded-lg backdrop-blur-sm">Contacto</span>
          </h2>
          <div className="space-y-4 text-sm">
            {personalInfo.email && (
              <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                <FiMail className="h-4 w-4 text-white/80" />
                <span className="break-all font-medium">{personalInfo.email}</span>
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                <FiPhone className="h-4 w-4 text-white/80" />
                <span className="font-medium">{personalInfo.phone}</span>
              </div>
            )}
            {personalInfo.location && (
              <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                <FiMapPin className="h-4 w-4 text-white/80" />
                <span className="font-medium">{personalInfo.location}</span>
              </div>
            )}
            {personalInfo.website && (
              <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                <FiGlobe className="h-4 w-4 text-white/80" />
                <span className="break-all font-medium">{personalInfo.website}</span>
              </div>
            )}
            {personalInfo.linkedin && (
              <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                <FiLinkedin className="h-4 w-4 text-white/80" />
                <span className="break-all font-medium">{personalInfo.linkedin}</span>
              </div>
            )}
            {personalInfo.github && (
              <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                <FiGithub className="h-4 w-4 text-white/80" />
                <span className="break-all font-medium">{personalInfo.github}</span>
              </div>
            )}
          </div>
        </div>

        {/* Skills */}
        {skills.length > 0 && (
          <div className="mb-10">
            <h2 className="text-lg font-bold mb-6 pb-3 border-b border-white/30">
              <span className="bg-white/10 px-3 py-1 rounded-lg backdrop-blur-sm">Competências</span>
            </h2>
            <div className="space-y-5">
              {skills.slice(0, 8).map(skill => (
                <div key={skill.id} className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-white/80 capitalize">{skill.level}</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-white to-white/80 rounded-full h-3 transition-all duration-500 shadow-sm"
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
            <h2 className="text-lg font-bold mb-6 pb-3 border-b border-white/30">
              <span className="bg-white/10 px-3 py-1 rounded-lg backdrop-blur-sm">Idiomas</span>
            </h2>
            <div className="space-y-3 text-sm">
              {languages.map(lang => (
                <div key={lang.id} className="flex justify-between bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                  <span className="font-medium">{lang.name}</span>
                  <span className="capitalize text-white/80">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 bg-gray-50">
        {/* Summary */}
        {personalInfo.summary && (
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 text-center">Resumo Profissional</h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-6 border-purple-600 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-100 rounded-full -translate-y-10 translate-x-10"></div>
              <p className="text-gray-700 leading-relaxed text-justify text-lg relative z-10">{personalInfo.summary}</p>
            </div>
          </div>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 flex items-center">
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 w-2 h-10 mr-4 rounded-full"></span>
              Experiência Profissional
            </h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={exp.id} className="relative pl-8">
                  <div className="absolute left-0 top-3 w-6 h-6 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full shadow-lg"></div>
                  <div className="absolute left-3 top-9 w-0.5 h-full bg-gradient-to-b from-purple-300 to-transparent"></div>
                  
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-full -translate-y-16 translate-x-16"></div>
                    
                    <div className="flex justify-between items-start mb-4 relative z-10">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.position}</h3>
                        <p className="text-purple-600 font-semibold text-lg">{exp.company}</p>
                        {exp.location && <p className="text-gray-600 mt-1">{exp.location}</p>}
                      </div>
                      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                        {formatDate(exp.startDate)} - {exp.current ? 'Presente' : formatDate(exp.endDate)}
                      </div>
                    </div>
                    
                    {exp.description && (
                      <p className="text-gray-700 mb-4 leading-relaxed relative z-10">{exp.description}</p>
                    )}
                    
                    {exp.achievements.length > 0 && exp.achievements[0] && (
                      <div className="bg-gray-50 p-6 rounded-xl relative z-10">
                        <h4 className="font-semibold text-gray-800 mb-3">Principais Realizações:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.filter(Boolean).map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
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

        {/* Education */}
        {education.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 flex items-center">
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 w-2 h-10 mr-4 rounded-full"></span>
              Formação Académica
            </h2>
            <div className="grid gap-6">
              {education.map((edu) => (
                <div key={edu.id} className="bg-white p-8 rounded-2xl shadow-lg border-l-6 border-purple-600 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-purple-50 rounded-full -translate-y-12 translate-x-12"></div>
                  <div className="flex justify-between items-start relative z-10">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h3>
                      <p className="text-purple-600 font-semibold text-lg">{edu.institution}</p>
                      <p className="text-gray-600 mt-1">{edu.field}</p>
                      {edu.description && <p className="text-gray-600 mt-3">{edu.description}</p>}
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600 font-medium">{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</p>
                      {edu.gpa && <p className="text-purple-600 font-semibold mt-1">Média: {edu.gpa}</p>}
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
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 flex items-center">
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 w-2 h-10 mr-4 rounded-full"></span>
              Projetos
            </h2>
            <div className="grid gap-6">
              {projects.map((project) => (
                <div key={project.id} className="bg-white p-8 rounded-2xl shadow-lg border-l-6 border-purple-600 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-full -translate-y-14 translate-x-14"></div>
                  
                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                    <p className="text-gray-600 text-sm font-medium">
                      {formatDate(project.startDate)}{project.endDate && ` - ${formatDate(project.endDate)}`}
                    </p>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed relative z-10">{project.description}</p>
                  
                  {project.technologies.length > 0 && (
                    <div className="mb-4 relative z-10">
                      <p className="text-gray-800 font-semibold mb-3">Tecnologias:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {project.highlights.length > 0 && project.highlights[0] && (
                    <div className="bg-gray-50 p-6 rounded-xl relative z-10">
                      <h4 className="font-semibold text-gray-800 mb-3">Destaques:</h4>
                      <ul className="space-y-2">
                        {project.highlights.filter(Boolean).map((highlight, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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