exports.typeDefs=`
type Recipe{
name: String!
category: String!
description: String!
instructions: String!
likes: Int
created: String
username: String
}

type User{
username: String! @unique
password: String!
email: String!
name: String!
joinDate: String
favourite: [Recipe]
}
`;