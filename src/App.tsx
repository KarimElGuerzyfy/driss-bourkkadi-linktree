import ProfileCard from "./components/ProfileCard";
import LinksSection from "./components/LinksSection";

function App() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="relative w-full max-w-360 max-h-256 flex items-center justify-end pr-16 overflow-hidden">
        <div className="max-w-3xl w-full flex flex-col gap-2.5">
          <ProfileCard />
          <LinksSection />
        </div>
        <img
          src="/bg-photo2.png"
          alt=""
          className="absolute left-10 bottom-20 w-190 object-contain object-bottom pointer-events-none"
          style={{ zIndex: 9999, filter: "drop-shadow(0px 40px 60px rgba(0,0,0,0.7))" }}
        />
      </div>
    </div>
  );
}

export default App;