import Layout from '../../components/layout/Layout';
import CreateTimerForm from '../../components/forms/CreateTimerForm';

export default function CreateTimerPage() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Create New Timer
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Set up a new timer for tracking your work on a specific task.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <CreateTimerForm />
        </div>
      </div>
    </Layout>
  );
}