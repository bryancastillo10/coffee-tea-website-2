import Card from "src/components/Card.jsx";

const BestSeller = () => {
  return (
 <section className="bestseller__container">
    <div className="bestseller__header">
        <h1>Coffee and Tea BestSellers</h1>
    </div>
    <div className="bestseller__menu">
        <Card/>
    </div>
 </section>
  )
}

export default BestSeller
