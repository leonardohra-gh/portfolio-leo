import { CMSResultCategory, LocalizedValue } from "@/app/types";

export function getLocalizedText(localizedArray: LocalizedValue[], lng: string)
{
    const cmsLangs: {[cmsLang: string]: string} = 
    {
        "en": "en",
        "pt": "pt_BR",
        "es": "es"
    }
    
    let localizedText = ""

    for(let item of localizedArray)
    {
        if(item.locale === cmsLangs[lng])
            localizedText = item.value
    }

    return localizedText
}

export async function cmsService(query: string)
{
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
        })
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
    const contentQuery =`
    query {
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