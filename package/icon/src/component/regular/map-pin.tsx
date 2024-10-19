
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `map-pin` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/map-pin?s=regular map-pin}
 * @preview ![map-pin](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMDQgMTQ0QzMwNCA2NC40NzEgMjM5LjUyOSAwIDE2MCAwUzE2IDY0LjQ3MSAxNiAxNDRDMTYgMjE1LjMwOSA2Ny45NTcgMjc0LjEwMiAxMzYgMjg1LjU4VjQ4OEMxMzYgNTAxLjI1IDE0Ni43NSA1MTIgMTYwIDUxMlMxODQgNTAxLjI1IDE4NCA0ODhWMjg1LjU4QzI1Mi4wNDMgMjc0LjEwMiAzMDQgMjE1LjMwOSAzMDQgMTQ0Wk0xNjAgMjQwQzEwNy4wNjYgMjQwIDY0IDE5Ni45MzYgNjQgMTQ0UzEwNy4wNjYgNDggMTYwIDQ4QzIxMi45MzYgNDggMjU2IDkxLjA2NCAyNTYgMTQ0UzIxMi45MzYgMjQwIDE2MCAyNDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function MapPin(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M304 144C304 64.471 239.529 0 160 0S16 64.471 16 144C16 215.309 67.957 274.102 136 285.58V488C136 501.25 146.75 512 160 512S184 501.25 184 488V285.58C252.043 274.102 304 215.309 304 144ZM160 240C107.066 240 64 196.936 64 144S107.066 48 160 48C212.936 48 256 91.064 256 144S212.936 240 160 240Z" />
        </Icon>
    </>
}