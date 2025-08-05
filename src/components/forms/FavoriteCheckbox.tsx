'use client';

interface FavoriteCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function FavoriteCheckbox({ checked, onChange }: FavoriteCheckboxProps) {
  return (
    <div className="flex items-center">
      <input
        id="favorite"
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label htmlFor="favorite" className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
        Mark as favorite
      </label>
    </div>
  );
}