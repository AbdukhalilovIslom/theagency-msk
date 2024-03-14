import Hero from "@/Components/home/hero/hero";
import classes from "./styles.module.css";
import Catalog from "@/Components/home/catalog/catalog";
import About from "@/Components/home/about/about";
import Advantages from "@/Components/home/advantages/advantages";
import Collaboration from "@/Components/home/collaboration/collaboration";
import Projects from "@/Components/common/projects/projects";
import Consultation from "@/Components/common/consultation/consultation";
import News from "@/Components/common/news/news";
import OtherCollaborators from "@/Components/home/otherCollaborators/otherCollaborators";
import Container from "@/layout/container/container";
import NewsViewBtn from "@/Components/home/newsViewBtn/NewsViewBtn";

interface HomeProps {
  params: {
    lng: string;
  };
}

export const metadata = {
  title: "main page",
  description: "Увеличиваем прибыль современными технологиями",
  keywords: [],
};

export default function Home({ params: { lng }, ...props }: HomeProps) {
  return (
    <main className={classes.home}>
      <Hero lng={lng} />
      <Catalog lng={lng} />
      <About lng={lng} />
      <Advantages lng={lng} />
      <Collaboration lng={lng} />
      <Projects lng={lng} />
      <Consultation lng={lng} />
      <section className={classes.news}>
        <Container>
          <News lng={lng} />
          <NewsViewBtn lng={lng} />
        </Container>
      </section>
      <OtherCollaborators lng={lng} />
    </main>
  );
}
