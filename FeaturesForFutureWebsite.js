/* Hovering Images

    const imgs = document.querySelectorAll('.site-img');

    imgs.forEach(img => {
        img.addEventListener('mouseover', (event) => {
            const captionElement = event.target.parentElement.children[1];
            captionElement.className = 'show-img-overlay';
        })
    })

    imgs.forEach(img => {
        img.addEventListener('mouseout', (event) => {
            const captionElement = event.target.parentElement.children[1];
            captionElement.className = 'hide-img-overlay';
        })
    })
*/

/* time button
    //HTML
        <div id="dateComponent"></div>
        <!-- <button onclick="renderDate()">Click for Date</button> -->
        <button id="dateButton">Click for Date</button>
    // JavaScript
        const dateElement = document.getElementById('dateComponent');
        const dateButton = document.getElementById('dateButton')

        // renderDate = () => {
        //   dateElement.innerHTML = Date();
        // } 

        dateButton.addEventListener('click', (event) => {
            dateElement.innerHTML = Date();
        })
*/

/* Toggle Btn
    // HTML

        <button id="toggleBtn">Toggle Me</button>

        <div id="mainHeading" class="hidden">
            Hi there
        </div>

    // JavaScript
        const heading = document.getElementById('mainHeading');
        const btn = document.getElementById('toggleBtn');
        btn.addEventListener('click', (e) => {
            heading.classList.toggle('hidden');
        });
*/

/* Text counter

    // HTML
        <input type="text" class="msgInput">

        <div>
            Characters left <span class="msgCounter">144</span>
        </div>

        <input type="text" class="tags" />

        <div>
            Characters left <span class="tagsCounter">42</span>
        </div>

    // JavaScript
  const getCurrentContentLength = (content, max) => {
    const maxLength = max;
    if (content.length > maxLength) {
      return false;
    } else {
      return true;
    }
  }
  const msgInput = document.querySelector('.msgInput');
  const msgCounter = document.querySelector('.msgCounter');
  const tagsInput = document.querySelector('.tags');
  const tagsCounter = document.querySelector('.tagsCounter');

  // Nope
  // msgInput.addEventListener('keyup', (e) => {
  //   console.log(e);
  // });

  const textFieldLengthValidator = (textField, counter, maxCount) => {
    textField.onkeyup = function () {
      counter.innerHTML = maxCount - this.value.length;

      if (!getCurrentContentLength(this.value, (maxCount - 1))) {
        textField.disabled = true;
      }
    }
  }

  textFieldLengthValidator(msgInput, msgCounter, 144);
  textFieldLengthValidator(tagsInput, tagsCounter, 42);
*/

/* Input

    // HTML
        <div class="widget">
            <input type="text" id="chat-input">
            <button id="msgBtn" onclick="sendMessage()">Submit</button>
            <button onclick="clearMessages()">Clear Messages</button>
            <div class="chat-wrapper"></div>
        </div>

    // JavaScript
        function sendMessage() {
            const newDiv = document.createElement("div");
            newDiv.classList.add('chatMsg');
            let chatInput = document.querySelector('#chat-input').value;
            const newContent = document.createTextNode(chatInput);
            newDiv.appendChild(newContent);

            const widget = document.querySelector(".widget");
            let chatWrapper = document.querySelector(".chat-wrapper");
            document.querySelector('#chat-input').value = '';

            if (document.querySelectorAll('.chatMsg').length > 0) {
            chatWrapper = document.querySelectorAll('.chatMsg')[0];
            }
            widget.insertBefore(newDiv, chatWrapper);
        }

        function clearMessages() {
            const messages = document.querySelectorAll('.chatMsg');
            messages.forEach(message => message.remove())
        }
*/

/* 

    // HTML

    // JavaScript


*/

/* 

    // HTML

    // JavaScript


*/

/* 

    // HTML

    // JavaScript


*/

/* 

    // HTML

    // JavaScript


*/

/* 

    // HTML

    // JavaScript


*/

/* 

    // HTML

    // JavaScript


*/

