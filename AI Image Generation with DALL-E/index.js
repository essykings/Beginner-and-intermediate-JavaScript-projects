$("#KeyModal").on("shown.bs.modal", function () {
    const saveButton = document.querySelector("#KeyModal .btn-primary");
    const apiKeyInput = document.querySelector("#apikey");
  
    saveButton.addEventListener("click", function () {
      const apiKeyValue = apiKeyInput.value;
      localStorage.setItem("API_KEY", apiKeyValue);
      $("#KeyModal").modal("hide");
    });
  });
  
  const images = [
    "https://essykings.github.io/JavaScript/cat-mouse.png",
    "https://essykings.github.io/JavaScript/image1.png",
    "https://essykings.github.io/JavaScript/image2.png",
    "https://essykings.github.io/JavaScript/image3.png",
    "https://essykings.github.io/JavaScript/image9.png",
    "https://essykings.github.io/JavaScript/image5.png",
    "https://essykings.github.io/JavaScript/image6.png",
    "https://essykings.github.io/JavaScript/cat.png",
  ];
  const imageGallery = document.getElementById("gallery");
  const promptInp = document.getElementById("prompt");
  promptInp.addEventListener("input", function () {
    imageGallery.innerHTML = "";
  });
  const message = document.getElementById("message");
  
  const generateForm = document.getElementById("generate-form");
  const spinner = document.getElementById("spinner");
  
  generateForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const prompt = document.getElementById("prompt").value;
    const key = localStorage.getItem("API_KEY");
  
    if (!prompt) {
      displayMessage("Please enter a prompt");
      return;
    }
  
    if (!key) {
      displayMessage(
        "Please add your API KEY. The key will be stored locally in your browser."
      );
      return;
    }
  
    fetchImage(prompt, key);
  });
  
  
  function displayMessage(msg) {
    message.textContent = msg;
    message.style.display = "block";
    setTimeout(function () {
      message.style.display = "none";
    }, 3000);
  }
  
  const fetchImage = async (prompt, API_KEY) => {
    const url = "https://api.openai.com/v1/images/generations";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "dall-e-3",
        prompt,
        n: 1,
        size: "1024x1024",
      }),
    };
  
    try {
      spinner.style.display = "block";
      const response = await fetch(url, options);
      
      if (!response.ok) {
        const error = await response.json();
        const message = error.error.message ? error.error.message : "Failed to fetch image";
        displayMessage(message);
        return;
      }
  
      const result = await response.json();
      const imageUrl = result.data[0].url;
      
      displayImage(imageUrl);
    } catch (error) {
      displayMessage("There was an error, please try again");
    } finally {
      spinner.style.display = "none";
    }
  };
  
  
  function displayImage(image) {
    
    const imageMarkup = `
    <div class="row justify-content-center">
        <div class="col d-flex justify-content-center">
            <img src="${image}" class="img-fluid" alt="Placeholder Image">
        </div>
    </div>`;
  
    imageGallery.innerHTML = imageMarkup;
    
  }
  function displayImages() {
    const imageMarkup = images
      .map((image) => {
        return `
          <div class="col-12 col-sm-6 col-md-3 mb-4 position-relative" id ="image-container ">
            <img src="${image}" class="img-fluid" alt="Placeholder Image">
          </div>
          `;
      })
      .join("");
  
    imageGallery.innerHTML = imageMarkup;
  }
  
  displayImages();
  