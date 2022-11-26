export const setuposts = (data) =>{
    const postslist = document.querySelector('.posts')
    if(data.length){
        let html = ''
        //un loop de posts 
        data.forEach(doc => {
            const post = doc.data()
            // console.log(post)
            const li = `
            <li class="list-group-item list-group-item-action">
                <h5>${post.title}</h5>
                <p>${post.content}</p>
            </li>`
            html += li;
        })
        postslist.innerHTML = html;
    }else{
        postslist.innerHTML= '<h1>Login to see posts</h1>';
    }
}