import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Experience } from '@/types/resume';
import { FiBriefcase, FiPlus, FiTrash2, FiEdit3 } from 'react-icons/fi';

interface ExperienceFormProps {
  experiences: Experience[];
  onChange: (experiences: Experience[]) => void;
}

export const ExperienceForm: React.FC<ExperienceFormProps> = ({ experiences, onChange }) => {
  const [editingId, setEditingId] = useState<string | null>(null);

  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
      achievements: ['']
    };
    onChange([...experiences, newExperience]);
    setEditingId(newExperience.id);
  };

  const updateExperience = (id: string, field: keyof Experience, value: any) => {
    onChange(experiences.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  const removeExperience = (id: string) => {
    onChange(experiences.filter(exp => exp.id !== id));
  };

  const addAchievement = (expId: string) => {
    const experience = experiences.find(exp => exp.id === expId);
    if (experience) {
      updateExperience(expId, 'achievements', [...experience.achievements, '']);
    }
  };

  const updateAchievement = (expId: string, index: number, value: string) => {
    const experience = experiences.find(exp => exp.id === expId);
    if (experience) {
      const newAchievements = [...experience.achievements];
      newAchievements[index] = value;
      updateExperience(expId, 'achievements', newAchievements);
    }
  };

  const removeAchievement = (expId: string, index: number) => {
    const experience = experiences.find(exp => exp.id === expId);
    if (experience && experience.achievements.length > 1) {
      const newAchievements = experience.achievements.filter((_, i) => i !== index);
      updateExperience(expId, 'achievements', newAchievements);
    }
  };

  return (
    <Card className="p-6 border-card-border shadow-elegant">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <FiBriefcase className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold text-text-primary">Experiência Profissional</h2>
        </div>
        <Button onClick={addExperience} size="sm" className="bg-gradient-primary">
          <FiPlus className="mr-2 h-4 w-4" />
          Adicionar
        </Button>
      </div>

      <div className="space-y-6">
        {experiences.map((experience, index) => {
          const isEditing = editingId === experience.id;
          
          return (
            <Card key={experience.id} className="p-4 border-card-border bg-background-subtle">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-text-primary">
                  {experience.position || `Experiência ${index + 1}`}
                </h3>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setEditingId(isEditing ? null : experience.id)}
                  >
                    <FiEdit3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeExperience(experience.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <FiTrash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {isEditing ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Cargo *</Label>
                    <Input
                      value={experience.position}
                      onChange={(e) => updateExperience(experience.id, 'position', e.target.value)}
                      placeholder="Ex: Desenvolvedor Frontend"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Empresa *</Label>
                    <Input
                      value={experience.company}
                      onChange={(e) => updateExperience(experience.id, 'company', e.target.value)}
                      placeholder="Nome da empresa"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Localização</Label>
                    <Input
                      value={experience.location}
                      onChange={(e) => updateExperience(experience.id, 'location', e.target.value)}
                      placeholder="Cidade, País"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Data de Início *</Label>
                    <Input
                      type="month"
                      value={experience.startDate}
                      onChange={(e) => updateExperience(experience.id, 'startDate', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Data de Fim</Label>
                    <Input
                      type="month"
                      value={experience.endDate}
                      onChange={(e) => updateExperience(experience.id, 'endDate', e.target.value)}
                      disabled={experience.current}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={`current-${experience.id}`}
                      checked={experience.current}
                      onCheckedChange={(checked) => {
                        updateExperience(experience.id, 'current', checked);
                        if (checked) {
                          updateExperience(experience.id, 'endDate', '');
                        }
                      }}
                    />
                    <Label htmlFor={`current-${experience.id}`}>Trabalho atual</Label>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label>Descrição</Label>
                    <Textarea
                      value={experience.description}
                      onChange={(e) => updateExperience(experience.id, 'description', e.target.value)}
                      placeholder="Descreva as suas responsabilidades principais..."
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label>Conquistas e Responsabilidades</Label>
                    {experience.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex space-x-2">
                        <Input
                          value={achievement}
                          onChange={(e) => updateAchievement(experience.id, achIndex, e.target.value)}
                          placeholder="Ex: Aumentei a performance do sistema em 40%"
                          className="flex-1"
                        />
                        {experience.achievements.length > 1 && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removeAchievement(experience.id, achIndex)}
                          >
                            <FiTrash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => addAchievement(experience.id)}
                    >
                      <FiPlus className="mr-2 h-4 w-4" />
                      Adicionar conquista
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2 text-sm text-text-secondary">
                    <span className="font-medium">{experience.company}</span>
                    {experience.location && (
                      <>
                        <span>•</span>
                        <span>{experience.location}</span>
                      </>
                    )}
                    {experience.startDate && (
                      <>
                        <span>•</span>
                        <span>
                          {new Date(experience.startDate).toLocaleDateString('pt-PT', { 
                            year: 'numeric', 
                            month: 'long' 
                          })} - {experience.current ? 'Presente' : experience.endDate ? 
                            new Date(experience.endDate).toLocaleDateString('pt-PT', { 
                              year: 'numeric', 
                              month: 'long' 
                            }) : 'Presente'}
                        </span>
                      </>
                    )}
                  </div>
                  {experience.description && (
                    <p className="text-sm text-text-muted">{experience.description}</p>
                  )}
                </div>
              )}
            </Card>
          );
        })}

        {experiences.length === 0 && (
          <div className="text-center py-8 text-text-muted">
            <FiBriefcase className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Nenhuma experiência adicionada ainda.</p>
            <p className="text-sm">Clique em "Adicionar" para começar.</p>
          </div>
        )}
      </div>
    </Card>
  );
};