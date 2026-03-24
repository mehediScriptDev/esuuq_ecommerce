import { useSelector } from 'react-redux';
import {
  Code,
  Zap,
  Shield,
  Smartphone,
  Palette,
  Database,
  Settings,
  Github,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Rocket,
  Terminal,
  Package,
} from 'lucide-react';
import { Button, Card, Container, Grid, Heading, Text } from '@/components/ui';

const HomeView = () => {
  const productsState = useSelector((state) => state.products);

  const features = [
    {
      icon: <Code className="h-6 w-6" />,
      title: 'React 19',
      description: 'Latest React with hooks support and modern features',
      color: 'text-blue-500',
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: 'Redux Toolkit',
      description: 'Simplified state management with Redux Toolkit',
      color: 'text-purple-500',
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: 'Tailwind CSS 4',
      description: 'Utility-first CSS framework for rapid UI development',
      color: 'text-cyan-500',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Vite',
      description: 'Lightning-fast build tool and development server',
      color: 'text-yellow-500',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'ESLint & Prettier',
      description: 'Code quality and formatting tools',
      color: 'text-green-500',
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: 'Responsive Design',
      description: 'Mobile-first responsive components',
      color: 'text-indigo-500',
    },
  ];

  const quickStartSteps = [
    {
      step: '1',
      title: 'Clone Repository',
      command: 'git clone <repository-url>',
      description: 'Clone this boilerplate to your local machine',
    },
    {
      step: '2',
      title: 'Install Dependencies',
      command: 'npm install',
      description: 'Install all required dependencies',
    },
    {
      step: '3',
      title: 'Start Development',
      command: 'npm run dev',
      description: 'Start the development server at localhost:5173',
    },
    {
      step: '4',
      title: 'Start Building',
      command: 'Edit src/pages/public/public_Home/HomeView.jsx',
      description: 'Start building your amazing application!',
    },
  ];

  const folderStructure = [
    {
      name: 'src/components/',
      description: 'Reusable UI components (common & ui folders)',
      icon: <Package className="h-4 w-4" />,
    },
    {
      name: 'src/features/',
      description: 'Redux slices and API logic (store.js, auth/, counter/, products/)',
      icon: <Database className="h-4 w-4" />,
    },
    {
      name: 'src/pages/',
      description: 'Page components organized by access level (admin/, auth/, public/)',
      icon: <Code className="h-4 w-4" />,
    },
    {
      name: 'src/router/',
      description: 'Routing configuration with guards and layouts',
      icon: <Settings className="h-4 w-4" />,
    },
    {
      name: 'src/services/',
      description: 'API services with axios instance and HTTP methods',
      icon: <ExternalLink className="h-4 w-4" />,
    },
    {
      name: 'src/utils/',
      description: 'Helper functions, validators, and utility modules',
      icon: <Terminal className="h-4 w-4" />,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="flex h-screen items-center justify-center bg-linear-to-br from-[#090053] via-[#16013b] via-20% to-[#000714] text-center">
        <Container maxWidth="xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-blue-100 shadow-lg backdrop-blur-lg">
            <Rocket className="h-4 w-4" />
            React Redux Tailwind Boilerplate
          </div>

          <Heading as="h1" size="6xl" align="center" className="mb-6" color="muted">
            Build Modern React Apps
            <span className="from-blue-00 bg-linear-to-r to-purple-800 bg-clip-text text-transparent">
              {' '}
              Faster
            </span>
          </Heading>

          <Text size="xl" color="muted" align="center" className="mx-auto mb-8 max-w-4xl">
            A production-ready React boilerplate with Redux Toolkit, Tailwind CSS, and modern
            development tools. Everything you need to start building amazing applications.
          </Text>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              leftIcon={<Github className="h-5 w-5" />}
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              Get Started
            </Button>
            <Button variant="outline" size="lg" leftIcon={<ExternalLink className="h-4 w-4" />}>
              Live Demo
            </Button>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <Container size="lg">
          <div className="mb-12 text-center">
            <Heading as="h2" size="3xl" className="mb-4">
              Powerful Features
            </Heading>
            <Text color="muted" className="mx-auto max-w-2xl">
              Everything you need for modern React development, pre-configured and ready to use.
            </Text>
          </div>

          <Grid cols={{ default: 1, md: 2, lg: 3 }} gap="lg">
            {features.map((feature, index) => (
              <Card
                key={index}
                variant="outlined"
                className="transition-all duration-300 hover:shadow-md"
              >
                <div className={`${feature.color} mb-4`}>{feature.icon}</div>
                <Heading as="h3" size="xl" className="mb-2">
                  {feature.title}
                </Heading>
                <Text color="muted">{feature.description}</Text>
              </Card>
            ))}
          </Grid>
        </Container>
      </section>

      {/* Quick Start Section */}
      <section className="bg-gray-50 py-16">
        <Container size="lg">
          <div className="mb-12 text-center">
            <Heading as="h2" size="3xl" className="mb-4">
              Quick Start Guide
            </Heading>
            <Text color="muted" className="mx-auto max-w-2xl">
              Get up and running in minutes with these simple steps.
            </Text>
          </div>

          <div className="mx-auto max-w-4xl">
            <Grid cols={{ default: 1, md: 2 }} gap="lg">
              {quickStartSteps.map((step, index) => (
                <Card key={index} variant="elevated">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
                      {step.step}
                    </div>
                    <Heading as="h3" size="lg">
                      {step.title}
                    </Heading>
                  </div>
                  <div className="mb-3 rounded-md bg-gray-900 p-3 font-mono text-sm text-green-400">
                    $ {step.command}
                  </div>
                  <Text color="muted">{step.description}</Text>
                </Card>
              ))}
            </Grid>
          </div>
        </Container>
      </section>

      {/* Project Structure Section */}
      <section className="py-16">
        <Container size="lg">
          <div className="mb-12 text-center">
            <Heading as="h2" size="3xl" className="mb-4">
              Project Structure
            </Heading>
            <Text color="muted" className="mx-auto max-w-2xl">
              Well-organized folder structure following React best practices.
            </Text>
          </div>

          <div className="mx-auto max-w-4xl">
            <Card variant="outlined" padding="none">
              {folderStructure.map((folder, index) => (
                <div
                  key={index}
                  className={`p-6 ${index !== folderStructure.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-blue-600">{folder.icon}</div>
                    <div className="flex-1">
                      <Heading as="h3" size="lg" className="mb-2 font-mono">
                        {folder.name}
                      </Heading>
                      <Text color="muted">{folder.description}</Text>
                    </div>
                  </div>
                </div>
              ))}
            </Card>
          </div>
        </Container>
      </section>

      {/* Available Scripts Section */}
      <section className="bg-gray-50 py-16">
        <Container size="lg">
          <div className="mb-12 text-center">
            <Heading as="h2" size="3xl" className="mb-4">
              Available Scripts
            </Heading>
            <Text color="muted" className="mx-auto max-w-2xl">
              Pre-configured scripts for development, building, and code quality.
            </Text>
          </div>

          <div className="mx-auto grid max-w-3xl gap-4">
            {[
              { command: 'npm run dev', description: 'Start development server with Vite' },
              { command: 'npm run build', description: 'Build for production' },
              { command: 'npm run preview', description: 'Preview production build locally' },
              { command: 'npm run lint', description: 'Run ESLint to check code quality' },
              { command: 'npm run format', description: 'Format code with Prettier' },
            ].map((script, index) => (
              <Card key={index} variant="outlined" padding="md">
                <div>
                  <code className="rounded bg-gray-900 px-3 py-1 font-mono text-sm text-green-400">
                    {script.command}
                  </code>
                  <Text color="muted" className="mt-2">
                    {script.description}
                  </Text>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Redux State Demo */}
      <section className="py-16">
        <Container size="xl">
          <div className="mb-12 text-center">
            <Heading as="h2" size="3xl" className="mb-4">
              Redux State Demo
            </Heading>
            <Text color="muted" className="mx-auto max-w-2xl">
              Example Redux state from the products slice. Open Redux DevTools to explore.
            </Text>
          </div>

          <div className="mx-auto overflow-hidden">
            <div className="rounded-xl bg-gray-900 p-6 font-mono text-sm text-green-400">
              <div className="mb-2 text-yellow-400">// Current Redux State:</div>
              <pre>{JSON.stringify(productsState, null, 2)}</pre>
            </div>
            <div className="mt-4 text-center">
              <Text size="sm" color="muted">
                💡 Install Redux DevTools browser extension to inspect and debug state changes
              </Text>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="bg-linear-to-r from-blue-600 to-purple-600 py-16 text-white">
        <Container size="lg">
          <div className="text-center">
            <Heading as="h2" size="3xl" className="mb-4 text-white">
              Ready to Build Something Amazing?
            </Heading>
            <Text size="lg" className="mx-auto mb-8 max-w-2xl text-blue-100">
              Start building your next React application with this production-ready boilerplate.
            </Text>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                variant="secondary"
                size="lg"
                leftIcon={<CheckCircle className="h-5 w-5" />}
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Start Development
              </Button>
              <Button
                variant="outline"
                size="lg"
                leftIcon={<Github className="h-5 w-5" />}
                className="border-white/20 text-white hover:bg-white/10"
              >
                View on GitHub
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomeView;
