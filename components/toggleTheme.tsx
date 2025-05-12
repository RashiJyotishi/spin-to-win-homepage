
import { useTheme } from '@/contexts/ThemeProvider'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ToggleTheme() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme} 
      className="rounded-full"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
