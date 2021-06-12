exports.up = function (knex) {
  return knex.schema
    .createTable('users', users => {
      users.increments('user_id');
      users.string('username', 255).notNullable().unique();
      users.string('password', 255).notNullable();
      users.string('email', 255).notNullable();
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('users')
};
