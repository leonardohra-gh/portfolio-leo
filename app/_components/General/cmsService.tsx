import { CMSResultCategory, CMSResultProject, LocalizedValue } from "@/app/types";

export function getLocalizedText(localizedArray: LocalizedValue[], lng: string)
{
  const cmsLangs: { [cmsLang: string]: string } =
  {
    "en": "en",
    "pt": "pt_BR"
  }

  let localizedText = ""

  for (let item of localizedArray)
  {
    if (item.locale === cmsLangs[lng])
      localizedText = item.value
  }

  return localizedText
}

export async function cmsService(query: string)
{
  // https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#revalidating-data
  // Check if should revalidate to get new content
  const options =
  {
    method: 'POST',
    headers:
    {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + process.env.DATO_CMS_API_TOKEN
    },
    body: JSON.stringify
      ({
        query
      }),
    next:
    {
      revalidate: 360
    }
  }
  const contentResponse = await fetch('https://graphql.datocms.com/', options)
    .then
    (
      async (response) => 
      {
        const content = await response.json()
        return content
      }
    )
  return contentResponse.data
}

export async function cmsQueryProjectSummaries()
{
  const contentQuery = `
    query 
    {
      allCategoryProjects
      {
        _allCategoryNameLocales
        {
            locale,
            value
        },
        categoryType,
        _allCategoryDescriptionLocales
        {
            locale,
            value
        },
        projectContent
        {
          projectId,
          _allProjectTitleLocales
          {
            locale,
            value
          },
          projectThumbnail
          {
            url
          },
          projectDateAdded,
          _allProjectDescriptionLocales
          {
              locale,
              value
          }
        }
      }
    }`
  const data: CMSResultCategory = await cmsService(contentQuery)
  return data
}

export async function cmsQueryProjectById(id: string)
{
  const contentQuery = `
    query 
    {
        contentProject(filter: {projectId: {eq: "${id}"}})
        {
          projectId,
          _allProjectTitleLocales
          {
            locale,
            value
          },
          projectDateAdded,
          projectAlbum
          {
            url,
            height,
            width
          },
          _allProjectBodyLocales
          {
            locale,
            value
          }
        }
      }`
  const data: CMSResultProject = await cmsService(contentQuery)
  return data
}