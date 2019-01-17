question1();
question2();
question3();
question4();


/*Put the start of your program in a main function. Create a loop that takes user input and put it in an array.
Once the user quits, print all items in the array. DO NOT print the array, print the items/elements in the array.*/

function question1()
{
    var input= " "
    var array = []

    do
    {
        input = prompt("Please enter something in the array. Press 'q' to exit")
        array.push(input);
    }while(input != 'q');

    for (i=0; i<array.length-1;i++)
    {
    console.log(array[i]);
    }

}


/*Put the start of your program in a main function. Create a function that can translate five English words into Spanish
words. You should be able to call your function from your main function.
 */

function question2()
{
    function translate()

    {
        var input= prompt ("Please enter a word in English and it will translate to Spanish"); //askes for input

        switch(input)  // tests cases 1-5
        {
            case"tears":
                console.log("las lagrimas");
                break;
            case"teeth":
                console.log(" los dientes");
                break;
            case"bird":
                console.log("el ave");
                break;
            case"city":
                console.log("la cuidad");
                break;
            case"immaculant":
                console.log(" la inmaculada");
                break;
            default:
                console.log("Word could not be found.")

        }
    }
             translate();
}

/*Put the start of your program in a main function. Create a program that takes number inputs into an array until a
quit word. Afterwards, display all numbers (not the array) and the sum.*/

function question3()
 {
     var array = []
     var sum =0;

     do
     {
         input = (prompt("Please enter numbers. Press 'q' to exit"))
         array.push(input);
     }while(input != 'q')

     for (i=0; i<array.length-1;i++)
     {
         console.log(parseInt(array[i]))
         sum+=parseInt(array[i]);
     }
 }


/*Put the start of your program in a main function. Create a class for Books with name, rating, genre, and author.Create
a class method that will function that will change the rating of the book. Create three objects of the class Book and
put them in an array. Lastly, use the array to display only the names of the books.*/

function question4()
{
    class Book
    {
     constructor(name, rating, genre, author)
     {
         this.name = name;
         this.rating = rating;
         this.genre = genre;
         this.author = author;
     }

    changerating(newrating)
    {
        this.rating= newrating;
    }

    }

    let listbooks1= new Book ("Moby Dick", 5, "idk", "idk")
    let listbooks2 = new Book("Captain Underpants", 10, "Comedy", "idk")
    let listbooks3 = new Book("Random Book", 0, "Rom-Com", "Random Dude")

    let array =[listbooks1,listbooks2,listbooks3]
    for( i=0;i<array.length; i++)
    {
        console.log(array[i].name)
    }



}


