import Image from "next/image";

const TeamPhoto = () => {
  return (
    <section className="w-full min-h-[calc(100vh-4rem)] bg-#EDEBDF relative">
      <Image
        src="/img/groupe_rires.jpg"
        alt="Studio Nouvel"
        fill
        className="object-cover object-top"
      />
    </section>
  );
};

export default TeamPhoto;
