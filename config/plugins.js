module.exports = () => ({
 graphql: {
  enabled: true,
  config: {
   playgroundAlways: true,
   defaultLimit: 20,
   maxLimit: 20,
   apolloServer: {
    tracing: true,
   },
  }
 }
})