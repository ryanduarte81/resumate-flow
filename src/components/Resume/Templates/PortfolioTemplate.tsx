import React from 'react';
import { ResumeData } from '@/types/resume';
import { FiMail, FiPhone, FiMapPin, FiGlobe, FiLinkedin, FiGithub, FiExternalLink, FiStar, FiAward } from 'react-icons/fi';

interface PortfolioTemplateProps {
  data: ResumeData;
}

export const PortfolioTemplate: React.FC<PortfolioTemplateProps> = ({ data }) => {
  const { personalInfo, experience, education, skills, projects, certificates, languages } = data;

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-PT', { year: 'numeric', month: 'short' });
  };

  const creativeSkills = skills.filter(skill => skill.category === 'technical' || skill.category === 'other');
  const softSkills = skills.filter(skill => skill.category === 'soft');

  return (
    <div className="min-h-full bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 p-12 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            {personalInfo.profileImage && (
              <div className="relative">
                <img
                  src={personalInfo.profileImage}
                  alt="Foto de perfil"
                  className="w-48 h-48 rounded-full object-cover border-8 border-white/30 shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <FiStar className="h-8 w-8 text-purple-800" />
                </div>
              </div>
            )}
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                {personalInfo.fullName}
              </h1>
              <p className="text-2xl font-light text-white/90 mb-6">Designer Criativo & Desenvolvedor</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                {personalInfo.email && (
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <FiMail className="h-4 w-4" />
                    <span className="text-sm">{personalInfo.email}</span>
                  </div>
                )}
                {personalInfo.website && (
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <FiGlobe className="h-4 w-4" />
                    <span className="text-sm">Portfolio</span>
                  </div>
                )}
                {personalInfo.github && (
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <FiGithub className="h-4 w-4" />
                    <span className="text-sm">GitHub</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 opacity-50"></div>
      </div>

      <div className="p-8 max-w-7xl mx-auto">
        {/* About Section */}
        {personalInfo.summary && (
          <div className="mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-purple-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
                Sobre Mim
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">{personalInfo.summary}</p>
            </div>
          </div>
        )}

        {/* Featured Projects */}
        {projects.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"></div>
              Projetos em Destaque
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={project.id} className="group relative">
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 pr-12">{project.name}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                    
                    {project.technologies.length > 0 && (
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 4).map((tech, techIndex) => (
                            <span key={techIndex} className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium border border-purple-200">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                              +{project.technologies.length - 4} mais
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                    
                    {project.highlights.length > 0 && project.highlights[0] && (
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-200 mb-6">
                        <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                          <FiAward className="h-4 w-4" />
                          Destaques:
                        </h4>
                        <ul className="space-y-1">
                          {project.highlights.filter(Boolean).slice(0, 2).map((highlight, hIndex) => (
                            <li key={hIndex} className="flex items-start gap-2 text-blue-700">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {formatDate(project.startDate)}{project.endDate && ` - ${formatDate(project.endDate)}`}
                      </span>
                      {(project.url || project.github) && (
                        <div className="flex gap-2">
                          {project.url && (
                            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                              <FiExternalLink className="h-4 w-4" />
                            </div>
                          )}
                          {project.github && (
                            <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                              <FiGithub className="h-4 w-4" />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills & Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Skills */}
          {creativeSkills.length > 0 && (
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-pink-100 h-full">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded"></div>
                  Competências
                </h2>
                <div className="space-y-4">
                  {creativeSkills.map(skill => (
                    <div key={skill.id} className="relative">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500 capitalize">{skill.level}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-pink-500 to-purple-500 h-3 rounded-full transition-all duration-1000"
                          style={{
                            width: skill.level === 'expert' ? '95%' : 
                                   skill.level === 'advanced' ? '85%' : 
                                   skill.level === 'intermediate' ? '65%' : '40%'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
                  Experiência
                </h2>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={exp.id} className="relative">
                      {index !== experience.length - 1 && (
                        <div className="absolute left-6 top-14 w-px h-16 bg-gradient-to-b from-blue-300 to-purple-300"></div>
                      )}
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-800">{exp.position}</h3>
                              <p className="text-blue-600 font-medium">{exp.company}</p>
                            </div>
                            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                              {formatDate(exp.startDate)} - {exp.current ? 'Atual' : formatDate(exp.endDate)}
                            </span>
                          </div>
                          {exp.description && (
                            <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Education & Languages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          {education.length > 0 && (
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-green-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded"></div>
                Formação
              </h2>
              <div className="space-y-6">
                {education.map(edu => (
                  <div key={edu.id} className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{edu.degree}</h3>
                    <p className="text-green-600 font-medium mb-1">{edu.institution}</p>
                    <p className="text-gray-600 text-sm mb-2">{edu.field}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                      </span>
                      {edu.gpa && (
                        <span className="text-green-700 font-semibold text-sm">Média: {edu.gpa}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact & Languages */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-orange-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded"></div>
                Contacto
              </h2>
              <div className="space-y-4">
                {personalInfo.phone && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <FiPhone className="h-5 w-5 text-orange-500" />
                    <span>{personalInfo.phone}</span>
                  </div>
                )}
                {personalInfo.location && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <FiMapPin className="h-5 w-5 text-orange-500" />
                    <span>{personalInfo.location}</span>
                  </div>
                )}
                {personalInfo.linkedin && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <FiLinkedin className="h-5 w-5 text-orange-500" />
                    <span className="text-sm break-all">{personalInfo.linkedin}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Languages */}
            {languages.length > 0 && (
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-purple-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
                  Idiomas
                </h2>
                <div className="space-y-3">
                  {languages.map(lang => (
                    <div key={lang.id} className="flex justify-between items-center bg-purple-50 p-3 rounded-lg border border-purple-200">
                      <span className="font-medium text-gray-700">{lang.name}</span>
                      <span className="text-purple-600 capitalize text-sm font-semibold">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};