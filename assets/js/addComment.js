import axios from "axios";

const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");

const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1; // 기존 commentNumber.innerHTML을 가져와 +1을해준 후 다시 commentNumber.innerHTML에 넣어줌
};

const addComment = (comment) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerHTML = comment;
  li.appendChild(span);
  commentList.prepend(li);
  increaseNumber();
};

const sendComment = async (comment) => {
  // 이 function은 아래에있는 것들을 api로 보내주는 기능
  const videoId = window.location.href.split("/videos/")[1];
  console.log(videoId);
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      comment,
    },
  });
  if (response.status === 200) {
    addComment(comment);
  } // 댓글이 db에 추가되면 addComment 해주겠다는 의미
};

const handleSubmit = (event) => {
  event.preventDefault(); // 새로고침 되길 원하지 않아서
  const commentInput = addCommentForm.querySelector("input"); // submit하고 나서 해줄 것들
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

function init() {
  addCommentForm.addEventListener("submit", handleSubmit); // 폼을 submit하면 handleSubmit을 호출
}

if (addCommentForm) {
  init();
}
