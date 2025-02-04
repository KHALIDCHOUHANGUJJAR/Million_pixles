import Created from "../../Components/Created";

export const Create = () => {
  const isShow = true;

  return (
    <Created
      heading="Welcome"
      subHeading="Your Account is Ready!"
      paragraph="Congratulations! Your account setup is complete. You’re all set to
                 explore and enjoy our services. Start your journey now!"
      isShow={isShow}
    />
  );
};
