import React, { useEffect, useState } from "react";
import Card from "../components/card";
import { useSelector, useDispatch } from "react-redux";
import { getPhotosAsync, updatePhotosList } from "../redux/actions";
import { styles } from "./styles";
const List = () => {
  const dispatch = useDispatch();
  const { listData = [] } = useSelector((state) => state.dashboard);
  useEffect(() => {
    dispatch(getPhotosAsync());
  }, []);

  const compareHandler = (id) => {
    let temp = [];
    if (listData.length) {
      temp = listData.map((item) => {
        if (item.id === id) {
          return { ...item, isCompare: false, isRemove: true };
        } else {
          return item;
        }
      });
    }
    dispatch(updatePhotosList(temp));
  };

  const removeHandler = (id) => {
    let temp = [];
    if (listData.length) {
      temp = listData.map((item) => {
        if (item.id === id) {
          return { ...item, isCompare: true, isRemove: false };
        } else {
          return item;
        }
      });
      dispatch(updatePhotosList(temp));
    }
  };

  return (
    <div className="row" style={styles.listWrapper}>
      {listData.length
        ? listData.map((item, i) => {
            return (
              <Card
                key={i}
                compareHandler={compareHandler}
                removeHandler={removeHandler}
                data={item}
              />
            );
          })
        : null}
    </div>
  );
};
export default List;
