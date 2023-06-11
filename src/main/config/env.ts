export default {
    postgresqlUrl: process.env.POSTGRESQL_URL || "postgresql://postgresql:desafio@localhost:5440/desafio-vagadb?schema=SCHEMA",
    port: process.env.PORT || 3000,
}