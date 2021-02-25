# blog-api-nodejs
A blog application developed with MVC, NodeJS, ExpressJS, Sequelize and MySQL 

## Run server
> npm run start

## Endpoints  
### POST /posts
Ex.
> {  
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Breakfast in the morning",  
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"content": "Eggs with milk",  
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"image": "/image.png",  
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"category": "Food"  
> }
### GET /posts
### GET /posts/:id
### PATCH /posts/:id
Ex.
> {
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Title updated",
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"content": "Content updated",
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"image": "/imageUpdated.png",
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"category": "Category updated"
> }
