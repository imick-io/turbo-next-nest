import createProduct from "./actions/create-product";

export default async function CreateProduct() {
  return (
    <div>
      <form action={createProduct}>
        <div>
          {/* Name */}
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>

        <div>
          {/* Price */}
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" />
        </div>

        <div>
          {/* Submit Button */}
          <button type="submit">Create Product</button>
        </div>
      </form>
    </div>
  );
}
