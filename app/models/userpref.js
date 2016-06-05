module.exports = function (db, cb) {
    db.define('user_pref', {
        user_id: {type: 'integer', key: true},
		language: {type: "enum", values: [ 'EN', 'FR', 'UA', 'PT' ]},
		dateformat: {type: "enum", values: [ 'DMY', 'YMD' ]},
		timeformat: {type: "enum", values: [ '12h', '24h' ]},
		timezone: {type: "text", size: 9 }
    });

    return cb();
};