import React from "react";
import {Pages} from './Pages'

const RightContent = () => {
    return(
        <div className="RightContent">
            {
                Pages.map((user,i) =>{
                    return(
                        <div key ={i} className={Pages[i].dataClassName} id={Pages[i].dataName} data-background={Pages[i].dataBackground}>
                            <div dangerouslySetInnerHTML={ { __html: Pages[i].dataContent}} />
                        </div>
                    );
                })
            }
        </div>
    );
}

export default RightContent;