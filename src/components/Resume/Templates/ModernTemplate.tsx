import React from 'react';
import { ResumeData } from '@/types/resume';
import { FiMail, FiPhone, FiMapPin, FiGlobe, FiLinkedin, FiGithub, FiCircle } from 'react-icons/fi';

interface ModernTemplateProps {
  data: ResumeData;
}

export const ModernTemplate: React.FC<ModernTemplateProps> = ({ data }) => {
  const { personalInfo, experience, education, skills, projects, certificates, languages } = data;

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-PT', { year: 'numeric', month: 'short' });
  };

  const technicalSkills = skills.filter(skill => skill.category === 'technical');
  const softSkills = skills.filter(skill => skill.category === 'soft');
  const otherSkills = skills.filter(skill => skill.category === 'other');

  return (
    <div className="min-h-full bg-gray-50">
      <div className="grid grid-cols-3 min-h-full">
        {/* Sidebar */}
        <div className="col-span-1 bg-gradient-to-b from-indigo-600 to-purple-700 text-white p-8">
          {/* Profile */}
          <div className="text-center mb-8">
            {personalInfo.profileImage && (
              <div className="mb-6">
                <img
                  src={personalInfo.profileImage}
                  alt="Foto de perfil"
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white/20 shadow-lg"
                />
              </div>
            )}
            <h1 className="text-2xl font-bold mb-2">{personalInfo.fullName}</h1>
            <div className="w-12 h-1 bg-white/40 mx-auto rounded-full"></div>
          </div>

          {/* Contact */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4 uppercase tracking-wider">Contacto</h2>
            <div className="space-y-3 text-sm">
              {personalInfo.email && (
                <div className="flex items-center gap-3">
                  <FiMail className="h-4 w-4 text-white/70" />
                  <span className="break-all">{personalInfo.email}</span>
                </div>
              )}
              {personalInfo.phone && (
                <div className="flex items-center gap-3">
                  <FiPhone className="h-4 w-4 text-white/70" />
                  <span>{personalInfo.phone}</span>
                </div>
              )}
              {personalInfo.location && (
                <div className="flex items-center gap-3">
                  <FiMapPin className="h-4 w-4 text-white/70" />
                  <span>{personalInfo.location}</span>
                </div>
              )}
              {personalInfo.website && (
                <div className="flex items-center gap-3">
                  <FiGlobe className="h-4 w-4 text-white/70" />
                  <span className="break-all text-xs">{personalInfo.website}</span>
                </div>
              )}
              {personalInfo.linkedin && (
                <div className="flex items-center gap-3">
                  <FiLinkedin className="h-4 w-4 text-white/70" />
                  <span className="break-all text-xs">{personalInfo.linkedin}</span>
                </div>
              )}
              {personalInfo.github && (
                <div className="flex items-center gap-3">
                  <FiGithub className="h-4 w-4 text-white/70" />
                  <span className="break-all text-xs">{personalInfo.github}</span>
                </div>
              )}
            </div>
          </div>

          {/* Technical Skills */}
          {technicalSkills.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4 uppercase tracking-wider">Competências Técnicas</h2>
              <div className="space-y-3">
                {technicalSkills.map(skill => (
                  <div key={skill.id}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span className="text-white/70">{skill.level}</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div 
                        className="bg-white rounded-full h-2 transition-all duration-500"
                        style={{
                          width: skill.level === 'expert' ? '95%' : 
                                 skill.level === 'advanced' ? '80%' : 
                                 skill.level === 'intermediate' ? '60%' : '35%'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {languages.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4 uppercase tracking-wider">Idiomas</h2>
              <div className="space-y-2">
                {languages.map(lang => (
                  <div key={lang.id} className="flex justify-between items-center text-sm">
                    <span>{lang.name}</span>
                    <span className="text-white/70 capitalize">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Soft Skills */}
          {softSkills.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold mb-4 uppercase tracking-wider">Competências Pessoais</h2>
              <div className="space-y-2">
                {softSkills.map(skill => (
                  <div key={skill.id} className="flex items-center gap-2 text-sm">
                    <FiCircle className="h-2 w-2 text-white/70" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="col-span-2 p-8 bg-white">
          {/* Summary */}
          {personalInfo.summary && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 relative">
                Perfil Profissional
                <div className="absolute -bottom-1 left-0 w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full"></div>
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">{personalInfo.summary}</p>
            </div>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 relative">
                Experiência Profissional
                <div className="absolute -bottom-1 left-0 w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full"></div>
              </h2>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div key={exp.id} className="relative">
                    {index !== experience.length - 1 && (
                      <div className="absolute left-6 top-14 w-px h-full bg-gray-200"></div>
                    )}
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full flex items-center justify-center shadow-lg">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex-1 pt-2">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-800">{exp.position}</h3>
                            <p className="text-indigo-600 font-medium">{exp.company}</p>
                            {exp.location && <p className="text-gray-600 text-sm">{exp.location}</p>}
                          </div>
                          <div className="text-right text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                            {formatDate(exp.startDate)} - {exp.current ? 'Presente' : formatDate(exp.endDate)}
                          </div>
                        </div>
                        {exp.description && (
                          <p className="text-gray-700 mb-3 leading-relaxed">{exp.description}</p>
                        )}
                        {exp.achievements.length > 0 && exp.achievements[0] && (
                          <ul className="space-y-1">
                            {exp.achievements.filter(Boolean).map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start gap-2 text-gray-700">
                                <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {education.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 relative">
                Formação Académica
                <div className="absolute -bottom-1 left-0 w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full"></div>
              </h2>
              <div className="space-y-6">
                {education.map(edu => (
                  <div key={edu.id} className="bg-gray-50 p-6 rounded-lg border-l-4 border-indigo-600">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{edu.degree}</h3>
                        <p className="text-indigo-600 font-medium">{edu.institution}</p>
                        <p className="text-gray-700">{edu.field}</p>
                        {edu.description && <p className="text-gray-600 text-sm mt-2">{edu.description}</p>}
                      </div>
                      <div className="text-right">
                        <p className="text-gray-600 text-sm">{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</p>
                        {edu.gpa && <p className="text-indigo-600 font-semibold">Média: {edu.gpa}</p>}
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6 relative">
                Projetos
                <div className="absolute -bottom-1 left-0 w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full"></div>
              </h2>
              <div className="grid gap-6">
                {projects.map(project => (
                  <div key={project.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
                      <span className="text-gray-600 text-sm">
                        {formatDate(project.startDate)}{project.endDate && ` - ${formatDate(project.endDate)}`}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    {project.technologies.length > 0 && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span key={index} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {project.highlights.length > 0 && project.highlights[0] && (
                      <ul className="space-y-1">
                        {project.highlights.filter(Boolean).map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-700">
                            <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{highlight}</span>
                          </li>
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
    </div>
  );
};