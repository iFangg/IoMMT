import * as React from "react";

function MyComponent(props) {
  return (
    <div className="flex flex-col">
      <div className="w-full bg-green-500 bg-opacity-80 min-h-[89px] max-md:max-w-full" />
      <div className="flex gap-4 self-start">
        <div className="flex flex-col flex-1 pb-6 border border-black border-solid bg-cyan-400 bg-opacity-40">
          <div className="justify-center items-center px-5 text-xs text-center text-black whitespace-nowrap border border-black border-solid shadow-sm h-[95px]">
            Dashboard
          </div>
          <div className="justify-center items-center px-7 text-xs text-center text-black whitespace-nowrap border border-black border-solid h-[95px] max-md:px-5">
            Search
          </div>
          <div className="justify-center items-center px-6 text-xs text-center text-black whitespace-nowrap border border-black border-solid h-[95px] max-md:px-5">
            Timeline
          </div>
          <div className="justify-center items-center px-6 text-xs text-center text-black whitespace-nowrap border border-black border-solid h-[95px] max-md:pl-5">
            Inventory
          </div>
          <div className="justify-center items-center px-6 text-xs text-center text-black whitespace-nowrap border border-black border-solid h-[95px] max-md:px-5">
            Patients
          </div>
          <div className="flex overflow-hidden relative flex-col justify-center items-center self-center mt-96 aspect-[0.89] fill-black w-[41px] max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8473598b1759a64afc89c2f2541bc3e682ed5482e352c638ad1831d7f3a0e26f?"
              className="object-cover absolute inset-0 size-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8473598b1759a64afc89c2f2541bc3e682ed5482e352c638ad1831d7f3a0e26f?"
              className="w-full aspect-[0.89] fill-black"
            />
          </div>
        </div>
        <div className="flex flex-col items-center self-start mt-9 basis-0">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/13d380f84c18a86086ac9d99271ca67a2351482d1634065ed29733d8dec94e1b?"
            className="w-5 aspect-[1.18] fill-black"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fbb83d6b034bb7963409d309b59911340dd688a35a9cdcec8b65b39bfb3071e?"
            className="mt-20 w-5 aspect-[1.18] fill-black max-md:mt-10"
          />
        </div>
      </div>
    </div>
  );
}

