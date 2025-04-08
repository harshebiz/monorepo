const Button = ({ label }: { label: string }) => {
  return <button>{label} {import.meta.env.VITE_API_URL}</button>;
};

export default Button;
