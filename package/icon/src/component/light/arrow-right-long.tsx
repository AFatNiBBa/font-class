
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-long` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-long?s=light arrow-right-long}
 * @preview ![arrow-right-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjMuMzEyIDEwMC42ODdMNTA3LjMxMiAyNDQuNjg3QzUxMC40MzggMjQ3LjgxMiA1MTIgMjUxLjkwNiA1MTIgMjU2UzUxMC40MzggMjY0LjE4NyA1MDcuMzEyIDI2Ny4zMTJMMzYzLjMxMiA0MTEuMzEyQzM1Ny4wNjIgNDE3LjU2MiAzNDYuOTM3IDQxNy41NjIgMzQwLjY4OCA0MTEuMzEyUzMzNC40MzggMzk0LjkzNyAzNDAuNjg4IDM4OC42ODdMNDU3LjM3NSAyNzJIMTZDNy4xNTYgMjcyIDAgMjY0Ljg0NCAwIDI1NlM3LjE1NiAyNDAgMTYgMjQwSDQ1Ny4zNzVMMzQwLjY4OCAxMjMuMzEyQzMzNC40MzggMTE3LjA2MiAzMzQuNDM4IDEwNi45MzcgMzQwLjY4OCAxMDAuNjg3UzM1Ny4wNjIgOTQuNDM3IDM2My4zMTIgMTAwLjY4N1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ArrowRightLong(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M363.312 100.687L507.312 244.687C510.438 247.812 512 251.906 512 256S510.438 264.187 507.312 267.312L363.312 411.312C357.062 417.562 346.937 417.562 340.688 411.312S334.438 394.937 340.688 388.687L457.375 272H16C7.156 272 0 264.844 0 256S7.156 240 16 240H457.375L340.688 123.312C334.438 117.062 334.438 106.937 340.688 100.687S357.062 94.437 363.312 100.687Z" />
        </Icon>
    </>
}