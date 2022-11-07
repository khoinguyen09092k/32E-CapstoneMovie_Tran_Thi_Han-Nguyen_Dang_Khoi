import React, { Fragment, useEffect } from 'react'
import { Route } from 'react-router'


const UserTemplate = (props) => {
    const { Component, ...restProps } = props

    useEffect(() => {
        window.scrollTo(0, 0)
    
      })

    return <Route {...restProps} render={(propsRoute) => {
        return <Fragment>
          
            <div className="flex items-center min-h-screen bg-gray-50">
                <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
                    <div className="flex flex-col md:flex-row">
                        <div className="h-32 md:h-auto md:w-1/2">
                            <img className="object-cover w-full h-full" src="https://source.unsplash.com/user/erondu/1600x900" alt="img" />
                        </div>
                        <Component {...propsRoute}/>
                    </div>
                </div>
            </div>


        </Fragment>
    }} />
}

export default UserTemplate

