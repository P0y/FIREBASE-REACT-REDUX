import React, {PropTypes} from 'react';

const Message = ({liveMessage, currentUser}) => {
  let wrapperClass = 'form-group';

  return (
  <div className="container-fluid h-100">
    <div className="row justify-content-center h-100">
      <div className="col-md-4 col-xl-3 chat">
        <div className="card mb-sm-3 mb-md-0 contacts_card">
          <div className="card-header">
            <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Fsvg%2F20150703%2Fb029c2f59c.svg&imgrefurl=https%3A%2F%2Fpngtree.com%2Ffree-icon%2Fboy-baby_656357&docid=L4bgL8eVjdSE6M&tbnid=S4yern1mWZ3w2M%3A&vet=10ahUKEwib0q_d8v3jAhXSDmMBHcxjBtwQMwhJKAYwBg..i&w=512&h=512&bih=657&biw=1366&q=face%20icon%20png&ved=0ahUKEwib0q_d8v3jAhXSDmMBHcxjBtwQMwhJKAYwBg&iact=mrc&uact=8"
                 className="rounded-circle user_img"/>
          </div>
          <div className="card-body contacts_body">
          {currentUser}
          </div>
          <div className="card-footer"></div>
        </div>
      </div>
      <div className="col-md-8 col-xl-6 chat">
        <div className="card">
          <div className="card-header msg_head">
          {/*  CARD HEADER 2*/}
          </div>
            {liveMessage.map(item => (
              item.map(data => (
                <div className="card-button">
                  <button type="button" className="btn btn-primary">
                    {data.message}
                  </button>
              </div>
              ))
            ))}
          <div className="card-footer">
          {/*  CARD FOOTER */}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

Message.propTypes = {
  liveMessage: PropTypes.array.isRequired,
  currentUser: PropTypes.string.isRequired
};

export default Message;
