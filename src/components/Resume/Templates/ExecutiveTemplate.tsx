import React from 'react';
import { ResumeData } from '@/types/resume';
import { FiMail, FiPhone, FiMapPin, FiGlobe, FiLinkedin, FiGithub } from 'react-icons/fi';

interface ExecutiveTemplateProps {
  data: ResumeData;
}

export const ExecutiveTemplate: React.FC<ExecutiveTemplateProps> = ({ data }) => {
  const { personalInfo, experience, education, skills, projects, certificates, languages } = data;

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-PT', { year: 'numeric', month: 'long' });
  };

  return (
    <div className="p-12 bg-white text-gray-900 font-serif max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12 pb-8 border-b-2 border-gray-900">
        <div className="flex items-center justify-center gap-8 mb-8">
          {personalInfo.profileImage && (
            <div className="flex-shrink-0">
              <img
                src={personalInfo.profileImage}
                alt="Foto de perfil"
                className="w-40 h-40 rounded-full object-cover border-4 border-gray-300 shadow-xl"
              />
            </div>
          )}
          <div className="text-left">
            <h1 className="text-5xl font-bold text-gray-900 mb-3 tracking-tight">
              {personalInfo.fullName}
            </h1>
            <div className="w-24 h-1 bg-gray-900 mb-4"></div>
            <p className="text-xl text-gray-700 italic">Profissional Executivo</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-700">
          {personalInfo.email && (
            <div className="flex items-center justify-center gap-3 bg-gray-50 p-4 rounded-lg border">
              <FiMail className="h-5 w-5 text-gray-600" />
              <span className="font-medium">{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center justify-center gap-3 bg-gray-50 p-4 rounded-lg border">
              <FiPhone className="h-5 w-5 text-gray-600" />
              <span className="font-medium">{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center justify-center gap-3 bg-gray-50 p-4 rounded-lg border">
              <FiMapPin className="h-5 w-5 text-gray-600" />
              <span className="font-medium">{personalInfo.location}</span>
            </div>
          )}
          {personalInfo.linkedin && (
            <div className="flex items-center justify-center gap-3 bg-gray-50 p-4 rounded-lg border">
              <FiLinkedin className="h-5 w-5 text-gray-600" />
              <span className="font-medium text-sm">{personalInfo.linkedin}</span>
            </div>
          )}
          {personalInfo.website && (
            <div className="flex items-center justify-center gap-3 bg-gray-50 p-4 rounded-lg border">
              <FiGlobe className="h-5 w-5 text-gray-600" />
              <span className="font-medium text-sm">{personalInfo.website}</span>
            </div>
          )}
          {personalInfo.github && (
            <div className="flex items-center justify-center gap-3 bg-gray-50 p-4 rounded-lg border">
              <FiGithub className="h-5 w-5 text-gray-600" />
              <span className="font-medium text-sm">{personalInfo.github}</span>
            </div>
          )}
        </div>
      </div>

      {/* Executive Summary */}
      {personalInfo.summary && (
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Resumo Executivo
          </h2>
          <div className="bg-gray-50 p-8 rounded-lg border-l-8 border-gray-900 shadow-sm">
            <p className="text-lg text-gray-800 leading-relaxed text-justify font-light italic">
              "{personalInfo.summary}"
            </p>
          </div>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Experiência Executiva
          </h2>
          <div className="space-y-10">
            {experience.map((exp, index) => (
              <div key={exp.id} className="relative">
                {index !== experience.length - 1 && (
                  <div className="absolute left-8 top-20 w-px h-full bg-gray-300"></div>
                )}
                <div className="flex gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1 bg-white border-2 border-gray-200 rounded-lg p-8 shadow-lg">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.position}</h3>
                        <p className="text-xl text-gray-700 font-semibold">{exp.company}</p>
                        {exp.location && <p className="text-gray-600 text-lg">{exp.location}</p>}
                      </div>
                      <div className="text-right bg-gray-900 text-white px-6 py-3 rounded-lg">
                        <p className="font-semibold">{formatDate(exp.startDate)}</p>
                        <p className="text-sm">até</p>
                        <p className="font-semibold">{exp.current ? 'Presente' : formatDate(exp.endDate)}</p>
                      </div>
                    </div>
                    
                    {exp.description && (
                      <p className="text-gray-700 mb-6 text-lg leading-relaxed">{exp.description}</p>
                    )}
                    
                    {exp.achievements.length > 0 && exp.achievements[0] && (
                      <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
                        <h4 className="font-bold text-gray-800 mb-4 text-lg">Principais Realizações:</h4>
                        <ul className="space-y-3">
                          {exp.achievements.filter(Boolean).map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-4">
                              <div className="w-3 h-3 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 text-lg">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Formação Académica
          </h2>
          <div className="grid gap-8">
            {education.map((edu) => (
              <div key={edu.id} className="bg-gray-50 p-8 rounded-lg border-2 border-gray-200 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                    <p className="text-xl text-gray-700 font-semibold mb-2">{edu.institution}</p>
                    <p className="text-lg text-gray-600 mb-2">{edu.field}</p>
                    {edu.description && <p className="text-gray-600 text-base">{edu.description}</p>}
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 font-semibold text-lg">
                      {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                    </p>
                    {edu.gpa && (
                      <p className="text-gray-900 font-bold text-xl mt-2">Média: {edu.gpa}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills & Core Competencies */}
      {skills.length > 0 && (
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Competências Principais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {['technical', 'soft', 'language', 'other'].map(category => {
              const categorySkills = skills.filter(skill => skill.category === category);
              if (categorySkills.length === 0) return null;
              
              const categoryNames = {
                technical: 'Competências Técnicas',
                soft: 'Competências de Liderança',
                language: 'Idiomas',
                other: 'Outras Competências'
              };
              
              return (
                <div key={category} className="bg-gray-50 p-8 rounded-lg border-2 border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-6 text-xl text-center">
                    {categoryNames[category as keyof typeof categoryNames]}
                  </h3>
                  <div className="space-y-4">
                    {categorySkills.map(skill => (
                      <div key={skill.id} className="flex justify-between items-center bg-white p-4 rounded border">
                        <span className="text-gray-800 font-medium text-lg">{skill.name}</span>
                        <span className="text-gray-600 capitalize bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-bold">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Projetos e Iniciativas
          </h2>
          <div className="space-y-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-50 p-8 rounded-lg border-2 border-gray-200 shadow-sm">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">{project.name}</h3>
                  <div className="text-right text-gray-600 bg-gray-200 px-4 py-2 rounded-lg">
                    <p className="font-semibold">
                      {formatDate(project.startDate)}{project.endDate && ` - ${formatDate(project.endDate)}`}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">{project.description}</p>
                {project.technologies.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-gray-800 font-bold mb-3 text-lg">Tecnologias e Ferramentas:</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-gray-900 text-white px-4 py-2 rounded-full font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {project.highlights.length > 0 && project.highlights[0] && (
                  <div className="bg-white p-6 rounded-lg border-l-4 border-gray-600">
                    <h4 className="font-bold text-gray-800 mb-4 text-lg">Resultados e Impacto:</h4>
                    <ul className="space-y-3">
                      {project.highlights.filter(Boolean).map((highlight, index) => (
                        <li key={index} className="flex items-start gap-4">
                          <div className="w-3 h-3 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-lg">{highlight}</span>
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
  );
};