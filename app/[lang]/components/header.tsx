import Link from "next/link";

export default function Header({ dict, lang }: { dict: any; lang: string }) {
  return (
    <div className="header flex justify-between items-center py-4 max-w-[792px] w-full">
      <div className="flex-1 text-white text-base font-bold">{dict.title}</div>
      <div className="flex items-end">
        <Link href="/en">
          <div className={`p-3 ${lang === "en" ? "text-base" : "text-sm"}`}>
            EN
          </div>
        </Link>
        <Link href="/nl">
          <div className={`p-3 ${lang === "nl" ? "text-base" : "text-sm"}`}>
            NL
          </div>
        </Link>
      </div>
    </div>
  );
}
