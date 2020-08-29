import axios from "axios";
const addCommentForm = document.getElementById("jsAddComment");

const sendComment = async (comment) => {
  // 이 function은 아래에있는 것들을 api로 보내주는 기능
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      comment,
    },
  });
  console.log(response);
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
