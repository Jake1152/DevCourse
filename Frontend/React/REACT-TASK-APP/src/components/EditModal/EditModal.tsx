import React from "react";
import { FiX } from "react-icons/fi";
import { useTypeDispatch, useTypedSelector } from 

const EditModal = () => {
  const dispatch = useTypeDispatch();
  const editingState = useTypedSelector((state) => state);
  const [data, setData] = useState(editingState);

  const handleCloseButton = () => {
    dispatch(setModalActive(false));
  };

  return (
    <div>
      <div>
        <div>
          <div>{editingState.task.taskName}</div>
          <FiX onClick={handleCloseButton} />
        </div>
        <div>제목</div>
        <input type="text" value={data.task.taskName} />
        <div> 설명 </div>
        <input type="text" value={data.task.taskDescription} />
        <div>생성한 사람</div>
        <input type="text" value={data.task.taskOwner} />
        <div>
          <button>일 수정하기</button>
          <button>일 삭제하기</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
