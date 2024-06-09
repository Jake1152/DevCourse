// FE
const createStateFromSchrath = (reducer) => {
  let state;
  let listeners = [];

  // closure 내부 변수에 저장된 상태를 그대로 리턴
  const getState = () => state;

  // 향후 dispatch에 반응할 listener를 등록
  // listener를 등ㄷ록 해제할 수 있도록 unsubscribe 함수를 리턴
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  dispatch({});

  return { getState, subscribe, dispatch }; // store
};

/**
 * 왜 쓰는가?
 *
 * - dispatch()만을 통해서 해당 값에 접근하게 하기 위함
 * - 전역이었다면  다른 곳에서도 접근 가능하여 오염될 수 있음
 *
 */
