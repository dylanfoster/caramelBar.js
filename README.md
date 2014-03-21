#caramelBar.js

caramelBar.js is a lightweight sticky navbar jQuery plugin

##1. Setup

Include the latest jQuery Library as well as caramelBar.js just before your closing body tag

```html
<script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
<script src="/js/caramelBar.js"></script>
```
##2. HTML Markup

```html
<section id="header_wrapper">
	<ul class="menu_wrapper">
		<li class="menu_link"><a href=""></li>
		<li class="menu_link"><a href=""></li>
		<li class="menu_link"><a href=""></li>
		<li class="menu_link"><a href=""></li>
	</ul>
</section>
```
##3. CSS
Style your menu as you like.
```css
section#header_wrapper {
height: 90px;
width: 100%;
background: rgba(255,255,255,0.2);
}

ul.menu_wrapper {
position: absolute;
width: 100%;
margin: 0;
padding: 0;
margin-top: 25px;
}

.menu_links {
position: relative;
font-family: 'Poller One';
font-size: 24px;
text-align: center;
display: inline-block;
width: calc(100%/4);
float: left;
}
```

##4. Usage
Call caramelBar on your header (`#header_wrapper`).

```javascript
$('#header_wrapper').caramelBar();
```
or with options:
```javascript
$('#header_wrapper').caramelBar({
	"top":0,                           //set the top margin of the navigation bar
	"left":0,						   //set the left margin of the navigation bar
	"right":0,                         //set the right margin of the navigation bar
	"width":"200px", 				   //set the width of the navigation bar (must set height and width together)
	"height":"400px",				   //set the height of the navigation bar(must set height and width together)
	"spacing": 0					   //used with height/width, sets the spacing between li elements
});
```

##5. Demo
http://www.dylan-foster.com/caramelBar

##Credits 
[jQuery](http://api.jquery.com/)<br>

##Contact
Copyright (C) 2014 Dylan foster<br>
[Fostered Development](http://www.dylan-foster.com)<br>
[Github](https://github.com/dylan947/)<br>
[@dylfos](http://twitter.com/dylfos)<br>
[+Fostered Development](https://plus.google.com/b/103850011544407258916/103850011544407258916/about)



