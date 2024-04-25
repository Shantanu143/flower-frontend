import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { Button, Label, TextInput } from "flowbite-react";

const EditFlower = () => {
  const { id } = useParams();
  const api = `/api/flowers/${id}`;

  const [flowerData, setFlowerData] = useState({
    flowerTitle: "",
    price: "",
    imageURL: "",
    discount: "",
  });

  useEffect(() => {
    fetch(api)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch flower data");
        }
        return res.json();
      })
      .then((data) => {
        setFlowerData(data);
      })
      .catch((error) => console.error("Error fetching flower data:", error));
  }, [api]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const price = form.price.value;
    const imageURL = form.imageURL.value;
    const flowerTitle = form.flowerTitle.value;
    const discount = form.discount.value;
    const flowerObj = { price, imageURL, flowerTitle, discount };

    fetch(api, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(flowerObj),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to update flower");
        }
        return res.json();
      })
      .then(() => {
        alert("Flower Updated Successfully");
      })
      .catch((error) => console.error("Error updating flower:", error));
  };

  return (
    // <form onSubmit={handleFormSubmit} className="flex max-w-md flex-col gap-4">
    //   <div>
    //     <div className="mb-2 block">
    //       <Label htmlFor="discount" value="Enter Discount" />
    //     </div>
    //     <TextInput
    //       id="discount"
    //       name="discount"
    //       type="number"
    //       defaultValue={flowerData.discount}
    //       placeholder="Enter Discount"
    //       required
    //       shadow
    //     />
    //   </div>
    //   <div>
    //     <div className="mb-2 block">
    //       <Label htmlFor="flowerTitle" value="Enter Flower Name" />
    //     </div>
    //     <TextInput
    //       id="flowerTitle"
    //       name="flowerTitle"
    //       type="text"
    //       defaultValue={flowerData.flowerTitle}
    //       placeholder="Enter Flower Name"
    //       required
    //       shadow
    //     />
    //   </div>
    //   <div>
    //     <div className="mb-2 block">
    //       <Label htmlFor="imageURL" value="Enter Flower Image Link" />
    //     </div>
    //     <TextInput
    //       id="imageURL"
    //       name="imageURL"
    //       type="text"
    //       defaultValue={flowerData.imageURL}
    //       placeholder="Enter Flower Image Link"
    //       required
    //       shadow
    //     />
    //   </div>
    //   <div>
    //     <div className="mb-2 block">
    //       <Label htmlFor="price" value="Enter Price" />
    //     </div>
    //     <TextInput
    //       id="price"
    //       name="price"
    //       type="number"
    //       defaultValue={flowerData.price}
    //       placeholder="Enter Price"
    //       required
    //       shadow
    //     />
    //   </div>

    //   <Button type="submit">Edit Flower</Button>
    // </form>
    <section className="contact pt-32" id="contact">
      <h1 className="heading">
        <span> Edit </span> Flower
      </h1>

      <div className="row">
        <form onSubmit={handleFormSubmit}>

          <input
            id="price"
            name="price"
            type="number"
            defaultValue={flowerData.price}
            placeholder="Enter Price"
            className="box"
            required
          />
          <input
            id="discount"
            name="discount"
            type="number"
            defaultValue={flowerData.discount}
            placeholder="Enter Discount"
            className="box"
            required
          />
          <input
            id="imageURL"
            name="imageURL"
            type="text"
            defaultValue={flowerData.imageURL}
            placeholder="Enter Flower Image Link"
            className="box"
            required
          />
          <input
            id="flowerTitle"
            name="flowerTitle"
            type="text"
            defaultValue={flowerData.flowerTitle}
            placeholder="Enter Flower Name"
            className="box"
            required
          />

          <input type="submit" value="Edit Flower" className="btn" />
        </form>
      </div>
    </section>
  );
};

export default EditFlower;
