## First things first:

1. Fork and clone [this repository](https://github.com/JoinCODED/TASK-React-MobX-Chatting-Website) to your `development folder
2. `npm install`
3. `npm start`

## Instructions

1. `npm install @tanstack/react-query axios`
2. Create your api file in `src/utils/api/index.js`
3. Create your rooms api file in `src/utils/api/rooms/index.js`
4. Create the list,show,create,update, delete functions in `src/utils/api/rooms/index.js`

## Fetch rooms:
1. Move `fetchRooms` function to the useQuery hook to fetch the rooms

## Create a room:
1. Move `createRoom` function to the useMutation hook to create a room

## Delete a room:
1. Move `deleteRoom` function to the useMutation hook to delete a room

### Challenge
- Update , Create a message (no steps ! its a challenge)