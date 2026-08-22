import Link from "next/link";
import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto py-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400 px-4">
      <p>© {new Date().getFullYear()} Social Media Dashboard. All rights reserved.</p>
      <div className="flex items-center gap-2">
        <span>Made by</span>
        <Link
          href="https://github.com/mochrks"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-medium text-slate-900 dark:text-slate-100 hover:text-primary dark:hover:text-primary transition-colors"
        >
          <Github className="w-4 h-4" />
          Mochrks
        </Link>
      </div>
    </footer>
  );
}
