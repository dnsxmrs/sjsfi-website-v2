# SJSFI Chatbot Testing Guide

## 🚀 How to Test and Run the Chatbot

### Prerequisites

1. **Node.js** (version 18 or higher)
2. **Gemini AI API Key** from [Google AI Studio](https://aistudio.google.com/app/apikey)

### Setup Steps

#### 1. Install Dependencies

```bash
cd "c:\Users\Lenovo Gaming\OneDrive - Polytechnic University of the Philippines\BSIT 3-2\All Programming\adet\sjsfi-website-v2"
npm install
```

#### 2. Configure Environment Variables

1. Open `.env.local` file in the root directory
2. Replace `your_actual_api_key_here` with your real Gemini API key:

```env
NEXT_PUBLIC_GEMINI_API_KEY=AIzaSy...your_actual_key_here
```

#### 3. Start the Development Server

```bash
npm run dev
```

#### 4. Open in Browser

- Navigate to: `http://localhost:3000`
- Look for the red chatbot button in the bottom-right corner

### 🧪 Testing Scenarios

#### Test 1: Basic Functionality

1. Click the chatbot button to open
2. Type "Hello" and press Enter
3. Verify the bot responds with a greeting

#### Test 2: Quick Responses

1. Click any of the quick response buttons
2. Verify the message appears in the input field
3. Send the message and check the response

#### Test 3: School-Specific Questions

Try these questions:

- "What are your admission requirements?"
- "What programs do you offer?"
- "What are your contact details?"
- "What are the school fees?"
- "Do you have job openings?"

#### Test 4: AI vs Mock Responses

To test with mock responses (no AI):

1. Open `src/app/services/chatbotService.ts`
2. Change `useAI: true` to `useAI: false` in DEFAULT_CONFIG
3. Restart the dev server

#### Test 5: Error Handling

1. Test with invalid API key (should fallback to mock responses)
2. Test with empty messages
3. Test with very long messages

### 🔧 Configuration Options

#### Chatbot Service Configuration

In `src/app/services/chatbotService.ts`, you can modify:

```typescript
const DEFAULT_CONFIG: ChatbotConfig = {
    responseDelay: 1000,        // Response delay in milliseconds
    enableTypingIndicator: true, // Show typing animation
    maxRetries: 3,              // Max retry attempts
    useAI: true,               // Use Gemini AI (false for mock responses)
};
```

#### Custom Configuration Example

```typescript
// In your component
const response = await getChatbotResponse("Hello", {
    useAI: false,              // Use mock responses only
    responseDelay: 500,        // Faster response
});
```

### 🐛 Troubleshooting

#### Common Issues

1. **Chatbot not responding**
   - Check browser console for errors
   - Verify API key is correct
   - Check network connectivity

2. **API Key errors**
   - Ensure API key starts with "AIzaSy"
   - Verify the key is enabled for Gemini API
   - Check quota limits in Google Cloud Console

3. **Build errors**
   - Run `npm install` to ensure all dependencies
   - Check TypeScript errors in the terminal

4. **Styling issues**
   - Clear browser cache
   - Check if Tailwind CSS is loading properly

### 📱 Testing on Different Devices

#### Desktop Testing

- Test on Chrome, Firefox, Safari, Edge
- Verify responsive design at different screen sizes

#### Mobile Testing

- Test on actual mobile devices
- Check touch interactions
- Verify chatbot positioning

### 🔍 Debug Mode

To enable detailed logging:

1. Open browser Developer Tools (F12)
2. Go to Console tab
3. Look for "Gemini AI Error:" messages for AI issues

### 📊 Performance Testing

#### Response Time Testing

- Mock responses: ~1 second
- AI responses: ~2-5 seconds (depends on Gemini API)

#### Load Testing

- Test multiple rapid messages
- Verify typing indicator behavior
- Check memory usage in long conversations

### 🚀 Production Deployment

Before deploying:

1. Test with production build: `npm run build && npm start`
2. Verify environment variables in production
3. Test with real API limits
4. Consider implementing rate limiting

### 🔐 Security Considerations

For production use:

1. Move API calls to server-side API routes
2. Implement rate limiting
3. Add input validation and sanitization
4. Monitor API usage and costs

### 📈 Monitoring

Things to monitor:

- API response times
- Error rates
- User engagement metrics
- API quota usage

---

## 🎯 Quick Start Commands

```bash
# Clone and setup (if starting fresh)
git clone <repository>
cd sjsfi-website-v2
npm install

# Add your API key to .env.local
echo "NEXT_PUBLIC_GEMINI_API_KEY=your_key_here" > .env.local

# Start development
npm run dev

# Open browser to test
start http://localhost:3000
```

## 📞 Support

If you encounter issues:

1. Check this guide first
2. Review console errors
3. Test with mock responses (useAI: false)
4. Verify API key and network connectivity
