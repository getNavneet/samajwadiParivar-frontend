import React, { useState, useEffect,useRef } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./loader.css";
const statesAndCities = {
  "Uttar Pradesh": [
    "Agra", "Aligarh", "Prayagraj", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", 
    "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", 
    "Basti", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", 
    "Etawah", "Faizabad (Ayodhya)", "Farrukhabad", "Fatehpur", "Firozabad", "Noida", 
    "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", 
    "Jaunpur", "Jhansi", "Kannauj", "Kanpur", "Kasganj", "Kaushambi", "Kushinagar", "Lakhimpur Kheri", 
    "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", 
    "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Raebareli", "Rampur", 
    "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", 
    "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"
  ],
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
  Karnataka: ["Bengaluru", "Mysuru", "Hubballi", "Mangaluru"],
  Rajasthan: ["Jaipur", "Udaipur", "Jodhpur", "Kota"],
};

const FormComponent = () => {
 
  const templateId = useSelector((state) => state.appState.stringValue); //access template id
  const isTrue = useSelector((state) => state.appState.isTrue); //access template id
  const [req,setReq]=useState("")
  const [loading,setloading]=useState(false)
  const ref = useRef(null);


  const cardRef = useRef(null); // Create a reference for scrolling

//timer functionality 
const [countdown, setCountdown] = useState(10);

useEffect(() => {
  if (loading) {
    setCountdown(8); // Reset countdown whenever loading becomes true
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer); // Clear the timer when countdown ends
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer when component unmounts
  }
}, [loading]);
  // Function to handle image download
  const handleDownload = async () => {
    try {
    
  
      // Fetch the image as a Blob
      const response = await fetch(generatedCardUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const blob = await response.blob();
  
      // Create a temporary URL for the Blob
      const blobUrl = URL.createObjectURL(blob);
  
      // Create a link element
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `${formData.name}.png`; // Desired file name
  
      // Trigger the download
      document.body.appendChild(link);
      link.click();
  
      // Cleanup
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Failed to download image:", error);
      alert("An error occurred while downloading the image. Please try again.");
    } 
  }


  
 
   

  
    // Handle scrolling when string changes
    useEffect(() => {
      if (templateId) {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
        setReq("greeting");    

       if(templateId=='member'){
        setReq("member");  
       }
      }
    }, [templateId,isTrue]);


  const [formData, setFormData] = useState({
    name: '',
    state: 'Uttar Pradesh',
    city: '',
    phone: "",
    templateId: '',
    photo: null,
});



const [generatedCardUrl,setGeneratedCardUrl]=useState("");
const [error, setError] = useState("");
  const [filteredStates, setFilteredStates] = useState(Object.keys(statesAndCities));
  const [filteredCities, setFilteredCities] = useState(statesAndCities["Uttar Pradesh"]);
  const [searchState, setSearchState] = useState("");
  const [searchCity, setSearchCity] = useState("");



  // useEffect(() => {
  //   // Scroll to the component when it renders
  //   if (generatedCardUrl && cardRef.current) {
  //     cardRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [generatedCardUrl]);



  // Handle state changes to update city options
  useEffect(() => {
    const cities = statesAndCities[formData.state] || [];
    setFilteredCities(cities);
    setFormData((prev) => ({ ...prev, city: cities[0] || "" }));
  }, [formData.state]);

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMediaChange = (e) => {
    setFormData((prev) => ({ ...prev, photo: e.target.files[0] }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Validations
    if (!formData.name) {
      setError("Name is required");
      return;
    }
    if (formData.name.length > 14) {
      setError("Please enter a name of 14 characters or less");
      return;
    }
    
    if (formData.phone && !/^[0-9]{10}$/.test(formData.phone)) {
      setError("please enter correct phone");
      return;
    }
    if (!formData.city) {
      setError("City is required");
      return;
    }
    if (!formData.photo) {
      setError("Please select an image");
      return;
    }

    //Submit the form 
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name.toLocaleUpperCase());
    formDataToSend.append("state", formData.state);
    formDataToSend.append("city", formData.city);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append('templateId', templateId);
    formDataToSend.append("photo", formData.photo);

    try {
      setloading(true)
      const response = await axios.post(`https://samajwadi-backend-production.onrender.com/api/v1/${req}`, formDataToSend, {
          headers: { 'Content-Type': 'multipart/form-data' }
      });
      setGeneratedCardUrl(response.data.imageUrl);
      setError(null);
      setloading(false)
  } catch (error) {
      console.error('Error generating card:', error);
      setError(null);
  }
  finally{
    setError(null);
  }
  };

  const handleStateSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchState(value);
    const filtered = Object.keys(statesAndCities).filter((state) =>
      state.toLowerCase().includes(value)
    );
    setFilteredStates(filtered);
  };

  const handleCitySearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchCity(value);
    const filtered = (statesAndCities[formData.state] || []).filter((city) =>
      city.toLowerCase().includes(value)
    );
    setFilteredCities(filtered);
  };

  return (
    <>
    <div ref={ref} className="flex align-middle justify-center content-centerbg-gray-200 p-6 rounded shadow-md mt-6">
      <h2 className="mx-auto text-lg font-bold">Please enter details to Create card</h2>
      
    </div>
    <form  onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10 pt-10 p-6 bg-white shadow-md rounded-md space-y-6">
  {/* Name Field */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Name: <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Enter your name"
      required
      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* State Field */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">State:</label>
    <input
      type="text"
      value={searchState}
      onChange={handleStateSearch}
      placeholder="Search state..."
      className="w-full border border-gray-300 rounded-md px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <select
      name="state"
      value={formData.state}
      onChange={handleChange}
      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {filteredStates.map((state) => (
        <option key={state} value={state}>
          {state}
        </option>
      ))}
    </select>
  </div>

  {/* City Field */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">City:</label>
    <input
      type="text"
      value={searchCity}
      onChange={handleCitySearch}
      placeholder="Search city..."
      className="w-full border border-gray-300 rounded-md px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <select
      name="city"
      value={formData.city}
      onChange={handleChange}
      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {filteredCities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
  </div>

  {/* Contact Number Field */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Contact Number (Optional):
    </label>
    <input
      type="number"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      placeholder="Enter contact number"
      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Media Field */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Media (Image only): <span className="text-red-500">*</span>
    </label>
    <input
      type="file"
      name="photo"
      accept="image/*"
      onChange={handleMediaChange}
      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
      {loading?'generating image....':'Submit '}
  </button>

  {/* Error Message */}
  {error && (
    <p className="text-red-500 font-medium mt-2 animate-bounce">
      *{error}
    </p>
  )}

{loading && (
          <div className="flex flex-col justify-center items-center ">
            <h1 className="mt-6"> loading ... </h1>
            <h1 className="mt-6 mx-auto"> please wait <br/>
              <span className="text-3xl text-red-700">{countdown > 0 ? ` ${countdown} seconds...` : "Almost there!"}</span>
            
               </h1>
            <div className="loader  m-4"></div> 
          </div>
        )}
</form>
  { generatedCardUrl && (
   <div
   ref={cardRef}
   className="generated-card p-6 bg-gray-100 rounded-lg shadow-lg mx-auto max-w-lg text-center space-y-4"
 >
   <h3 className="text-lg font-bold text-gray-800">
     Your Generated Image
   </h3>
   <img
     src={generatedCardUrl}
     alt="Generated ID Card"
     className="w-full rounded-md shadow"
   />
  <button  
          onClick={handleDownload}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          type="button" id="secondaryButton"
        >
          Download Image
        </button>
 </div>
)
}
</>
  );
};

export default FormComponent;
