import "./App.css";

const modalComponent = ({msg,  modalVisible,  setModalVisible,}: {
  msg: string;
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}) => {
  const handleClose = () => {
    setModalVisible(false);
  };
  return (
    modalVisible && (
    <div
      className="modal"
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        width: "300px",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#00ffd5",
        padding: "20px",
        borderRadius: "5px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
      }}
    >
      <h3>Notification</h3>
      <p>{msg}</p>
      <button
        id="closeBtn"
        onClick={() => {
          handleClose();
        }}
        style={{
          backgroundColor: "#005eff",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          float: "right",
        }}
      >
        Close
      </button>
    </div>)
  );
};

export default modalComponent;
