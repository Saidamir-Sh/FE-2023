const commentInput = document.querySelector('.comment-input')
const commentButton = document.querySelector('.comment-btn')
const commentSection = document.querySelector('.comments-section')

commentButton.addEventListener('click', createComment)

function createComment() {
    // create comment container
    let commentContainer = document.createElement('div')
    commentContainer.classList.add('comment')

    // create comment profile picture
    let profilePic = document.createElement('img')
    profilePic.setAttribute('src', "./user-pic.png")

    // append the img tag to comment container
    commentContainer.appendChild(profilePic)

    // create comment-profile div
    let commentProfile = document.createElement('div')
    commentProfile.classList.add('comment-profile')

    // create comment-username element (p tag)
    let commentUsername = document.createElement('p')
    commentUsername.classList.add('comment-username')
    commentUsername.innerText = 'username132'
    commentUsername.textContent = 'username132'
    // commentUsername.innerHTML = '<p>username</p>'

    // append comment username to comment profile
    commentProfile.appendChild(commentUsername)


    // create comment text p tag and add input value as value and append it to the parent
    let commentText = document.createElement('p')
    commentText.classList.add('comment-text')
    commentText.innerText = commentInput.value
    commentProfile.appendChild(commentText)

    commentContainer.appendChild(commentProfile)

    // append completed comment into section
    commentSection.appendChild(commentContainer)
    commentInput.value = ''
}
