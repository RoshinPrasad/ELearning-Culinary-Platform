import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const NotificationComponent = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, username: "Admin", subject: "New Chat By User", read: false },
    { id: 2, username: "Athin", subject: "Class Enrolled By User", read: true },
    { id: 2, username: "Lilly", subject: "Class Enrolled By User", read: true },
  ]);

  const markAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  return (
    <Box sx={{ width: "1100px" }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead style={{ backgroundColor: "black" }}>
            <TableRow>
              <TableCell style={{ color: "white" }}>SL No</TableCell>
              <TableCell style={{ color: "white" }}>Username</TableCell>
              <TableCell style={{ color: "white" }}>Notification Subject</TableCell>
              <TableCell style={{ color: "white" }}>Mark as Read</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notifications.map((notification) => (
              <TableRow
                key={notification.id}
                style={{ backgroundColor: notification.read ? "" : "#ffcccb" }} // Apply or remove background color based on read status
              >
                <TableCell>{notification.id}</TableCell>
                <TableCell>{notification.username}</TableCell>
                <TableCell>{notification.subject}</TableCell>
                <TableCell>
                  {!notification.read && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => markAsRead(notification.id)}
                    >
                      Mark as Read
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default NotificationComponent;
