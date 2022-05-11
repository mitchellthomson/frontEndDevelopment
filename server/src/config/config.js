module.exports = {
    port: process.env.PORT || 8082,
    db: {
        database: process.env.DB_NAME || 'songnbook',
        user: process.env.DB_USER || 'songnbook',
        passworc: process.env.DB_PASS || 'songnbook',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './songnbook.sqlite'

        }
    }
}