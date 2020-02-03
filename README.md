# Chatter

> A real-time chat application built using React, Node.js, Express, and Socket.io which allows for communciation between multiple users inside of a chatroom

## Table of contents

- [General info](#general-info)
- [Setup](#setup)
- [Deployment](#deployment)
- [Technologies](#technologies)
  - [Server](#server)
  - [Client](#client)
- [Features](#features)
  - [To-do list](#to-do-list)
- [Status](#status)

## General info

Chatter is a real-time chat application built using React, Node.js, Express, and Socket.io which allows for communciation between multiple users inside of a chatroom. The purpose of this project was to serve as an introduction to utilizing WebSockets through the Socket.io library. Socket.io is a library which allows for real-time, bidirectional, event-based communication. It is setup on both the server, to handle all incoming requests, and on the client, to handle the messages being created by the users, and provides a fast and responsive experience for real-time communication. During the implementation of this project, I was also introduced to the use of hooks within React to handle state and props. This feature allowed for the removal of class components and stream-lined the process of handling the users and connections amongst different components.

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

## Deployment

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

- Mobile view support
- Accepts multiple user connections
- Create various chatrooms with different users
- View other users within the channel
- Chat in real-time and share emojis

### To-do list

- Implement list view for all active chatrooms
- Add ability to privately message other users
- Add users to a friends list

## Status

Project is: _in progress_, as there are several features which I would like to implement as I grow more comfortable utilizing React, Express, Node, and Socket.io.
