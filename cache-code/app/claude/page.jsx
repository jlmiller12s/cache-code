import ClaudeDemo from '../../components/ClaudeDemo';

export const metadata = {
  title: 'Claude AI Demo',
  description: 'Interact with Claude AI',
};

export default function ClaudePage() {
  return (
    <main className="container mx-auto py-8">
      <ClaudeDemo />
    </main>
  );
} 