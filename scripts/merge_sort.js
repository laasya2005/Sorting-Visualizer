function Merge()
{
    c_delay=0;

    // Partition the array
    merge_partition(0,array_size-1);

    // Enable the buttions
    enable_buttons();
}


function merge_sort(start,mid,end)
{
    var p=start,q=mid+1;
    var Arr=[],k=0;

    for(var i=start;i<=end;i++)
    {
        // We have sorted left array part
        if(p>mid)
        {
            // Now append the values from right sorted array to final array
            Arr[k++]=div_sizes[q++];

            // mark it as red means we are updating the value in final array
            div_update(divs[q-1],div_sizes[q-1],"red");
        }
        // If we have already sorted the right part
        else if(q>end)
        {
            // Now append the values from the left sorted array to the final array
            Arr[k++]=div_sizes[p++];

            div_update(divs[p-1],div_sizes[p-1],"red");
        }
        else if(div_sizes[p]<div_sizes[q])
        {
            // if left index element is less than right
            Arr[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1],"red");
        }
        else
        {
            Arr[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1],"red");//Color update
        }
    }

    // Finally mark the array as sorted with green color
    for(var t=0;t<k;t++)
    {
        div_sizes[start++]=Arr[t];
        div_update(divs[start-1],div_sizes[start-1],"green");//Color update
    }
}

function merge_partition(start,end)
{
    if(start<end)
    {
        var mid=Math.floor((start+end)/2);

        // Mark the current element 
        div_update(divs[mid],div_sizes[mid],"yellow");


        merge_partition(start,mid);
        merge_partition(mid+1,end);

        // Sorting the array
        // left ---> mid---->right
        merge_sort(start,mid,end);
    }
}