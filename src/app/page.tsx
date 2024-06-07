import {
  Cinzel_Decorative,
  PT_Serif,
  Lora,
  Raleway,
  Playfair_Display,
} from "next/font/google";
const cinzel = Cinzel_Decorative({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const play = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const raleway = Raleway({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const pt_serif = PT_Serif({ weight: "700", subsets: ["latin"] });
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-24 bg-[#F7F2E9] text-[#2B292B]">
      <div className="bg-header relative h-screen w-screen overflow-hidden rounded-lg">
        <div className="absolute inset-0 flex items-center justify-center bg-beige bg-opacity-15 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="hover:animate-bounce icon icon-tabler icon-tabler-arrow-badge-down"
            width="200"
            height="200"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#403C34"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M17 13v-6l-5 4l-5 -4v6l5 4z" />
          </svg>
        </div>
      </div>

      <div>
        <div className="w-screen h-4 mt-24 bg-gold"></div>
        <div className="flex items-center justify-center mt-32">
          <div className="h-2 w-[200px] bg-dim w-full mx-8 "></div>
          <span
            className={`${cinzel.className} font-bold text-center text-8xl mx-4`}
          >
            Bad Philosophers
          </span>
          <div className="h-2 w-[200px] bg-dim w-full mx-8"></div>
        </div>
        <img
          src="https://www.pngmart.com/files/23/Gold-Swirl-PNG-Isolated-File.png"
          alt="Gold floral design"
          className="mx-auto mb-8"
          style={{
            width: 700,
            height: 200,
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
        <div className="w-screen h-4 bg-gold text-grey font-bold"></div>
        <p className={`${play.className} text-3xl my-20 text-center`}>
          Chat with chatbots representing abandoned philosophies...
        </p>
        <div className="flex w-full bg-gold text-beige">
          <img
            src="https://miro.medium.com/v2/resize:fit:938/1*ARpXbGZtzKkHbojQkawQKQ.jpeg"
            className="mr-8 w-[600px] h-full"
          />

          <div className="h-96 w-full pb-16">
            <p className={`${raleway.className} text-2xl p-8`}>
              Where the wisdom of the past comes to life through engaging
              conversations with chatbots embodying the world&apos;s forgotten
              schools of thought.
            </p>
          </div>
        </div>

        <div className="flex w-full bg-dim text-beige">
          <div className="h-96 w-full pb-16">
            <p className={`${raleway.className} text-2xl p-8`}>
              Where the wisdom of the past comes to life through engaging
              conversations with chatbots embodying the world&apos;s forgotten
              schools of thought.
            </p>
          </div>
          <img
            src="https://miro.medium.com/v2/resize:fit:938/1*ARpXbGZtzKkHbojQkawQKQ.jpeg"
            className="ml-8 w-full h-full"
          />
        </div>
      </div>
    </main>
  );
}
