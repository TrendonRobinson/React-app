# Project Overview

## Project Links

- [add your github repo link]()
- [add your deployment link]()

## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

## API

https://random-word-api.herokuapp.com/word?number=10
```
[
  "spininess",
  "semantic",
  "hypersurfaces",
  "coastward",
  "fonds",
  "filibusterer",
  "mediatrix",
  "magnetograph",
  "spellbinds",
  "equerry"
]
```
https://api.dictionaryapi.dev/api/v2/entries/en/hello
```
[
  {
    "word": "hello",
    "phonetic": "həˈləʊ",
    "phonetics": [
      {
        "text": "həˈləʊ",
        "audio": "//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3"
      },
      {
        "text": "hɛˈləʊ"
      }
    ],
    "origin": "early 19th century: variant of earlier hollo ; related to holla.",
    "meanings": [
      {
        "partOfSpeech": "exclamation",
        "definitions": [
          {
            "definition": "used as a greeting or to begin a phone conversation.",
            "example": "hello there, Katie!",
            "synonyms": [
              
            ],
            "antonyms": [
              
            ]
          }
        ]
      }
      ...

```
```
{data: {} }
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.


- [wireframes](https://wireframepro.mockflow.com/view/MMEEZKitVmb)
- [react architecture](https://sitemap.mockflow.com/view/Md203945af19e0a4fa790847c0138ab901635899513191)



### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Word Search and Definer
- Navbar with options that link to their corresponding pages
- Adding words to personal list

#### PostMVP EXAMPLE
- Add localStorage or firebase for storage

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Header | This will render the header include the nav | 
| Main | This will render the Word and description | 
| Buttons | Rendering 'Sound', 'Next', and 'Add to list' buttons | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create React app and files for all components | H | 6hrs| 3.5hrs | 3.5hrs |
| Working with API | H | .5hrs| .5hrs | .5hrs |
| Fail-safe | H | 1.5hrs| 1.5hrs | .5hrs |
| Fail-safe Word Search | H | 1.5hrs| 1.5hrs | .5hrs |
| Saving Cards | H | .5hrs| .5hrs | .5hrs |
| Total | H | 6hrs| 4.5hrs | 6hrs |

## Additional Libraries
none

## Code Snippet

Fail-safe function for a faulty word

```
import { Shake, ShakeLittle, ShakeSlow, ShakeHorizontal } from 'reshake'

// Variables
let delayInMilliseconds = 1000; //1 second

//function 
function Seconds(amount) {
    return delayInMilliseconds * amount
}

// Component

export default function GameCard(props) {

    const [check, setCheck] = useState(false)
    const [shake, setShake] = useState(false)
    // const [input, setInput] = useState('')

    // Variables
    let word = props.data[0]

    // Functions
    function handleSubmit(event){
        let inputField = event.target.parentNode.children[0]
        let inputFieldText = inputField.value.replace(/ /g, "");
        let answer = inputFieldText.toLowerCase()

        if (answer === word.toLowerCase()) {
            setCheck(true)

            
        } else {
            setShake(true)
            setTimeout(function() {
                setShake(false)
              }, Seconds(.5));
        }

    }

    return (
        <div className="GameCard">
            {check ? <h1 className="answer">{props.data[0]}</h1> : <input className="word-box"/>}
            <h3>{props.data[1]}</h3>
            <hr/>
            {check ? <div/> : shake ? 
            <ShakeLittle h={20} v={0} r={3}>
                <button onClick={handleSubmit} className="Wrong">
                    Wrong
                </button>
            </ShakeLittle>: 
            <button onClick={handleSubmit} className="Submit">
                    Submit
            </button>}
        </div>
    )
}
```
