import React from "react";
import { Banner } from "../../components/banner";
import { feaProducts, leaProducts, service } from "../../data/data";
import { FeaturedProduct } from "../../components/card/featured-product";
import { LeatestProduct } from "../../components/card/leatest-product";
import { Link } from "react-router-dom";
import { ServiceCard } from "../../components/card/service-card";

export const Home = () => {
    return (
        <main>
            <section className="py-[54px] bg-[#f2f0ff]">
                <div className="w-[1300px] mx-auto">
                    <Banner />
                </div>
            </section>
            <section className="py-[130px]">
                <div className="container">
                    <h2 className="font-bold text-[42px] text-[#1a0b5b] text-center mb-[48px]">Featured Products</h2>
                    <div className="flex gap-[29px]">
                        {feaProducts?.map((item) => {
                            return <FeaturedProduct key={item.id} img={item.img} title={item.title} info={item.title} count={item.count} />
                        })}
                    </div>
                </div>
            </section>
            <section className="pb-[58px]">
                <div className="container">
                    <h2 className="font-bold text-[42px] text-[#1a0b5b] text-center mb-[19px]">Leatest Products</h2>
                    <div className="flex gap-[60px] justify-center mb-[58px] breadcrumb">
                        <a className="font-normal text-[18px] text-[#FB2E86]" href="#">New Arrival</a>
                        <a className="font-normal text-[18px] text-[#1a0b5b]" href="#">Best Seller</a>
                        <a className="font-normal text-[18px] text-[#1a0b5b]" href="#">Featured</a>
                        <a className="font-normal text-[18px] text-[#1a0b5b]" href="#">Special Offer</a>
                    </div>
                    <div className="flex flex-wrap justify-between gap-y-[120px]">
                        {leaProducts?.map((item) => {
                            return <Link to={`/product/${item.id}`}>
                                <LeatestProduct key={item.id} img={item.img} title={item.title} count={item.count} sale={item.sale} />
                            </Link>
                        })}
                    </div>
                </div>
            </section>
            <section className="pb-[130px]">
                <div className="container">
                    <h2 className="font-bold text-[42px] text-[#1a0b5b] text-center mb-[48px]">What Shopex Offer!</h2>
                    <div className="flex justify-between gap-[28px]">
                        {service?.map((item) => {
                            return <ServiceCard img={item.img} title={item.title} info={item.info}/>
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}