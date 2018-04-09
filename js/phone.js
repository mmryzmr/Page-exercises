$(function () {
    $('.win_btn_list li').click(function () {
        $(this).removeClass().addClass('win_btn_click');
        $(this).siblings().removeClass().addClass('win_btn_nor');
        let win=$(this).html();
        $('.win_list_title').html(win+'名单');
    })
});
