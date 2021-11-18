# Millionaires GRAPHIC MODE
See the game millionaires in the <a href="https://github.com/RafZab/ConsoleMillionaire" target="_blank">console version</a>.
## Table of contents
* [General info](#main-assumptions)
* [Description of functionality](#description-of-functionality)
* [How to install](#how-to-install)
* [Technologies](#technologies)
* [Endpoints](#endpoints)
* [User manual](#user-manual)
* [Rate](#rate)
* [Photos](#photos)
* [License](#license)

## Main assumptions

A game designed to resemble the famous TV game show millionaires, where
they can feel like participants in the game and have the opportunity 
to try our hand at this game.

## Description of functionality

  1. Play the game of millionaires
      - When we press the play button in the main menu, the window is refreshed and we are shown a game which consists in choosing the right answer A, B, C, D for 12 questions. On the right side there are basic information such as: how much we have to win, how much we have won and what is the guaranteed sum. After giving the correct answer, we continue to play, but after giving the wrong answer, the game ends.
  2. View statistics
      - In the main menu you can see our statistics, after clicking on the "Statistics" button you can see our top 10 games in the table. The table has columns such as position, username, winnings and date.
  3. Add your own questions to the game
      - After clicking the "add question" button, a validated form for adding a question is displayed, so if the form has any errors, we will be informed about it.
  4. Enter your player name
      - Before we go to the main menu of the game, we need to enter your username so that we can address the user by name, for the better experience users. Name can be save in session for better user expirence.
  5. Saves date in datebase 
      - Saving game results and questions

## How to install:
Open terminal and: 

1. git clone https://github.com/RafZab/GraphicMillionaires.git
2. cd GraphicMillionaires/Backend/Millionaire
3. dotnet run
4. cd ../../Frontend/ 
5. npm install 
6. npm start
7. cd GraphicMillionaires/Backend/Millionaire

Important !

For the application to work properly before starting the game, you need to add 12 questions!

If the backend starts at a different address than port 5001, you have to change the path in Frontend \ src \ axios.js

![image](https://user-images.githubusercontent.com/65453222/142466424-4825f7e1-6820-4350-827f-096f0909a837.png)


## Technologies
Frontend React
 - axios: 0.24.0,
 - bootstrap: 5.1.3,
 - react: 17.0.2,
 - react-bootstrap: 2.0.2,
 - react-dom: 17.0.2,
 - react-router-dom: 5.3.0,
 - react-scripts: 4.0.3,
 - sass: 1.43.4,
 - web-vitals: 1.1.2

Backend .Net 5
  - Entity Framework Core: 5.0.11
  - Entity Framework Core SqlServer: 5.0.11
  - Entity Framework Core Tools: 5.0.11
  - Auto Mapper 8.1.1

## Endpoints
Returns a random list of 12 questions
 - [Get] {yourURL}/api/question 

Saves a new question to the data
- [Post] {yourURL}/api/question 

![image](https://user-images.githubusercontent.com/65453222/142458462-7de07a18-7ea6-4ca8-88e3-44da490ef39a.png)

Returns the top 10 scores for the entire game
 - [Get] {yourURL}/api/result

Saves a new scores to the data
- [Post] {yourURL}/api/result 

![image](https://user-images.githubusercontent.com/65453222/142458370-9f490380-dc34-46d5-8ee7-4bcf32278a5a.png)

## User manual
The user moves around the application with the mouse by clicking on the buttons.

## Rate
The game I created has a great potential for development. I like it visually and I would recommend it 
to my friends and lost a lot of time in it expanding my knowledge in a nice and interesting way.
## Photos

![image](https://user-images.githubusercontent.com/65453222/142425963-0a60a26c-322f-445c-8f4b-5e05881b724e.png)

![image](https://user-images.githubusercontent.com/65453222/142426478-2676b74e-fedd-4fe7-a1aa-2896b5b56b71.png)

![image](https://user-images.githubusercontent.com/65453222/142426678-d92cef61-6524-4c53-b895-dc6529175181.png)

![image](https://user-images.githubusercontent.com/65453222/142426060-b782168a-d404-4b37-9ab8-e2595b8aa21c.png)

![image](https://user-images.githubusercontent.com/65453222/142426169-afb096f3-3397-4a79-b60a-09d364d8f1ed.png)

## License
[MIT](https://choosealicense.com/licenses/mit/)
