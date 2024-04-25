import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const api = "/api/flowers";

const ManageFlowers = () => {
  const [allFlowers, setAllFlowers] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch flowers");
        }
        return res.json();
      })
      .then((data) => setAllFlowers(data))
      .catch((error) => console.error("Error fetching flowers:", error));
  }, []);

  const handleDeleteBook = (id) => {
    fetch(api + `/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to delete flower");
        }
        return res.json();
      })
      .then(() => {
        alert("Flower Deleted Successfully");
        // Refresh the flower list after deletion
        fetch(api)
          .then((res) => res.json())
          .then((data) => setAllFlowers(data));
      })
      .catch((error) => console.error("Error deleting flower:", error));
  };

  return (
    // <div className="px-4 my-12">
    //   <h2 className="mb-8 text-3xl font-bold">Manage Your Flowers</h2>


    // </div>
    <section className="contact pt-32" id="contact">
      <h1 className="heading">
        <span> Manage </span> Flower
      </h1>

      <div className="row">
        <Table className="w-full">
          <Table.Head className=" text-5xl px-8">
            <Table.HeadCell>No.</Table.HeadCell>
            <Table.HeadCell>Flower Name</Table.HeadCell>
            <Table.HeadCell>Discount</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y text-4xl">
            {allFlowers.map((flower, index) => {
              const { _id, flowerTitle, price, discount } = flower;
              return (
                <Table.Row key={_id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {flowerTitle}
                  </Table.Cell>
                  <Table.Cell>{discount}</Table.Cell>
                  <Table.Cell>{price}</Table.Cell>
                  <Table.Cell>
                    <Link
                      to={`/dashbord/editflower/${_id}`}
                      state={{ flower }}
                      className="btn"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDeleteBook(_id)}
                      className="btn"
                    >
                      Delete
                    </button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </section>
  );
};

export default ManageFlowers;
