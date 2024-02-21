import Image from "next/image";
import Button from "@/components/button";
import write from "public/write.svg";

type Props = {
  dict: any;
  id: string;
};

export default function Product({ dict, id }: Props) {
  return (
    <div className="rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl bg-slate-700 max-w-96">
      <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
        <Image
          alt={dict.products[id].altText}
          className="-scale-y-100"
          src={write}
        />
      </span>
      <h3 className="text-white mt-5 text-base font-medium tracking-tight">
        {dict.products[id].title}
      </h3>
      <p className="text-slate-400 mt-2 text-sm">
        {dict.products[id].description}
      </p>
      <Button dict={dict} key={"products.cart"} />
    </div>
  );
}
