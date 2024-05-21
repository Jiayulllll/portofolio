import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 ">
        <Image src="/images/about.jpg" alt="" width={500} height={500} />

        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base lg:text-lg">
            A graduate with a master’s in information technology is an
            enthusiast bringing practical academic experience delivering
            technical projects. Seeks a position that offers professional
            challenges utilising interpersonal skills, excellent time management
            and problem-solving skills. Organised and dependable candidate
            successful at managing multiple priorities with a positive attitude.
            Willingness to learn new techniques to meet team goals. A
            hardworking and passionate job seeker with strong organisational
            skills eager to secure entry-level/graduate position. Ready to help
            the team achieve company goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
