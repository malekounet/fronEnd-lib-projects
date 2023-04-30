import { Component, React } from "react";
import './MachineQ.css'

let quotesArray = [
    {author: "Oscar Wilde", quote: "To live is the rarest thing in the world. Most people exist, that is all."},
    {author: "Emily Dickinson", quote: "That it will never come again is what makes life so sweet."},
    {author: "George Eliot", quote: "It is never too late to be what you might have been."},
    {author: "Ralph Waldo Emerson", quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."},
    {author: "Haruki Murakami", quote: "Pain is inevitable. Suffering is optional."},
    {author: "William Shakespeare", quote: "All the world's a stage, and all the men and women merely players."},
    {author: "Plato", quote: "Be kind, for everyone you meet is fighting a hard battle."},
    {author: "Emily Dickinson", quote: "Unable are the loved to die for love is immortality."},
    {author: "Sylvia Plath", quote: "Let me live, love, and say it well in good sentences."},
    {author: "C.S. Lewis", quote: "Don't let your happiness depend on something you may lose."},
    {author: "Ernest Hemingway", quote: "We are all broken, that's how the light gets in."},
    {author: "Voltaire", quote: "Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well."},
    {author: "Stephanie Bennett Henry", quote: "Life is tough my darling, but so are you."},
    {author: "Brene Brown", quote: "Self-awareness and self-love matter. Who we are is how we lead."},
    {author: "Stephen King", quote: "Amateurs sit and wait for inspiration, the rest of us just get up and go to work."},
    {author: "William Faulkner", quote: "Get it down. Take chances. It may be bad, but it's the only way you can do anything really good."},
    {author: "Ernest Hemingway", quote: "As a writer, you should not judge, you should understand."},
    {author: "Herman Melville", quote: "To produce a mighty book, you must choose a mighty theme."},
    {author: "John Steinbeck", quote: "Ideas are like rabbits. You get a couple and learn how to handle them, and pretty soon you have a dozen."},
    {author: "John Green", quote: "Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book."},
    {author: "Ernest Gaines", quote: "The Six Golden Rules of Writing: Read, read, read, and write, write, write."},
    {author: "Ursula K. Le Guin", quote: "As for ‘Write what you know,' I was regularly told this as a beginner. I think it's a very good rule and have always obeyed it. I write about imaginary countries, alien societies on other planets, dragons, wizards, the Napa Valley in 22002. I know these things. I know them better than anybody else possibly could, so it's my duty to testify about them."},
    {author: "Annie Proulx", quote: "You should write because you love the shape of stories and sentences and the creation of different words on a page. Writing comes from reading, and reading is the finest teacher of how to write."},
    {author: "Rainer Maria Rilke", quote: "Find out the reason that commands you to write; see whether it has spread its roots into the very depth of your heart; confess to yourself you would have to die if you were forbidden to write."},
    {author: "Albert Camus", quote: "The purpose of a writer is to keep civilization from destroying itself."},
    {author: "Eugene Ionesco", quote: "A writer never has a vacation. For a writer life consists of either writing or thinking about writing."},
    {author: "William Faulkner", quote: "Read, read, read. Read everything – trash, classics, good and bad, and see how they do it. Just like a carpenter who works as an apprentice and studies the master. Read! You'll absorb it. Then write. If it's good, you'll find out. If it's not, throw it out of the window."},
    {author: "Friedrich Nietzsche", quote: "A good writer possesses not only his own spirit but also the spirit of his friends."},
    {author: "Meg Rosoff", quote: "Your writing voice is the deepest possible reflection of who you are. The job of your voice is not to seduce or flatter or make well-shaped sentences. In your voice, your readers should be able to hear the contents of your mind, your heart, your soul."},
    {author: "Jane Austen", quote: "I am not at all in a humour for writing; I must write on until I am."},
    {author: "Octavia E. Butler", quote: "You don't start out writing good stuff. You start out writing crap and thinking it's good stuff, and then gradually you get better at it. That's why I say one of the most valuable traits is persistence."},
    {author: "Jodi Picoult", quote: "You can always edit a bad page. You can't edit a blank page."},
    {author: "Annie Dillard", quote: "Do not hoard what seems good for a later place in the book, or for another book; give it, give it all, give it now."},
    {author: "Toni Morrison", quote: "If there's a book that you want to read, but it hasn't been written yet, then you must write it."},
    {author: "Paulo Coelho", quote: "Tears are words that need to be written."}
    
];
let colors = [
    'yellow', 'orange', "red", "black"
  ];
  
class MachineQuote extends Component{
    constructor(props){
        super(props);
        this.state = {
            quote: '',
            author: '',
            color: '#2596be'
          };
        this.hundleClick = this.hundleClick.bind(this);
    }
    hundleClick(){
        let randomNum = Math.floor(Math.random()*35);
        let randoColor = Math.floor(Math.random()*4);
        this.setState({
          author: quotesArray[randomNum].author,
          quote: quotesArray[randomNum].quote,
          color: colors[randoColor]
        });
        document.getElementById('body').style.backgroundColor = this.state.color
      }
      
      render(){
        if(this.state.quote == '' && this.state.author == ''){
          let random = Math.floor(Math.random() * 35);
          this.setState({
            quote: quotesArray[random].quote,
            author: quotesArray[random].author
          });
        }
        let twitt = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22';
        // let quot = this.state.quote;
        // quot = quote.replace(' ', '%20')
        // let aut = '' + this.state.author;
        return (
          <div className="container-fluid">
          <p id="text">{this.state.quote}</p>
          <p id="author">{this.state.author}</p>
            <div className="flex-butt">
              <button onClick={this.hundleClick} style={{backgroundColor: this.state.color, color: 'white', display: 'block'}}>Next Quote</button>
            <div id="twitter"><a target="_blank" class="fa fa-twitter" style={{color: this.state.color}} href={twitt + this.state.quote.replace(' ', '%20')+'%22%20'+this.state.author.replace(' ', '%20')}></a></div>
            </div>
          </div>
        )
      }

}
export default MachineQuote