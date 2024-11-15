import { Server } from "http"
import app from "./app"

const port = 3000

let server: Server

async function start() {
  server = app.listen(port, () => {
    console.log(`Hello World!`)
  })
}

start()

process.on("SIGTERM", () => {
  console.log("SIGTERM is received")
  if (server) {
    server.close()
  }
})

process.on("SIGINT", () => {
  console.log("SIGINT is received")
  if (server) {
    server.close()
  }
})

process.on("exit", () => {
  console.log("exit is received")
  if (server) {
    server.close()
  }
})

process.on("uncaughtException", () => {
  console.log("uncaughtException is received")
  if (server) {
    server.close()
  }
})

process.on("unhandledRejection", () => {
  console.log("unhandledRejection is received")
  if (server) {
    server.close()
  }
})