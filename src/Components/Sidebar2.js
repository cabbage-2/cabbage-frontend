import {
  MdAdd,
  MdSupervisorAccount,
  MdGridView,
  MdOutlineDataSaverOff,
  MdClose,
  MdLogout,
} from "react-icons/md";
import styles from "./Sidebar2.module.scss";

const Sidebar2 = ({ isOpen, setIsOpen, signOut }) => {
  return (
    <div
      className={`${styles["container"]} ${
        isOpen ? styles["container--open"] : ""
      } `}
    >
      <div
        className={styles["close"]}
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <MdClose color={"#510438"} size={"18px"} className="h-8 w-8" />
      </div>

      <div className={styles["icon--wrapper"]}>
        <div>
          <SideBarIcon icon={<MdAdd className="h-8 w-8" />} text="Favourites" />
          <SideBarIcon
            icon={<MdGridView className="h-8 w-8" />}
            text="Past Reviews"
          />
          <SideBarIcon
            icon={<MdOutlineDataSaverOff className="h-8 w-8" />}
            text="My Data"
          />
          <SideBarIcon
            icon={<MdSupervisorAccount className="h-8 w-8" />}
            text="User Settings"
          />
        </div>
        <div className={styles["close"]} onClick={signOut}>
          {/* <div
            style={{
              borderTopWidth: "1px",
              borderTopStyle: "solid",
              borderTopColor: "#c4c4c4",
            }}
          ></div> */}
          <SideBarIcon icon={<MdLogout className="h-8 w-8" />} text="Logout" />
        </div>
      </div>
    </div>
  );
};

const SideBarIcon = ({ icon, text = "tooltip" }) => (
  <div
    className="sidebar-icon group"
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "50px",
      padding: "5px",
    }}
  >
    {icon}
    <span
      className={`sidebar-tooltip group-hover:scale-100`}
      style={{ fontSize: "8px", textAlign: "center" }}
    >
      {text}
    </span>
  </div>
);

export default Sidebar2;
