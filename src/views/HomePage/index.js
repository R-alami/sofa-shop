import React from "react"
import HeadLine from "../../components/HeadLine";
import ImageCard from "../../components/ImageCard";
import DiscountTitle from "../../components/DiscountTitle";
import Line from "../../components/Line";
import DiscountCard from "../../components/DiscountCard";

const HomePage = props => (
    <div>
      <HeadLine>Recommend</HeadLine>
      <ImageCard src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8a3b12d469f015fa722a3e564a290466&auto=format&fit=crop&w=1353&q=80"
      to="/product" />

      <Line />

      <DiscountTitle/>

      <DiscountCard />
    </div>
  )

  export default HomePage;