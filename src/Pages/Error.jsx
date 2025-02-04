import { useNavigate } from "react-router";
import Button from "../Components/Button";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-[#272727] text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">Oops! Page not found</p>
        <div className="flex items-center justify-center">
          <Button text="Go Back" handleClick={() => navigate("/")} />
        </div>
      </div>
    </div>
  );
}
