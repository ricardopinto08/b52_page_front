<template lang="html">
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark nav_principal">
      <a class="navbar-brand nav_item" href="#"><img style="width: 150px;" src="../assets/images/logo.png" alt="B52 Days"></a>
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
    <div style="background-color:#4e6018;">
      <p style="margin-bottom:0; color:white; cursor: pointer;">Click aquí para solicitar tu clase de muestra</p>
    </div>

    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img style="height:500px" class="d-block w-100" src="https://i.ytimg.com/vi/eDKEC3GRJRo/maxresdefault.jpg" alt="">
        </div>
        <div class="carousel-item">
          <img style="height:500px" class="d-block w-100" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/08/16/getting-back-into-exercise.jpg?w968" alt="">
        </div>
        <div class="carousel-item">
          <img style="height:500px" class="d-block w-100" src="https://www.t-nation.com/system/publishing/articles/10005823/original/The-Combo-Exercise-Thats-Just-Plain-Silly.png?1516126325" alt="">
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

    <img class="d-block w-100" src="" alt="">

    <div>
			<iframe width="900" height="700" src="https://s3-us-west-2.amazonaws.com/videosdoritos/Drake+-+In+My+Feelings.mp4" frameborder="0" allowfullscreen></iframe>
		</div>

    <img style="height:500px;"  src="../assets/images/WEB6.png" alt="">
    <img style="width:800px"  src="../assets/images/WEB9.png" data-toggle="modal" data-target="#exampleModal">

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>



  </div>
</template>

<script>
$('a').click(function() {
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500);
  return false;
});

export default {
  methods: {

  }
}
</script>

<style lang="css">
.nav_principal{
  height: 100px;
  font-size: 35px;
}
</style>
