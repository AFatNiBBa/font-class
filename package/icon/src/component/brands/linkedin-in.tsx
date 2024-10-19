
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `linkedin-in` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/linkedin-in?s=brands linkedin-in}
 * @preview ![linkedin-in](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMDAuMjggNDQ4SDcuNFYxNDguOWg5Mi44OHpNNTMuNzkgMTA4LjFDMjQuMDkgMTA4LjEgMCA4My41IDAgNTMuOGE1My43OSA1My43OSAwIDAgMSAxMDcuNTggMGMwIDI5LjctMjQuMSA1NC4zLTUzLjc5IDU0LjN6TTQ0Ny45IDQ0OGgtOTIuNjhWMzAyLjRjMC0zNC43LS43LTc5LjItNDguMjktNzkuMi00OC4yOSAwLTU1LjY5IDM3LjctNTUuNjkgNzYuN1Y0NDhoLTkyLjc4VjE0OC45aDg5LjA4djQwLjhoMS4zYzEyLjQtMjMuNSA0Mi42OS00OC4zIDg3Ljg4LTQ4LjMgOTQgMCAxMTEuMjggNjEuOSAxMTEuMjggMTQyLjNWNDQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function LinkedinIn(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
        </Icon>
    </>
}