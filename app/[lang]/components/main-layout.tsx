import Header from "@/components/header";
import Footer from "@/components/footer";

type Props = {
  children: React.ReactNode;
  dict: any;
  lang: string;
};

export default function MainLayout({ children, dict, lang }: Props) {
  return (
    <div className="flex flex-col h-full bg-slate-800 items-center">
      <Header dict={dict} lang={lang} />
      <div className="main flex-grow flex justify-center">{children}</div>
      <Footer dict={dict} />
    </div>
  );
}
