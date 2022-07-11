export interface PostModel {
    'guid': string,
    'title': string,
    'content': string,
    'slug': string,
    'thumbnail': string,
    'status': number,
    'totalViews': number,
    'type': number,
    'approvedBy': null,
    'approvedDateTime': string
}

export interface PostArrayModel {
    pageIndex: number;
    pageSize: number;
    totalPages: number;
    totalCount: number;
    allPosts: PostModel[],
    particularPosts: PostModel
}