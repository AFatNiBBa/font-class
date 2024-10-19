
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `magnifying-glass` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass?s=duotone magnifying-glass}
 * @preview ![magnifying-glass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIwOCAwQzkzLjEyNSAwIDAgOTMuMTI1IDAgMjA4UzkzLjEyNSA0MTYgMjA4IDQxNlM0MTYgMzIyLjg3NSA0MTYgMjA4UzMyMi44NzUgMCAyMDggMFpNMjA4IDMzNkMxMzcuNDIgMzM2IDgwIDI3OC41NzggODAgMjA4QzgwIDEzNy40MiAxMzcuNDIgODAgMjA4IDgwUzMzNiAxMzcuNDIgMzM2IDIwOEMzMzYgMjc4LjU3OCAyNzguNTggMzM2IDIwOCAzMzZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTUwNC45MTggNDgyLjM0NEw0ODIuMjkxIDUwNC45NzFDNDcyLjkxOCA1MTQuMzQ0IDQ1Ny43MjMgNTE0LjM0NCA0NDguMzUgNTA0Ljk3MUwzMjQgMzgwLjYyM0MzNDYuMzA5IDM2NS41OTQgMzY1LjU0MSAzNDYuMzYxIDM4MC41NyAzMjQuMDUzTDUwNC45MTggNDQ4LjQwMkM1MTQuMjkxIDQ1Ny43NzUgNTE0LjI5MSA0NzIuOTcxIDUwNC45MTggNDgyLjM0NFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function MagnifyingGlass(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M208 0C93.125 0 0 93.125 0 208S93.125 416 208 416S416 322.875 416 208S322.875 0 208 0ZM208 336C137.42 336 80 278.578 80 208C80 137.42 137.42 80 208 80S336 137.42 336 208C336 278.578 278.58 336 208 336Z" />
            <path d="M504.918 482.344L482.291 504.971C472.918 514.344 457.723 514.344 448.35 504.971L324 380.623C346.309 365.594 365.541 346.361 380.57 324.053L504.918 448.402C514.291 457.775 514.291 472.971 504.918 482.344Z" />
        </Icon>
    </>
}