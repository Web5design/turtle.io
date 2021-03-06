/**
 * Registers a virtual host
 *
 * @method host
 * @param  {String} arg Virtual host
 * @return {Object}     TurtleIO instance
 */
TurtleIO.prototype.host = function ( arg ) {
	if ( this.handlers.all.hosts[arg] === undefined ) {
		this.vhosts.push( arg );
		this.vhostsRegExp.push( new RegExp( "^" + arg.replace( /\*/g, ".*" ) + "$" ) );
		this.handlers.all.hosts[arg]       = {};
		this.handlers["delete"].hosts[arg] = {};
		this.handlers.get.hosts[arg]       = {};
		this.handlers.patch.hosts[arg]     = {};
		this.handlers.post.hosts[arg]      = {};
		this.handlers.put.hosts[arg]       = {};
	}

	return this;
};
