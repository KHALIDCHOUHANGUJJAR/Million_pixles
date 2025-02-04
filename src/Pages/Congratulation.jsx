import { useNavigate } from "react-router";
import Created from "../Components/Created";

export const Congratulation = () => {
  const isShow = false;
  const navigate = useNavigate();
  return (
    <Created
      heading="Your Pixels Have Been Purchased!"
      subHeading={
        <>
          Congratulations! <br />
          Your Pixels Are Live!
        </>
      }
      paragraph={
        <>
          Thank you for your purchase. You are now a part of the <br /> Wall of
          Internet!
        </>
      }
      paragraph2="You’re now part of the Wall of Internet. Your blocks are live!"
      isShow={isShow}
      handleClick={() => navigate("/navigate")}
    />
  );
};
