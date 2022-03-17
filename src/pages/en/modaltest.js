import React, {useState} from 'react';
import {Modal} from '../../modules/modal';

const Page = () => {
  const [isModalVisible, setModalVisible] = useState(true);
  return <>{isModalVisible && <Modal setModalVisible={setModalVisible} />}</>;
};

export default Page;
