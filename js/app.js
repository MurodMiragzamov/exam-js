// ul's
let elUserList = document.querySelector('.user_list'),
    elPostList = document.querySelector('.post_list'),
    elCommentsList = document.querySelector('.comments_list');


// template's
const elTemplateUser = document.querySelector('.user_template').content,
      elTemplatePost = document.querySelector('.post_template').content,
      elTemplateComments = document.querySelector('.comments_template').content;

// post number var


//fetch data
fetch('https://jsonplaceholder.typicode.com/users').then((response)=>response.json()).then((data)=>renderUsers(data,elUserList));




//render function's
function renderUsers(el,element){

    for (let i = 0 ; i <el.length;i++){
    
           const tempUser = elTemplateUser.cloneNode(true);

    //user item content
            let elUserItem = tempUser.querySelector('.user_item'),

                elUserUserid = tempUser.querySelector('.user_id'),
                elUserName = tempUser.querySelector('.user_name'),
                elUserUserName = tempUser.querySelector('.user_username'),
                elUserEmail = tempUser.querySelector('.user_email'),
                elUserAddress = tempUser.querySelector('.user_address'),
                elUserGeo = tempUser.querySelector('.user_geo'),
                elUserNumber = tempUser.querySelector('.user_number'),
                elUserWeb = tempUser.querySelector('.user_web'),
                elUserCompany = tempUser.querySelector('.user_company'),
                elUserBtn = tempUser.querySelector('.btn_user');

               
    // creat text content
                elUserUserid.textContent = el[i].id;
                elUserName.textContent = el[i].name;
                elUserUserName.textContent = el[i].username;
                elUserEmail.textContent = el[i].email;
                elUserAddress.textContent = el[i].address;
                elUserGeo.textContent = el[i].geo;
                elUserNumber.textContent = el[i].phone;
                elUserWeb.textContent = el[i].website;
                elUserCompany.textContent = el[i].company;

                elUserBtn.dataset.us_id = el[i].id;

    //append
            element.appendChild( elUserItem);
     
    //Event
     
            elUserBtn.addEventListener('click', evt=>{
               
                let postNumber =  evt.target.dataset.us_id
                
        //fetc post
                fetch('https://jsonplaceholder.typicode.com/posts/'+postNumber).then((response)=>response.json()).then((dataPost)=>renderPost(dataPost,elPostList));

                function renderPost(el,element){
                   element.innerHTML = null;
                   elCommentsList.innerHTML=null
                    const tempPost = elTemplatePost.cloneNode(true);

                    
                    //post content
                    let elPostItem = tempPost.querySelector('.post_item'),

                        elPostUserid = tempPost.querySelector('.post_userid'),
                        elPostId = tempPost.querySelector('.post_id'),
                        elPostTitle = tempPost.querySelector('.post_title'),
                        elPostbody = tempPost.querySelector('.post_body'),
                        elPostBtn = tempPost.querySelector('.btn_post');


                        elPostUserid.textContent = el.userId;
                        elPostId.textContent = el.id;
                        elPostTitle.textContent = el.title;
                        elPostbody.textContent = el.body;

                        element.appendChild(elPostItem);



                            elPostBtn.addEventListener('click', evt=>{
                                elCommentsList.innerHTML=null
                            let commentsNumber =  postNumber

                            fetch('https://jsonplaceholder.typicode.com/posts/'+commentsNumber+'/comments').then((response)=>response.json()).then((dataComments)=>dataComments.forEach(ele=>{
                             
                                const tempComments = elTemplateComments.cloneNode(true);

                       let  elCommentsItem = tempComments.querySelector('.comments_item'),

                            elCommentsPostid = tempComments.querySelector('.comments_postid'),
                            elCommentsId = tempComments.querySelector('.comments_id'),
                            elCommentsName = tempComments.querySelector('.comments_name'),
                            elCommentsEmail = tempComments.querySelector('.comments_email'),
                            elCommentsBody = tempComments.querySelector('.comments_body');


                            elCommentsPostid.textContent = ele.postId;
                            elCommentsId.textContent = ele.id;
                            elCommentsName.textContent = ele.name;
                            elCommentsEmail.textContent = ele.email;
                            elCommentsBody.textContent = ele.body;

                            elCommentsList.appendChild(elCommentsItem)
                            }));

                        })    
                }

               

            //     let elPostBtn = elTemplatePost.querySelector('.btn_post');

            //   console.log(elPostBtn)

            //     elPostBtn.addEventListener('click',function(){

            
            //        elCommentsList.innerHTML =null
            //        console.log('fewfwe')
                   
            //         fetch('https://jsonplaceholder.typicode.com/posts/'+postNumber+'/comments').then((response)=>response.json()).then((dataComments)=>dataComments);

            //         const tempComments = elTemplateComments.cloneNode(true);

            //         let  elCommentsItem = tempComments.querySelector('.comments_item'),
            //         elCommentsPostid = tempComments.querySelector('.comments_postid'),
            //         elCommentsId = tempComments.querySelector('.comments_id'),
            //         elCommentsName = tempComments.querySelector('.comments_name'),
            //         elCommentsEmail = tempComments.querySelector('.comments_email'),
            //         elCommentsBody = tempComments.querySelector('.comments_body');

            //         elCommentsPostid.textContent = dataComments.postId;
            //         elCommentsId.textContent = dataComments.id;
            //         elCommentsName.textContent = dataComments.name;
            //         elCommentsEmail.textContent = dataComments.email;
            //         elCommentsBody.textContent = dataComments.body;

            //         elCommentsList.appendChild(elCommentsItem)
                
            //     })
              
                
            })

          
            
            

    }
}

//
///
//
////
//////
///////