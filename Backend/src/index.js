const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')

const resolvers = {
  Query: {
    tasks(parent, args, ctx, info) {
      return ctx.db.query.todoes({} ,info)
    },
  },
  Mutation: {
    createTodo(parent, args, ctx, info) {
      return ctx.db.mutation.createTodo({
        data: { task: args.task }
      }, info)
    },
    deleteTodo(parent, args, ctx, info) {
      return ctx.db.mutation.deleteTodo({
        where: { id: args.id }
      }, info)
    },
  } 
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql', // the auto-generated GraphQL schema of the Prisma API
      endpoint: 'https://eu1.prisma.sh/public-coalboa-525/my-app/dev', // the endpoint of the Prisma API
      debug: true, // log all GraphQL queries & mutations sent to the Prisma API
      // secret: 'mysecret123', // only needed if specified in `database/prisma.yml`
    }),
  }),
})

server.start(() => console.log('Server is running on http://localhost:4000'))
