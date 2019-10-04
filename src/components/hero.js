import React, { Component } from 'react'
import { connect } from 'react-redux'

class Hero extends Component {
    state = {
        changedName: ''
    }
    rest = () => {
        const action = {
            type: "REST"
          } 
        this.props.dispatch(action)
    }
    pickUpWeapon = (weaponType, damage) => {
        const action = {
            type: "pickUpWeapon",
            payload: {
                type: "stun grenade", 
                damage: 5
            }
        }
            this.props.dispatch(action)
        }
            /*{rest as a function - event handler, always an arrow function
            rest is a function of this class, so when we have it in the return statement with a <button>, use this.rest in onclick={} - event listener }*/
    
            /*{below is the submit part - creating a form: handleSubmit + changeSubmit is event handlers}*/

        handleSubmit = (event) => {
                event.preventDefault() // no refresh pls
                console.log('submitting form')
                const action = {
                    type: 'CHANGE_NAME',
                    payload: this.state.changedName
                }
        
                this.props.dispatch(action)    
                this.setState({ changedName: '' })

            }

        handleChange = (event) => {
                console.log(event.target.value)
                this.setState({ changedName: event.target.value })
                }  
            

    render (){
        // console.log("PROPS of HERO", this.props)
        const { name, health, weapon, inventory } = this.props.hero 
        // this above is destructuring, so we won't need this.props.hero below in our interpolative
        // keys
        //console.log("PROPS?", this.props)
        return <div> 
        <h1>{name}</h1>
        <p>Health: {health}</p>
        <p>Weapon: {weapon.type}</p>
        <div> 
        <h3>Inventory</h3>
        {inventory.map(item => {
            return  <div>
            <p>TYPE: {item.type}</p>
            <p>DAMAGE: {item.damage}</p>
            </div>
        } )}
        </div>
        <button onClick={this.rest} id="buttonclick"> Rest </button>
        <button onClick={this.pickUpWeapon} id="buttonclick">Stun Grenade </button>
        <form onSubmit={this.handleSubmit}>
        <label>Change name</label>
        <input value={this.state.changedName} onChange={this.handleChange}/>
        <input type="submit"/>
    </form>
    </div>
    }
}


/*{above from form onSubmit, we are creating a form, with onSubmit as the event listener, 
    and a function handleSubmit, and handleChange as event handlers}*/

    const mapStateToProps = (state) => {
    console.log(state)
    return {
        hero: state
    }
}

export default connect(mapStateToProps)(Hero)