export interface CMSResultCategory
{
    allCategoryProjects: CategoryProject[]
}

export interface CategoryProject
{
    _allCategoryNameLocales: LocalizedValue[],
    categoryType: string,
    _allCategoryDescriptionLocales: LocalizedValue[],
    projectContent: SummarizedProject[]
} 

export interface LocalizedValue
{
    locale: string,
    value: string
}

export interface SummarizedProject
{
    projectId: string,
    _allProjectTitleLocales: LocalizedValue[],
    projectThumbnail: 
    {
      url: string
    },
    projectDateAdded: string,
    _allProjectDescriptionLocales: LocalizedValue[]
}

