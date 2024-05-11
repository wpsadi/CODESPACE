import {ApolloServer} from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import { authors, games, reviews } from "./_db.js";

const resolvers = {
    Query: {
        reviews: () => reviews,
        games: () => games,
        authors: () => authors,
        getAuthor: (_, args) => {
            console.log(args.id)
            return authors.find(author => author.id === args.id)
        }
    }
}

// server setup
const server = new ApolloServer({
    //typeDefs
    typeDefs,

    // resolvers
    resolvers



})



const {url} = await startStandaloneServer(server,{
    listen:{
        port:4000
    }
})

console.log(`Server ready at ${url}`)