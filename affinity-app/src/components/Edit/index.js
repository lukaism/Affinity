import React, { useState } from 'react'
import './index.sass'
import InputRange from 'react-input-range'
// import InputRange from 'react-input-range-vertical'
import "react-input-range/lib/css/index.css"
import Feedback from '../Feedback'
import Footer from '../Footer'
import { modifyUser } from '../../logic'
import { withRouter } from 'react-router-dom'

const { polyfills: { filterz } } = require('affinity-util')


function Edit({ history }) {
    let error
    const { token } = sessionStorage

    async function handleEdit(event) {
        event.preventDefault()
        try {



            let day, month, year, radius, geometric

            const { name: { value: name }, surname: { value: surname }, genderId: { value: genderId } } = event.target

            await modifyUser(token, name, surname, genderId, geometric, description, day, month, year, radius)

            history.push('/myprofile')



        } catch (error) {
            console.error(error)
        }

    }

    return <section className="view edit-profile">
        <h1 className="edit-profile__title">Complete Profile</h1>
        <form className="edit-profile__form" onSubmit={handleEdit}>
            <h4 className="edit-profile__title">Basic info</h4>
            <article className="edit-profile__basic">
                <input className="edit-profile__field" type="text" name="name" placeholder="name" />
                <input className="edit-profile__field" type="text" name="surname" placeholder="surname" />
                <input className="edit-profile__field" type="email" name="email" placeholder="e-mail" />
            </article>
            <h4 className="edit-profile__title">Gender</h4>
            <article>
                <select className="edit-profile__gender" name="genderId">
                    <option value="" disabled selected>Select your gender</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                </select>
            </article>
            <h4 className="edit-profile__title">Description</h4>
            <article className="edit-profile__description">
                <textarea className="edit-profile__description-text" maxLength="500" name="description"></textarea>
            </article>
            <article className="edit-profile__radius">
                <h4>Search Radius (1 to 100km)</h4>
                <div className="edit-profile__slider-block radius">
                    <InputRange
                        maxValue={100}
                        minValue={1}
                        value={rangeValueR}
                        onChange={value => setRangeValueR(value)} />
                </div>
            </article>
            <button className="edit-profile__submit" type="submit"><i className="fas fa-archive"></i></button>
        </form>


        <Footer />

    </section>

}

export default withRouter(Edit)
