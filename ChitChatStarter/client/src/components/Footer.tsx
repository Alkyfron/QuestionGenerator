export default function Footer() {
  return (
    <footer className="bg-primary/5 py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center gap-2">
          <img 
            src="/verloren-vrienden-logo.png" 
            alt="Verloren Vrienden Logo" 
            className="h-12 w-12"
            style={{ filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))' }}
          />
          <div className="flex flex-col space-y-1">
            <p className="text-textDark/80 text-sm">© {new Date().getFullYear()} Verloren Vrienden</p>
            <p className="text-textDark/70 text-xs">All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
