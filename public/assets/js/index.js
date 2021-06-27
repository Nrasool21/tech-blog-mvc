const handleSignupSubmit = () => {
  //post request with username and password
  // auth/sign-up
  //on success window.location to /login
};

const handleLoginSubmit = async (event) => {
  event.preventDefault();

  const username = $("#username").val();
  const password = $("#password").val();

  const requestBody = {
    username: username,
    password: password,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify(requestBody),
  };

  const response = await fetch("/auth/login", options);

  if (response.status === 200) {
    window.location.replace("/dashboard")
  } else {
    console.log("Failed to login");
  }
  //post request with username and password
  // auth/login
  //on success window.location to /dashboard
};

const handleLogoutClick = () => {
  //post request with username and password
  // auth/logout
  //on success window.location to /
};

const handleCommentSubmit = () => {
  //post request with username and password
  //api/posts/{postId}/comments
  //on success window location to/ posts/{postId}dashboard
};

const handlePostSubmit = () => {
  //post request with title and body
  //api/posts
  //on success window location to/dashboard
};

const handlePostDelete = () => {
  //delete request for post Id
  //api/posts/{postId}
  //on success window location to/dashboard
};

console.log("client-side JS");

$("#login-form").submit(handleLoginSubmit);
