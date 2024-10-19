
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `gun` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gun?s=solid gun}
 * @preview ![gun](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NDQgNjRINTI4VjU2QzUyOCA0Mi43NDIgNTE3LjI1NCAzMiA1MDQgMzJTNDgwIDQyLjc0MiA0ODAgNTZWNjRINDMuMTcyQzE5LjMyOCA2NCAwIDgzLjMyOCAwIDEwNy4xNzJWMTk2LjgyOEMwIDIyMC42NzIgMTkuMzI4IDI0MCA0My4xNzIgMjQwQzY0LjQzMiAyNDAgNzkuNzgxIDI2MC4zNDggNzMuOTQxIDI4MC43ODlMMzMuMjUgNDM5LjIxMUMyNy40MSA0NTkuNjQ4IDQyLjc2IDQ4MCA2NC4wMiA0ODBIMTY3Ljg2M0MxODIuMTUgNDgwIDE5NC43MDUgNDcwLjUzMSAxOTguNjI5IDQ1Ni43OTNMMjI2LjM2MSAzNTJIMzIwLjkzOEMzNDUuMDk0IDM1MiAzNjYuNDM4IDMzNi41OTQgMzc0LjA2MiAzMTMuNzE5TDM5OC42NDMgMjQwSDQzNC43NDZDNDQzLjIzMiAyNDAgNDUxLjM3MSAyMzYuNjI5IDQ1Ny4zNzMgMjMwLjYyNUw0ODAgMjA4SDU0NEM1NjEuNjc0IDIwOCA1NzYgMTkzLjY3MiA1NzYgMTc2Vjk2QzU3NiA3OC4zMjggNTYxLjY3NCA2NCA1NDQgNjRaTTMyOC41IDI5OC41NjJDMzI3LjQzOCAzMDEuODEyIDMyNC4zNzUgMzA0IDMyMC45MzggMzA0SDIzOS4wNjJMMjU2IDI0MEgzNDguMDIxTDMyOC41IDI5OC41NjJaTTQ4MCAxNjBINjRWMTI4SDQ4MFYxNjBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Gun(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M544 64H528V56C528 42.742 517.254 32 504 32S480 42.742 480 56V64H43.172C19.328 64 0 83.328 0 107.172V196.828C0 220.672 19.328 240 43.172 240C64.432 240 79.781 260.348 73.941 280.789L33.25 439.211C27.41 459.648 42.76 480 64.02 480H167.863C182.15 480 194.705 470.531 198.629 456.793L226.361 352H320.938C345.094 352 366.438 336.594 374.062 313.719L398.643 240H434.746C443.232 240 451.371 236.629 457.373 230.625L480 208H544C561.674 208 576 193.672 576 176V96C576 78.328 561.674 64 544 64ZM328.5 298.562C327.438 301.812 324.375 304 320.938 304H239.062L256 240H348.021L328.5 298.562ZM480 160H64V128H480V160Z" />
        </Icon>
    </>
}