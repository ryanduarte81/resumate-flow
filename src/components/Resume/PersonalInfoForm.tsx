import React from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PersonalInfo } from '@/types/resume';
import { FiUser, FiMail, FiPhone, FiMapPin, FiGlobe, FiLinkedin, FiGithub } from 'react-icons/fi';

interface PersonalInfoFormProps {
  data: PersonalInfo;
  onChange: (data: PersonalInfo) => void;
}

export const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ data, onChange }) => {
  const handleChange = (field: keyof PersonalInfo, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <Card className="p-6 border-card-border shadow-elegant">
      <div className="flex items-center space-x-2 mb-6">
        <FiUser className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold text-text-primary">Informações Pessoais</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-text-secondary font-medium">Nome Completo *</Label>
          <Input
            id="fullName"
            value={data.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            placeholder="Seu nome completo"
            className="border-input focus:border-accent transition-colors"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-text-secondary font-medium">Email *</Label>
          <div className="relative">
            <FiMail className="absolute left-3 top-3 h-4 w-4 text-text-muted" />
            <Input
              id="email"
              type="email"
              value={data.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="email@exemplo.com"
              className="pl-10 border-input focus:border-accent transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-text-secondary font-medium">Telefone *</Label>
          <div className="relative">
            <FiPhone className="absolute left-3 top-3 h-4 w-4 text-text-muted" />
            <Input
              id="phone"
              value={data.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              placeholder="+351 912 345 678"
              className="pl-10 border-input focus:border-accent transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location" className="text-text-secondary font-medium">Localização *</Label>
          <div className="relative">
            <FiMapPin className="absolute left-3 top-3 h-4 w-4 text-text-muted" />
            <Input
              id="location"
              value={data.location}
              onChange={(e) => handleChange('location', e.target.value)}
              placeholder="Cidade, País"
              className="pl-10 border-input focus:border-accent transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="website" className="text-text-secondary font-medium">Website</Label>
          <div className="relative">
            <FiGlobe className="absolute left-3 top-3 h-4 w-4 text-text-muted" />
            <Input
              id="website"
              value={data.website || ''}
              onChange={(e) => handleChange('website', e.target.value)}
              placeholder="https://meusite.com"
              className="pl-10 border-input focus:border-accent transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="linkedin" className="text-text-secondary font-medium">LinkedIn</Label>
          <div className="relative">
            <FiLinkedin className="absolute left-3 top-3 h-4 w-4 text-text-muted" />
            <Input
              id="linkedin"
              value={data.linkedin || ''}
              onChange={(e) => handleChange('linkedin', e.target.value)}
              placeholder="linkedin.com/in/perfil"
              className="pl-10 border-input focus:border-accent transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="github" className="text-text-secondary font-medium">GitHub</Label>
          <div className="relative">
            <FiGithub className="absolute left-3 top-3 h-4 w-4 text-text-muted" />
            <Input
              id="github"
              value={data.github || ''}
              onChange={(e) => handleChange('github', e.target.value)}
              placeholder="github.com/usuario"
              className="pl-10 border-input focus:border-accent transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="summary" className="text-text-secondary font-medium">Resumo Profissional *</Label>
          <Textarea
            id="summary"
            value={data.summary}
            onChange={(e) => handleChange('summary', e.target.value)}
            placeholder="Descreva brevemente o seu perfil profissional, experiência e objetivos..."
            rows={4}
            className="border-input focus:border-accent transition-colors resize-none"
          />
          <p className="text-xs text-text-muted">2-3 frases que resumam o seu perfil profissional</p>
        </div>
      </div>
    </Card>
  );
};