import { getDictionary } from "./dictionaries";
import Product from "@/components/product";

type Props = {
  params: { lang: string };
};

export default async function Home({ params }: Props) {
  const { lang } = params;

  const dict = await getDictionary(lang);

  return (
    <div>
      <h1 className="text-white mt-5 text-xl font-medium tracking-tight mb-5">
        {dict.products.catalog}
      </h1>
      <div className="flex h-fit gap-6">
        <Product dict={dict} id={"productOne"} />
        <Product dict={dict} id={"productTwo"} />
      </div>
    </div>
  );
}
