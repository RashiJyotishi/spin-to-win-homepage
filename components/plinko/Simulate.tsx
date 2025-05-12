
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Simulate() {
  return (
    <div className="casino-card p-6">
      <h2 className="text-xl font-bold text-white mb-4">Simulation Controls</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="balls">Number of Balls</Label>
          <Input id="balls" type="number" defaultValue="100" />
        </div>
        <div>
          <Label htmlFor="rows">Rows</Label>
          <Input id="rows" type="number" defaultValue="12" />
        </div>
        <div>
          <Label htmlFor="risk">Risk Level</Label>
          <select
            id="risk"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            defaultValue="medium"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <Button className="w-full bg-casino-purple">Run Simulation</Button>
      </div>
    </div>
  );
}
