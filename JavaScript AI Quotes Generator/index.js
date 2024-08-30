$("#myModal").on("shown.bs.modal", function () {
  
    const saveButton = document.querySelector("#myModal .btn-primary");
    const apiKeyInput = document.querySelector("#apikey");
  
    saveButton.addEventListener("click", function () {
      const apiKeyValue = apiKeyInput.value;
      localStorage.setItem("API_KEY", apiKeyValue);
      $("#myModal").modal("hide");
    });
  });
  
  
  function displayError(valueText,messageText) {
    const message = document.querySelector(".message");
    if (valueText === "") {
    
      message.textContent = messageText;
      message.style.display = "block";
    }
    setTimeout(() => {
      message.textContent = "";
      message.style.display = "none";
    }, 4000);
    return;
  }
  
  
  const loader = document.getElementById("loader");
  const getData = async (prompt, API_KEY) => {
    
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: `Generate 10 quotes about ${prompt}`,
            },
          ],
          temperature: 0.7,
        }),
      });
      const data = await response.json();
      
      loader.style.display = "none";
      return data;
    } catch (error) {
      loader.style.display = "none";
      return data;
    }
  };
  
  const categories = [
    "motivation",
    "life",
    "hope",
    "funny",
    "love",
    "philosophy",
    "sadness",
  ];
  
  const quotes = document.querySelector(".quotes");
  
  const mappedCategories = categories.map((category) => {
    capitalizeText = category.charAt(0).toUpperCase() + category.slice(1);
    return `<div class="col-lg-3 col-md-3 col-sm-4  mb-2 px-2">
    <input
      type="radio"
      class="btn-check"
      name="mood"
      id="${category}"
      value="${category}"
      autocomplete="off"
    />
  
    <label
      class="btn btn-secondary d-flex align-items-center justify-content-center rounded-pill fs-5"
      for="${category}"
    >${capitalizeText}</label>
  </div>
  
        `;
  });
  
  quotes.innerHTML = mappedCategories.join("");
  const generateBtn = document.querySelector(".generate-btn");
  generateBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const key = localStorage.getItem("API_KEY");
    
  
    if (!key) {
    
  
      displayError("","Please add your OPENAI API Key, The KEY will be stored locally on your browser");
      return;
    }
  
    let prompt = "";
    let radio = document.querySelector('input[name="mood"]:checked');
  
    if (document.querySelector('input[name="mood"]:checked')) {
      radio = document.querySelector('input[name="mood"]:checked');
      prompt = radio.value;
    } else {
      CustomInput = document.getElementById("input");
      prompt = CustomInput.value;
      
    }
  
  
    if (!prompt) {
      displayError(prompt,'Please choose a category or provide a custom mood"');
      return;
    }
    
    loader.style.display = "block";
  
    const data = await getData(prompt, key);
  
    if (data.choices) {
      const container = document.getElementById("result");
  
      //    data from aync
      const quotesArray = data.choices[0].message.content.split("\n");
      
  
      const mappedArray = quotesArray.map((quote) => {
        const trimmedQuote = quote.replace(/^\d+\.|"$/g, "").trim();
  
        return ` <div class="col-sm-6 mt-5 mb-4">
              <div class="card">
                <div class="card-body">
                  <p class="card-text">${trimmedQuote}</p></div>
              </div>
          </div>
          `;
      });
  
      container.innerHTML = mappedArray.join("");
      
    } else {
      
      displayError("",data.error.message )
  
      
    }
    CustomInput.value = "";
  });
  
  const inputField = document.getElementById("input");
  inputField.addEventListener("input", (e) => {
    e.preventDefault();
  
    const radio = document.querySelector('input[name="mood"]:checked');
    if (radio) {
      radio.checked = false;
    }
  });
  
  