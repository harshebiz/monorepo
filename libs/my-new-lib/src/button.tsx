const Button = ({ label }: { label: string }) => {
  console.log(import.meta.env.VITE_API_URL);
  
  return <button>{label} {import.meta.env.VITE_API_URL}</button>;
};

export default Button;
