function login() {
  var email = document.getElementById("email_login").value;
  var password = document.getElementById("password_login").value;
  if (email === "" || password === "") {
    alert("Vui lòng nhập đầy đủ thông tin !!!");
    return false;
  } else if (
    email
      .trim()
      .match(
        /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
      ) == null
  ) {
    alert("Vui lòng nhập đúng định dạng email. Nên là ex@abc.xyz");
    return false;
  } else {
    if (email == "kimngan@gmail.com" && password == "123456") {
      alert("Đăng nhập thành công");
      window.location = "index.html";
      return false;
    } else {
      alert("Sai email hoặc mật khẩu. Vui lòng kiểm tra lại thông tin");
      return false;
    }
  }
}

function register() {
  var email = document.getElementById("email_register").value;
  var password = document.getElementById("password_register").value;
  var confirmPassword = document.getElementById("confirm_password").value;
  if (email === "" || password === "" || confirmPassword === "") {
    alert("Vui lòng nhập đầy đủ thông tin !!!");
    return false;
  } else if (
    email
      .trim()
      .match(
        /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
      ) == null
  ) {
    alert("Vui lòng nhập đúng định dạng email. Nên là ex@abc.xyz");
    return false;
  } else {
    alert("Đăng ký tài khoản thành công");
    document.getElementById("email_register").value = '';
    document.getElementById("password_register").value = '';
    document.getElementById("confirm_password").value = '';
    window.location = "index.html";
    return false;
  }
}

function signOut() {
  alert("Đăng xuất tài khoản thành công");
  window.location = "form-login.html";
  return false;
}