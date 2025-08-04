import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TemplateStyle } from '@/types/resume';
import { FiLayout, FiStar, FiCode } from 'react-icons/fi';

interface TemplateSelectorProps {
  selectedTemplate: TemplateStyle;
  onTemplateChange: (template: TemplateStyle) => void;
}

const templates = [
  {
    id: 'classic' as TemplateStyle,
    name: 'Clássico',
    description: 'Design limpo e profissional, ideal para a maioria das áreas',
    icon: FiLayout,
    preview: 'bg-gradient-to-br from-primary-muted to-secondary-muted'
  },
  {
    id: 'creative' as TemplateStyle,
    name: 'Criativo',
    description: 'Design moderno e visual, perfeito para áreas criativas',
    icon: FiStar,
    preview: 'bg-gradient-to-br from-accent-light to-primary-light'
  },
  {
    id: 'technical' as TemplateStyle,
    name: 'Técnico',
    description: 'Foco em competências técnicas, ideal para desenvolvimento e TI',
    icon: FiCode,
    preview: 'bg-gradient-to-br from-secondary-muted to-primary-muted'
  }
];

export const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  selectedTemplate,
  onTemplateChange
}) => {
  return (
    <Card className="p-6 border-card-border shadow-elegant">
      <h2 className="text-lg font-semibold text-text-primary mb-6">Escolher Modelo</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {templates.map((template) => {
          const Icon = template.icon;
          const isSelected = selectedTemplate === template.id;
          
          return (
            <Card
              key={template.id}
              className={`p-4 cursor-pointer transition-all duration-300 border-2 hover:shadow-md ${
                isSelected 
                  ? 'border-accent bg-accent-light/10' 
                  : 'border-card-border hover:border-accent/50'
              }`}
              onClick={() => onTemplateChange(template.id)}
            >
              <div className="space-y-3">
                <div className={`h-20 rounded-lg ${template.preview} flex items-center justify-center`}>
                  <Icon className={`h-8 w-8 ${isSelected ? 'text-accent' : 'text-white/80'}`} />
                </div>
                
                <div className="space-y-1">
                  <h3 className={`font-medium ${isSelected ? 'text-accent' : 'text-text-primary'}`}>
                    {template.name}
                  </h3>
                  <p className="text-sm text-text-muted">{template.description}</p>
                </div>
                
                <Button
                  variant={isSelected ? "default" : "outline"}
                  size="sm"
                  className={`w-full ${isSelected ? 'bg-accent hover:bg-accent/90' : ''}`}
                >
                  {isSelected ? 'Selecionado' : 'Selecionar'}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </Card>
  );
};