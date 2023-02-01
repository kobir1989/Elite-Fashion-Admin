
export const stockOutColumns = [
   {
      field: "_id", headerName: "Product ID", width: 200
   },
   {
      field: "image", headerName: "Image", width: 150, align: "center", headerAlign: "center", renderCell: (params) => {
         return (
            <div className="data-grid-cell">
               <img src={params.row.image} alt="product.png" />
            </div>
         )
      }
   },
   {
      field: "title", headerName: "Product Name", width: 230,
   },
   {
      field: "Stock", headerName: "Stock", align: "center", headerAlign: "center", width: 150, renderCell: (params) => {
         console.log(params.row.stock, "PPPPPPPPP")
         return <span className="stock-out">{params.row.stock}</span>
      }
   },
   {
      field: "price", headerName: "Price", width: 180, renderCell: (params) => {
         return (
            <span className="product-price">TK. {params.row?.price.toFixed(2)}</span>
         )
      }
   }
]

