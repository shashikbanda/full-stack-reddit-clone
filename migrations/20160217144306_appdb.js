exports.up = function(knex, Promise) {
  return Promise.all([
	knex.schema.createTable("posts", function(table){
		table.increments('postid').primary();
	    table.string('title');
	    table.string('author');
	    table.string('imageUrl');
	  	table.string('description');
  	}),
  	knex.schema.createTable("comments", function(table){
  		table.integer('postid').references('postid').inTable("posts");
		table.string('comment');
  	})])
};

exports.down = function(knex, Promise) {
	return Promise.all([
		knex.schema.dropTable("users"),
		knex.schema.dropTable("photos")
	])
};