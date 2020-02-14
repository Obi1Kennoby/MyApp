import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');

const styles: any = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    flex: 1,
    width: width * 0.9,
    height: width * 0.9,
  },
  backButton: {
    position: 'absolute',
    left: 5,
    top: 5,
  },
  spinner: {
    position: 'absolute',
  },
  detailView: {
    position: 'absolute',
    bottom: 10,
    width: 120,
    right: 10,
    flexDirection: 'row',
  },
  detailViewText: {
    position: 'absolute',
    bottom: 20,
    left: 30,
  },
  authorText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  cameraText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailViewImage: {
    width: 50,
    height: 50,
  },
});
export default styles;
