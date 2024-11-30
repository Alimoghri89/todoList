import React, { useEffect, useState } from "react";
import TaskListStyle from "./TaskList.module.css";
import axios from "axios";
import { useSWRConfig } from "swr";
import { mutate } from "swr";

const TaskList = () => {
  const [status, setStatus] = useState("");
  const { user } = useSWRConfig();
  const handleChangeStatus = async (index,newStatus) => {
    user.tasks[index].status = newStatus
    await axios.put(`http://localhost:5174/users/${user.id}`, user);
    mutate("http://localhost:5174/users");
    
  };
  useEffect(()=>{},[status,user])

  return (
    <div className={TaskListStyle.container} dir="rtl">
      <table className={TaskListStyle.table}>
        <thead className={TaskListStyle.tableHead}>
          <tr>
            <th className={TaskListStyle.tableHeadIndex}>شماره</th>
            <th className={TaskListStyle.tableHeadTitle}>عنوان</th>
            <th className={TaskListStyle.tableHeadDescription}>توضیحات</th>
            <th className={TaskListStyle.tableHeadStatus}>وضعیت</th>
          </tr>
        </thead>
        <tbody className={TaskListStyle.tableBody}>
          {user?.tasks?.map((item, index) => {
            return (
              <tr key={index} className={TaskListStyle.tableBodyRow}>
                <td className={TaskListStyle.tableBodyItem}>{index + 1}</td>
                <td className={TaskListStyle.tableBodyItem}>{item.title}</td>
                <td className={TaskListStyle.tableBodyItem}>
                  {item.description}
                </td>
                <td className={TaskListStyle.tableBodyItem}>
                  <input
                    type="checkbox"
                    defaultChecked={item.status === "pending" ? false : true}
                    onChange={(e) => {
                      const newStatus = e.target.checked ? "completed" : "pending";
                      setStatus(newStatus);
                      handleChangeStatus(index,newStatus);
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
