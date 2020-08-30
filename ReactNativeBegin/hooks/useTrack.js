import { Context as LocationContext } from '../contexts/LocationContextProvider';
import { Context as TrackContext } from '../contexts/TrackContextProvider';
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

export default useTrack = () => {
    const navigation = useNavigation();
    const { createTrack } = useContext(TrackContext);
    const { state: { name, locations }, reset } = useContext(LocationContext);

    const saveTrack = async () => {
        let result = await createTrack(name, locations);
        reset();
        navigation.navigate('Track', {screen: 'Track Lists'});
    }

    return [saveTrack];
}