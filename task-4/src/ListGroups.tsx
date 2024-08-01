
import React from 'react';
const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    gap: "2px",
  },
  component: {
    width: "100px",
  },
};
interface ListGroupsProps {
  item: string;
  DeleteClicked?: () => void;
  EditClicked?: () => void;
  DoneClicked?: () => void;
  
}

const ListGroups: React.FC<ListGroupsProps> = ({ item, DeleteClicked, EditClicked, DoneClicked }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center" >
      {item}
      <div style={styles.container}>
        {DeleteClicked && (
          <button className="btn btn-primary btn-sm mr-2" onClick={DeleteClicked}>
            Delete
          </button>
        )}
        {EditClicked && (
          <button className="btn btn-primary btn-sm mr-2" onClick={EditClicked}>
            Edit
          </button>
        )}
        {DoneClicked && (
          <button className="btn btn-primary btn-sm" onClick={DoneClicked}>
            Done
          </button>
        )}
      </div>
    </li>
  );
};

export default ListGroups;

// const deleted = () =>{
//   DeleteClicked(true)
// const edited = () =>{
//   EditClicked ( true)
// }
// const completed = () => {
//   DoneClicked(true)
// }