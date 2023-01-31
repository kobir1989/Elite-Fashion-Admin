
export const stockOutColumns = [
   {
      field: "id", headerName: "Product ID", width: 200
   },
   {
      field: "image", headerName: "Image", width: 150, align: "center", headerAlign: "center", renderCell: () => {
         return (
            <div className="data-grid-cell">
               <img src="https://res.cloudinary.com/dhkdpjwjm/image/upload/v1674496325/products/uamzub2ylgkdu77qxlqd.jpg" alt="product.png" />
            </div>
         )
      }
   },
   {
      field: "name", headerName: "Product Name", width: 230,
   },
   {
      field: "Stock", headerName: "Stock", align: "center", headerAlign: "center", width: 150, renderCell: () => {
         return <span className="stock-out">100</span>
      }
   },
   {
      field: "price", headerName: "Price", width: 180,
   }
]

