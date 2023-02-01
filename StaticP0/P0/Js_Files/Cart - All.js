// $(".cart-btn").click(function(){
//     alert($(".product-price").html());
// });


// var cart=[];
// var Item=function (name,price,count){
//     this.name=name;
//     this.price=price;
//     this.count=count;
// }
 
//   var a=new Item("apple",1,1)
//   var b=new Item("Banana",2,3)
  
//   cart.push(a);
//   cart.push(b);
//   console.log(a)
//   console.log(b)
//   console.log(cart)

$(".cart-btn").click(function(event){
    var size=$(this).attr("data-size");
    var price= Number($(this).attr("data-price"));
    var img=$(this).attr("data-source");
    console.log(size);
    console.log(price);
    console.log(img);
    
});
  