module.exports = function (app) {
  const sequelize = app.get('sequelizeClient')
  const migrationScript = 
  `CREATE TABLE IF NOT EXISTS activities
  (
      id integer primary key autoincrement,
      title varchar(100) not null,
      category varchar(50) not null,
      detail text not null,
      thumbnailUrl varchar(100) not null,
      createdAt datetime,
      updatedAt datetime,
      isActive boolean
  );
  `
  async function migrate() {
  console.time('migrate')
  const result = await sequelize.query(migrationScript, {
    nest: true,
    raw: true,
  });
  
  //console.log(result)
  console.timeEnd('migrate')
  return result
}
migrate().then((result) => console.log(result))
.catch(err=> console.log(err))
  
}