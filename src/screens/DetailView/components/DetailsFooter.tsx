import * as React from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';
import styles from '../styles';
import imageFiltersImage from './images/ImageFilters.png';
import shareImage from './images/ShareThis.png';
import {PictureDetails} from "../../../containers/DetailViewContainer/reducer";

type Props = {
  shareCallback: Function;
  colorSwitchCallback: Function;
  pictureDetails: PictureDetails;
};

class DetailsFooter extends React.PureComponent<Props> {
  render() {
    const {shareCallback, applyFilterCallback, pictureDetails} = this.props;
    if (!pictureDetails || !pictureDetails.full_picture) {
      return null;
    }

    const { author, camera } = pictureDetails

    // console.trace('render props', this.props)

    const imageId = pictureDetails.id;
    return (
        <>
          <View style={styles.detailViewText}>
            <Text style={styles.authorText}>{author}</Text>
            <Text style={styles.cameraText}>{camera}</Text>
          </View>
          <View style={styles.detailView}>
            <TouchableOpacity
              style={{marginRight: 10}}
              onPress={() => applyFilterCallback()}>
              <Image
                style={styles.detailViewImage}
                resizeMode="cover"
                source={imageFiltersImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => shareCallback(imageId)}>
              <Image
                style={styles.detailViewImage}
                resizeMode="cover"
                source={shareImage}
              />
            </TouchableOpacity>
          </View>
        </>
    );
  }
}

export default DetailsFooter;
