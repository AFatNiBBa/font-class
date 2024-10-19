
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `industry` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/industry?s=regular industry}
 * @preview ![industry](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NzUuMTIzIDEzMS43NTJMMzM2IDIyMC4yNVYxNTEuOTk2QzMzNiAxMzMuMDYyIDMxNS4xIDEyMS41ODggMjk5LjEyNSAxMzEuNzVMMTYwIDIyMC4yNVY4MEMxNjAgNTMuNDkgMTM4LjUxIDMyIDExMiAzMkg0OEMyMS40OSAzMiAwIDUzLjQ5IDAgODBWNDMyQzAgNDU4LjUxIDIxLjQ5IDQ4MCA0OCA0ODBINDY0QzQ5MC41MSA0ODAgNTEyIDQ1OC41MSA1MTIgNDMyVjE1MkM1MTIgMTMzLjA2NCA0OTEuMDk4IDEyMS41ODggNDc1LjEyMyAxMzEuNzUyWk00NjQgNDMySDQ4VjgwSDExMlYyNjRDMTEyIDI4Mi44NzUgMTMyLjg3NSAyOTQuMzc1IDE0OC44NzUgMjg0LjI1TDI4OCAxOTUuNzVWMjY0QzI4OCAyODIuODc1IDMwOC44NzUgMjk0LjM3NSAzMjQuODc1IDI4NC4yNUw0NjQgMTk1Ljc1VjQzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Industry(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M475.123 131.752L336 220.25V151.996C336 133.062 315.1 121.588 299.125 131.75L160 220.25V80C160 53.49 138.51 32 112 32H48C21.49 32 0 53.49 0 80V432C0 458.51 21.49 480 48 480H464C490.51 480 512 458.51 512 432V152C512 133.064 491.098 121.588 475.123 131.752ZM464 432H48V80H112V264C112 282.875 132.875 294.375 148.875 284.25L288 195.75V264C288 282.875 308.875 294.375 324.875 284.25L464 195.75V432Z" />
        </Icon>
    </>
}