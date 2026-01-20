const loadphone = async (searchText ) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayphones(phones);
}

const displayphones = phones => {
    const phonecontainer = document.getElementById('phonecontainer');
    phonecontainer.innerHTML = ''; // আগের results clear

    if (!phones || phones.length === 0) {
        phonecontainer.innerHTML = `<p class="text-center col-span-full">No phones found</p>`;
        return;
    }

    phones.forEach(phone => {
        console.log(phone);
        const phonecard = document.createElement('div');
        phonecard.classList = 'card bg-base-100 p-4 shadow-sm';
        phonecard.innerHTML = `
            <figure>
                <img src="${phone.image}" alt="${phone.phone_name}" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>Brand: ${phone.brand}</p>
                <div class="card-actions">
                    <button onclick="handleShowDetail('${phone.slug}');show_modal_detail.showModal()" class="btn btn-primary">show details</button>
                </div>
            </div>
        `;
        phonecontainer.appendChild(phonecard);
    });
}

// search function
const handleSearch = () => {
    const searchInput = document.getElementById('searchInput');
    const searchText=searchInput.value;
   console.log(searchText);
   loadphone(searchText);
}
const handleShowDetail=async(id)=>{
    console.log(id)
    const res=await fetch(`https://openapi.programming-hero.com/api/phones?search=${id}`)
    const data=await res.json();

const phone =data.data;
 showPhoneDetails(phone)
 

}
const showPhoneDetails = (phone) => {
  console.log(phone);

  const phoneName = document.getElementById("phone-name");
  phoneName.innerText = phone.phone-name;
 show_modal_detail.showModal()

  
};

// initial load
//loadphone();
