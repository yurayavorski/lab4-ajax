<html>
<head>
	<meta charset="utf-8">
	<title> Lab2 </title>
	<link rel="stylesheet" type="text/css" href="style.css" />
	<script type="text/javascript" src="ES5/jquery-1.10.2.min.js"></script>
	<script type="text/javascript" src="js.js"></script>
</head>
<body>

<ul class="cross-menu">
	<li><a href="http://www.lab1.loc/">lab1</a></li>
	<li><a href="http://www.lab2.loc/">lab2</a></li>
	<li><a href="http://www.lab3.loc/">lab3</a></li>
	<li><a href="http://www.lab4.loc/">lab4</a></li>
	<li><a href="http://www.lab5.loc/">lab5</a></li>
</ul>
<style>
	body {
		position: relative !important;
	}
	.cross-menu {
		background: rgba(255, 255, 255, 0.5);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		list-style: none;
		padding: 0;
		margin: 0;
	}
	.cross-menu li {
		display: inline-block;
		padding: 20px 30px;
		border: 1px solid #fff;
		margin: 0;
	}
	.cross-menu li a {
		color: #333;
		text-decoration: none;
		border-bottom: solid 1px #666;
	}
</style>
<form enctype="multipart/form-data" id="form" method="POST">
	<div class="inner">
		<input type="text" name="first" id="first"/>
		<span>+</span>
		<input type="text" name="second" id="second"/>
		<select name="method" id="method"><option>POST</option><option>GET</option></select>
		<div id="screen"></div>
	</div>
</form>






</body>

</html>