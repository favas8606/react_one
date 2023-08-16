import {useState} from 'react';
 
const ListOutPut = () => {
    const [blogs,setBlogs] = useState([
        {title: 'My new website', body: 'lorem ...', author:'mario', id:1},
        {title: 'Welcome party', body: ' ipsum...', author:'yoshi', id:2},
        {title: 'Web development tips', body: 'lorem ipsum', author:'favas', id:3},
        {title: 'New featuers', body: 'lorem ipsum...', author:'lushi', id:4}
    ]);
    return ( 
        <div>
           <center><h1 style={{alignItems:'center'}}>Home Page</h1></center> 
           <center>   {blogs.map((blog) => (
                <div className='blog-preview' key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                    <p>{blog.body}</p>
                    
                </div>
            ))}</center> 
        </div>
     );
}
 
export default ListOutPut;