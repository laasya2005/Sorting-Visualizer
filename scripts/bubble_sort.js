function Bubble()
{
    c_delay=0;
    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            // Mark the color of current element
            div_update(divs[j],div_sizes[j],"yellow");

            if(div_sizes[j]>div_sizes[j+1])
            {
                // Marking the elements which we are going to swap
                div_update(divs[j],div_sizes[j],"red");
                div_update(divs[j+1],div_sizes[j+1],"red");


                // Swapping elements
                // var temp=div_sizes[j];
                // div_sizes[j]=div_sizes[j+1];
                // div_sizes[j+1]=temp;

                div_sizes[j]=div_sizes[j]^div_sizes[j+1];
                div_sizes[j+1]=div_sizes[j]^div_sizes[j+1];
                div_sizes[j]=div_sizes[j]^div_sizes[j+1];


                // Flag , which indicates we have updated hight
                div_update(divs[j],div_sizes[j],"red");
                div_update(divs[j+1],div_sizes[j+1],"red");
            }

            div_update(divs[j],div_sizes[j], "blue");         // Update color
        }
        div_update(divs[j],div_sizes[j], "green"); // indicates element comes in it's proper position
    }
    div_update(divs[0],div_sizes[0], "green"); 
    enable_buttons();


    
}