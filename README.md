# Chatter

> A real-time chat app built on React.js, Node.js and Socket.io

## Table of contents

- [General info](#general-info)
- [Setup](#setup)
- [Hosting](#hosting)
- [Technologies](#technologies)
  - [Server](#server)
  - [Client](#client)
- [Features](#features)
  - [To-do list](#to-do-list)
- [Status](#status)

## General info

Chatter is a real-time chat application built using React, Node, Express, and Socket.io which allows for communciation between multiple users inside of a chatroom. The purpose of this project was to serve as an introduction to utilizing WebSockets through the Socket.io library and also as an introduction to using React Hooks for state management. Socket.io is a library which allows for real-time, bidirectional, event-based communication. It is setup on both the server, to handle all incoming requests, and on the client, to handle the messages being created by the users, and provides a fast and responsive experience for real-time communication. The addition of hooks to manage state allows for the removal of class components within the react application and simplifies the process of modifying the users and connections within the chat app.

## Setup

Clone project into desired directory and ensure [Node.js](https://nodejs.org/en/download/) is installed.

Navigate to the server folder and modify the ENDPOINT variable in `index.js` and set it to `localhost` or your server location.

Install project dependencies for both the server and the client:

```
cd ./server/
npm install
cd ../client/
npm install
```

Once the dependencies have been installed, initialize the server, followed by the client:

```
cd ../server/
node start
cd ../client/
node start
```

## Hosting

This app was deployed using Heroku and can be viewed by first initializing the server by opening:  
[oarnosa-chatter-server.herokuapp.com](https://oarnosa-chatter-server.herokuapp.com/)

And then launching multiple clients depending how many users will be connecting:  
[oarnosa-chatter.herokuapp.com](https://oarnosa-chatter.herokuapp.com/)

## Technologies

### Server

- Node: v10.16.0
- Express: v4.17.1
- Socket.io: v2.3.0

### Client

- React: v16.12.0
- React-Emoji: v0.5.0
- React-Scroll-to-Bottom: v1.3.2
- Sass: v4.13.0

## Features

- Accepts multiple user connections
- Create various chatrooms with different users
- View other users within the channel
- Chat in real-time and share emojis

### To-do list

- Implement UI changes to allow for mobile support
- Implement list view for all active chatrooms
- Add ability to privately message other users
- Add users to a friends list

## Status

Project is: _in progress_, as there are several features which I would like to implement as I grow more comfortable utilizing React, Express, Node, and Socket.io.
