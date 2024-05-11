

export const typeDefs = `#graphql
type Game {
    id:ID! # exclamation marks to make the property required
    title:String!
    platflorn:[String!]!
}
type Review{
    id:ID!
    rating:Int!
    content:String!
}
type Author{
    id:ID!
    name:String!
    verified:Boolean
}
type Query{ # Query is a special type that is used to specify the main gateway point

    reviews:[Review]
    games:[Game]
    authors:[Author]
    getAuthor(id: ID!):Author
    getReview(id : ID!):Review
}
`



// init, float,string, boolean, ID