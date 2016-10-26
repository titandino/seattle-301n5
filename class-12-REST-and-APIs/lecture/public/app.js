$.ajax({
  url: 'https://api.github.com/user/repos?type=owner&sort=created',
  type: 'GET',
  headers: {
    Authorization: 'token c3ac82e0e94284bcdcb4b290e44d99229f189253'
  }
}).done(function(data) {
  console.log(data)
})
