import { PROFILE } from '../constants/data'

export default function Footer() {
  return (
    <footer className="relative border-t border-line py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border border-line flex items-center justify-center font-display text-sm text-violet">
            K
          </div>
          <span className="text-sm text-mute">Keep learning, keep building, keep growing.</span>
        </div>
        <p className="eyebrow text-mute">
          &copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
