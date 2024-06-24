import { useState } from 'react';
import { Header } from '../components/header/header';
import { Filters } from '../components/filters/filters';
import { Modal } from '../components/modal/modal';
import { Posts } from '../components/posts/posts';
import { postsData } from '../data/posts';

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState('8');

  const quantityArr = ['4', '8', '12', '16', '20'];

  // Выбор значения из выпадающего списка
  const selectHandler = (quantity) => {
    setSelectedQuantity(quantity);
  };

  // Фильтрация постов на основе выбранного количества
  const filteredPosts = postsData.slice(0, parseInt(selectedQuantity, 10));

  // Открытие модального окна
  const openModal = () => setShowModal(true);

  // Закрытие модального окна
  const closeModal = () => setShowModal(false);

  return (
    <div>
      <Header openModal={openModal} />
      <Filters
        selectedQuantity={selectedQuantity}
        quantityArr={quantityArr}
        selectHandler={selectHandler}
      />
      <Posts postsData={filteredPosts} />
      {showModal && <Modal closeModal={closeModal} />}
    </div>
  );
}
