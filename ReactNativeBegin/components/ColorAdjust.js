import React, { useReducer } from 'react';
import { View, Button } from 'react-native';
import ColorAdjustButton from './ColorAdjustButton';

const ColorAdjust = () => {
    const INCREASE_AMOUNT = 15;
    const DEREASE_AMOUNT = -15;
    function myReducer(state, action) {
        switch (action.type) {
            case 'red':
                return state.red + action.payload > 255 || state.red + action.payload < 0 ?
                    state : { ...state, red: state.red + action.payload };
            case 'green':
                return state.green + action.payload > 255 || state.green + action.payload < 0 ?
                    state : { ...state, green: state.green + action.payload };
            case 'blue':
                return state.blue + action.payload > 255 || state.blue + action.payload < 0 ?
                    state : { ...state, blue: state.blue + action.payload };

            default:
                return { red: 0, blue: 0, green: 0 };
        }
    }
    const [state, dispatch] = useReducer(myReducer, { red: 0, blue: 0, green: 0 });
    const { red, blue, green } = state;
    return (
        <View>
            <Button 
                title="Reset"
                onPress={() => dispatch({type: 'reset'})}
            />
            <ColorAdjustButton
                name="red"
                onIncrease={() => dispatch({type: 'red', payload: INCREASE_AMOUNT})}
                onDecrease={() => dispatch({type: 'red', payload: DEREASE_AMOUNT})}
            />
            <ColorAdjustButton
                name="green"
                onIncrease={() => dispatch({type: 'green', payload: INCREASE_AMOUNT})}
                onDecrease={() => dispatch({type: 'green', payload: DEREASE_AMOUNT})}
            />
            <ColorAdjustButton
                name="blue"
                onIncrease={() => dispatch({type: 'blue', payload: INCREASE_AMOUNT})}
                onDecrease={() => dispatch({type: 'blue', payload: DEREASE_AMOUNT})}
            />
            <View style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})`, width: 100, height: 100 }}></View>
        </View>
    );
};

export default ColorAdjust;