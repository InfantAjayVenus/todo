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

export enum ViewStyle {
    list= "list",
    board= "board"
}