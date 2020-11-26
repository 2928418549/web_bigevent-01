$(function () {
    getUserInof()
    var layer = layui.layer
    $('#btnLogout').on('click',function(){
        layer.confirm('确定退出?', {icon: 3, title:'提示'}, function(index){
            localStorage.removeItem('token')
            location.href = "/login.html"
            layer.close(index);
          });
    })
})
//  写里面是局部变量  

//  写外面是全局变量
//因为后面的页面需要调用这个函数，因此需要写外面
function getUserInof() {
    $.ajax({
        url:'/my/userinfo',
        // headers: {
        //     Authorization: localStorage.getItem('token') || ""
        // },
        success: function (res) {
            if(res.status !== 0){
                return layui.layer.msg(res.message)
            }
            renderAvatar(res.data)
        }
    })
}

function renderAvatar(user){
    var name = user.nickname || user.username
    $('#welcome').html('欢迎&nbsp;&nbsp;' + name)
    if(user.user_pic !==null){
        $('.layui-nav-img').attr('src',user.user_pic).show()
        $('.text-avatar').hide()
    }else{
        $('.layui-nav-img').hide()
        var text = name[0].toUpperCase()
        $('.text-avatar').html(text)
    }
}
  
