// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Card, Container } from "react-bootstrap";

// const MyData = () => {
//     // NOTE: Using Promises.....

//     const [data, setData] = useState([]);
//     const [isError, setIsError] = useState("");

//     useEffect(() => {
//         axios
//             .get("https://jsonplaceholder.typicode.com/posts")
//             .then((res) =>setData(res.data))
//             .catch((error)=>setIsError(error.message));
//     }, []);

//     return (
//         <>
//             <Container>
//                 <h1>My Data</h1>
//                 {!isError === "" && <h2>{isError}</h2>}
//                 {data.map((post) => {
//                     const { id, title, body } = post;
//                     return <Card className="card" key={id}>
//                         <h4>{title.slice(0, 15)}</h4>
//                         <p>{body.slice(0, 100)}</p>
//                     </Card>
//                 })}
//             </Container>
//         </>
//     );
// }

// export default MyData;