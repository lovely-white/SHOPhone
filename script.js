let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let body = document.querySelector('body');
let listCard = document.querySelector('.listCard');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
  body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
  body.classList.remove('active');
});
let products = [
  {
    id: 1,
    name: 'iPhone 15',
    image: 'phone/iphone15.jfif',
    price: 47990,
    description: 'a 6.7-inch (170 mm) display with the same technology at a resolution of 2796×1290 pixels and a pixel density of about 460 PPI',
  },
  {
    id: 2,
    name: 'iPhone 14',
    image: 'phone/iphone14.jfif',
    description: 'The iPhone 14 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle',
    price: 63090,
  },
  {
    id: 3,
    name: 'Google Pixel 7 Pro',
    image: 'phone/google pixel 7 pro.jpg',
    description: 'The 5-inch screen on the Pixel comes in a body measuring 5.7-inches tall, 2.8-inches wide, 0.3-inches thick, and weighs 5 ounces.',
    price: 21995
  },
  {
    id: 4,
    name: 'Black Shark 5 Pro',
    image: 'phone/Black Shark 5 Pro.jpg',
    description: 'Xiaomi Black Shark 5 Pro is a champ ,It has a top-end processor, useful gaming mode and retractable triggers that will deliver a huge edge in competitive games. However, its rough edges emerge when you try to use it as an everyday mobile',
    price: 37991,
  },
  {
    id: 5,
    name: 'Samsung Galaxy S',
    image: 'phone/Samsung Galaxys22ultra.jpeg',
    description: 'The Samsung Galaxy S series is a line of flagship Android smartphone and tablet computer produced by Samsung Electronics. In conjunction with the foldable Galaxy Z series, the lineup serves as Samsungs flagship smartphone lineup',
    price: 84911
  },
  {
    id: 6,
    name: 'Models Xiaomi 14 Ultra',
    image: 'phone/ModelsXiaomi 14 Ultra.jpg',
    description: 'Xiaomi 14 Ultra features a Xiaomi-custom C8 display panel with WQHD+ resolution and 1-120Hz LTPO technology, offering higher light efficiency and lower power consumption',
    price: 12199
  },
  {
    id: 7,
    name: 'Poco x6 Pro 5g',
    image: 'phone/poco x6 pro 5g.jpeg',
    description: 'The POCO X6 Pro 5G is a TIER smartphone that runs HyperOS and is powered by MediaTek Dimensity 8300 Ultra CPU and Mali-G615 GPU. The gadget has 8GB and 12GB of RAM and 256GB and 512GB of internal storage. It comes with a 64 + 8 + 2MP rear camera setup and a 16MP selfie camera',
    price: 16411
  },
  {
    id: 8,
    name: 'Vivo X100 Ultra',
    image: 'phone/Vivo X100 Ultra.jpg',
    description: 'The vivo X100 Ultra features a 50MP primary camera with a Sony LYT-900 1-inch type sensor. It also boasts a 50MP wide-angle lens enhanced with vivo',
    price: 67118
  },
  {
    id: 9,
    name: 'Nubia Red Magic 9 Pro ',
    image: 'phone/Nubia Red Magic 9 Pro.jpg',
    description: 'The REDMAGIC 9 Pro is a flagship smartphone that runs Android 14 and REDMAGIC OS 9 and is powered by Qualcomm Snapdragon 8 Gen 3 CPU and Adreno 750 GPU. The gadget has 12GB and 16GB of RAM and 256GB and 512GB of internal storage. It comes with a 50 + 50 + 2MP rear camera setup and a 16MP selfie camera',
    price: 56122
  },
  {
    id: 10,
    name: 'Oneplus 12r',
    description: 'The OnePlus 12R comes with a 6.78-inch display, bigger than the 6.1-inch Pixel 7A and 6.4-inch Galaxy A54 screens. Resolution is slightly higher than 1080p, which feels like just enough pixels to cover such a massive display.',
    image: 'oneplus 12r.jpg',
    price: 43090
  },
  {
    id: 11,
    name: 'OPPO Find X7',
    image: 'phone/OPPO Find X7 .jpg',
    description: 'The Find X7 features a curved 6.78 in (172 mm) display, while the Find X7 Ultra has a slightly larger 6.82 in (173 mm) screen with a higher 1440p resolution. Both display systems are 10-bit HDR10+ capable. The Find X7 is IP65 protected, while the Find X7 Ultra features IP68 water and dust resistance.',
    price: 32119
  },
  {
    id: 12,
    name: 'iQOO 12',
    image: 'phone/iQOO 12.jpeg',
    description: 'The Vivo iQOO 12 has a sleek aluminum alloy design and thin 8.35mm body that fits nicely in the hand. It comes in two colors, The 6.78" AMOLED screen has a resolution of 1260x2800 (UHD), a refresh rate of 144 Hz, a maximum brightness of 1400 cd/m2, and 8000000:1 contrast ratio.',
    price: 36311
  },
  {
    id: 13,
    name: 'Xiaomi 14',
    image: 'phone/Xiaomi 14.jpeg',
    description: 'Xiaomi 14, exponentially upgraded. 6.36" golden size with ultra-thin bezel design. Leica Summilux optical lens has a large aperture making photos lighter, brighter, and clearer. Customized Light Fusion 900 image sensor for a 13.5EV high dynamic range.',
    price: 89990
  },
  {
    id: 14,
    name: 'Motorola Edge 40 5G',
    image: 'phone/Motorola Edge 40 5G.jpeg',
    description: 'Discover the Motorola Edge 40 5Gs advanced features: 8GB RAM, 256GB storage, and dual SIM slots. Immerse yourself in a 6.55-inch Full HD+ display with a 144Hz refresh rate for seamless scrolling, streaming, and gaming. Capture stunning moments with a 50MP camera featuring OIS and f/1.4 aperture.',
    price: 34511
  },
  {
    id: 15,
    name: 'Redmagic 8 Pro',
    image: 'phone/Redmagic 8 Pro.jpeg',
    description: 'Powered by Snapdragon 8 Gen 2 Mobile Platform Up your game with the most powerful gaming smartphone from REDMAGIC yet. Play the most demanding games with ease with the powerful Snapdragon 8 Gen 2 chipset and enjoy a truly immersive gaming experience with its large 6.8-inch.',
    price: 42192
  }
]

let listCart = {};

function initApp() {
  products.forEach((product) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
      <img src="${product.image}">
      <div class="title">${product.name}</div>
      <div class="price">$${product.price.toLocaleString()}</div>
      <div class="description">${product.description}</div>
      <button onclick="addToCart(${product.id})">Add to cart</button>
    `;
    list.appendChild(newDiv);

    newDiv.addEventListener('mouseenter', () => {
      const description = newDiv.querySelector('.description');
      description.style.display = 'block';
    });


    newDiv.addEventListener('mouseleave', () => {
      const description = newDiv.querySelector('.description');
      description.style.display = 'none';
    });

  });
}

initApp();

function addToCart(id) {
  if (!listCart[id]) {
    listCart[id] = { ...products.find(product => product.id === id), quantity: 1 };
  } else {
    listCart[id].quantity++;
  }
  showCartItems();
}

function showCartItems() {
  listCard.innerHTML = '';
  let count = 0;
  let totalPrice = 0;
  Object.values(listCart).forEach((item) => {
    totalPrice += item.price * item.quantity;
    count += item.quantity;
    let newDiv = document.createElement('div');
    newDiv.innerHTML =
      `
      <div class="cart-container">
        <img src="${item.image}" >
        <hr>
        <div> ${item.name} </div>
        <div> $${item.price.toLocaleString()} </div>
        <div class="cart-button">
          <button onclick="decreaseQuantity(${item.id})">-</button>
          <span> ${item.quantity} </span>
          <button onclick="increaseQuantity(${item.id})">+</button>
        </div>
      </div>
    `;
    listCard.appendChild(newDiv);
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}

function increaseQuantity(id) {
  listCart[id].quantity++;
  showCartItems();
}

function decreaseQuantity(id) {
  if (listCart[id].quantity > 1) {
    listCart[id].quantity--;
  } else {
    delete listCart[id];
  }
  showCartItems();
}


