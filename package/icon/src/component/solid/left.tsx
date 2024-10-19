
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `left` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/left?s=solid left}
 * @preview ![left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMjI0VjI4OEM0NDggMzA1LjY3NCA0MzMuNjc0IDMyMCA0MTYgMzIwSDIyNFY0MTZDMjI0IDQyOC45MzggMjE2LjIwMyA0NDAuNjA5IDIwNC4yNSA0NDUuNTYyQzE5Mi4yODEgNDUwLjUxNiAxNzguNTMxIDQ0Ny43ODEgMTY5LjM3NSA0MzguNjI1TDkuMzc1IDI3OC42MjVDMy4xMjUgMjcyLjM3NSAwIDI2NC4xODggMCAyNTZTMy4xMjUgMjM5LjYyNSA5LjM3NSAyMzMuMzc1TDE2OS4zNzUgNzMuMzc1QzE3OC41MzEgNjQuMjE5IDE5Mi4yODEgNjEuNDg0IDIwNC4yNSA2Ni40MzhDMjE2LjIwMyA3MS4zOTEgMjI0IDgzLjA2MiAyMjQgOTZWMTkySDQxNkM0MzMuNjc0IDE5MiA0NDggMjA2LjMyOCA0NDggMjI0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Left(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M448 224V288C448 305.674 433.674 320 416 320H224V416C224 428.938 216.203 440.609 204.25 445.562C192.281 450.516 178.531 447.781 169.375 438.625L9.375 278.625C3.125 272.375 0 264.188 0 256S3.125 239.625 9.375 233.375L169.375 73.375C178.531 64.219 192.281 61.484 204.25 66.438C216.203 71.391 224 83.062 224 96V192H416C433.674 192 448 206.328 448 224Z" />
        </Icon>
    </>
}