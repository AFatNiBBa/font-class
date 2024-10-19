
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-arrow-up` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-up?s=solid circle-arrow-up}
 * @preview ![circle-arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQyIDE2IDE2IDEyMy40MjIgMTYgMjU2UzEyMy40MiA0OTYgMjU2IDQ5NlM0OTYgMzg4LjU3OCA0OTYgMjU2UzM4OC41OCAxNiAyNTYgMTZaTTM4Mi42MjUgMjU0LjYyNUMzNzAuMTI1IDI2Ny4xMjUgMzQ5Ljg3NSAyNjcuMTI1IDMzNy4zNzUgMjU0LjYyNUwyODggMjA1LjI1VjM4NEMyODggNDAxLjY4OCAyNzMuNjcyIDQxNiAyNTYgNDE2UzIyNCA0MDEuNjg4IDIyNCAzODRWMjA1LjI1TDE3NC42MjUgMjU0LjYyNUMxNjIuMTI1IDI2Ny4xMjUgMTQxLjg3NSAyNjcuMTI1IDEyOS4zNzUgMjU0LjYyNVMxMTYuODc1IDIyMS44NzUgMTI5LjM3NSAyMDkuMzc1TDIzMy4zNTQgMTA1LjM5OEMyNDEuMzM2IDk3LjM5OCAyNTEuMSA5NiAyNTYgOTZDMjYwLjg4MSA5NiAyNzAuNjU0IDk3LjM5MSAyNzguNjQ2IDEwNS4zOThMMzgyLjYyNSAyMDkuMzc1QzM5NS4xMjUgMjIxLjg3NSAzOTUuMTI1IDI0Mi4xMjUgMzgyLjYyNSAyNTQuNjI1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleArrowUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.42 16 16 123.422 16 256S123.42 496 256 496S496 388.578 496 256S388.58 16 256 16ZM382.625 254.625C370.125 267.125 349.875 267.125 337.375 254.625L288 205.25V384C288 401.688 273.672 416 256 416S224 401.688 224 384V205.25L174.625 254.625C162.125 267.125 141.875 267.125 129.375 254.625S116.875 221.875 129.375 209.375L233.354 105.398C241.336 97.398 251.1 96 256 96C260.881 96 270.654 97.391 278.646 105.398L382.625 209.375C395.125 221.875 395.125 242.125 382.625 254.625Z" />
        </Icon>
    </>
}