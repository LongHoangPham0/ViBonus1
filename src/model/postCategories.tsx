export interface PostCategoriesModel {
    "guid": string,
    "name": string,
    "posts": null,
    "isDeleted": false,
    "deleterUserId": null,
    "deletionTime": null,
    "lastModificationTime": string,
    "lastModifierUserId": number,
    "creationTime": string,
    "creatorUserId": null,
    "id": number
}

export interface PostCategoriesArrayModel {
    pageIndex: number;
    pageSize: number;
    totalPages: number;
    totalCount: number;
    allPostCategories: PostCategoriesModel[],
    particularPostCategories: PostCategoriesModel
}