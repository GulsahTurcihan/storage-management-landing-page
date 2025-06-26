import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-full">
      <section className="flex flex-1 flex-col m-4">
        <Header />
        <div className="remove-scrollbar h-full bg-light-400 flex-1 px-5 py-7 rounded-[30px] md:px-9 md:mb-7 md:py-10 ">
          {children}
        </div>
        <Footer />
      </section>
    </main>
  );
};
export default Layout;
