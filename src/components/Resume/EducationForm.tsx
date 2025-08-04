import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Education } from '@/types/resume';
import { FiBookOpen, FiPlus, FiTrash2, FiEdit3 } from 'react-icons/fi';

interface EducationFormProps {
  education: Education[];
  onChange: (education: Education[]) => void;
}

export const EducationForm: React.FC<EducationFormProps> = ({ education, onChange }) => {
  const [editingId, setEditingId] = useState<string | null>(null);

  const addEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      description: '',
      gpa: ''
    };
    onChange([...education, newEducation]);
    setEditingId(newEducation.id);
  };

  const updateEducation = (id: string, field: keyof Education, value: any) => {
    onChange(education.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    ));
  };

  const removeEducation = (id: string) => {
    onChange(education.filter(edu => edu.id !== id));
  };

  return (
    <Card className="p-6 border-card-border shadow-elegant">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <FiBookOpen className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold text-text-primary">Formação Académica</h2>
        </div>
        <Button onClick={addEducation} size="sm" className="bg-gradient-primary">
          <FiPlus className="mr-2 h-4 w-4" />
          Adicionar
        </Button>
      </div>

      <div className="space-y-6">
        {education.map((edu, index) => {
          const isEditing = editingId === edu.id;
          
          return (
            <Card key={edu.id} className="p-4 border-card-border bg-background-subtle">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-text-primary">
                  {edu.degree || `Formação ${index + 1}`}
                </h3>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setEditingId(isEditing ? null : edu.id)}
                  >
                    <FiEdit3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeEducation(edu.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <FiTrash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {isEditing ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Grau/Diploma *</Label>
                    <Input
                      value={edu.degree}
                      onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                      placeholder="Ex: Licenciatura, Mestrado, Doutoramento"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Instituição *</Label>
                    <Input
                      value={edu.institution}
                      onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                      placeholder="Nome da universidade/escola"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Área de Estudo *</Label>
                    <Input
                      value={edu.field}
                      onChange={(e) => updateEducation(edu.id, 'field', e.target.value)}
                      placeholder="Ex: Engenharia Informática, Gestão"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Data de Início *</Label>
                    <Input
                      type="month"
                      value={edu.startDate}
                      onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Data de Conclusão</Label>
                    <Input
                      type="month"
                      value={edu.endDate}
                      onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Média Final (GPA)</Label>
                    <Input
                      value={edu.gpa}
                      onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
                      placeholder="Ex: 16.5/20, 3.8/4.0"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label>Descrição</Label>
                    <Textarea
                      value={edu.description}
                      onChange={(e) => updateEducation(edu.id, 'description', e.target.value)}
                      placeholder="Descreva o seu curso, tese, projetos relevantes..."
                      rows={3}
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2 text-sm text-text-secondary">
                    <span className="font-medium">{edu.institution}</span>
                    {edu.field && (
                      <>
                        <span>•</span>
                        <span>{edu.field}</span>
                      </>
                    )}
                    {edu.startDate && (
                      <>
                        <span>•</span>
                        <span>
                          {new Date(edu.startDate).toLocaleDateString('pt-PT', { 
                            year: 'numeric', 
                            month: 'long' 
                          })} - {edu.endDate ? 
                            new Date(edu.endDate).toLocaleDateString('pt-PT', { 
                              year: 'numeric', 
                              month: 'long' 
                            }) : 'Presente'}
                        </span>
                      </>
                    )}
                  </div>
                  {edu.gpa && (
                    <p className="text-sm text-text-muted">
                      <span className="font-medium">Média:</span> {edu.gpa}
                    </p>
                  )}
                  {edu.description && (
                    <p className="text-sm text-text-muted">{edu.description}</p>
                  )}
                </div>
              )}
            </Card>
          );
        })}

        {education.length === 0 && (
          <div className="text-center py-8 text-text-muted">
            <FiBookOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Nenhuma formação académica adicionada ainda.</p>
            <p className="text-sm">Clique em "Adicionar" para começar.</p>
          </div>
        )}
      </div>
    </Card>
  );
}; 