module.exports = {
  dbDatabase: process.env.OPEN_CRON_MONITOR_DB_DATABASE || 'open-cron-monitor',
  dbUsername: process.env.OPEN_CRON_MONITOR_DB_USERNAME || 'open-cron-monitor',
  dbPassword: process.env.OPEN_CRON_MONITOR_DB_PASSWORD || 'open-cron-monitor',
  dbHost: process.env.OPEN_CRON_MONITOR_DB_HOST || 'postgres',
  dbPort: process.env.OPEN_CRON_MONITOR_DB_PORT || 5432,
  jwtSecret: process.env.OPEN_CRON_MONITOR_JWT_SECRET || 'hard-secret',
}
