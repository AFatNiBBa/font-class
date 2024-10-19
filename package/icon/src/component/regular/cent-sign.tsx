
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cent-sign` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cent-sign?s=regular cent-sign}
 * @preview ![cent-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDUuMzgxIDM0Ni45MjJDMzU0LjUwNiAzNTYuNTE2IDM1NC4xNjIgMzcxLjcwMyAzNDQuNTY4IDM4MC44NDRDMzEzLjEwNCA0MTAuODU3IDI3Mi44NzMgNDI2LjgzIDIzMS42NjggNDMwLjMzOEMyMzEuNzA5IDQzMC45MTYgMjMyLjAwNCA0MzEuNDEgMjMyLjAwNCA0MzJWNDg4QzIzMi4wMDQgNTAxLjI1IDIyMS4yNTQgNTEyIDIwOC4wMDIgNTEyQzE5NC43NTIgNTEyIDE4NC4wMDIgNTAxLjI1IDE4NC4wMDIgNDg4VjQzMkMxODQuMDAyIDQzMC45NDUgMTg0LjQ3MSA0MzAuMDQ1IDE4NC42MDQgNDI5LjAyNUMxNDguNTEyIDQyMy4xOTUgMTEzLjg4MyA0MDcuMzY3IDg2LjA5NCAzODAuODU5QzUxLjIxOSAzNDcuNTYyIDMyIDMwMy4yMzQgMzIgMjU2UzUxLjIxOSAxNjQuNDM4IDg2LjA5NCAxMzEuMTU2QzExMy44ODcgMTA0LjY0NiAxNDguNTE0IDg4LjgwOSAxODQuNjA0IDgyLjk3NUMxODQuNDcxIDgxLjk1NSAxODQuMDAyIDgxLjA1NSAxODQuMDAyIDgwVjI0QzE4NC4wMDIgMTAuNzUgMTk0Ljc1MiAwIDIwOC4wMDIgMEMyMjEuMjU0IDAgMjMyLjAwNCAxMC43NSAyMzIuMDA0IDI0VjgwQzIzMi4wMDQgODAuNTg4IDIzMS43MTEgODEuMDggMjMxLjY3IDgxLjY1NkMyNzIuODY3IDg1LjE2MiAzMTMuMTA3IDEwMS4xMzEgMzQ0LjU2OCAxMzEuMTU2QzM1NC4xNjIgMTQwLjI5NyAzNTQuNTA2IDE1NS40ODQgMzQ1LjM4MSAxNjUuMDc4QzMzNi4xOTEgMTc0LjcwMyAzMjEuMDA0IDE3NC45ODQgMzExLjQ0MSAxNjUuODc1QzI1OC40NDEgMTE1LjM0NCAxNzIuMjIxIDExNS4zMjggMTE5LjIyMSAxNjUuODkxQzkzLjkzOCAxOTAuMDE2IDgwIDIyMi4wMTYgODAgMjU2UzkzLjkzOCAzMjEuOTg0IDExOS4yMjEgMzQ2LjEyNUMxNzIuMjIxIDM5Ni42NTYgMjU4LjQ0MSAzOTYuNjU2IDMxMS40NDEgMzQ2LjEyNUMzMjEuMDM1IDMzNi45NTMgMzM2LjIyMyAzMzcuMjk3IDM0NS4zODEgMzQ2LjkyMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CentSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M345.381 346.922C354.506 356.516 354.162 371.703 344.568 380.844C313.104 410.857 272.873 426.83 231.668 430.338C231.709 430.916 232.004 431.41 232.004 432V488C232.004 501.25 221.254 512 208.002 512C194.752 512 184.002 501.25 184.002 488V432C184.002 430.945 184.471 430.045 184.604 429.025C148.512 423.195 113.883 407.367 86.094 380.859C51.219 347.562 32 303.234 32 256S51.219 164.438 86.094 131.156C113.887 104.646 148.514 88.809 184.604 82.975C184.471 81.955 184.002 81.055 184.002 80V24C184.002 10.75 194.752 0 208.002 0C221.254 0 232.004 10.75 232.004 24V80C232.004 80.588 231.711 81.08 231.67 81.656C272.867 85.162 313.107 101.131 344.568 131.156C354.162 140.297 354.506 155.484 345.381 165.078C336.191 174.703 321.004 174.984 311.441 165.875C258.441 115.344 172.221 115.328 119.221 165.891C93.938 190.016 80 222.016 80 256S93.938 321.984 119.221 346.125C172.221 396.656 258.441 396.656 311.441 346.125C321.035 336.953 336.223 337.297 345.381 346.922Z" />
        </Icon>
    </>
}