export interface postCard {
  approveDateTime: string;
  approvedBy: any;
  author: { id: number; userName: string; avatar: string };
  category: { id: number; name: string };
  content: string;
  guid: string;
  hashTags: any[];
  id: number;
  slug: string;
  status: number;
  thumbnail: string;
  title: string;
  totalComments: number;
  totalLikes: number;
  totalViews: number;
  type: number;
}

export interface commentCard {
  date: string;
  comment: string;
  userName: string;
  avatr: string;
}
