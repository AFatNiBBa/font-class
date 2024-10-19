
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `cloudsmith` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cloudsmith?s=brands cloudsmith}
 * @preview ![cloudsmith](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMzIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzIuNSA0MTkuOWMwIDQ2LjQtMzcuNiA4NC4xLTg0IDg0LjFzLTg0LTM3LjctODQtODQuMSAzNy42LTg0IDg0LTg0IDg0IDM3LjYgODQgODR6bS04NC0yNDMuOWM0Ni40IDAgODAtMzcuNiA4MC04NHMtMzMuNi04NC04MC04NC04OCAzNy42LTg4IDg0LTI5LjYgNzYtNzYgNzYtODQgNDEuNi04NCA4OCAzNy42IDgwIDg0IDgwIDg0LTMzLjYgODQtODAgMzMuNi04MCA4MC04MHoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Cloudsmith(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 332 512" {...props}>
            <path d="M332.5 419.9c0 46.4-37.6 84.1-84 84.1s-84-37.7-84-84.1 37.6-84 84-84 84 37.6 84 84zm-84-243.9c46.4 0 80-37.6 80-84s-33.6-84-80-84-88 37.6-88 84-29.6 76-76 76-84 41.6-84 88 37.6 80 84 80 84-33.6 84-80 33.6-80 80-80z" />
        </Icon>
    </>
}