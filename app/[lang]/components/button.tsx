export default function Button({ dict }: { dict: any }) {
  return (
    <button className="block mt-5 font-semibold text-slate-200 hover:text-white">
      {dict.products.cart}
    </button>
  );
}
