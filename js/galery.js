var selectedElem = 'img01';
var page2 = false;

function changeCaption(elemId, text)
{
	document.getElementById(elemId).innerHTML = text;
}
function changeImage(newImage, captionText, elemId)
{
    var ground=document.getElementById('slide');
    ground.src = '../../images/galery/' + newImage;

	changeCaption('caption', captionText);
	
	selectedElem = elemId
	
	if (page2 == false)
	{
		SetOpacityAll();
	}
	else
	{
		SetOpacityAll();
	}
}
function SetOpacity(elemId, opa)
{
  if (selectedElem != elemId)
  {
	  var element = document.getElementById(elemId);

	  // IE.
	  element.style.filter = 'alpha(opacity=' + opa + ')';
	  // Old mozilla and firefox
	  element.style.MozOpacity = opa/100;
	  // Everything else.
	  element.style.opacity = opa/100;
	  
  }
}
function ChangePage()
{
	selectedElem = 'img01';
	page2 = false;
	SetOpacityAll();
}
function ChangePage2()
{
	selectedElem = 'img16';
	page2 = true;
	SetOpacityAll();
}
function SetOpacityAll()
{
	if (page2 == false)
	{
		SetOpacity('img01', 50);
		SetOpacity('img02', 50);
		SetOpacity('img03', 50);
		SetOpacity('img04', 50);
		SetOpacity('img05', 50);
		SetOpacity('img06', 50);
		SetOpacity('img07', 50);
		SetOpacity('img08', 50);
		SetOpacity('img09', 50);
		SetOpacity('img10', 50);
		SetOpacity('img11', 50);
		SetOpacity('img12', 50);
		SetOpacity('img13', 50);
		SetOpacity('img14', 50);
		SetOpacity('img15', 50);
	}
	else
	{
		SetOpacity('img16', 50);
		SetOpacity('img17', 50);
		SetOpacity('img18', 50);
		SetOpacity('img19', 50);
	}
}
