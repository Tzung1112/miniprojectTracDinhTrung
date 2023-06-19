import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function Task(props) {
    const [taskId, setTaskId] = useState(null);
    const [taskName, setTaskName] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const [completedTasks, setCompletedTasks] = useState([]);

    function toggleStrikeThrough(taskId) {
        if (completedTasks.includes(taskId)) {
            setCompletedTasks(completedTasks.filter((id) => id !== taskId));
        } else {
            setCompletedTasks([...completedTasks, taskId]);
        }
    }

    return (
        <div className='nuoccam'>
            <table>
                {/*  <tr>
                <th>
                    <span className="material-symbols-outlined">clear_all</span>
                </th>
                <th style={{ textAlign: 'center' }}>Tình Trạng</th>
                <th style={{ textAlign: 'center' }}>Việc Phải Làm</th>
                <th style={{textAlign:'center'}} colSpan={2}>Tùy chọn</th>
            </tr> */}
                {props.taskList.map((task, index) => (
                    !isEdit ? (
                        <tr key={task.taskId}>
                            <td>{index + 1}</td>
                            <td>
                                <input
                                    type="checkbox"
                                    onChange={() => toggleStrikeThrough(task.taskId)}
                                    checked={completedTasks.includes(task.taskId)}
                                />
                            </td>
                            <td className={completedTasks.includes(task.taskId) ? 'strike-through' : ''}>
                                {task.taskName}
                            </td>
                            <td style={{ textAlign: 'center' }}>
                                <ButtonGroup aria-label="Third group">
                                    <Button className='edit'
                                        onClick={() => {
                                            setIsEdit(true);
                                            setTaskId(task.taskId);
                                            setTaskName(task.taskName);
                                        }}
                                    >
                                        SỬA
                                    </Button>
                                </ButtonGroup>
                            </td>
                            <td style={{ textAlign: 'center' }}>
                                <ButtonGroup aria-label="Third group">
                                    <Button className='delete'
                                        onClick={() => {
                                            props.handleDeleteTask({ type: 'delete', taskId: task.taskId });
                                        }}
                                    >
                                        XÓA
                                    </Button>
                                </ButtonGroup>
                            </td>
                        </tr>
                    ) : (
                        taskId === task.taskId ? (
                            <tr key={task.taskId}>
                                <td>{index + 1}</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        onChange={() => toggleStrikeThrough(task.taskId)}
                                        checked={completedTasks.includes(task.taskId)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue={taskName}
                                        onChange={(e) => {
                                            setTaskName(e.target.value);
                                        }}
                                    />
                                </td>
                                <td style={{ textAlign: 'center' }} colSpan={2}>
                                    <ButtonGroup aria-label="Third group">
                                        <Button className='save'
                                            onClick={() => {
                                                props.handleUpdateTask({
                                                    type: 'update',
                                                    taskUpdate: {
                                                        taskId,
                                                        taskName,
                                                    },
                                                });
                                                setIsEdit(false);
                                            }}
                                        >
                                            LƯU
                                        </Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        ) : (
                            <tr key={task.taskId}>
                                <td>{index + 1}</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        onChange={() => toggleStrikeThrough(task.taskId)}
                                        checked={completedTasks.includes(task.taskId)}
                                    />
                                </td>
                                <td className={completedTasks.includes(task.taskId) ? 'strike-through' : ''}>
                                    {task.taskName}
                                </td>
                                <td>
                                    <ButtonGroup aria-label="Third group">
                                        <Button>SỬA</Button>
                                    </ButtonGroup>
                                </td>
                                <td>
                                    <ButtonGroup aria-label="Third group">
                                        <Button
                                            onClick={() => {
                                                props.handleDeleteTask({ type: 'delete', taskId: task.taskId });
                                            }}
                                        >
                                            XÓA
                                        </Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        )
                    )
                ))}
            </table>
        </div>
    );
}
