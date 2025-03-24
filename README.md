# Dashboard Moderno

Um dashboard moderno e responsivo construído com Next.js, Tailwind CSS e Shadcn UI.

## 🚀 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) - Framework React para produção
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [Shadcn UI](https://ui.shadcn.com/) - Biblioteca de componentes reutilizáveis
- [Recharts](https://recharts.org/) - Biblioteca de gráficos para React
- [Framer Motion](https://www.framer.com/motion/) - Biblioteca de animações
- [Next Themes](https://themes.nextjs.org/) - Gerenciamento de temas claro/escuro

## ✨ Funcionalidades

- **Interface Moderna e Responsiva**
  - Design limpo e profissional
  - Totalmente responsivo para todos os dispositivos
  - Animações suaves com Framer Motion

- **Tema Escuro/Claro**
  - Suporte a modo claro e escuro
  - Persistência da preferência do usuário
  - Transições suaves entre temas

- **Modo Compacto**
  - Opção para reduzir espaçamentos
  - Ideal para visualização de mais conteúdo
  - Persistência da configuração

- **Gráficos Interativos**
  - Visualização de dados com Recharts
  - Gráficos de área e barras
  - Tooltips informativos
  - Múltiplas métricas em um único gráfico

- **Configurações Personalizáveis**
  - Seleção de idioma
  - Configuração de fuso horário
  - Preferências de notificações
  - Opções de segurança

## 🛠️ Estrutura do Projeto

```
src/
├── app/                    # Páginas e rotas
│   ├── page.tsx           # Dashboard principal
│   ├── atividades/        # Página de atividades
│   ├── usuarios/          # Página de usuários
│   └── configuracoes/     # Página de configurações
├── components/            # Componentes reutilizáveis
│   ├── ui/               # Componentes base (Shadcn)
│   └── layout/           # Componentes de layout
├── contexts/             # Contextos React
└── lib/                  # Utilitários e configurações
```

## 🚀 Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/frontend_dashboard.git
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o projeto em desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Acesse [http://localhost:3000](http://localhost:3000)

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## 🎨 Personalização

O projeto utiliza variáveis CSS para cores e temas, que podem ser facilmente personalizadas em:

```css
src/app/globals.css
```

## 📱 Responsividade

O dashboard é totalmente responsivo e se adapta a diferentes tamanhos de tela:
- Mobile: Menu lateral em drawer
- Tablet: Layout adaptativo
- Desktop: Layout completo com sidebar fixa

## 🤝 Contribuindo

Contribuições são bem-vindas!
