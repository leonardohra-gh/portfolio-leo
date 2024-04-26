import SectionTitle from "@/app/_components/HomePage/sectionTitle";
import Checklist from "@/app/_components/HomePage/checklist";
import ViewOnGithub from "@/app/_components/General/viewOnGithub";
import { useTranslation } from "@/app/i18n";
import Hero from "@/app/_components/HomePage/hero" ;

export default async function Home
(
  Props:
  {
    params: 
    {
        lng: string
    }
  }
) 
{
  // For now I need to use &apos; , &lsquo; or &rsquo;
  // To avoid Error: `"` can be escaped with `&quot;`, `&ldquo;`, `&#34;`, `&rdquo;`.  react/no-unescaped-entities
  const {t} = await useTranslation(Props.params.lng, undefined)
  //console.log(t)
  const goals = 
  [
    [t("section-2-goal-1"), true],
    [t("section-2-goal-2"), true],
    [t("section-2-goal-3"), true],
    [t("section-2-goal-4"), false],
    [t("section-2-goal-5"), false],
    [t("section-2-goal-6"), false],
  ]
  const projectGHUrl: string = "https://github.com/leonardohra-gh/portfolio-leo"

  /*return (
    <>
      <Hero />
      <SectionTitle
        pretitle="Nextly Benefits"
        title=" Why should you use this landing page">
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );*/

  return (
    <main>
      <Hero lng={Props.params.lng}/>
      
    </main>
  )
}
