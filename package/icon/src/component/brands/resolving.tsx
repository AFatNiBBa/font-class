
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `resolving` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/resolving?s=brands resolving}
 * @preview ![resolving](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODEuMiAyNzguMmM0Ni0xMy4zIDQ5LjYtMjMuNSA0NC00My40TDMxNCAxOTUuNWMtNi4xLTIwLjktMTguNC0yOC4xLTcxLjEtMTIuOEw1NC43IDIzNi44bDI4LjYgOTguNiAxOTcuOS01Ny4yek0yNDguNSA4QzEzMS40IDggMzMuMiA4OC43IDcuMiAxOTcuNWwyMjEuOS02My45YzM0LjgtMTAuMiA1NC4yLTExLjcgNzkuMy04LjIgMzYuMyA2LjEgNTIuNyAyNSA2MS40IDU1LjJsMTAuNyAzNy44YzguMiAyOC4xIDEgNTAuNi0yMy41IDczLjYtMTkuNCAxNy40LTMxLjIgMjQuNS02MS40IDMzLjJMMjAzIDM1MS44bDIyMC40IDI3LjEgOS43IDM0LjItNDguMSAxMy4zLTI4Ni44LTM3LjMgMjMgODAuMmMzNi44IDIyIDgwLjMgMzQuNyAxMjYuMyAzNC43IDEzNyAwIDI0OC41LTExMS40IDI0OC41LTI0OC4zQzQ5NyAxMTkuNCAzODUuNSA4IDI0OC41IDh6TTM4LjMgMzg4LjZMMCAyNTYuOGMwIDQ4LjUgMTQuMyA5My40IDM4LjMgMTMxLjh6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Resolving(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 496 512" {...props}>
            <path d="M281.2 278.2c46-13.3 49.6-23.5 44-43.4L314 195.5c-6.1-20.9-18.4-28.1-71.1-12.8L54.7 236.8l28.6 98.6 197.9-57.2zM248.5 8C131.4 8 33.2 88.7 7.2 197.5l221.9-63.9c34.8-10.2 54.2-11.7 79.3-8.2 36.3 6.1 52.7 25 61.4 55.2l10.7 37.8c8.2 28.1 1 50.6-23.5 73.6-19.4 17.4-31.2 24.5-61.4 33.2L203 351.8l220.4 27.1 9.7 34.2-48.1 13.3-286.8-37.3 23 80.2c36.8 22 80.3 34.7 126.3 34.7 137 0 248.5-111.4 248.5-248.3C497 119.4 385.5 8 248.5 8zM38.3 388.6L0 256.8c0 48.5 14.3 93.4 38.3 131.8z" />
        </Icon>
    </>
}