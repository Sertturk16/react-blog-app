export const sendBlog = (payload) => {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(payload)
        })
        .then(() => {
            resolve()
        })
        .catch(err => {
            console.log(err)
            reject(err)
        })
    })
}

export const deleteBlog = (id) => {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            resolve()
        })
        .catch(err => {
            console.log(err)
            reject(err)
        })
    })
}