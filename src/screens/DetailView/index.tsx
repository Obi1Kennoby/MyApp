import * as React from 'react'
import { View, Image } from 'react-native'

import styles from './styles'
import DetailsFooter from './components/DetailsFooter'
import { PictureDetails } from '../../containers/DetailViewContainer/reducer'

interface Props {
  imageUrl: string
  isLoading: boolean
  pictureDetails: PictureDetails
}

class DetailView extends React.PureComponent<Props> {
  render() {
    const { shareCallback, applyFilterCallback, pictureDetails } = this.props
    const imageUrl = pictureDetails.full_picture || pictureDetails.cropped_picture

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: imageUrl }}
            style={styles.imageStyle}
            resizeMode={'contain'}
          />
        </View>
        <DetailsFooter
          pictureDetails={pictureDetails}
          shareCallback={shareCallback}
          applyFilterCallback={applyFilterCallback}
        />
      </View>
    )
  }
}

export default DetailView
