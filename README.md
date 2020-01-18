# Chatter

> A real time chat app built on React, Node, Express, and Socket.io

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

Chatter is a real-time chat application built using React, Node, Express, and Socket.io which allows for communciation between multiple users inside of a chatroom. The purpose of this project was to serve as an introduction to utilizing WebSockets through Socket.io. Socket.io is a library which allows for real-time, bidirectional, event-based communication. It is setup on both the server, to handle all incoming requests, and on the client, to handle the messages being created by the users, and provides a fast and responsive experience for real-time communication.

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

- cors: v2.8.5
- express: v4.17.1
- socket.io: v2.3.0

### Client

- react: v16.12.0
- react-dom: v16.12.0
- react-emoji: v0.5.0
- react-router: v5.1.2
- react-router-dom: v5.1.2
- react-scripts: v3.3.0
- react-scroll-to-bottom: v1.3.2
- socket.io-client: v2.3.0
- node-sass: v4.13.0
- query-string: v6.9.0

## Features

- Accepts multiple user connections
- Create various chatrooms with different users
- View other users within the channel
- Chat in real-time and share emojis

### To-do list

- Implement mobile support.
- Implement list view for all active chatrooms
- Add ability to privately message other users
- Add a friends list

## Status

Project is: _in progress_, as there are several features which I would like to implement as I grow more comfortable utilizing React, Express, Node, and Socket.io.
