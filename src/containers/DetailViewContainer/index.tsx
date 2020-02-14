// @flow
import * as React from 'react';
import DetailView from '../../screens/DetailView';
import {connect} from 'react-redux';
import {fetchPictureDetails} from './actions';
import {selectHiResImage} from './selectors';

export interface Props {
  navigation: any;
  fetchPictureDetails: Function;
  isLoading: boolean;
  hiResImage: Function;
}
export interface State {
  imageUrl: string;
}

class DetailViewContainer extends React.Component<Props, State> {
  static navigationOptions = {
    title: 'Details',
    headerStyle: {
      backgroundColor: '#000',
    },
    headerTintColor: '#fff',
  };

  componentDidMount() {
    const {navigation, fetchPictureDetails} = this.props;
    const {pictureDetails} = navigation.state.params;
    if (!this.props.hiResImage(pictureDetails.id)) {
      fetchPictureDetails(pictureDetails.id);
    }
  }

  share = (imageId: number): void => {
    // TODO: implement share function
  };

  applyFilter = (type): void => {
    // TODO: implement apply image filter function
  };

  render() {
    const {pictureDetails} = this.props.navigation.state.params;
    const imageURL = pictureDetails.full_picture;
    const {isLoading, hiResImage} = this.props;
    // console.trace('PROPS', this.props)
    // console.trace('orig detail', pictureDetails)
    const hiResDetails = hiResImage(pictureDetails.id);
    // console.trace('details', details)
    return (
      <DetailView
        imageUrl={imageURL}
        pictureDetails={hiResDetails || pictureDetails}
        shareCallback={this.share}
        isLoading={isLoading}
        applyFilterCallback={this.applyFilter}
      />
    );
  }
}

function bindAction(dispatch) {
  return {
    fetchPictureDetails: imageId => dispatch(fetchPictureDetails(imageId)),
  };
}

const mapStateToProps = state => ({
  hiResImage: imageId => selectHiResImage(state, imageId),
  isLoading: state.detailViewReducer.isLoading,
});

export default connect(
  mapStateToProps,
  bindAction,
)(DetailViewContainer);
