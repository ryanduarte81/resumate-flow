# Resumate Flow

Um construtor de currículos moderno e intuitivo, desenvolvido com React, TypeScript e Tailwind CSS.

## 🚀 Funcionalidades

- **Templates Múltiplos**: Clássico, Criativo e Técnico
- **Formulários Intuitivos**: Informações pessoais, experiência, formação académica e competências
- **Upload de Fotos**: Suporte para fotos de perfil com formatos adaptáveis
- **Preview em Tempo Real**: Visualização instantânea das alterações
- **Exportação PDF**: Geração de currículos em PDF
- **Persistência Local**: Dados salvos automaticamente
- **Importação/Exportação**: Suporte para backup e restauração de dados

## 🛠️ Tecnologias

- **React 18** com TypeScript
- **Vite** para build e desenvolvimento
- **Tailwind CSS** para estilização
- **Shadcn/ui** para componentes
- **React Icons** para ícones
- **jsPDF** para exportação PDF

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/resumate-flow.git
cd resumate-flow

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev
```

## 🚀 Deploy

### GitHub Pages

O projeto está configurado para deploy automático no GitHub Pages:

1. **Fork** ou **clone** o repositório
2. **Ative GitHub Pages** nas configurações do repositório:
   - Vá para `Settings` > `Pages`
   - Em `Source`, selecione `GitHub Actions`
3. **Faça push** para a branch `main`
4. O deploy será executado automaticamente

### Deploy Manual

```bash
# Build para produção
npm run build

# Preview local
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Layout/
│   ├── Resume/
│   │   ├── Templates/
│   │   └── ...
│   └── ui/
├── hooks/
├── pages/
├── types/
└── utils/
```

## 🎨 Templates Disponíveis

### Classic Template
- Design elegante e profissional
- Layout tradicional
- Cores neutras e tipografia serif

### Creative Template
- Design moderno e inovador
- Gradientes e efeitos visuais
- Layout dinâmico

### Technical Template
- Design técnico e minimalista
- Cores cibernéticas
- Foco em competências técnicas

## 📝 Uso

1. **Preencha as informações pessoais**
2. **Adicione experiência profissional**
3. **Inclua formação académica**
4. **Defina competências e habilidades**
5. **Escolha um template**
6. **Exporte em PDF**

## 🔧 Configuração

### Variáveis de Ambiente

```env
VITE_APP_TITLE=Resumate Flow
```

### Build Customizado

```bash
# Build para desenvolvimento
npm run build:dev

# Build para produção
npm run build
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🐛 Problemas Conhecidos

- **GitHub Pages**: Certifique-se de que o repositório está configurado corretamente
- **Build**: Verifique se todas as dependências estão instaladas
- **PDF**: Alguns navegadores podem ter problemas com a geração de PDF

## 📞 Suporte

Se encontrar algum problema ou tiver sugestões, abra uma issue no GitHub.

---

Desenvolvido com ❤️ usando React e TypeScript 