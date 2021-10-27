$(document).ready(function(){
    $.get("../xml/data.xml", function(xml){
        $(xml).find('articulo').each(function(){
            //Prefix 'ar' in the variables stand for 'articulo' from xml.
            var ar_img = $(this).find('imagen').attr('url');

            var ar_name = $(this).find('nombre').text();
            var ar_type = $(this).find('tipo').text();
            var ar_price = $(this).find('precio').text();
            var ar_desc = $(this).find('descipcion').text();
            var ar_brand = $(this).find('marca').text();
            var ar_sizes= []
            $(this).find('tamano').each(function(){
                ar_sizes.push($(this).text())
            });

            var ar_size = "";
            for (let index = 0; index < ar_sizes.length; index++) {
                ar_size += ar_sizes[index]+" ";
                
            }

            var ar_color = $(this).find('color').text();
            var ar_genre = $(this).find('sexo').text();

            var send_html = "<div class='col-4'>";
            send_html += '<div class="img-banner "><img  width="300" height="400" src="'+ar_img+'" alt="'+ar_name+'></div><li>';
            send_html += '<div class="content-info text-info"><div class="info"><h2 class="info-title text-danger">'+ar_name+'</h2>';
            send_html += '<p class="info-type text-info">'+ar_type+'</p><p class="info-price text-info">$'+ar_price+'</p>';
            send_html += '<p class="info-desc text-info">'+ar_desc+'</p><p class="info-brand text-info">'+ar_brand+'</p>';
            send_html += '<p class="info-sizes text-info text-info">'+ar_size+'</p><p class="info-color text-info">'+ar_color+'</p><p class="info-genre text-info">'+ar_genre+'</p>';
            send_html += '</div></div></li></div>'
            $('.1').append(send_html);
            
            console.log(ar_img);
            console.log(ar_name);
            console.log(ar_type);
            console.log(ar_price);
            console.log(ar_desc);
            console.log(ar_brand);
            console.log(ar_sizes);
            console.log(ar_color);
            console.log(ar_genre);
            
        });
    });
});
