import Layout from '../components/layout/Layout';
import TimerList from '../components/timer/TimerList';

export default function Home() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Timers
          </h1>
        </div>
        
        <TimerList />
      </div>
    </Layout>
  );
}
