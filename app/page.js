import React from "react";
import Avatar from "./avatar";
import CartTable from "./cartTable";


{
  /**Creating one array to hold the data of contact cards */
}
const data = [
  {
    id: "sunita-abc123",
    name: "Sunita Kumar",
    job: "Electrical Engineer",
    email: "sunita.kumar@acme.co",
  },
  {
    id: "henderson-def456",
    name: "Henderson G. Sterling II",
    job: "Receptionist",
    email: "henderson-the-second@acme.co",
  },
  {
    id: "aio-ghi789",
    name: "Aoi Kobayashi",
    job: "President",
    email: "kobayashi.aoi@acme.co",
  },
];



{
  /**Creating one array to hold the data of avatars */
}
const avatarData = [
  {
    id: "001",
    alt: "person with curly hair and a black T-shirt",
  },
  {
    id: "002",
    alt: "person wearing a hijab and glasses",
  },
  {
    id: "003",
    alt: "person with short hair wearing a blue hoodie",
  },
  {
    id: "004",
    alt: "person with a pink mohawk and a raised eyebrow",
  },
];

{
  /**Creating one array to hold the data of shopping cart */
}
const items = [
  {
  id: 'hk123',
  imageSrc: 'https://sandpack-bundler.vercel.app/img/shopping-cart-coffee-machine.jpg',
  imageAlt: 'A pink drip coffee machine with the “Hello Kitty” logo',
  title: '“Hello Kitty” Coffee Machine',
  price: '89.99',
  inStock: true,
  },
  {
  id: 'co999',
  imageSrc: 'https://sandpack-bundler.vercel.app/img/shopping-cart-can-opener.jpg',
  imageAlt: 'A black can opener',
  title: 'Safety Can Opener',
  price: '19.95',
  inStock: false,
  },
  {
  id: 'cnl333',
  imageSrc: 'https://sandpack-bundler.vercel.app/img/shopping-cart-night-light.png',
  imageAlt: 'A kid-friendly nightlight sculpted to look like a dog astronaut',
  title: 'Astro-pup Night Light',
  price: '130.00',
  inStock: true,
  },
  {
  id: 'scb777',
  imageSrc: 'https://sandpack-bundler.vercel.app/img/shopping-cart-backpack.jpg',
  imageAlt: 'A pink backpack with a unicorn illustration',
  title: 'Magical Unicorn Backpack',
  price: '74.98',
  inStock: true,
  },
 ];

{
  /**Creating Myform Components*/
}
function MyForm() {
  return (
    <form>
      <label htmlFor="search-input">Search:</label>
      <input id="search-input" />
      <button aria-label="Submit" className="submit-btn">
        <img
          alt=""
          src="https://sandpack-bundler.vercel.app/img/arrow-right.svg"
        />
      </button>
    </form>
  );
}


{
  /*this is component*/
}
const GreetingFunction = ({ name = "fella" }) => {
  return (
    <>
      <p
        style={{
          fontSize: "1.25rem",
          textAlign: "center",
          color: "sienna",
        }}
      >
        Greetings, {name}!
      </p>
    </>
  );
};


{
  /**Creating reddanger button component */
}
const RedDangerButton = ({ buttonText = "dummyVal" }) => {
  return (
    <>
      <button
        style={{
          color: "white",
          backgroundColor: "red",
          borderRadius: "2px",
          textAlign: "center",
          margin: "10px",
        }}
      >
        {buttonText}
      </button>
    </>
  );
};


{
  /**Creating CrmCardDetails  component */
}
const CrmCardDetails = ({
  name = "fella",
  job = "fella job",
  email = "howFella@gmail.com",
}) => {
  return (
    <>
      <li className="contact-card">
        <h2>{name}</h2>
        <dl>
          <dt>Job</dt>
          <dd>{job}</dd>
          <dt>Email</dt>
          <dd>{email}</dd>
        </dl>
      </li>
    </>
  );
};


{
  /* creating buttons exercise */
}
const RedGreenButtonComponent = ({ buttonText, color }) => {
  return (
    <>
      <button
        style={{
          border: "2px solid",
          color: color,
          borderColor: color,
          background: "white",
          borderRadius: 4,
          padding: 16,
          margin: 8,
        }}
      >
        {buttonText}
      </button>
    </>
  );
};





const page = () => {
  
  
  {
    /*  
      return (
      <>
      <GreetingFunction name="anita" />
      <GreetingFunction name="vinita" />
      <GreetingFunction  />
      <MyForm/>
      <RedDangerButton/>
      </>
      );
    */
  }


  {
    /*
        return (
            <ul>
            <CrmCardDetails
                name="Sunita Kumar"
                job="Electrical Engineer"
                email="sunita.kumar@acme.co"
            />

            <CrmCardDetails
                name="Henderson G. Sterling II"
                job="Receptionist"
                email="henderson-the-second@acme.co"
            />

            <CrmCardDetails
                name="Sunita Kumar"
                job="Electrical Engineer"
                email="sunita.kumar@acme.co"
            />
            </ul>
        
        );
    */
  }



  {
    /* for button exercise
      return (
        <>
          <RedGreenButtonComponent buttonText="Cancel" color="red" />

          <RedGreenButtonComponent buttonText="Confirm" color="green" />

          <RedGreenButtonComponent buttonText="dummy" color="blue" />
        </>
      );
  */
  }


  {
    /* added for crm card detals using array of objects 
      return (
        <ul>
          {data.map((contact) => (
            <CrmCardDetails
            key={contact.id}
              name={contact.name}
              job={contact.job}
              email={contact.email}
            />
          ))}
        </ul>
      );
  */
  }

  

  // {
  //   /** Doing avatars exercise */
  // }
  // const url = "https://sandpack-bundler.vercel.app/img/avatars";
  // return (
  //   <div className="avatar-set">
  //     {avatarData.map((avatar) => (
  //        <Avatar
  //        key={avatar.id}
  //         src={`${url}/${avatar.id}.png`}
  //         alt={avatar.alt}
  //       />
  //     ))}
  //   </div>
  // );



  {
    /** Doing Shopping Cart exercise */
  }

  const inStock = items.filter( item => item.inStock);
  const outStock = items.filter( item => !item.inStock);
  return (
    <>
    <h2>Shopping cart</h2>
    <CartTable items={inStock} />
    <div className="actions">
      <button
         style={{
          color: "white",
          backgroundColor: "blue",
          borderRadius: "5px",
          textAlign: "center",
          padding:"9px",
          margin: "20px",
        }}
      >Continue checkout</button>
    </div>
   
    <h2>Sold out</h2>
    <CartTable items={outStock} />
    </>
    );
};

export default page;
