// ul's
let elUserList = document.querySelector('.user_list'),
    elPostList = document.querySelector('.post_list'),
    elCommentsList = document.querySelector('.comments_list');


// template's
const elTemplateUser = document.querySelector('.user_template').content,
      elTemplatePost = document.querySelector('.post_template').content,
      elTemplateComments = document.querySelector('.comments_template').content;


fetch('https://jsonplaceholder.typicode.com/users').then((response)=>response.json()).then((dataUser)=>dataUser.forEach(evt=>{
    if(dataUser){
       const tempUser = elTemplateUser.cloneNode(true);
       let  elUitem = tempUser.querySelector('.user_item'),
            elUid = tempUser.querySelector('.user_id'),
            elUname = tempUser.querySelector('.user_name'),
            elUuser = tempUser.querySelector('.user_username'),
            elUemail = tempUser.querySelector('.user_email'),
            elUadd = tempUser.querySelector('.user_address'),
            elUgeo = tempUser.querySelector('.user_geo'),
            elUnumb = tempUser.querySelector('.user_number'),
            elUweb = tempUser.querySelector('.user_web'),
            elUcomp = tempUser.querySelector('.user_company'),
            elUbtn = tempUser.querySelector('.btn_user');

            elUid.textContent= evt.userId;
            elUname.textContent= evt.name;
            elUuser.textContent= evt.username;
            elUemail.textContent= evt.email;
            elUadd.textContent= evt.address;
            elUgeo.textContent= evt.geo;
            elUnumb.textContent= evt.phone;
            elUweb.textContent= evt.website;
            elUcomp.textContent= evt.company;
            

            elUserList.appendChild(elUitem)

            elUbtn.addEventListener('click',function(){
                elPostList.innerHTML=null;
                elCommentsList.innerHTML=null;
                fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>response.json()).then((dataPost)=>dataPost.forEach(evte=>{
                if(evte.userId==evt.id){
                    const tempPost = elTemplatePost.cloneNode(true);

                    let  elPitem = tempPost.querySelector('.post_item'),
                    elPUid = tempPost.querySelector('.post_userid'),
                    elPid = tempPost.querySelector('.post_id'),
                    elPtitle = tempPost.querySelector('.post_title'),
                    elPbody = tempPost.querySelector('.post_body'),
                    elPbtn = tempPost.querySelector('.btn_post');

                    elPUid.textContent= evte.userId;
                    elPid.textContent= evte.id;
                    elPtitle.textContent= evte.title;
                    elPbody.textContent= evte.body;
                   
                    elPostList.appendChild(elPitem)


                    elPbtn.addEventListener('click',function(){//
                        elCommentsList.innerHTML=null;
                       if( commentsNumber = evte.id){
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
                        }))
                       }
                     

                        
                        //
                    })


                }
                }))
            })
    }
}))