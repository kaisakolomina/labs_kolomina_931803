function show_back()
{
	document.getElementsByClassName("back")[0].style.display = 'block';
	document.getElementById('news_1').style.opacity = '0.3';
	document.getElementById('news_2').style.opacity = '0.3';
	document.getElementById('news_3').style.opacity = '0.3';
}

function show_1()
{
	show_back();
	document.getElementById('article_1').style.display = 'block';
}

function show_2()
{
	show_back();
	document.getElementById('article_2').style.display = 'block';
}

function show_3()
{
	show_back();
	document.getElementById('article_3').style.display = 'block';
}

function close_all()
{
	document.getElementsByClassName("back")[0].style.display ="none";
    document.getElementById('article_1').style.display = 'none';
	document.getElementById('article_2').style.display = 'none';
	document.getElementById('article_3').style.display = 'none';
	document.getElementById('news_1').style.opacity = '1';
	document.getElementById('news_2').style.opacity = '1';
	document.getElementById('news_3').style.opacity = '1';
}
