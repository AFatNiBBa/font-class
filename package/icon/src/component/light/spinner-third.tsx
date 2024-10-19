
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `spinner-third` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/spinner-third?s=light spinner-third}
 * @preview ![spinner-third](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYgMjU2QzQ5NiAyOTkuNjcyIDQ4NC4xNTYgMzQyLjQ1MyA0NjEuNzE5IDM3OS42ODhDNDU4LjY4OCAzODQuNjcyIDQ1My40MDYgMzg3LjQzOCA0NDggMzg3LjQzOEM0NDUuMTg4IDM4Ny40MzggNDQyLjMxMiAzODYuNzAzIDQzOS43NSAzODUuMTQxQzQzMi4xODggMzgwLjU3OCA0MjkuNzUgMzcwLjc1IDQzNC4yODEgMzYzLjE4OEM0NTMuNzE5IDMzMC45MjIgNDY0IDI5My44NTkgNDY0IDI1NkM0NjQgMTQxLjMxMiAzNzAuNjg4IDQ4IDI1NiA0OEMyNDcuMTU2IDQ4IDI0MCA0MC44NDQgMjQwIDMyUzI0Ny4xNTYgMTYgMjU2IDE2QzM4OC4zNDQgMTYgNDk2IDEyMy42NTYgNDk2IDI1NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SpinnerThird(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M496 256C496 299.672 484.156 342.453 461.719 379.688C458.688 384.672 453.406 387.438 448 387.438C445.188 387.438 442.312 386.703 439.75 385.141C432.188 380.578 429.75 370.75 434.281 363.188C453.719 330.922 464 293.859 464 256C464 141.312 370.688 48 256 48C247.156 48 240 40.844 240 32S247.156 16 256 16C388.344 16 496 123.656 496 256Z" />
        </Icon>
    </>
}