import axios from "axios";
import { useEffect, useState } from "react";

function ContactList() {
  const [contactList, setContactList] = useState([]);
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async (e) => {
    try {
      const token = sessionStorage.getItem("token");
      const res = await axios.get(
        "http://localhost:2121/api/contact/getContact/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setContactList(res.data.data);
      console.log(res.data);
    } catch (error) {
      console.error("Error while fetching contact details!!!", error);
      alert("Could not get contact data!!!");
    }
  };
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
                <th>Country</th>
                <th>Contact No.</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {contactList.map((contact, index) => (
                <tr key={contact.id} className="align-middle">
                  <td>{index + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.country}</td>
                  <td>{contact.phone_no}</td>
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
