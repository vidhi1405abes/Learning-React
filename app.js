import React from "react";
import ReactDOM from "react-dom/client";
import logo from "url:./logo.jpg";
import user from "url:./user.png";
import logoFood from "url:./logoProject.jpg";

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React",
// );
{
  /* <div id="grandParent">
    <div id="parent">
        <h1 id="child">Hello world from child</h1>
    </div>
</div> */
}
// const parent=React.createElement("div",{id:"grandParent"},React.createElement("div",{id:"parent"},React.createElement("h1",{id:"child"},"Hello world from child")))
{
  /* <div id="grandParent">
    <div id="parent1">
        <h1 id="child1">Child1</h1>
        <h2 id="child2">Child2</h2>
    </div>
    <div id="parent2">
        <h1 id="child3">Child3</h1>
        <h2 id="child4">Child4</h2>
    </div>
</div> */
}
// const grandParent = React.createElement("div", { id: "grandParent" }, [
//   React.createElement("div", { id: "parent1" }, [
//     React.createElement("h1", { id: "child1" }, "Child1"),
//     React.createElement("h2", { id: "child2" }, "Child2"),
//   ]),
//   React.createElement("div", { id: "parent2" }, [
//     React.createElement("h1", { id: "child3" }, "Child3"),
//     React.createElement("h2", { id: "child4" }, "Child4"),
//   ]),
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(grandParent);
// console.log(heading);
// const heading=React.createElement("h1",{id:"heading"},"Hiiii");
// console.log(heading);
// const HeadingComponent=()=>{
//   return <h1>This is a React Component</h1>
// }
// const num=1000;
// const TitleComponent=()=>{
//   return (<div>
//     <h1>{num}</h1>
//     <HeadingComponent/>
//     <h1>I am the title Component</h1>
//   </div>);
// }
// const jsxHeading = <h1 className="head">Hii from JSX</h1>;
// // const componeent=React.createElement("div",{class:"title"},[React.createElement("h1",{id:"heading"},"Hello World from React"),React.createElement("h2",{id:"subheading"},"This is a subheading"),React.createElement("h3",{id:"subsubheading"},"This is a subsubheading")])
// const component=(<div className="title">
//     <h1 id="heading">Hello World from React JSX</h1>
//     <h2 id="subheading">This is a subheading</h2>
//     <h3 id="subsubheading">This is a subsubheading</h3>
// </div>)
// const Component1=()=>{
//     return (<h1 className="Child1">I am h1</h1>);
// }
// const Component2=()=>{
//     return (<h1 className="Child2">I am h2</h1>);
// }
// const Component3=()=>{
//     return (<h1 className="Child3">I am h3</h1>);
// }
// const Component=()=>{
//     return (<div className="title">
//         <Component1/>
//         <Component2/>
//         <Component3/>
//     </div>)
// }
// const Logo=()=>{
//     return (
//         <img src={logo} alt="My Logo" width="200" height="150"/>
//     )
// }
// const SeacrBar=()=>{
//     return (
//         <form>
//             <input type="string" placeholder="Search.."/>
//             <button>Submit</button>
//         </form>
//     )
// }
// const User=()=>{
//     return (
//         <img src={user} width="100" height="100"/>
//     )
// }
// const Header=()=>{
//     return (
//         <div className="header">
//             <Logo/>
//             <SeacrBar/>
//             <User/>
//         </div>
//     )
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Header/>);
/*
header
    logo
    navitems
        home
        aboutus
        cart
body
    search-bar
    restaurantContainer
        restaurantCard

footer 
    copyright
    links
    address
    contact
*/
const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={logoFood} className="logo" width="100" height="100" />
      </div>
      <div className="navitemsContainer">
        <ul className="navItems">
          <li>Home</li>
          <li>AboutUs</li>
          <li>ContactUs</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const resObj = [
  {
    info: {
      id: "123456",
      name: "Pizza Paradise",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6def0f0f-9e6c-45c0-b5e6-05af750f27b5_795906.JPG",
      locality: "MG Road",
      areaName: "Central District",
      costForTwo: "₹400 for two",
      cuisines: ["Pizza", "Italian", "Fast Food"],
      avgRating: 4.3,
      avgRatingString: "4.3",
      totalRatingsString: "10K+ ratings",
      veg: false,
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3.5,
        slaString: "30 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
    },
  },
  {
    info: {
      id: "234567",
      name: "Burger Hub",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/acfcaacc-edf0-4189-8264-d614d312c0ee_740457.JPG",
      locality: "Park Street",
      areaName: "Downtown",
      costForTwo: "₹300 for two",
      cuisines: ["Burgers", "American", "Fast Food"],
      avgRating: 4.5,
      avgRatingString: "4.5",
      totalRatingsString: "15K+ ratings",
      veg: false,
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2,
        slaString: "25 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
    },
  },
  {
    info: {
      id: "345678",
      name: "Green Bites",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "Residency Road",
      areaName: "South Zone",
      costForTwo: "₹250 for two",
      cuisines: ["Healthy Food", "Salads", "Vegan"],
      avgRating: 4.7,
      avgRatingString: "4.7",
      totalRatingsString: "8K+ ratings",
      veg: true,
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.5,
        slaString: "20 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
    },
  },
  {
    info: {
      id: "456789",
      name: "Spice Kingdom",
      cloudinaryImageId: "rng/md/carousel/production/indian101",
      locality: "Brigade Road",
      areaName: "City Center",
      costForTwo: "₹500 for two",
      cuisines: ["Indian", "North Indian", "Biryani"],
      avgRating: 4.2,
      avgRatingString: "4.2",
      totalRatingsString: "12K+ ratings",
      veg: false,
      sla: {
        deliveryTime: 35,
        lastMileTravel: 4,
        slaString: "35 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
    },
  },
  {
    info: {
      id: "567890",
      name: "Chinese Dragon",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ba9f1f59-30d5-44de-afad-df6db8471ead_9648.jpg",
      locality: "Commercial Street",
      areaName: "East District",
      costForTwo: "₹350 for two",
      cuisines: ["Chinese", "Asian", "Thai"],
      avgRating: 4.4,
      avgRatingString: "4.4",
      totalRatingsString: "9K+ ratings",
      veg: false,
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2.8,
        slaString: "28 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
    },
  },
  {
    info: {
      id: "678901",
      name: "Dessert Delight",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/731001f1-f1c4-4f5f-849f-79a697cb0b72_390173.jpg",
      locality: "Lavelle Road",
      areaName: "West End",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Ice Cream", "Bakery"],
      avgRating: 4.6,
      avgRatingString: "4.6",
      totalRatingsString: "7K+ ratings",
      veg: true,
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.8,
        slaString: "22 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "25% OFF",
        subHeader: "UPTO ₹60",
      },
    },
  },
  {
    info: {
      id: "789012",
      name: "Sushi Station",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/acfcaacc-edf0-4189-8264-d614d312c0ee_740457.JPG",
      locality: "Indiranagar",
      areaName: "Uptown",
      costForTwo: "₹800 for two",
      cuisines: ["Japanese", "Sushi", "Asian"],
      avgRating: 4.8,
      avgRatingString: "4.8",
      totalRatingsString: "5K+ ratings",
      veg: false,
      sla: {
        deliveryTime: 40,
        lastMileTravel: 5.2,
        slaString: "40 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "15% OFF",
        subHeader: "UPTO ₹150",
      },
    },
  },
  {
    info: {
      id: "890123",
      name: "South Spice",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6def0f0f-9e6c-45c0-b5e6-05af750f27b5_795906.JPG",
      locality: "Jayanagar",
      areaName: "South Bangalore",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "Dosa", "Idli"],
      avgRating: 4.5,
      avgRatingString: "4.5",
      totalRatingsString: "11K+ ratings",
      veg: true,
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3,
        slaString: "25 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "35% OFF",
        subHeader: "UPTO ₹70",
      },
    },
  },
  {
    info: {
      id: "901234",
      name: "Pasta Palace",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/7bd350a8-55e7-459b-83a2-e250e670d194_14558.JPG",
      locality: "Koramangala",
      areaName: "Tech Hub",
      costForTwo: "₹450 for two",
      cuisines: ["Italian", "Pasta", "Continental"],
      avgRating: 4.1,
      avgRatingString: "4.1",
      totalRatingsString: "6K+ ratings",
      veg: false,
      sla: {
        deliveryTime: 32,
        lastMileTravel: 3.8,
        slaString: "32 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "45% OFF",
        subHeader: "UPTO ₹90",
      },
    },
  },
];
const RestaurantCard = (props) => {
  const { resData } = props;
  const {name,cloudinaryImageId,avgRating,cuisines} = resData;

  return (
    <div className="restaurantCard">
      <div className="imageContainer">
        <img className="restaurantImage" src={cloudinaryImageId} />
      </div>
      <div className="restaurantDetails">
        <h3 className="title">{name}</h3>
        {console.log(cuisines)
        }
        <h4 className="cuisine">{cuisines.join(", ")}</h4>
        <h4 className="rating">{avgRating}</h4>
        <h4 className="time">{resData.sla.deliveryTime}</h4>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="searchContainer">
        <input className="searchBar" placeholder="Search Restaurants" />
      </div>
      <div className="restaurantContainer">
        {resObj.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {/* //footer  */}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
