export default function Header() {
  return (
    <header className="w-full py-6 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-4">
          <img 
            src="/verloren-vrienden-logo.png" 
            alt="Verloren Vrienden Logo" 
            className="h-24 w-24 mb-2"
            style={{ filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))' }}
          />
          <p className="text-sm font-medium text-primary">Created by Verloren Vrienden</p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-textDark text-center">
          Conversation Starter
        </h1>
        <p className="text-center text-textDark mt-2">Break the ice at your next social gathering</p>
      </div>
    </header>
  );
}
