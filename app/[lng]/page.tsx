import SectionTitle from "@/app/components/sectionTitle";
import Checklist from "@/app/components/checklist";
import ViewOnGithub from "@/app/components/viewOnGithub";
import { useTranslation } from "@/app/i18n";

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

  return (
    <main>
      <SectionTitle
        title={t('section-1-title')}>
        <p>
          {t('section-1-content')}
        </p>
      </SectionTitle>
      <SectionTitle
        title={t('section-2-title')}>
        <p>
          {t('section-2-content-p1')}
        </p>
        <Checklist content={goals}/>
        <br/>
        <p>
          {t('section-2-content-p2')}
        </p>
        <ViewOnGithub text={t('section-2-github')} url={projectGHUrl}/>
      </SectionTitle>
      <SectionTitle
        title={t("section-3-title")}>
        <p>
          {t("section-3-content")}
          <br/><br/>
          {t("section-3-cred-1-title")}<br/>
          <a href="https://www.flaticon.com" target="blank">{t("section-3-cred-1-content")}</a><br/>
          {t("section-3-cred-2-title")}<br/>
          <a href="https://github.com/web3templates/nextly-template/" target="blank">{t("section-3-cred-2-content")}</a><br/>
        </p>
      </SectionTitle>
    </main>
  )
}
