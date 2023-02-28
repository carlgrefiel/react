
const Button = ({type, children, ...buttonProps}) => {
    const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
    return (
        <button className={`Button ${className}`} {...buttonProps}>
            {children}
        </button>
    );
};

const LoginButton = ({type, children, ...buttonProps}) => {
    return (
        <Button
            type="secondary"
            {...buttonProps}
            onClick={() => {
                alert("Logging In!");
            }}
        >
            {children}
        </Button>
    );
};

export default function Login() {
    return (
        <div>
            <header>Little Lemon Restaurant</header>
            <Button type="primary" onClick={() => alert("Signing Up!")}>
                Sign Up
            </Button>
            <LoginButton type="secondary" onClick={() => alert("Signing Up!")}>
                Login
            </LoginButton>
        </div>
    )
}