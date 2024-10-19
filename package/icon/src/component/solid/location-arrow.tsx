
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `location-arrow` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/location-arrow?s=solid location-arrow}
 * @preview ![location-arrow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDQuNDIyIDk4LjIwNkwzMDAuNDI0IDQ1MC4xODlDMjkyLjkzOSA0NjguNDY5IDI3NS4xODkgNDgwIDI1Ni4wMTggNDgwQzIyNy4xNzggNDgwIDIwOC4wMDIgNDU2LjAwMiAyMDguMDAyIDQzMi4wMDJWMjcyLjAxSDQ4LjAwNEMyNS4wNjcgMjcyLjAxIDUuMzMyIDI1NS43OTIgMC45MSAyMzMuMjYyQy0zLjUyNyAyMTAuNzYzIDguNTk4IDE4OC4yNjQgMjkuODMyIDE3OS41NzdMMzgxLjgyOSAzNS41ODRDMzk5LjY4OCAyOC4yNDEgNDIwLjI4MiAzMi4zOTcgNDMzLjkzOCA0Ni4wODNDNDQ3LjYxIDU5LjczOSA0NTEuNzUgODAuMzAxIDQ0NC40MjIgOTguMjA2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function LocationArrow(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M444.422 98.206L300.424 450.189C292.939 468.469 275.189 480 256.018 480C227.178 480 208.002 456.002 208.002 432.002V272.01H48.004C25.067 272.01 5.332 255.792 0.91 233.262C-3.527 210.763 8.598 188.264 29.832 179.577L381.829 35.584C399.688 28.241 420.282 32.397 433.938 46.083C447.61 59.739 451.75 80.301 444.422 98.206Z" />
        </Icon>
    </>
}