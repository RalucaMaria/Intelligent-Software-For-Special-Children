//alert("hello");
var id;
var ok=0;
function allowDrop(ev)
{
	ev.preventDefault();
}

function dragStart(ev)
{
	id = ev.target.id;
	//alert(id);
}

/*
function drop (ev)
{
	ev.target.append(document.getElementById(id));
}

*/
function drop_1(ev)
{
	console.log(document.getElementById(id).id);
	
	if (document.getElementById(id).id == "dragElement1" || document.getElementById(id).id == "dragElement2" || document.getElementById(id).id == "dragElement3" || document.getElementById(id).id == "dragElement4" )
	{
		ev.target.append(document.getElementById(id));
		ok++;
	
	}
	else
	{
		alert("Mai încearcă! De la Albastru");
	}
	
	Win();
	
}

function drop_2(ev)
{
	
	if (document.getElementById(id).id == "dragElement5" || document.getElementById(id).id == "dragElement6" || document.getElementById(id).id == "dragElement7"|| document.getElementById(id).id == "dragElement8" )
	{
		ev.target.append(document.getElementById(id));
		ok++;
	
	}
	else
	{
		alert("Mai încearcă! de la Rosu");
	}
	Win();
}

function Win()
{
	if (ok == 8)
	{
		alert("FELICITARI!!!!!");
	}

}
Win();