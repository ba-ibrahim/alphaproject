import Step from "./Step";


export default function Steps() { 

    const steps = [
        {
          title: "Step 1: Sign Up",
          description: "Navigate to the Sign Up page and fill in your details, including your email, username, and password.",
          link: "/signup"
        },
        {
          title: "Step 2: Verify Email",
          description: "Check your email inbox for a verification link, and click on it to confirm your account.",
          link: "/verify-email"
        },
        {
          title: "Step 3: Log In",
          description: "Return to the web app and log in with your newly created account.",
          link: "/login"
        },
        {
          title: "Step 4: Set Up Profile",
          description: "Complete your profile by adding any relevant details and selecting your language preferences.",
          link: "/profile-setup"
        },
        {
          title: "Step 5: Choose a Translator",
          description: "Browse the list of available translators and select the one that meets your needs based on language and specialization.",
          link: "/translators"
        },
        {
          title: "Step 6: Confirm and Start",
          description: "Confirm your selection and start your translation session.",
          link: "/confirm-translation"
        }
    ]


    return (
        <div style={{margin: "0px 10rem"}}>
        {
            steps.map((step, i) => {
                return (<Step key={i} title={step.title} description={step.description} link={step.link}></Step>)
            })
        }
        </div>
)}