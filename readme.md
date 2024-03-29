
# Bing Chat Continuer

![imag](images/imag.png)

Bing Chat Continuer is a responsive web application that automatically splits large texts into smaller chunks of up to 1980 characters each, with a continuation message at the end of each chunk. This allows users to bypass the 2000 character limit imposed by the Bing Chat API.


## Usage

To use the Bing Chat Continuer, follow these steps:

1.  Open the [Bing Chat Continuer](https://bing-chat-continuer.vercel.app/) web application in your browser.
2.  Enter your text in the "Enter text here" text area.
3.  The text will be automatically split into smaller chunks with a continuation message appended at the end of each chunk.
4.  Copy the desired chunk of text by clicking on the "Copy" button on the right side of each chunk.

## Implementation

The Bing Chat Continuer is implemented using HTML, CSS, and JavaScript. The HTML file defines the structure of the web page and includes the following elements:

-   A heading with the title "Bing Chat Continuer".
-   A textarea for entering the text to be split.
-   A paragraph to display the character count and the number of prompts required.
-   A button to trigger the text splitting process.
-   A div to display the split text chunks.

The CSS file styles the elements to create a visually appealing and user-friendly interface.

The JavaScript file contains the following functions:

-   `updateText()` function: This function retrieves the input text from the textarea, splits it into chunks, and creates a new HTML element for each chunk. The function appends each HTML element to the output div on the web page. The `updateText()` function also replaces `<` and `>` characters in the input text with their HTML entities to prevent HTML injection attacks.
-   `updateCounter()` function: This function updates the character count and the number of prompts required based on the length of the input text.
-   `copyText(event)` function: This function copies the text from the textarea of the clicked "Copy" button to the clipboard using the `navigator.clipboard.writeText()` method.

## Conclusion

Bing Chat Continuer is a simple and effective solution to split large texts for use with Bing Chat API. The web application is easy to use and can save time for developers who need to work with long texts in their chatbots. With the automatic update feature, it is now even more convenient to use.
