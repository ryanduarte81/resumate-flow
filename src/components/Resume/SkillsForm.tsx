import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skill } from '@/types/resume';
import { FiTool, FiPlus, FiTrash2 } from 'react-icons/fi';

interface SkillsFormProps {
  skills: Skill[];
  onChange: (skills: Skill[]) => void;
}

const skillCategories = [
  { value: 'technical', label: 'Técnicas' },
  { value: 'soft', label: 'Pessoais' },
  { value: 'language', label: 'Idiomas' },
  { value: 'other', label: 'Outras' }
];

const skillLevels = [
  { value: 'beginner', label: 'Iniciante' },
  { value: 'intermediate', label: 'Intermédio' },
  { value: 'advanced', label: 'Avançado' },
  { value: 'expert', label: 'Especialista' }
];

export const SkillsForm: React.FC<SkillsFormProps> = ({ skills, onChange }) => {
  const [newSkill, setNewSkill] = useState<Partial<Skill>>({
    name: '',
    category: 'technical',
    level: 'intermediate'
  });

  const addSkill = () => {
    if (newSkill.name && newSkill.category && newSkill.level) {
      const skill: Skill = {
        id: Date.now().toString(),
        name: newSkill.name,
        category: newSkill.category as Skill['category'],
        level: newSkill.level as Skill['level']
      };
      onChange([...skills, skill]);
      setNewSkill({ name: '', category: 'technical', level: 'intermediate' });
    }
  };

  const removeSkill = (id: string) => {
    onChange(skills.filter(skill => skill.id !== id));
  };

  const groupedSkills = skillCategories.map(category => ({
    ...category,
    skills: skills.filter(skill => skill.category === category.value)
  }));

  return (
    <Card className="p-6 border-card-border shadow-elegant">
      <div className="flex items-center space-x-2 mb-6">
        <FiTool className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold text-text-primary">Competências</h2>
      </div>

      {/* Add New Skill */}
      <Card className="p-4 mb-6 border-card-border bg-background-subtle">
        <h3 className="font-medium text-text-primary mb-4">Adicionar Competência</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label>Nome da Competência</Label>
            <Input
              value={newSkill.name || ''}
              onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
              placeholder="Ex: React, TypeScript..."
            />
          </div>
          
          <div className="space-y-2">
            <Label>Categoria</Label>
            <Select 
              value={newSkill.category} 
              onValueChange={(value) => setNewSkill({ ...newSkill, category: value as Skill['category'] })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {skillCategories.map(category => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label>Nível</Label>
            <Select 
              value={newSkill.level} 
              onValueChange={(value) => setNewSkill({ ...newSkill, level: value as Skill['level'] })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {skillLevels.map(level => (
                  <SelectItem key={level.value} value={level.value}>
                    {level.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-end">
            <Button onClick={addSkill} className="w-full bg-gradient-primary">
              <FiPlus className="mr-2 h-4 w-4" />
              Adicionar
            </Button>
          </div>
        </div>
      </Card>

      {/* Skills by Category */}
      <div className="space-y-6">
        {groupedSkills.map(category => (
          <div key={category.value}>
            <h3 className="font-medium text-text-primary mb-3">{category.label}</h3>
            {category.skills.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {category.skills.map(skill => (
                  <div key={skill.id} className="flex items-center justify-between p-3 bg-background-muted rounded-lg border border-card-border">
                    <div>
                      <span className="font-medium text-text-primary">{skill.name}</span>
                      <div className="text-sm text-text-muted capitalize">{skillLevels.find(l => l.value === skill.level)?.label}</div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeSkill(skill.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <FiTrash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-text-muted text-sm italic">Nenhuma competência desta categoria adicionada.</p>
            )}
          </div>
        ))}
      </div>

      {skills.length === 0 && (
        <div className="text-center py-8 text-text-muted">
          <FiTool className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>Nenhuma competência adicionada ainda.</p>
          <p className="text-sm">Use o formulário acima para adicionar as suas competências.</p>
        </div>
      )}
    </Card>
  );
};