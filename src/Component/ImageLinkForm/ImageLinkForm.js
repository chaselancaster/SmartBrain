import React from 'react';

const ImageLinkForm = () => {
    return (
        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures. Give it a try.'}
            </p>
            <div>
                <input type='text' />
                <button>Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm