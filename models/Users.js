const { Model } = require('objection');
const bcrypt = require('bcrypt');
const { v4 } = require('uuid');

class Users extends Model {
    static get tableName() {
        return 'users';
    }

    static get idColumn() {
        return 'uuid';
    }

    $beforeInsert() {
        this.uuid = v4();
        const hash = bcrypt.hashSync(this.password, 12);
        this.password = hash;
    }

    $beforeUpdate() {
        this.updated_at = new Date();
    }
}

module.exports = Users;