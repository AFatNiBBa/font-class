
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `html5` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/html5?s=brands html5}
 * @preview ![html5](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDMybDM0LjkgMzk1LjhMMTkxLjUgNDgwbDE1Ny42LTUyLjJMMzg0IDMySDB6bTMwOC4yIDEyNy45SDEyNC40bDQuMSA0OS40aDE3NS42bC0xMy42IDE0OC40LTk3LjkgMjd2LjNoLTEuMWwtOTguNy0yNy4zLTYtNzUuOGg0Ny43TDEzOCAzMjBsNTMuNSAxNC41IDUzLjctMTQuNSA2LTYyLjJIODQuM0w3MS41IDExMi4yaDI0MS4xbC00LjQgNDcuN3oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Html5(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
        </Icon>
    </>
}