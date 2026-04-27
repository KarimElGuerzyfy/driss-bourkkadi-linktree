import { profileData } from "../data";

function ProfileCard() {
  return (
    <div className="rounded-[36px] p-4 min-[1440px]:p-6 flex flex-col items-center text-center gap-4 min-[1440px]:bg-white/25 min-[1440px]:backdrop-blur-md min-[1440px]:border min-[1440px]:border-white/40">
      <img
        src={profileData.photo}
        alt={profileData.name}
        className="w-24 h-24 rounded-full object-cover shadow-lg"
      />
      <h1 className="text-white font-bold text-xl min-[1440px]:text-2xl uppercase">
        {profileData.name}
      </h1>
      <p className="text-white/90 text-sm min-[1440px]:text-base leading-relaxed text-justify font-semibold">
        {profileData.bio}
      </p>
    </div>
  );
}

export default ProfileCard;
