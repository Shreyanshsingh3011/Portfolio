export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="text-lg mb-4">
            © {new Date().getFullYear()} Shreyansh Singh
          </p>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Building intelligent systems with purpose, clarity, and global impact
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
