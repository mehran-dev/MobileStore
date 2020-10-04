import React from 'react';

import notFoundImg from '../../images/404.jpg';

const NotFound = () => {
    return (
        <div
            style={{
                width: "80%",
                overflow: "hidden",
                textAlign: "center",
                display: "inline-block"



            }}
        >
            <img

                src={notFoundImg}
                alt="404 image"
                style={{
                    width: "100%",
                    height: "100%",
                    margin: "18px 0px"
                }
                }

            />

        </div>
    );
};

export default NotFound;