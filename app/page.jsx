import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="flex-center w-full flex-col">
      <h1 className="head_text text-center">
        Descover & Share
        <br className="min-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
        dolores sunt, fuga sit quod deserunt bye.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
