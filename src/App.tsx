import ProfileCard from "./components/ProfileCard";
import LinksSection from "./components/LinksSection";

function App() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="relative w-full max-w-360 max-h-256 flex items-center min-[1440px]:justify-end min-[1440px]:pr-16 justify-center overflow-hidden px-2 py-8 sm:px-8 sm:py-12 min-[1440px]:px-0 min-[1440px]:py-0">
        <div className="max-w-3xl w-full flex flex-col gap-2.5">
          <ProfileCard />
          <LinksSection />
        </div>
        <img
          src="/bg-photo.png"
          alt=""
          className="hidden min-[1440px]:block absolute left-10 bottom-20 w-190 object-contain object-bottom pointer-events-none"
          style={{ zIndex: 9999, filter: "drop-shadow(0px 70px 20px rgba(0,0,0,0.7))" }}
        />
      </div>
    </div>
  );
}

export default App;