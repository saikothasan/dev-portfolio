# Modern Developer Portfolio

A modern, responsive developer portfolio built with Next.js 13, Tailwind CSS, and TypeScript. Features a dark theme, smooth animations, and a clean, professional design.

![Portfolio Preview](https://sjc.microlink.io/k73bR9JkgJpYs1HgYf32uFdw8VNw6hepB62lPhDQ5ZdVc9nQCv9kwTasQX1xrIdqFtAtk7_crBabpm-ome4WxQ.jpeg)

## 🚀 Features

- ⚡ **Next.js 13** - For server-side rendering and static site generation
- 🎨 **Tailwind CSS** - For modern, responsive styling
- 📱 **Fully Responsive** - Works on all devices
- 🌙 **Dark Theme** - Elegant dark theme design
- 🎯 **Dynamic GitHub Projects** - Automatically fetches and displays your GitHub repositories
- 📧 **Contact Form** - Integrated with EmailJS for easy contact
- ⚡ **Fast Performance** - Optimized for speed and SEO
- 🔧 **Easy to Customize** - Well-organized code structure

## 🛠️ Tech Stack

- [Next.js 13](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - For type safety
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Shadcn UI](https://ui.shadcn.com/) - UI components
- [EmailJS](https://www.emailjs.com/) - For contact form functionality
- [Lucide Icons](https://lucide.dev/) - For beautiful icons

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/saikothasan/dev-portfolio.git
```

2. Navigate to the project directory:
```bash
cd dev-portfolio
```

3. Install dependencies:
```bash
npm install
```

4. Create a `.env.local` file in the root directory and add your EmailJS credentials:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id
```

## 🚀 Usage

1. Start the development server:
```bash
npm run dev
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Configuration

### GitHub Projects

Update your GitHub username in `components/projects-section.tsx`:

```typescript
const response = await fetch('https://api.github.com/users/YOUR_GITHUB_USERNAME/repos')
```

### Contact Form

1. Sign up for [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Create an email template
4. Update the EmailJS credentials in your `.env.local` file

## 🌐 Deployment

The project is ready to be deployed on [Vercel](https://vercel.com). Simply:

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/saikothasan/dev-portfolio/issues).

## 💖 Support

Give a ⭐️ if you like this project!

## 📧 Contact

Saiko Thasan - [@saikothasan](https://github.com/saikothasan)

Project Link: [https://github.com/saikothasan/dev-portfolio](https://github.com/saikothasan/dev-portfolio)
