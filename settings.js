let md5 = require( 'md5' );

const _privatekey = '6688a217cf2c93530edb4a4555bc3e77aa5f0632',
      _publickey = '9e1584205eb06a58de5535e545ccf9ed',
      _ts = '1',
      _hash = md5( _ts + _privatekey + _publickey  );


export default {
    API_URL: 'http://gateway.marvel.com/v1/public',
    API_HASH: _hash,
    API_TS: _ts,
    API_KEY: _publickey,
};