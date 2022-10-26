import { useState } from "react";
import "./styles.css";

/**
 * concept of hashmap (object as hashmap)
 * O(1) and why we are doing this.
 */
const emojiDictionary = {
  "❤️": "Heart",
  "❣️": "Heart Exclimation",
  "💖": "Sparkling Heart",
  "💕": "Two Hearts",
  "💗": "Growing Heart",
  "💓": "Beating heart",
  "💞": "Revolving Heart",
  "💘": "Cupid heart",
  "💝": "Gifted Heart",
  "💜": "Purple",
  "💚": "Green heart",
  "💔": "Broken Heart"
};

/**
 * Bonus feature
 * converting an object to array of keys
 */
const emojis = Object.keys(emojiDictionary);

// App component
export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState(
    "Want to know about heart emojis?"
  );

  function emojiInputHandler(event) {
    var inputEmoji = event.target.value;
    var emojiMeaning;

    if (inputEmoji in emojiDictionary) {
      emojiMeaning = emojiDictionary[inputEmoji];
    } else if (inputEmoji === "") {
      emojiMeaning = "Want to know about heart emojis? ";
    } else {
      emojiMeaning = "Oops! we don't have the emoji in our records.";
    }

    setEmojiMeaning(emojiMeaning);
  }

  function emojiClickHandler(emoji) {
    var emojiMeaning = emojiDictionary[emoji];
    setEmojiMeaning(emojiMeaning);
  }

  return (
    <div className="App">
      <h1>Interpret Heart Emoji</h1>
      <input
        onChange={emojiInputHandler}
        placeholder="Enter your Emoji here."
      ></input>
      <h2>{emojiMeaning}</h2>

      <h2>Emojis in our database</h2>
      <div id="emoji-list">
        {emojis.map((emoji, index) => {
          return (
            <span onClick={() => emojiClickHandler(emoji)} key={index}>
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
