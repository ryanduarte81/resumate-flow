import React from 'react';
import { ResumeData } from '@/types/resume';
import { FiMail, FiPhone, FiMapPin, FiGlobe, FiLinkedin, FiGithub } from 'react-icons/fi';

interface ClassicTemplateProps {
  data: ResumeData;
}

export const ClassicTemplate: React.FC<ClassicTemplateProps> = ({ data }) => {
  const { personalInfo, experience, education, skills, projects, certificates, languages } = data;

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-PT', { year: 'numeric', month: 'long' });
  };

  return (
    <div className="p-8 bg-white text-slate-800 font-sans leading-relaxed">
      {/* Header */}
      <div className="text-center mb-10 pb-8 border-b-2 border-slate-200">
        <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
          {personalInfo.fullName}
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-600 mb-4">
          {personalInfo.email && (
            <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg">
              <FiMail className="h-4 w-4 text-slate-500" />
              <span className="font-medium">{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg">
              <FiPhone className="h-4 w-4 text-slate-500" />
              <span className="font-medium">{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg">
              <FiMapPin className="h-4 w-4 text-slate-500" />
              <span className="font-medium">{personalInfo.location}</span>
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-600">
          {personalInfo.website && (
            <div className="flex items-center gap-2 hover:text-slate-800 transition-colors">
              <FiGlobe className="h-4 w-4" />
              <span className="font-medium">{personalInfo.website}</span>
            </div>
          )}
          {personalInfo.linkedin && (
            <div className="flex items-center gap-2 hover:text-slate-800 transition-colors">
              <FiLinkedin className="h-4 w-4" />
              <span className="font-medium">{personalInfo.linkedin}</span>
            </div>
          )}
          {personalInfo.github && (
            <div className="flex items-center gap-2 hover:text-slate-800 transition-colors">
              <FiGithub className="h-4 w-4" />
              <span className="font-medium">{personalInfo.github}</span>
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-10">
          <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-300">
            Resumo Profissional
          </h2>
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-6 rounded-xl border-l-4 border-slate-400">
            <p className="text-slate-700 text-justify leading-relaxed text-base">{personalInfo.summary}</p>
          </div>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-6 pb-2 border-b border-slate-300">
            Experiência Profissional
          </h2>
          <div className="space-y-8">
            {experience.map((exp) => (
              <div key={exp.id} className="relative pl-6 border-l-2 border-slate-200">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-slate-400 rounded-full"></div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-1">{exp.position}</h3>
                      <p className="text-slate-700 font-medium text-lg">{exp.company}</p>
                      {exp.location && <p className="text-slate-600 text-sm mt-1">{exp.location}</p>}
                    </div>
                    <div className="bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {formatDate(exp.startDate)} - {exp.current ? 'Presente' : formatDate(exp.endDate)}
                    </div>
                  </div>
                  
                  {exp.description && (
                    <p className="text-slate-700 mb-4 text-base leading-relaxed">{exp.description}</p>
                  )}
                  
                  {exp.achievements.length > 0 && exp.achievements[0] && (
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <h4 className="font-medium text-slate-800 mb-2">Principais Realizações:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.filter(Boolean).map((achievement, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-slate-700">{achievement}</span>
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
        <div className="mb-10">
          <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-6 pb-2 border-b border-slate-300">
            Formação Académica
          </h2>
          <div className="grid gap-6">
            {education.map((edu) => (
              <div key={edu.id} className="bg-slate-50 p-6 rounded-xl border-l-4 border-slate-400">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-1">{edu.degree}</h3>
                    <p className="text-slate-700 font-medium text-lg">{edu.institution}</p>
                    <p className="text-slate-600 text-base mt-1">{edu.field}</p>
                    {edu.description && <p className="text-slate-600 mt-2 text-sm">{edu.description}</p>}
                  </div>
                  <div className="text-right">
                    <p className="text-slate-600 font-medium">{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</p>
                    {edu.gpa && <p className="text-slate-800 font-semibold mt-1">Média: {edu.gpa}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-6 pb-2 border-b border-slate-300">
            Competências
          </h2>
          <div className="grid grid-cols-2 gap-8">
            {['technical', 'soft', 'language', 'other'].map(category => {
              const categorySkills = skills.filter(skill => skill.category === category);
              if (categorySkills.length === 0) return null;
              
              const categoryNames = {
                technical: 'Técnicas',
                soft: 'Pessoais',
                language: 'Idiomas',
                other: 'Outras'
              };
              
              return (
                <div key={category} className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-slate-900 mb-4 text-lg">{categoryNames[category as keyof typeof categoryNames]}</h3>
                  <div className="space-y-3">
                    {categorySkills.map(skill => (
                      <div key={skill.id} className="flex justify-between items-center">
                        <span className="text-slate-700 font-medium">{skill.name}</span>
                        <span className="text-slate-600 capitalize bg-slate-200 px-3 py-1 rounded-full text-sm">
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
        <div className="mb-8">
          <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-6 pb-2 border-b border-slate-300">
            Projetos
          </h2>
          <div className="space-y-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-slate-50 p-6 rounded-xl border-l-4 border-slate-400">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-slate-900">{project.name}</h3>
                  <div className="text-right text-sm text-slate-600 font-medium">
                    <p>{formatDate(project.startDate)}{project.endDate && ` - ${formatDate(project.endDate)}`}</p>
                  </div>
                </div>
                <p className="text-slate-700 mb-4 leading-relaxed">{project.description}</p>
                {project.technologies.length > 0 && (
                  <div className="mb-4">
                    <p className="text-slate-800 font-medium mb-2">Tecnologias:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-slate-200 text-slate-800 px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {project.highlights.length > 0 && project.highlights[0] && (
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium text-slate-800 mb-2">Destaques:</h4>
                    <ul className="space-y-1">
                      {project.highlights.filter(Boolean).map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-700">{highlight}</span>
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