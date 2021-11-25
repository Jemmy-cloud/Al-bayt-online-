const config = {
    user: 'root',
    password: 'roo1234',
    server: '127.0.0.1',
    database: 'DataBaseProject',
    options:{
        trustedConnection: true,
        trustServerCertificate: true,
        enableArithPort: true,
        instancename: 'JEMMY\MSSQLSERVER01'
    },
    port: 1433
}

module.exports = config;