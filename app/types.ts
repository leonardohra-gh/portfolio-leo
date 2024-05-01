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

export interface CMSResultProject
{
    contentProject: DetailedProject
}

export interface DetailedProject
{
    projectId: string,
    _allProjectTitleLocales: LocalizedValue[],
    projectDateAdded: string,
    projectAlbum: ImageFile[],
    _allProjectBodyLocales: LocalizedValue[]
}

export interface ImageFile
{
    url: string,
    height: number,
    width: number
}
