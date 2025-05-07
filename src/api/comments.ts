import { Comment } from '../types/Comment';
import { client } from '../utils/fetchClient';

export const getComments = (postId: number | null) => {
  return client.get<Comment[]>(`/comments?postId=${postId}`);
};

export function addComments(data: Omit<Comment, 'id'>): Promise<Comment> {
  return client.post<Comment>('/comments', data);
}

export function deleteComments(commentId: number) {
  return client.delete(`/comments/${commentId}`);
}
