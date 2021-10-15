import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import List from "../list";
import { styles } from "./styles";
const Dashboard = () => {
  const [compareData, setCompareData] = useState([]);
  const { listData = [] } = useSelector((state) => state.dashboard);

  useEffect(() => {
    if (listData.length) {
      const filterCompareData = listData.filter(
        (item) => item.isCompare === false
      );
      setCompareData(filterCompareData);
    }
  }, [listData]);

  return (
    <div style={styles.dashboardWrapper}>
      <List />
      {compareData.length ? (
        <table style={styles.table}>
          <tr style={styles.th}>
            <th colSpan={4} style={{ textAlign: "center" }}>
              COMPARISON TABLE
            </th>
          </tr>
          <tr style={styles.th}>
            <th></th>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>URL</th>
            <th style={styles.th}>Title</th>
          </tr>
          {compareData.length
            ? compareData.map((item) => {
                return (
                  <tr style={styles.th}>
                    <td style={styles.th}>
                      <img src={item.thumbnailUrl} />
                    </td>
                    <td style={styles.th}>{item.id}</td>
                    <td style={styles.th}>{item.url}</td>
                    <td style={styles.th}>{item.title}</td>
                  </tr>
                );
              })
            : null}
        </table>
      ) : null}
    </div>
  );
};
export default Dashboard;
