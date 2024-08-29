export type Project = {
    id: string,
    creator_id: string,
    name: string,
    order: number,
    color: string,
    is_favourite: boolean,
    is_inbox_project: boolean,
    view_style: ViewStyle,
    parent_id: string | null,
};

export type ProjectRequest =  Pick<Project, 'name' | 'creator_id' | 'order'> & Partial<Pick<Project, 'color' | 'parent_id'>>;
export type ProjectUpdateRequest = Partial<Pick<Project, 'name' | 'order' | 'color' | 'is_favourite' | 'view_style' | 'parent_id'>>;

export enum ViewStyle {
    list= "list",
    board= "board"
}