import {alsi_pinni,angoori_petha} from "../assets/sweets";


const Sweets = () => {

  return (
    <>
      {/* {sweetsProducts.forEach((item, index) => {
        if (item.productGroup === false) {
          <div key={index} className="grid grid-cols-2 ">
            <div>
              <img src={require(item.image)} alt={item.productName} />
            </div>
            <div>
                <h3>{item.productName}</h3>
                <h4>{item.price}</h4>
            </div>
          </div>
        }        else {
            <div key={index} className='grid grid-cols-2' >
                <div>
                <img src={require(item.image)} alt={item.productName} />            
                </div>
                <div>
                    {item.productList.forEach((listItem,index_two)=>{
                       <div className='grid grid-cols-2' key={index_two} >
                        <h3>{listItem.name}</h3>
                        <h4>{listItem.price}</h4>
                       </div>
                    })}
                </div>

            </div>
        }
      })} */}
      {sweetsProducts.map((item, index) =>(
        <div>
            <img  src={require(item.image)} alt={item.productName} />
        </div>
      ))}
    </>
  )
}

export default Sweets
