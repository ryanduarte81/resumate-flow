import React from 'react';
import { ResumeData, TemplateStyle } from '@/types/resume';
import { ClassicTemplate } from './Templates/ClassicTemplate';
import { CreativeTemplate } from './Templates/CreativeTemplate';
import { TechnicalTemplate } from './Templates/TechnicalTemplate';

interface ResumePreviewProps {
  data: ResumeData;
  template: TemplateStyle;
}

export const ResumePreview: React.FC<ResumePreviewProps> = ({ data, template }) => {
  const renderTemplate = () => {
    switch (template) {
      case 'classic':
        return <ClassicTemplate data={data} />;
      case 'creative':
        return <CreativeTemplate data={data} />;
      case 'technical':
        return <TechnicalTemplate data={data} />;
      default:
        return <ClassicTemplate data={data} />;
    }
  };

  return (
    <div className="bg-card border border-card-border rounded-lg shadow-elegant overflow-hidden">
      <div className="bg-background-subtle px-4 py-3 border-b border-card-border">
        <h3 className="font-medium text-text-primary">Pré-visualização</h3>
        <p className="text-sm text-text-muted">Modelo: {template === 'classic' ? 'Clássico' : template === 'creative' ? 'Criativo' : 'Técnico'}</p>
      </div>
      
      <div className="p-4">
        <div 
          id="resume-preview" 
          className="bg-white min-h-[297mm] max-w-[210mm] mx-auto shadow-lg"
          style={{ 
            aspectRatio: '210/297',
            transform: 'scale(0.7)',
            transformOrigin: 'top center',
            marginBottom: '-30%'
          }}
        >
          {renderTemplate()}
        </div>
      </div>
    </div>
  );
};