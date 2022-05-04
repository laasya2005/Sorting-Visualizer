function Quick()
{
    c_delay=0;
    quick_sort(0,array_size-1);
    enable_buttons();
}


function Partition(start,end)
{
    var i=start+1; //setting partition index as starting initially

    // Mark the first element as a pivot
    // Here we can mark the last element also as a pivot
    var piv=div_sizes[start];

    for(var j=start+1;j<=end;j++)
    {
        if(div_sizes[j]<piv)
        {
            // mark the current element as yellow color which indicates that we are going to perform task 
            // on that element
            div_update(divs[j],div_sizes[j],"yellow");//Color update


            // then mark the current element and the partition index as a red 
            // means we are going to perfomr swapping on that two elements 
            div_update(divs[i],div_sizes[i],"red");//Color update
            div_update(divs[j],div_sizes[j],"red");//Color update

            var temp=div_sizes[i];
            div_sizes[i]=div_sizes[j];
            div_sizes[j]=temp;

            div_update(divs[i],div_sizes[i],"red");//Height update
            div_update(divs[j],div_sizes[j],"red");//Height update

            div_update(divs[i],div_sizes[i],"blue");//Height update
            div_update(divs[j],div_sizes[j],"blue");//Height update

            i += 1;
        }
    }
    div_update(divs[start],div_sizes[start],"red");//Color update
    div_update(divs[i-1],div_sizes[i-1],"red");//Color update
    
    //swapping pivot with element at partition index
    var temp=div_sizes[start];
    div_sizes[start]=div_sizes[i-1];
    div_sizes[i-1]=temp;

    div_update(divs[start],div_sizes[start],"red");//Height update
    div_update(divs[i-1],div_sizes[i-1],"red");//Height update

    for(var t=start;t<=i;t++)
    {
        div_update(divs[t],div_sizes[t],"green");//Color update
    }

    return i-1;//return the position of the pivot
}



// Utility function which first find the partition index, 
// and then recursively sort the array by using partition index
function quick_sort(start,end)
{
    if(start<end)
    {
        var pIndex=Partition(start,end);
        quick_sort(start,pIndex-1); // Recursive call to sort left side of pivot
        quick_sort(pIndex+1,end);   // Recursive call to sort right side of the pivot
    }
}