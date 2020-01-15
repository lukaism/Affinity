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
    const [user, setUser] = useState()

    const [rangeValue1, setRangeValue1] = useState(user.geometric[0].value || 0)
    const [rangeValue2, setRangeValue2] = useState(user.geometric[1].value || 0)
    const [rangeValue3, setRangeValue3] = useState(user.geometric[2].value || 0)
    const [rangeValue4, setRangeValue4] = useState(user.geometric[3].value || 0)
    const [rangeValue5, setRangeValue5] = useState(user.geometric[4].value || 0)
    const [rangeValueR, setRangeValueR] = useState(1)

    useEffect(() => {

        (async () => {
            if (token) {
                const user = await retrieveUser(token)
                setUser(user)
            }
        })()
    }, [setUser])

    async function handleEdit(event) {
        event.preventDefault()
        try {



            let day, month, year, radius, name, surname, genderId

            const { description: { value: description }, interestDes1: { value: interestDescription1 }, interestDes2: { value: interestDescription2 }, interestDes3: { value: interestDescription3 }, interestDes4: { value: interestDescription4 }, interestDes5: { value: interestDescription5 }, interest1: { value: interestId1 }, interest2: { value: interestId2 }, interest3: { value: interestId3 }, interest4: { value: interestId4 }, interest5: { value: interestId5 } } = event.target
            radius = rangeValueR


            let interestP1 = {}
            interestP1.interestId = interestId1
            interestP1.value = rangeValue1
            interestP1.description = interestDescription1
            let interestP2 = {}
            interestP2.interestId = interestId2
            interestP2.value = rangeValue2
            interestP2.description = interestDescription2
            let interestP3 = {}
            interestP3.interestId = interestId3
            interestP3.value = rangeValue3
            interestP3.description = interestDescription3
            let interestP4 = {}
            interestP4.interestId = interestId4
            interestP4.value = rangeValue4
            interestP4.description = interestDescription4
            let interestP5 = {}
            interestP5.interestId = interestId5
            interestP5.value = rangeValue5
            interestP5.description = interestDescription5
            let geometric = [interestP1, interestP2, interestP3, interestP4, interestP5]
            geometric = filterz(geometric)

            await modifyUser(token, name, surname, genderId, geometric, description, day, month, year, radius)

            history.push('/myprofile')



        } catch (error) {
            console.error(error)
        }

    }

    return <section className="view edit-profile">
        <h1 className="edit-profile__title">Complete Profile</h1>
        <form className="edit-profile__form" onSubmit={handleEdit}>
            <section className="edit-profile__interests">
                <h4 className="edit-profile__title">Interests</h4>
                <article className="edit-profile__interest">
                    <select className="selector__interest" name="interest1" >
                        {user.geometric[0] && <option value={user.geometric[0].interestId}>{user.geometric[0].interestId}</option>}
                        {!user.geometric[0] && <option value="" disabled selected>day</option>}
                        <option value="music">Music</option>
                        <option value="sports">Sports</option>
                        <option value="movies">Movies</option>
                        <option value="books">Books</option>
                        <option value="sdnr">Sex Drugs and Rockn'Roll</option>
                        <option value="nature">Nature</option>
                        <option value="traveling">Traveling</option>
                        <option value="videogames">Videogames</option>
                        <option value="art">Art</option>
                        <option value="gastronomy">Gastronomy</option>
                    </select>
                    <div className="edit-profile__slider-block">
                        <InputRange
                            maxValue={100}
                            minValue={1}
                            value={rangeValue1}
                            onChange={value => setRangeValue1(value)} />
                    </div>
                    <textarea className="edit-profile__description-text" maxLength="500" name="interestDes1">{user.geometric[0].description}</textarea>

                </article>
                <article className="edit-profile__interest">
                    <select className="selector__interest" name="interest2">
                        {user.geometric[1] && <option value={user.geometric[1].interestId}>{user.geometric[1].interestId}</option>}
                        {!user.geometric[1] && <option value="" disabled selected>day</option>}
                        <option value="sports">Sports</option>
                        <option value="music">Music</option>
                        <option value="movies">Movies</option>
                        <option value="books">Books</option>
                        <option value="sdnr">Sex Drugs and Rockn'Roll</option>
                        <option value="nature">Nature</option>
                        <option value="traveling">Traveling</option>
                        <option value="videogames">Videogames</option>
                        <option value="art">Art</option>
                        <option value="gastronomy">Gastronomy</option>
                    </select>
                    <div className="edit-profile__slider-block">
                        <InputRange
                            maxValue={100}
                            minValue={0}
                            value={rangeValue2}
                            onChange={value => setRangeValue2(value)} />
                    </div>
                    <textarea className="edit-profile__description-text" maxLength="500" name="interestDes2">{user.geometric[0].description}</textarea>

                </article>
                <article className="edit-profile__interest">
                    <select className="selector__interest" name="interest3" >
                        {user.geometric[2] && <option value={user.geometric[2].interestId}>{user.geometric[2].interestId}</option>}
                        {!user.geometric[2] && <option value="" disabled selected>day</option>}
                        <option value="sports">Sports</option>
                        <option value="music">Music</option>
                        <option value="movies">Movies</option>
                        <option value="books">Books</option>
                        <option value="sdnr">Sex Drugs and Rockn'Roll</option>
                        <option value="nature">Nature</option>
                        <option value="traveling">Traveling</option>
                        <option value="videogames">Videogames</option>
                        <option value="art">Art</option>
                        <option value="gastronomy">Gastronomy</option>
                    </select>
                    <div className="edit-profile__slider-block">
                        <InputRange
                            maxValue={100}
                            minValue={0}
                            value={rangeValue3}
                            onChange={value => setRangeValue3(value)}
                            className="vertical" />
                    </div>
                    <textarea className="edit-profile__description-text" maxLength="500" name="interestDes3" placeholder="">{user.geometric[0].description}</textarea>

                </article>
                <article className="edit-profile__interest">
                    <select className="selector__interest" name="interest4" >
                        {user.geometric[3] && <option value={user.geometric[3].interestId}>{user.geometric[3].interestId}</option>}
                        {!user.geometric[3] && <option value="" disabled selected>day</option>}
                        <option value="sports">Sports</option>
                        <option value="music">Music</option>
                        <option value="movies">Movies</option>
                        <option value="books">Books</option>
                        <option value="sdnr">Sex Drugs and Rockn'Roll</option>
                        <option value="nature">Nature</option>
                        <option value="traveling">Traveling</option>
                        <option value="videogames">Videogames</option>
                        <option value="art">Art</option>
                        <option value="gastronomy">Gastronomy</option>
                    </select>
                    <div className="edit-profile__slider-block">
                        <InputRange
                            maxValue={100}
                            minValue={0}
                            value={rangeValue4}
                            onChange={value => setRangeValue4(value)} />
                    </div>
                    <textarea className="edit-profile__description-text" maxLength="500" name="interestDes4">{user.geometric[0].description}</textarea>

                </article>
                <article className="edit-profile__interest">
                    <select className="selector__interest" name="interest5" >
                        {user.geometric[4] && <option value={user.geometric[4].interestId}>{user.geometric[4].interestId}</option>}
                        {!user.geometric[4] && <option value="" disabled selected>day</option>}
                        <option value="sports">Sports</option>
                        <option value="music">Music</option>
                        <option value="movies">Movies</option>
                        <option value="books">Books</option>
                        <option value="sdnr">Sex Drugs and Rockn'Roll</option>
                        <option value="nature">Nature</option>
                        <option value="traveling">Traveling</option>
                        <option value="videogames">Videogames</option>
                        <option value="art">Art</option>
                        <option value="gastronomy">Gastronomy</option>
                    </select>
                    <div className="edit-profile__slider-block">
                        <InputRange
                            maxValue={100}
                            minValue={0}
                            value={rangeValue5}
                            onChange={value => setRangeValue5(value)} />
                    </div>
                    <textarea className="edit-profile__description-text" maxLength="500" name="interestDes5">{user.geometric[0].description}</textarea>

                </article>
            </section>
            <h4 className="edit-profile__title">Description</h4>
            <article className="edit-profile__description">
                <textarea className="edit-profile__description-text" maxLength="500" name="description">{user.description}</textarea>
            </article>
            <article className="edit-profile__radius">
                <h4>Search Radius (1 to 1000km)</h4>
                <div className="edit-profile__slider-block radius">
                    <InputRange
                        maxValue={1000}
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
