export default function Foodoption({ link }) {
  return (
    <div className="group w-28 sm:w-32 md:w-36 cursor-pointer flex flex-col items-center">
      <div className="relative w-full aspect-square rounded-full flex items-center justify-center transition-smooth group-hover:-translate-y-2">
        {/* Background glow on hover */}
        <div className="absolute inset-0 bg-orange-100/0 rounded-full blur-xl group-hover:bg-orange-200/50 transition-smooth duration-500 -z-10" />
        <img 
          className="h-full w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-xl transition-smooth duration-300" 
          src={link} 
          alt="food option" 
          loading="lazy"
        />
      </div>
    </div>
  );
}
