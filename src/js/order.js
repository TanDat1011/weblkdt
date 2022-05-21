function isPhoneNumber(obj) {
  const vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
  if (vnf_regex.test(obj)) {
    return true;
  }
  return false;
}

function order() {
  const name = document.getElementById("nameCustomer").value;
  const address = document.getElementById("addressCustomer").value;
  const phone = document.getElementById("phoneCustomer").value;
  const email = document.getElementById("emailCustomer").value;
  const note = document.getElementById("note").value;

  if (name === "" || address === "" || phone === "" || email === "") {
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
  } else if (!isPhoneNumber(phone)) {
    alert("Vui lòng nhập đúng định dạng số điện thoại !!!");
    return false;
  } else {
    document.getElementById("nameCustomer").value = "";
    document.getElementById("addressCustomer").value = "";
    document.getElementById("phoneCustomer").value = "";
    document.getElementById("emailCustomer").value = "";
    document.getElementById("note").value = "";
    alert(
      "Đặt hàng thành công !!! SaiGon Computer xin cám ơn quý khách. Sẽ có nhân viên gọi điện thoại xác nhận đơn hàng trong giây lát."
    );
    window.location = "index.html";
    return false;
  }
}
