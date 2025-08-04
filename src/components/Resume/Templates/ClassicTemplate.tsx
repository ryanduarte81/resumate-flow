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
    <div className="p-8 text-gray-900 leading-relaxed">
      {/* Header */}
      <div className="text-center mb-8 pb-6 border-b-2 border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{personalInfo.fullName}</h1>
        <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-600">
          {personalInfo.email && (
            <div className="flex items-center gap-1">
              <FiMail className="h-4 w-4" />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center gap-1">
              <FiPhone className="h-4 w-4" />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center gap-1">
              <FiMapPin className="h-4 w-4" />
              <span>{personalInfo.location}</span>
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-600 mt-2">
          {personalInfo.website && (
            <div className="flex items-center gap-1">
              <FiGlobe className="h-4 w-4" />
              <span>{personalInfo.website}</span>
            </div>
          )}
          {personalInfo.linkedin && (
            <div className="flex items-center gap-1">
              <FiLinkedin className="h-4 w-4" />
              <span>{personalInfo.linkedin}</span>
            </div>
          )}
          {personalInfo.github && (
            <div className="flex items-center gap-1">
              <FiGithub className="h-4 w-4" />
              <span>{personalInfo.github}</span>
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
            Resumo Profissional
          </h2>
          <p className="text-gray-700 text-justify leading-relaxed">{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-1">
            Experiência Profissional
          </h2>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.id} className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{exp.position}</h3>
                    <p className="text-gray-700 font-medium">{exp.company}</p>
                    {exp.location && <p className="text-gray-600 text-sm">{exp.location}</p>}
                  </div>
                  <div className="text-right text-sm text-gray-600">
                    <p>
                      {formatDate(exp.startDate)} - {exp.current ? 'Presente' : formatDate(exp.endDate)}
                    </p>
                  </div>
                </div>
                {exp.description && (
                  <p className="text-gray-700 mb-2 text-sm">{exp.description}</p>
                )}
                {exp.achievements.length > 0 && exp.achievements[0] && (
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    {exp.achievements.filter(Boolean).map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-1">
            Formação Académica
          </h2>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-gray-700">{edu.institution}</p>
                  <p className="text-gray-600 text-sm">{edu.field}</p>
                  {edu.description && <p className="text-gray-600 text-sm mt-1">{edu.description}</p>}
                </div>
                <div className="text-right text-sm text-gray-600">
                  <p>{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</p>
                  {edu.gpa && <p>Média: {edu.gpa}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-1">
            Competências
          </h2>
          <div className="grid grid-cols-2 gap-4">
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
                <div key={category}>
                  <h3 className="font-semibold text-gray-900 mb-2">{categoryNames[category as keyof typeof categoryNames]}</h3>
                  <div className="space-y-1">
                    {categorySkills.map(skill => (
                      <div key={skill.id} className="flex justify-between text-sm">
                        <span className="text-gray-700">{skill.name}</span>
                        <span className="text-gray-600 capitalize">{skill.level}</span>
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
          <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-1">
            Projetos
          </h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                  <div className="text-right text-sm text-gray-600">
                    <p>{formatDate(project.startDate)}{project.endDate && ` - ${formatDate(project.endDate)}`}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-2">{project.description}</p>
                {project.technologies.length > 0 && (
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Tecnologias:</strong> {project.technologies.join(', ')}
                  </p>
                )}
                {project.highlights.length > 0 && project.highlights[0] && (
                  <ul className="list-disc list-inside text-gray-700 text-sm">
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
  );
};