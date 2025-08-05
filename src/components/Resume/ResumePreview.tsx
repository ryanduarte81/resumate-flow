import React from 'react';
import { ResumeData, TemplateStyle } from '@/types/resume';
import { ClassicTemplate } from './Templates/ClassicTemplate';
import { CreativeTemplate } from './Templates/CreativeTemplate';
import { TechnicalTemplate } from './Templates/TechnicalTemplate';
import { ModernTemplate } from './Templates/ModernTemplate';
import { ExecutiveTemplate } from './Templates/ExecutiveTemplate';
import { PortfolioTemplate } from './Templates/PortfolioTemplate';

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
      case 'modern':
        return <ModernTemplate data={data} />;
      case 'executive':
        return <ExecutiveTemplate data={data} />;
      case 'portfolio':
        return <PortfolioTemplate data={data} />;
      default:
        return <ClassicTemplate data={data} />;
    }
  };

  return (
    <div className="bg-card border border-card-border rounded-lg shadow-elegant overflow-hidden">
      <div className="bg-background-subtle px-4 py-3 border-b border-card-border">
        <h3 className="font-medium text-text-primary">Pré-visualização</h3>
        <p className="text-sm text-text-muted">Modelo: {
          template === 'classic' ? 'Clássico' : 
          template === 'creative' ? 'Criativo' : 
          template === 'technical' ? 'Técnico' :
          template === 'modern' ? 'Moderno' :
          template === 'executive' ? 'Executivo' :
          template === 'portfolio' ? 'Portfolio' : 'Clássico'
        }</p>
      </div>
      
      <div className="p-4 max-h-[800px] overflow-y-auto">
        <div 
          id="resume-preview" 
          className="bg-white w-full mx-auto shadow-lg overflow-visible border border-gray-200"
          style={{ 
            aspectRatio: '210/297',
            transform: 'scale(0.7)',
            transformOrigin: 'top center',
            minHeight: '800px',
            maxHeight: 'none'
          }}
        >
          {renderTemplate()}
        </div>
      </div>
    </div>
  );
};