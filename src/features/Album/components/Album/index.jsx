import React from 'react';
import PropTypes from 'prop-types';

Album.propTypes = {
    album: PropTypes.object.isRequired,
};

function Album({ album }) {
    console.log('album', album);
    return (
        <div className="album">
            <div className='album_thumbanil'>
                {album.map((data, idx) => (
                    <>
                        <img src={data.thumbaniUrl} ckey={idx} alt={data.name} />
                        <p className='album_name' ckey={idx}>{data.name}</p>
                    </>
                ))
                }
            </div>



        </div>
    );
}

export default Album;