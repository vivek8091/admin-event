const contactData = [
    {
        id: 1,
        name: "vishal",
        email: "vishal@gmail.com",
        phone: 998877665515,
        message: "hello admin!!!",
    },
    {
        id: 2,
        name: "nayan",
        email: "nayan@gmail.com",
        phone: 998877663423,
        message: "new user!!!",
    },
    {
        id: 3,
        name: "krunal",
        email: "krunal@gmail.com",
        phone: 998877356655,
        message: "hii...",
    },
    {
        id: 4,
        name: "kaushik",
        email: "kushik@gmail.com",
        phone: 998877665455,
        message: "new user!!!",
    },
    {
        id: 1,
        name: "kartik",
        email: "kartik@gmail.com",
        phone: 998877667555,
        message: "hello admin!!!",
    },
];



function ContactList() {
  return (
    <>
      <div className="contact-table ">
        <div className="table-responsive">
          <table className="table table-borderless text-center">
            <thead className="table-dark">
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact No.</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {contactData.map((contact, index) => (
                <tr key={contact.id} className="align-middle">
                  <td>{index + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ContactList;
