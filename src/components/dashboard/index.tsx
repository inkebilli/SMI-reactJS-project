import SalesChart from "./salesChary"
import TopProductSaleChart from './topProductSoldChart'

const data =[
    {
        icon:"currency-euro",
        color:"orange",
        title:"sales",
        content:"200461,93 €"
    },
    {
        icon:"bag-heart-fill",
        color:"green",
        title:"sales Number",
        content:"5571"
    },
    {
        icon:"person-badge",
        color:"blue",
        title:"influencers",
        content:"11"
    },
    {
        icon:"cash-stack",
        color:"pink",
        title:"commission",
        content:"20325 €"
    },
    {
        icon:"cash-coin",
        color:"violet",
        title:"Influencers Commission",
        content:"20049,48 €"
    },
    {
        icon:"tags",
        color:"magenta",
        title:"sold product number",
        content:"571"
    },
]


type PropsCard = {
    icon : string,
    title: string,
    color:string,
    content: JSX.Element
}
const Card = ({icon ,title,content,color} : PropsCard) =>{ 
    return (
        <div  className="col-sm card-mini m-3">
         <div className='row m-0 p-3 '>
            <div className='col-xs-2 col-sm-2 col-md-2 m-0'>
                <div className="logo-card-mini"><i className={`bi-${icon}`} style={{fontSize: "1.8rem", color:color}}/></div>
            </div>
            <div className='col-xs-10 col-md-10 col-sm-10  col-lg-10  m-0'>
                <div className="card-title m-0">{title}</div>
                <div className="card-content m-0">{content}</div></div>
         </div> 
        </div>
        
        )
}
function Dashboard(){
    return(
        <div className="m-4 ">
            <div className="row cards ">
            <div className='row'>
                {data.map((card,x)=> (<Card key={x} icon={card.icon} color={card.color} title={card.title} content={<>{card.content}</>}/>))}
            </div>
            <div className='row'>
                <div className="col-xs-6 col-sm-8 col-md-8 col-lg-8 col-xl-8 m-1 bg-white sales-stats-card" > 
                    <SalesChart />  
                    </div>
                <div className="col-sm bg-white m-1 top-10-product-sold-card" > 
                <TopProductSaleChart />
                </div>
                </div>
                <div className='row'>
                <div className="col-sm bg-white m-2" >Top 5 influencers</div>
                <div className="col-sm bg-white m-2" >sales number per country</div>
            </div>
            </div>
        </div>
    )
}


export default Dashboard