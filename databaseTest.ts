const { Pool } = require("pg");

// 配置数据库连接参数
const dbConfig = {
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "twitter_clone_dev",
};

// 创建连接池
const pool = new Pool(dbConfig);

// 尝试连接数据库
pool
  .connect()
  .then(() => {
    console.log("Successfully connected to the database!");
    pool.end(); // 关闭连接池
  })
  .catch((error: Error) => {
    console.error("Unable to connect to the database:", error);
  });
