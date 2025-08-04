import React, { useState, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useLocalStorage, exportResumeData, importResumeData } from '@/hooks/useLocalStorage';
import { exportToPDF } from '@/utils/pdfExport';
import { ResumeData, TemplateStyle, PersonalInfo, Experience, Education, Skill, Project, Certificate, Language } from '@/types/resume';
import { Header } from '@/components/Layout/Header';
import { PersonalInfoForm } from '@/components/Resume/PersonalInfoForm';
import { ExperienceForm } from '@/components/Resume/ExperienceForm';
import { SkillsForm } from '@/components/Resume/SkillsForm';
import { TemplateSelector } from '@/components/Resume/TemplateSelector';
import { ResumePreview } from '@/components/Resume/ResumePreview';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const initialPersonalInfo: PersonalInfo = {
  fullName: '',
  email: '',
  phone: '',
  location: '',
  website: '',
  linkedin: '',
  github: '',
  summary: ''
};

const initialResumeData: ResumeData = {
  personalInfo: initialPersonalInfo,
  experience: [],
  education: [],
  skills: [],
  projects: [],
  certificates: [],
  languages: []
};

export const ResumeBuilder: React.FC = () => {
  const [resumeData, setResumeData] = useLocalStorage<ResumeData>('resume-data', initialResumeData);
  const [selectedTemplate, setSelectedTemplate] = useLocalStorage<TemplateStyle>('selected-template', 'classic');
  const [isExporting, setIsExporting] = useState(false);
  const { toast } = useToast();

  const handlePersonalInfoChange = useCallback((personalInfo: PersonalInfo) => {
    setResumeData(prev => ({ ...prev, personalInfo }));
  }, [setResumeData]);

  const handleExperienceChange = useCallback((experience: Experience[]) => {
    setResumeData(prev => ({ ...prev, experience }));
  }, [setResumeData]);

  const handleSkillsChange = useCallback((skills: Skill[]) => {
    setResumeData(prev => ({ ...prev, skills }));
  }, [setResumeData]);

  const handleTemplateChange = useCallback((template: TemplateStyle) => {
    setSelectedTemplate(template);
    toast({
      title: "Modelo alterado",
      description: `Modelo ${template === 'classic' ? 'Clássico' : template === 'creative' ? 'Criativo' : 'Técnico'} selecionado.`
    });
  }, [setSelectedTemplate, toast]);

  const handleExportPDF = useCallback(async () => {
    try {
      setIsExporting(true);
      
      // Check if there's enough data
      if (!resumeData.personalInfo.fullName || !resumeData.personalInfo.email) {
        toast({
          title: "Dados insuficientes",
          description: "Por favor, preencha pelo menos o nome e email antes de gerar o PDF.",
          variant: "destructive"
        });
        return;
      }

      await exportToPDF('resume-preview', `${resumeData.personalInfo.fullName.replace(/\s+/g, '_')}_CV`);
      
      toast({
        title: "PDF gerado com sucesso!",
        description: "O seu currículo foi baixado como PDF."
      });
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      toast({
        title: "Erro ao gerar PDF",
        description: "Ocorreu um erro ao gerar o PDF. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsExporting(false);
    }
  }, [resumeData.personalInfo.fullName, resumeData.personalInfo.email, toast]);

  const handleSaveData = useCallback(() => {
    // Data is automatically saved to localStorage via useLocalStorage hook
    toast({
      title: "Dados guardados",
      description: "Os seus dados foram guardados localmente com sucesso."
    });
  }, [toast]);

  const handleExportData = useCallback(() => {
    try {
      const filename = resumeData.personalInfo.fullName || 'curriculo';
      exportResumeData(resumeData, filename);
      toast({
        title: "Dados exportados",
        description: "Os seus dados foram exportados como ficheiro JSON."
      });
    } catch (error) {
      toast({
        title: "Erro ao exportar",
        description: "Ocorreu um erro ao exportar os dados.",
        variant: "destructive"
      });
    }
  }, [resumeData, toast]);

  const handleImportData = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        try {
          const data = await importResumeData(file);
          setResumeData(data);
          toast({
            title: "Dados importados",
            description: "Os seus dados foram importados com sucesso."
          });
        } catch (error) {
          toast({
            title: "Erro ao importar",
            description: error instanceof Error ? error.message : "Erro desconhecido",
            variant: "destructive"
          });
        }
      }
    };
    input.click();
  }, [setResumeData, toast]);

  return (
    <div className="min-h-screen bg-background-subtle">
      <Header
        onExportPDF={handleExportPDF}
        onSaveData={handleSaveData}
        onExportData={handleExportData}
        onImportData={handleImportData}
        isExporting={isExporting}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Forms Section */}
          <div className="lg:col-span-2 space-y-8">
            <TemplateSelector
              selectedTemplate={selectedTemplate}
              onTemplateChange={handleTemplateChange}
            />

            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="personal">Pessoal</TabsTrigger>
                <TabsTrigger value="experience">Experiência</TabsTrigger>
                <TabsTrigger value="skills">Competências</TabsTrigger>
                <TabsTrigger value="education">Formação</TabsTrigger>
              </TabsList>

              <TabsContent value="personal">
                <PersonalInfoForm
                  data={resumeData.personalInfo}
                  onChange={handlePersonalInfoChange}
                />
              </TabsContent>

              <TabsContent value="experience">
                <ExperienceForm
                  experiences={resumeData.experience}
                  onChange={handleExperienceChange}
                />
              </TabsContent>

              <TabsContent value="skills">
                <SkillsForm
                  skills={resumeData.skills}
                  onChange={handleSkillsChange}
                />
              </TabsContent>

              <TabsContent value="education">
                <div className="text-center py-8 text-text-muted">
                  <p className="mb-4">Secção de Formação Académica em desenvolvimento.</p>
                  <p className="text-sm">Esta funcionalidade estará disponível em breve.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Preview Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ResumePreview
                data={resumeData}
                template={selectedTemplate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};