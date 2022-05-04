var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");

var inp_aspeed=document.getElementById("a_speed");
//var array_speed=document.getElementById('a_speed').value;

var butts_algos=document.querySelectorAll(".algos button");

var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
cont.style="flex-direction:row";

//Array generation and updation.

inp_gen.addEventListener("click",generate_array);
inp_gen.addEventListener("click",refreshPage);
inp_as.addEventListener("input",update_array_size);

function refreshPage(){
    window.location.reload();
}

function generate_array()
{
    
    cont.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size();

//Running the appropriate algorithm.
for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}

function Bubble_Info()
{
    document.getElementById("Algo_Info").innerHTML="Time Complexity :O ( N^2 )"+ "</br>"+ "Auxiliary Space: O ( 1 )";
}

function Selection_Info()
{
    document.getElementById("Algo_Info").innerHTML="Time Complexity :O ( N^2 )"+ "</br>"+ "Auxiliary Space: O ( 1 )";
}

function Insertion_Info()
{
    document.getElementById("Algo_Info").innerHTML="Time Complexity :O ( N^2 )"+ "</br>"+ "Auxiliary Space: O ( 1 )";
}

function Merge_Info()
{
    document.getElementById("Algo_Info").innerHTML="Time Complexity :O ( N Log(N) )"+ "</br>"+ "Auxiliary Space: O ( 1 )";
}

function Quick_Info()
{
    document.getElementById("Algo_Info").innerHTML="Time Complexity :O ( N^2 )"+ "</br>"+ "Auxiliary Space: O ( 1 )";
}

function Heap_Info()
{
    document.getElementById("Algo_Info").innerHTML="Time Complexity :O ( N LOG(N) )"+ "</br>"+ "Auxiliary Space: O ( 1 )";
}
function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":Bubble(); Bubble_Info();
                        break;
        case "Selection":Selection_sort(); Selection_Info();
                        break;
        case "Insertion":Insertion(); Insertion_Info();
                        break;
        case "Merge":Merge(); Merge_Info();
                        break;
        case "Quick":Quick(); Quick_Info();
                        break;
        case "Heap":Heap(); Heap_Info();
                        break;
    }
}
