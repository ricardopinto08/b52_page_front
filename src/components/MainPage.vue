<template lang="html">
  <div class="">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary nav_principal">
      <a class="navbar-brand nav_item" href="#">B52 Days</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">¿Qué es?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Clase de cortesía</a>
          </li>
        </ul>
      </div>
    </nav>

    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="https://i.ytimg.com/vi/eDKEC3GRJRo/maxresdefault.jpg" alt="">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/08/16/getting-back-into-exercise.jpg?w968" alt="">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://www.t-nation.com/system/publishing/articles/10005823/original/The-Combo-Exercise-Thats-Just-Plain-Silly.png?1516126325" alt="">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <div>
			<iframe width="900" height="700" src="https://s3-us-west-2.amazonaws.com/videosdoritos/Drake+-+In+My+Feelings.mp4" frameborder="0" allowfullscreen></iframe>
		</div>


  </div>
</template>

<script>
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

export default {
  methods:{

  }
}
</script>

<style lang="css">
.nav_principal{
  height: 100px;
  font-size: 35px;
}
</style>
