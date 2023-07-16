import directus from "@/lib/directus";
import { revalidateTag } from "next/cache";
import Image from "next/image";

const CTACard = async () => {
  const formAction = async (formData: FormData) => {
    "use server";
    try {
      const email = formData.get("email");
      await directus.items("subscribers").createOne({
        email,
      });
      revalidateTag("subscribers");
    } catch (err) {
      console.log(err);
    }
  };

  const subscribersCount = fetch(
    `${process.env.NEXT_PUBLIC_API_URL}items/subscribers?meta=total_count&access_token=${process.env.ADMIN_TOKEN}`,
    {
      next: {
        tags: ["subscribers"],
      },
    }
  )
    .then((res) => res.json())
    .then((res) => res.meta.total_count)
    .catch((err) => console.log(err));

  return (
    <div className="rounded-md bg-slate-200 py-10 px-6 relative overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-r from-white/95 via-white/70 to-white/30" />

      {/* Image Container */}
      <Image
        fill
        className="object-cover object-center"
        alt="Explore the world"
        src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
      />

      {/* Content Container */}
      <div className="relative z-1">
        <div className="font-bold text-lg">#exploreworld</div>
        <h3 className="mt-3 text-2xl font-semibold">Explore the world</h3>
        <p className="max-w-lg mt-2 text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
          neque harum consectetur alias. Ullam vitae exercitationem est
          reiciendis ipsa sunt illo pariatur quae, libero voluptates veniam.
          Eaque sapiente assumenda non.
        </p>
        {/* Form */}
        <form
          key={subscribersCount}
          action={formAction}
          className=" flex flex-col md:flex-row items-center gap-2 mt-6"
        >
          <input
            type="email"
            name="email"
            className="bg-white text-base rounded-md py-3 px-3 w-full md:w-auto
             outline-none focus:ring-2 ring-netural-400 placeholder:text-sm
            "
            placeholder="Enter your email address"
          />
          <button
            className=" bg-neutral-900 w-full md:w-auto
           rounded-md px-3 py-3 text-neutral-200
          "
          >
            Sign Up
          </button>
        </form>
      </div>
      {/* Subscribers */}
      <div>
        <span className="text-4xl font-bold z-[200]">
          {`Join our ${await subscribersCount} subscribers`}
        </span>
      </div>
    </div>
  );
};

export default CTACard;
