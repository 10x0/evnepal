import { useState } from 'preact/hooks';

const Button = ({ title }: { title: string }) => {
  const [effect, setEffect] = useState(false);

  return (
    <button
      className={`${effect && 'animate-zoomInOut'} ${
        effect && 'bg-emerald-600'
      } ${styles.button}`}
      onClick={() => {
        setEffect(true);
      }}
      onAnimationEnd={() => setEffect(false)}
    >
      {title}
    </button>
  );
};

const styles = {
  button: `bg-emerald-500 text-white font-semibold px-4 py-3 rounded-2xl w-full`,
};

export default Button;
