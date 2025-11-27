import React from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'

// ErrorPage.jsx
// Single-file React component styled with Tailwind CSS and animated with Framer Motion.
// Usage:
// <ErrorPage code="404" title="Page not found" message="We couldn't find that page." onRetry={() => router.reload()} />

export default function ErrorPage({
  code = '404',
  title = 'Page not found',
  message = "We couldn't find the page you were looking for.",
  onRetry = null,
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-3xl w-full bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-lg p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center gap-8">

          {/* Left: Big code + animation */}
          <div className="flex-shrink-0 flex items-center justify-center w-40 h-40 md:w-48 md:h-48 rounded-xl bg-gradient-to-tr from-red-50 to-red-100 border border-red-200">
            <motion.div
              initial={{ scale: 0.9, rotate: -6 }}
              animate={{ scale: [1, 1.05, 1], rotate: [-6, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-extrabold text-red-600 tracking-tight">{code}</div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-xs md:text-sm uppercase text-red-500 mt-1"
              >
                Error
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Message */}
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-red-50 border border-red-100">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h1 className="text-2xl md:text-3xl font-semibold text-slate-800">{title}</h1>
            </div>

            <p className="mt-4 text-slate-600">{message}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => (onRetry ? onRetry() : window.location.reload())}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-transparent shadow-sm text-sm font-medium bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                Retry
              </button>

              <button
                onClick={() => (window.location.href = '/')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-slate-200 bg-white hover:bg-slate-50 text-slate-700"
              >
                Go to Home
              </button>

              <a
                href="mailto:support@example.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-slate-200 bg-white hover:bg-slate-50 text-slate-700"
              >
                Contact Support
              </a>
            </div>

            <div className="mt-6 text-xs text-slate-400">
              Tip: If you think this is a mistake, try clearing cache or go back to a previous page.
            </div>

          </div>
        </div>

        {/* Footer small */}
        <div className="mt-8 border-t pt-4 flex items-center justify-between text-xs text-slate-400">
          <span>© {new Date().getFullYear()} Your Company</span>
          <span>Reference ID: <span className="text-slate-500">{Math.random().toString(36).slice(2,9).toUpperCase()}</span></span>
        </div>
      </div>
    </div>
  )
}
