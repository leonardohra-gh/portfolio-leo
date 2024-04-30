import { useTranslation } from "@/app/i18n";
import Hero from "@/app/_components/HomePage/hero" ;
import { ContactForm } from "@/app/_components/HomePage/contactForm";
import { CarouselImageAndList, CarouselImageAndListItem } from "@/app/_components/General/carousel";

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
  const {t} = await useTranslation(Props.params.lng, 'skill-carousel')
  const items: CarouselImageAndListItem[] = t("items", { returnObjects: true })
  const carouselTitle = t("title")
  const carouselSubtitle = t("subtitle")

  return (
    <main>
      <Hero lng={Props.params.lng}/>
      <CarouselImageAndList carouselTitle={carouselTitle} carouselSubtitle={carouselSubtitle} items={items}/>
      <ContactForm lng={Props.params.lng}/>
    </main>
  )
}
