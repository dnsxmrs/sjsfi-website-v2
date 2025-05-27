# 🎯 CHATBOT TESTING CHECKLIST

## ✅ Setup Complete

- [x] API Key configured in .env.local
- [x] Development server started
- [x] Browser opened at <http://localhost:3000>

## 🧪 Now Test These Features

### **1. Basic Chatbot Functionality**

- [x] Look for the red chatbot button in bottom-right corner
- [x] Click the button to open the chatbot window
- [x] Verify the SJSFI logo appears in the header
- [x] Check if "Hello, welcome to SJSFI!" message is displayed

### **2. Quick Response Buttons**

- [x] Click "Admission Requirements" button
- [x] Verify text appears in input field
- [x] Send the message and check AI response //TODO: (need to improve for html markups like '*')
- [x] Try other quick responses: "School Programs", "Contact Information", etc.

### **3. AI-Powered Responses**

Test these questions (type them manually):

- [x] "What programs do you offer?"
- [x] "How can I enroll my child?"
- [x] "What are your school fees?"
- [x] "Where is the school located?"
- [x] "Do you have job openings?"
- [x] "What are your office hours?"

### **4. Typing Indicator**

- [x] Send a message and watch for the typing animation (3 dots)
- [x] Verify it disappears when response arrives
- [x] Check the bot avatar appears next to typing indicator

### **5. Auto-Scroll Feature**

- [x] Send multiple messages to fill the chat window
- [x] Verify chat automatically scrolls to bottom
- [x] Check scroll behavior when opening/closing chat

### **6. UI/UX Elements**

- [x] Test chat window opens/closes smoothly
- [x] Verify responsive design (resize browser window)
- [x] Check hover effects on buttons
- [x] Test Enter key to send messages
- [x] Verify close button (X) works

### **7. Error Handling**

- [x] Send empty message (should be blocked)
- [x] Send very long message
- [x] Check browser console for any errors (F12)

## 🔧 If Something Goes Wrong

### **Chatbot Not Responding:**

1. Check browser console (F12) for errors
2. Verify API key in .env.local file
3. Check internet connection
4. Try refreshing the page

### **API Errors:**

1. Ensure API key starts with "AIzaSy"
2. Check if you have Gemini API quota remaining
3. Try switching to mock mode (see below)

### **Switch to Mock Responses (Fallback):**

If AI isn't working, you can test with mock responses:

1. Open `src/app/services/chatbotService.ts`
2. Find line with `useAI: true`
3. Change to `useAI: false`
4. Refresh browser

## 📊 Expected Results

### **AI Mode (useAI: true):**

- Responses should be contextual and natural
- Should mention SJSFI school information
- Response time: 2-5 seconds
- Responses vary based on context

### **Mock Mode (useAI: false):**

- Responses are predefined based on keywords
- Faster response time: ~1 second
- Consistent responses for same keywords

## 🎉 Success Indicators

✅ **Chatbot is working if:**

- Button appears and opens chat window
- Typing indicator shows and disappears
- Bot responds to messages
- Quick responses work
- Auto-scroll functions properly
- No console errors

## 📱 Additional Testing

### **Mobile Testing:**

- Open on mobile device
- Test touch interactions
- Verify responsive layout

### **Performance:**

- Send rapid messages
- Check memory usage
- Test long conversations

## 🚀 Ready for Production

When everything works:

1. All checkboxes above are ✅
2. No console errors
3. Smooth user experience
4. AI responses are appropriate
5. Fallback to mock responses works

---

**Need Help?**

- Check CHATBOT_TESTING_GUIDE.md for detailed troubleshooting
- Review browser console for specific error messages
- Test with both AI and mock modes
