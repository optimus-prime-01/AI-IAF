# AI Mock Interviewer

AI Mock Interviewer is an innovative web application designed to simulate real-world mock interviews using AI. With seamless user authentication, an intuitive interface, and integration with advanced AI, this project serves as an invaluable tool for interview preparation.



## Features

- **AI-Powered Mock Interviews**  
  Leverage Google Gemini AI to simulate realistic interview scenarios, evaluate responses, and provide personalized feedback.
  
- **Seamless Authentication**  
  User authentication is powered by Clerk, ensuring secure and efficient access control.

- **Intuitive UI**  
  Built with Shadcn UI, the application boasts a modern and responsive interface for a seamless user experience.

- **Data Management**  
  All user progress, interview analytics, and configurations are stored securely in Google Firebase Firestore.

- **Dynamic Interview Customization**  
  Customize interviews based on job roles, difficulty levels, and domains.

## Project Structure

```mermaid
graph TD
    subgraph Project["AI Mock Interviewer Project"]
        Root["ai_mock_inter_IAF/"] --> Config["Configuration Files"]
        Root --> AIApp["AI-Mock-Interviewer/"]
        Root --> Firebase["Firebase Components"]
        
        Config --> |Includes| ConfigFiles["/.firebaserc\n/.gitignore\n/.vscode"]
        
        AIApp --> AppConfig["App Configuration"]
        AIApp --> Source["src/"]
        AIApp --> Public["public/"]
        AIApp --> Dist["dist/"]
        
        AppConfig --> |Contains| AppConfigFiles[".env.local\npackage.json\ntsconfig.json\netc."]
        
        Public --> |Contains| Assets["Images & SVGs"]
        Dist --> |Build output| BuildAssets["Compiled assets"]
        
        Source --> Components["components/"]
        Source --> Routes["routes/"]
        Source --> Config2["config/"]
        Source --> Handlers["handlers/"]
        Source --> Layout["layout/"]
        Source --> Lib["lib/"]
        Source --> Provider["provider/"]
        Source --> Types["types/"]
        Source --> Views["views/"]
        
        Components --> UI["ui/"]
        Components --> FunctionalComponents["Custom Components\nform-mock-interview.tsx\nrecord-answer.tsx\netc."]
        
        UI --> |Contains| UIComponents["button.tsx\ncard.tsx\ninput.tsx\netc."]
        
        Routes --> |Contains| Pages["dashboard.tsx\nhome.tsx\nsign-in.tsx\nmock-interview-page.tsx\netc."]
        
        Firebase --> |Contains| FirebaseFiles["firebase.json\nfirestore.rules\nstorage.rules"]
        Firebase --> Functions["functions/"]
    end
