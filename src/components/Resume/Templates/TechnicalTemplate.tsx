import React from 'react';
import { ResumeData } from '@/types/resume';
import { FiMail, FiPhone, FiMapPin, FiGlobe, FiLinkedin, FiGithub, FiCode, FiTool, FiTerminal } from 'react-icons/fi';

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
    <div className="p-8 bg-slate-900 text-green-400 font-mono leading-relaxed">
      {/* Header */}
      <div className="border-2 border-green-400 p-8 mb-10 bg-black/30 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-cyan-400"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-green-400"></div>
        
        <div className="text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <FiTerminal className="h-8 w-8 text-cyan-400" />
            {personalInfo.profileImage && (
              <div className="w-16 h-16">
                <img
                  src={personalInfo.profileImage}
                  alt="Foto de perfil"
                  className="w-16 h-16 rounded-md object-cover border-2 border-green-400"
                />
              </div>
            )}
            <h1 className="text-4xl font-bold tracking-wider text-white">{personalInfo.fullName}</h1>
            <FiTerminal className="h-8 w-8 text-cyan-400" />
          </div>
          <div className="text-xl text-green-300 mb-6 tracking-widest">{'<'} SOFTWARE DEVELOPER {'>'}</div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-3 text-left">
              {personalInfo.email && (
                <div className="flex items-center gap-3 bg-black/50 p-3 rounded border border-green-400/30">
                  <FiMail className="h-4 w-4 text-cyan-400" />
                  <span className="text-green-300">{personalInfo.email}</span>
                </div>
              )}
              {personalInfo.phone && (
                <div className="flex items-center gap-3 bg-black/50 p-3 rounded border border-green-400/30">
                  <FiPhone className="h-4 w-4 text-cyan-400" />
                  <span className="text-green-300">{personalInfo.phone}</span>
                </div>
              )}
              {personalInfo.location && (
                <div className="flex items-center gap-3 bg-black/50 p-3 rounded border border-green-400/30">
                  <FiMapPin className="h-4 w-4 text-cyan-400" />
                  <span className="text-green-300">{personalInfo.location}</span>
                </div>
              )}
            </div>
            
            <div className="space-y-3 text-left">
              {personalInfo.website && (
                <div className="flex items-center gap-3 bg-black/50 p-3 rounded border border-green-400/30">
                  <FiGlobe className="h-4 w-4 text-cyan-400" />
                  <span className="text-green-300 break-all">{personalInfo.website}</span>
                </div>
              )}
              {personalInfo.linkedin && (
                <div className="flex items-center gap-3 bg-black/50 p-3 rounded border border-green-400/30">
                  <FiLinkedin className="h-4 w-4 text-cyan-400" />
                  <span className="text-green-300 break-all">{personalInfo.linkedin}</span>
                </div>
              )}
              {personalInfo.github && (
                <div className="flex items-center gap-3 bg-black/50 p-3 rounded border border-green-400/30">
                  <FiGithub className="h-4 w-4 text-cyan-400" />
                  <span className="text-green-300 break-all">{personalInfo.github}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-green-400 pb-3 text-cyan-400 flex items-center gap-3">
            <span className="text-green-400">{'$ cat profile.txt'}</span>
          </h2>
          <div className="bg-black/50 p-6 border border-green-400/30 rounded relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400/50 to-cyan-400/50"></div>
            <p className="leading-relaxed text-green-300 text-base">{personalInfo.summary}</p>
          </div>
        </div>
      )}

      {/* Technical Skills */}
      {technicalSkills.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-green-400 pb-3 text-cyan-400 flex items-center gap-3">
            <FiCode className="h-6 w-6" />
            <span className="text-green-400">{'$ ls -la skills/technical/'}</span>
          </h2>
          <div className="bg-black/50 p-6 border border-green-400/30 rounded">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {technicalSkills.map((skill) => (
                <div key={skill.id} className="flex justify-between items-center bg-slate-800/50 p-4 rounded border border-green-400/20">
                  <span className="font-semibold text-green-300">{skill.name}</span>
                  <span className="text-cyan-400 text-sm uppercase tracking-wider bg-black/50 px-2 py-1 rounded">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-green-400 pb-3 text-cyan-400 flex items-center gap-3">
            <FiTool className="h-6 w-6" />
            <span className="text-green-400">{'$ history | grep work'}</span>
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={exp.id} className="border-2 border-green-400/30 rounded-lg overflow-hidden bg-black/30">
                <div className="bg-green-400 text-black p-4 relative">
                  <div className="absolute top-0 left-0 w-2 h-full bg-cyan-400"></div>
                  <div className="flex justify-between items-start pl-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.position}</h3>
                      <p className="font-semibold">{exp.company} {exp.location && `• ${exp.location}`}</p>
                    </div>
                    <div className="text-right text-sm font-mono bg-black/20 px-3 py-1 rounded">
                      <p>{formatDate(exp.startDate)} - {exp.current ? 'RUNNING' : formatDate(exp.endDate)}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  {exp.description && (
                    <p className="mb-4 text-green-300 leading-relaxed">{exp.description}</p>
                  )}
                  
                  {exp.achievements.length > 0 && exp.achievements[0] && (
                    <div className="bg-slate-800/50 p-4 rounded border border-green-400/20">
                      <p className="font-semibold mb-3 text-cyan-400">{'> Key Achievements:'}</p>
                      <ul className="space-y-2">
                        {exp.achievements.filter(Boolean).map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-3">
                            <span className="text-green-400 font-bold">{'∘'}</span>
                            <span className="text-green-300">{achievement}</span>
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
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-green-400 pb-3 text-cyan-400">
            <span className="text-green-400">{'$ ls -la ~/projects/'}</span>
          </h2>
          <div className="space-y-6">
            {projects.map((project) => (
              <div key={project.id} className="border border-green-400/30 rounded bg-black/30">
                <div className="bg-slate-800/70 p-4 border-b border-green-400/30 flex justify-between items-start">
                  <h3 className="text-xl font-bold text-cyan-400">{project.name}</h3>
                  <p className="text-green-400 text-sm font-mono bg-black/50 px-2 py-1 rounded">
                    {formatDate(project.startDate)}{project.endDate && ` - ${formatDate(project.endDate)}`}
                  </p>
                </div>
                
                <div className="p-6">
                  <p className="mb-4 text-green-300 leading-relaxed">{project.description}</p>
                  
                  {project.technologies.length > 0 && (
                    <div className="mb-4">
                      <p className="font-semibold mb-3 text-cyan-400">{'> Tech Stack:'}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="bg-green-400 text-black px-3 py-1 text-sm font-semibold rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {project.highlights.length > 0 && project.highlights[0] && (
                    <div className="bg-slate-800/50 p-4 rounded border border-green-400/20">
                      <p className="font-semibold mb-3 text-cyan-400">{'> Highlights:'}</p>
                      <ul className="space-y-2">
                        {project.highlights.filter(Boolean).map((highlight, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="text-green-400 font-bold">{'∘'}</span>
                            <span className="text-green-300">{highlight}</span>
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
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-green-400 pb-3 text-cyan-400">
            <span className="text-green-400">{'$ cat education.log'}</span>
          </h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id} className="bg-slate-800/50 p-6 border border-green-400/30 rounded">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400 mb-1">{edu.degree}</h3>
                    <p className="text-green-300 font-semibold">{edu.institution}</p>
                    <p className="text-green-400">{edu.field}</p>
                    {edu.description && <p className="text-green-300 mt-2 text-sm">{edu.description}</p>}
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 font-mono">{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</p>
                    {edu.gpa && <p className="font-semibold text-cyan-400 mt-1">GPA: {edu.gpa}</p>}
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
            <h2 className="text-lg font-bold mb-4 border-b border-green-400 pb-2 text-cyan-400">
              <span className="text-green-400">{'$ cat other_skills.txt'}</span>
            </h2>
            <div className="space-y-3">
              {otherSkills.map((skill) => (
                <div key={skill.id} className="flex justify-between bg-slate-800/50 p-3 rounded border border-green-400/20">
                  <span className="text-green-300">{skill.name}</span>
                  <span className="text-cyan-400 text-sm uppercase font-mono">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {languages.length > 0 && (
          <div>
            <h2 className="text-lg font-bold mb-4 border-b border-green-400 pb-2 text-cyan-400">
              <span className="text-green-400">{'$ locale -a'}</span>
            </h2>
            <div className="space-y-3">
              {languages.map((lang) => (
                <div key={lang.id} className="flex justify-between bg-slate-800/50 p-3 rounded border border-green-400/20">
                  <span className="text-green-300">{lang.name}</span>
                  <span className="text-cyan-400 text-sm uppercase font-mono">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
