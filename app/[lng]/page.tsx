import { useTranslation } from "@/app/i18n";
import Hero from "@/app/_components/HomePage/hero" ;
import { ContactForm } from "@/app/_components/HomePage/contactForm";
import { CarouselImageAndList, CarouselImageAndListItem } from "@/app/_components/General/carousel";
import { TestimonialsElement, Testimonial } from "@/app/_components/HomePage/testimonials";

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
  const t_carousel = await useTranslation(Props.params.lng, 'skill-carousel')
  const items: CarouselImageAndListItem[] = t_carousel.t("items", { returnObjects: true })
  const carouselTitle = t_carousel.t("title")
  const carouselSubtitle = t_carousel.t("subtitle")

  const t_testimonials = await useTranslation(Props.params.lng, 'home/testimonials')
  const testTitle = t_testimonials.t("title")
  const testSubtitle: string[] = t_testimonials.t("subtitles", { returnObjects: true })
  const testItems: Testimonial[] = t_testimonials.t("testimonials", { returnObjects: true })

  const t_hero = await useTranslation(Props.params.lng, 'home/hero')
  const heroTitle = t_hero.t("title")
  const heroSubtitles: string[] = t_hero.t("subtitles", { returnObjects: true })
  const heroButtons: string[] = t_hero.t("buttons", { returnObjects: true })
  
  const t_contactForm = await useTranslation(Props.params.lng, 'home/contactForm')
  const contactTitle = t_contactForm.t("heading")
  const contactSubtitles: string[] = t_contactForm.t("subheading", { returnObjects: true })
  const contactLabels: string[] = t_contactForm.t("labels", { returnObjects: true })
  const contactPlaceholders: string[] = t_contactForm.t("placeholders", { returnObjects: true })
  const contactSubmit = t_contactForm.t("buttonSubmit")

  return (
    <main>
      <Hero title={heroTitle} paragraphs={heroSubtitles} buttonsText={heroButtons} currentLng={Props.params.lng}/>
      <CarouselImageAndList carouselTitle={carouselTitle} carouselSubtitle={carouselSubtitle} items={items}/>
      <TestimonialsElement title={testTitle} subtitles={testSubtitle} peopleTestimonial={testItems} />
      <ContactForm title={contactTitle} paragraphs={contactSubtitles} labels={contactLabels} placeholders={contactPlaceholders} submitText={contactSubmit}/>
    </main>
  )
}
