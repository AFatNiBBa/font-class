
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cuttlefish` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cuttlefish?s=brands cuttlefish}
 * @preview ![cuttlefish](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDQgMzA1LjVjLTE3LjUgMzEuNi01Ny40IDU0LjUtOTYgNTQuNS01Ni42IDAtMTA0LTQ3LjQtMTA0LTEwNHM0Ny40LTEwNCAxMDQtMTA0YzM4LjYgMCA3OC41IDIyLjkgOTYgNTQuNSAxMy43LTUwLjkgNDEuNy05My4zIDg3LTExNy44QzM4NS43IDM5LjEgMzIwLjUgOCAyNDggOCAxMTEgOCAwIDExOSAwIDI1NnMxMTEgMjQ4IDI0OCAyNDhjNzIuNSAwIDEzNy43LTMxLjEgMTgzLTgwLjctNDUuMy0yNC41LTczLjMtNjYuOS04Ny0xMTcuOHoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Cuttlefish(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 440 512" {...props}>
            <path d="M344 305.5c-17.5 31.6-57.4 54.5-96 54.5-56.6 0-104-47.4-104-104s47.4-104 104-104c38.6 0 78.5 22.9 96 54.5 13.7-50.9 41.7-93.3 87-117.8C385.7 39.1 320.5 8 248 8 111 8 0 119 0 256s111 248 248 248c72.5 0 137.7-31.1 183-80.7-45.3-24.5-73.3-66.9-87-117.8z" />
        </Icon>
    </>
}