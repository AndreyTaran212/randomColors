import {colorGenerator} from '@/assets/functions/colorGenerator';
import {useDispatch, useSelector} from 'react-redux';
import {IRootState} from '@/redux/reducers';
import {
  updateBackgroundColor,
  updateBackgroundType,
} from '@/redux/actions/settingsAvtion';
import {useEffect, useState} from 'react';

const useColorGenerator = () => {
  const savedBgType = useSelector(({settings}: IRootState) => settings?.bgType);
  const savedBg = useSelector(({settings}: IRootState) => settings?.bg);
  const [bg, setBg] = useState(savedBg || '#000');
  const [bgType, setBgType] = useState(savedBgType || 'hex');
  const dispatch = useDispatch();
  const changeColor = () => {
    const newBg = colorGenerator(bgType);
    dispatch(updateBackgroundColor(newBg));
    setBg(newBg);
  };
  console.log('bg');
  console.log(bg);
  const changeColorType = (type: string) => {
    dispatch(updateBackgroundType(type));
    setBgType(type);
  };

  useEffect(() => {
    if (!savedBgType) {
      dispatch(updateBackgroundType('hex'));
    }
    if (!savedBg) {
      dispatch(updateBackgroundColor('#000'));
    }
  }, []);

  return {changeColor, changeColorType, bg, bgType};
};

export default useColorGenerator;
