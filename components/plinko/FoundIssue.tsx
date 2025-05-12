
import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function FoundIssue() {
  return (
    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mt-4">
      <div className="flex items-start gap-3">
        <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
        <div>
          <h3 className="text-lg font-medium text-white">Found an Issue?</h3>
          <p className="text-gray-300 mt-1">
            If you encounter any bugs or issues with the Plinko simulation, please report them to our support team.
          </p>
        </div>
      </div>
    </div>
  );
}
