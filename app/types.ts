export interface ApiDataTabs
{
    tabs: TabsTranslations;
}

export type TabsTranslations = Record<string, Tab[]>;

export interface Tab
{
    title: string
    description: string
    projects: TabProject[]
}

export interface TabProject
{
    id: string;
    postDate: string;
    imgUrl?: string;
    title: string;
    summary: string;
}

export interface ProjectPage
{
    id: string;
    images: string[];
    translations: ProjectTranslations;
}

export type ProjectTranslations = Record<string, ProjectInfo>;

export interface ProjectInfo
{
    title: string;
    paragraphs: string[];
}

