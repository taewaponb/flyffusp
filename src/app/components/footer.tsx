export const Footer = () => {
  const GAME_VERSION = 15;

  return (
    <div className="opacity-50 text-xs">
      Game data version: {GAME_VERSION} | Any feedback?{" "}
      <a
        className="text-xs text-amber-500"
        href={"mailto:taewapon.b@gmail.com"}
      >
        Mail me
      </a>
    </div>
  );
};
