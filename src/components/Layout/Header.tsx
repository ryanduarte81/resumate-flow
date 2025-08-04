import React from 'react';
import { Button } from '@/components/ui/button';
import { FiFileText, FiDownload, FiUpload, FiSave } from 'react-icons/fi';

interface HeaderProps {
  onExportPDF: () => void;
  onSaveData: () => void;
  onExportData: () => void;
  onImportData: () => void;
  isExporting?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onExportPDF,
  onSaveData,
  onExportData,
  onImportData,
  isExporting = false
}) => {
  return (
    <header className="bg-card border-b border-card-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <FiFileText className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-text-primary">ResumateFlow</h1>
              <p className="text-sm text-text-muted">Gerador Profissional de Currículos</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onImportData}
              className="hidden sm:flex"
            >
              <FiUpload className="mr-2 h-4 w-4" />
              Importar
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={onExportData}
              className="hidden sm:flex"
            >
              <FiSave className="mr-2 h-4 w-4" />
              Exportar
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={onSaveData}
            >
              <FiSave className="mr-2 h-4 w-4" />
              Guardar
            </Button>
            
            <Button
              onClick={onExportPDF}
              disabled={isExporting}
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              <FiDownload className="mr-2 h-4 w-4" />
              {isExporting ? 'A gerar PDF...' : 'Baixar PDF'}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};