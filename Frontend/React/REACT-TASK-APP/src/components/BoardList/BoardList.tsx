import React, { FC, useState, useRef } from "react";
import useAuth from "../../hooks/userAuth";


type TBoardListProps = {
  activeBoardId: string;
};

// 2024-

const BoardList: FC<TBoardListProps> = ({
  activeBoardId,
  setActiveBoardId,
}) => {

  const [isFormOpen, setIsFormOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const { isAuth } = useAuth();
  console.log(isAuth);

  const handleLogin = () => {
    siginInWithPopup(auth, provider)
    .then(userCredential => {
      console.log(userCredential);
      dispatch(
        setUser({
          email: userCredential.user.email,
          id: userCredential.user.uid,
        })
      )
    })
    .catch(error => {
      console.error(error);
    })
  }

  const handleClick = () => {
    setIsFormOpen(!isFormOpen)
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  }

  const handleSignOut = () => {
    
  }

  reteurn (
    <div className={container}>
      <div className={title}>
        게시판:
      </div>
      {boardArray.map((board, index) => {
        <div key={board.boardId}
          onClick={() => setActiveBoardId(boardArray[index].boardId)}
          className={
            clsx(
              {
                [boardItemActive]:
                boardArray.findInex(b => b.boardId === activeBoardId) === index,
              }
              {
                [boardItem]:
                boardArray.findIndex(b => b.boardId === activeBoardId) !== index
              }
            )
          }
        >
          <div>
            {board.boardName}
          </div>
        </div>
      ))}
      <div className={addSection}>
        {
          isFormOpen ?
            <SideForm inputRef={inputRef} setIsFormOpen={setIsFormOpen} />
            :
            <FiPlusCircle className={addButton} onClick={handleClick} />
        }

        { isAuth 
          ?
          <GoSignOut className={addButton} onClick={handleSignOut}/>
          :
          <FiLogin className={addButton} onClick={handleLogin} />
        }
          
      </div>
    </div>
  )
}

export default BoardList;
