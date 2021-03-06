// var userName = 'chris';
// var displayName = 'ChrisDisplay';
// var conversationId = 'CON-37f8d55c-f7b0-40c2-b907-c8e84e7736a2';
// var clientToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzM3NjY3MTAsImp0aSI6IjNhNmUxODA3LWFjN2QtNDM1NC04YmIxLTE2ZTY4ZWMyOWJkZSIsImV4cCI6MTU3Mzg1MzExMCwic3ViIjoiY2hyaXMiLCJhY2wiOnsicGF0aHMiOnsiLyovdXNlcnMvKioiOnt9LCIvKi9jb252ZXJzYXRpb25zLyoqIjp7fSwiLyovc2Vzc2lvbnMvKioiOnt9LCIvKi9kZXZpY2VzLyoqIjp7fSwiLyovaW1hZ2UvKioiOnt9LCIvKi9tZWRpYS8qKiI6e30sIi8qL2FwcGxpY2F0aW9ucy8qKiI6e30sIi8qL3B1c2gvKioiOnt9LCIvKi9rbm9ja2luZy8qKiI6e319fSwiYXBwbGljYXRpb25faWQiOiIwZGU1MzNmZi1lM2Q2LTRlODMtODYxYi05YTk0NjNiMTQ0M2UifQ.P2baOMvLBWaBYBXDy2EvWH5SIC_c3rRrbAMQEAdapTXO3Uo43dzIxkNZkIWMeW-ouNOgAfNrc5MZMxVyfmT4C1Hf6r6oCn8wpx9mB0d9f4mbf-Qxlf-z7O3qFRNAiQ2yq_e8oUpFZZ_hANPedqJPnQ2HnqQcYnoA1WlzqzrufLDsQCvYIIj9doJTIG4Keg3d_1mA-mk7dibv__uIWJiKA3VzmWStDWq8bpxRPM8RO_CZ6v0XIG6N6xKeAYYnPFTiXgd6I9oQ7663fVpTyfcD8OVeO92kAC5b3BgiQLZjpwkpSngndpIWPtZsuX8a7Hcts3b-c83kXZmYlBHSKmJPmw";



class ChatApp {
  constructor() {
    this.messageTextarea = document.getElementById('messageTextarea');
    this.sendButton = document.getElementById('send');
    this.messages = document.getElementById('messages');
    this.messageFeed = document.getElementById('messageFeed');

    this.authenticateUser();
  }

  isFeedAtBottom() {
    return (this.messageFeed.offsetHeight+this.messageFeed.scrollTop)===this.messageFeed.scrollHeight;
  }

  scrollFeedToBottom() {
    this.messageFeed.scrollTop = this.messageFeed.scrollHeight;
  }

  authenticateUser() {
    this.joinConversation({
      name: userName,
      display_name: displayName,
      conversation_id: conversationId,
      client_token: clientToken
    });
  }

  joinConversation(user) {
    var { client_token, conversation_id } = user;

    console.log(client_token);

    client.application.getConversation(conversation_id)
      .then((conversation) => {
        console.log('*** Joined conversation', conversation);
        this.setupConversationEvents(conversation, user);
        this.setupUserEvents();
      })
      .catch(this.errorLogger);
  }

  setupConversationEvents(conversation, user) {
    this.conversation = conversation;

    conversation.on('text', (sender, message) => {
      console.log('*** Message received', sender, message)
      var feedAtBottom = this.isFeedAtBottom();
      this.messageFeed.innerHTML = this.messageFeed.innerHTML + this.senderMessage(user, sender, message);

      if (feedAtBottom) {
        this.scrollFeedToBottom();
      }
    })

    conversation.on("member:joined", (member, event) => {
      console.log(`*** ${member.user.name} joined the conversation`)
      var feedAtBottom = this.isFeedAtBottom();
      this.messageFeed.innerHTML = this.messageFeed.innerHTML + this.memberJoined(member, event);

      if (feedAtBottom) {
        this.scrollFeedToBottom();
      }
    })

    this.showConversationHistory(conversation, user)
  }

  showConversationHistory(conversation, user) {
    conversation
      .getEvents({ page_size: 20, order: 'desc' })
      .then((events_page) => {
        var eventsHistory = "";

        events_page.items.forEach((value, key) => {
          if (conversation.members.get(value.from)) {
            switch (value.type) {
              case 'text':
                eventsHistory = this.senderMessage(user, conversation.members.get(value.from), value) + eventsHistory
                break;
              case 'member:joined':
                eventsHistory = this.memberJoined(conversation.members.get(value.from), value) + eventsHistory
                break;
            }
          }
        })

        this.messageFeed.innerHTML = eventsHistory + this.messageFeed.innerHTML

        this.scrollFeedToBottom();
      })
      .catch(this.errorLogger)
  }

  setupUserEvents() {
    this.sendButton.addEventListener('click', () => {
      this.conversation.sendText(this.messageTextarea.value)
        .then(() => {
            this.eventLogger('text')();
            this.messageTextarea.value = '';
        })
        .catch(this.errorLogger);
    })
  }

  errorLogger(error) {
    console.log(error)
  }

  eventLogger(event) {
    return () => {
      console.log("'%s' event was sent", event)
    }
  }

  memberJoined(member, event) {
    const date = new Date(Date.parse(event.timestamp))

    return `<li class="my-2 text-center">` +
    `<p>${member.display_name} joined the conversation <small>@ ${date.toLocaleString('en-GB')}</small></p>` +
    `</li>`;
  }

  senderMessage(user, sender, message) {
    const date = new Date(Date.parse(message.timestamp))
    var output = '';

    if (user.name === sender.user.name) {
      output = `<li class="media my-3">` +
      `<img src="https://api.adorable.io/avatars/64/${btoa(sender.display_name)}.png" class="mr-3" alt="" />` +
      `<div class="media-body">` +
      `<h5 class="mt-0 mb-1">${sender.display_name} <small>@ ${date.toLocaleString('en-GB')}</small></h5>` +
      message.body.text +
      `</div>` +
      `</li>`;
    } else {
      output = `<li class="media my-3">` +
      `<div class="media-body text-right">` +
      `<h5 class="mt-0 mb-1">${sender.display_name} <small>@ ${date.toLocaleString('en-GB')}</small></h5>` +
      message.body.text +
      `</div>` +
      `<img src="https://api.adorable.io/avatars/64/${btoa(sender.display_name)}.png" class="ml-3" alt="" />` +
      `</li>`;
    }

    return output;
  }
}

// c_a = new ChatApp();