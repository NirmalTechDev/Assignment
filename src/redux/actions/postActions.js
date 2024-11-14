export const SET_POSTS = 'SET_POSTS';
export const DELETE_POST = 'DELETE_POST';

export const setPosts = (posts) => ({
    type: SET_POSTS,
    payload: posts,
});

export const deletePost = (postId) => ({
    type: DELETE_POST,
    payload: postId,
});