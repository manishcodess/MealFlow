// ===== FOOD OPTION CARD COMPONENT =====
// Shows a single food item thumbnail in the carousel

// ===== FOOD OPTION COMPONENT =====
// Receives: link = image URL
export default function Foodoption({ link }) {
  // Destructuring: { link } means we receive 'link' as a prop
  // Instead of props.link, we can directly use 'link'

  return (
    <div className="w-24 sm:w-28 md:w-32">
      {/* Responsive card size - Food image only */}
      <img className="h-auto w-full" src={link} alt="food option" />
      {/* Image has text/name printed on it, so no need for separate label */}
    </div>
  );
}
//image k andar hi naam likha h khane ka
