class Book
{
    constructor (title, author)
    {
        this.title=title;
        this.author=author;
    }
    displayInfo()
    {
        console.log(`Book: This is the ${this.title} by ${this.author}`);
    }

}

class Ebook extends Book
{
    constructor(title,author, fileSize)
    {
        super(title,author);
        this.fileSize = fileSize;
    }
    displayInfo()
    {
        super.displayInfo();
        console.log(`This is the File-Size: ${this.fileSize}`);
    }
}

let bookObject = new Book("Little Changes","Sadeem Sattar");
let EbookObject = new Ebook ("Small Change","Ali Akram","2000Kb")
bookObject.displayInfo();
EbookObject.displayInfo();

function User(name, age) {
    if (!name || age < 0) {
      throw new Error("Invalid user data");
    }
    this.name = name;
    this.age = age;
  }
  
  // Using new keyword
  try {
    let user = new User("Alice", 25);
  
    // Simulate registration confirmation delay
    setTimeout(() => {
      console.log(`User ${user.name} registered successfully!`);
    }, 2000);
  
  } catch (error) {
    console.log("Registration failed:", error.message);
  }
  