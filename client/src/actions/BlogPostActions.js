export function updateBlogPost(id, data) {
    return fetch('/blogPost' + id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}

export function updateBlogPost(id, data) {
    return fetch('/blogPost' + id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}

export function deleteBlogPost(id) {
    return fetch('/blogPost' + id, {
        method: 'DELETE',
    }).then(res => {
        return res;
    }).catch(err => err);
}

export default BlogPostActions;