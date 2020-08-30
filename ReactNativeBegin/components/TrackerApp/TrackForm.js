import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import { Context as LocationContext } from '../../contexts/LocationContextProvider';
import useTrack from '../../hooks/useTrack';

const TrackForm = () => {
    const { state, changeName, stopRecording, startRecording } = useContext(LocationContext)
    const [saveTrack] = useTrack();

    return (
        <>
            <Input
                onChangeText={changeName}
                value={state.name}
                placeholder="Enter Name"
            />
            {
                state.recording ?
                    <Button
                        title="Stop Recording"
                        onPress={stopRecording}
                    />
                    :
                    <Button
                        title="Start Recording"
                        onPress={startRecording}
                    />
            }

            {!state.recording && state.locations.length ?
                <Button
                    style={{marginTop: 10}}
                    title="Save Track"
                    onPress={saveTrack}
                />
                : null
            }
        </>
    );
}

export default TrackForm;