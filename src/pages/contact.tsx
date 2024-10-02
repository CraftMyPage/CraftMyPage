interface ContactInfo{
    name: string;
    email: string;
    linkedin: string;
    github: string;
    image: string;
}

const contacts: ContactInfo[] = [
    {
        name: "John doe",
        email:"examplemail@gmail.com",
        linkedin: "https://www.linkedin.com",
        github: "https://github.com/",
        image: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1727872982~exp=1727876582~hmac=a43c683665b9d2502f1aaea542239844c7fa36a6277b78a7831d7404ab18eec8&w=740",
    },
    {
        name: "John doe",
        email:"examplemail@gmail.com",
        linkedin: "https://www.linkedin.com",
        github: "https://github.com/",
        image: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1727872982~exp=1727876582~hmac=a43c683665b9d2502f1aaea542239844c7fa36a6277b78a7831d7404ab18eec8&w=740",
    },
    {
        name: "John doe",
        email:"examplemail@gmail.com",
        linkedin: "https://www.linkedin.com",
        github: "https://github.com/",
        image: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1727872982~exp=1727876582~hmac=a43c683665b9d2502f1aaea542239844c7fa36a6277b78a7831d7404ab18eec8&w=740",
    },
    {
        name: "John doe",
        email:"examplemail@gmail.com",
        linkedin: "https://www.linkedin.com",
        github: "https://github.com/",
        image: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1727872982~exp=1727876582~hmac=a43c683665b9d2502f1aaea542239844c7fa36a6277b78a7831d7404ab18eec8&w=740",
    },
]


const Contact = () => {
    return (
        <div>
        <h1>Contact</h1>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {contacts.map((contact, index) => (
            <div key={index} style={{ textAlign: 'center', margin: '20px' }}>
              <img src={contact.image} alt={contact.name} style={{ borderRadius: '50%', width: '150px', height: '150px' }} />
              <h2>{contact.name}</h2>
              <p>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
              <p>LinkedIn: <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">{contact.linkedin}</a></p>
              <p>GitHub: <a href={contact.github} target="_blank" rel="noopener noreferrer">{contact.github}</a></p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Contact;