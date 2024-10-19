
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `camera` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/camera?s=thin camera}
 * @preview ![camera](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQgOTZIMzc2TDM2My42MjUgNjMuMTI1QzM1Ni42MjUgNDQuMzc1IDMzOC43NSAzMiAzMTguNzUgMzJIMTkzLjI1QzE3My4yNSAzMiAxNTUuMjUgNDQuMzc1IDE0OC4yNSA2My4xMjVMMTM2IDk2SDQ4QzIxLjUgOTYgMCAxMTcuNSAwIDE0NFY0MzJDMCA0NTguNSAyMS41IDQ4MCA0OCA0ODBINDY0QzQ5MC41IDQ4MCA1MTIgNDU4LjUgNTEyIDQzMlYxNDRDNTEyIDExNy41IDQ5MC41IDk2IDQ2NCA5NlpNNDk2IDQzMkM0OTYgNDQ5LjY0NSA0ODEuNjQ1IDQ2NCA0NjQgNDY0SDQ4QzMwLjM1NSA0NjQgMTYgNDQ5LjY0NSAxNiA0MzJWMTQ0QzE2IDEyNi4zNTUgMzAuMzU1IDExMiA0OCAxMTJIMTQ3LjExM0wxNjMuMjM4IDY4LjcyMUMxNjcuODY3IDU2LjMyNiAxNzkuOTI2IDQ4IDE5My4yNSA0OEgzMTguNzVDMzMyIDQ4IDM0NC4wMDggNTYuMzI2IDM0OC42NTIgNjguNzYyTDM2NC45MjYgMTEySDQ2NEM0ODEuNjQ1IDExMiA0OTYgMTI2LjM1NSA0OTYgMTQ0VjQzMlpNMjU2IDE3NkMxOTQuMjQyIDE3NiAxNDQgMjI2LjI0MiAxNDQgMjg4QzE0NCAzNDkuNzU2IDE5NC4yNDIgNDAwIDI1NiA0MDBTMzY4IDM0OS43NTYgMzY4IDI4OEMzNjggMjI2LjI0MiAzMTcuNzU4IDE3NiAyNTYgMTc2Wk0yNTYgMzg0QzIwMyAzODQgMTYwIDM0MSAxNjAgMjg4UzIwMyAxOTIgMjU2IDE5MlMzNTIgMjM1IDM1MiAyODhTMzA5IDM4NCAyNTYgMzg0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Camera(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M464 96H376L363.625 63.125C356.625 44.375 338.75 32 318.75 32H193.25C173.25 32 155.25 44.375 148.25 63.125L136 96H48C21.5 96 0 117.5 0 144V432C0 458.5 21.5 480 48 480H464C490.5 480 512 458.5 512 432V144C512 117.5 490.5 96 464 96ZM496 432C496 449.645 481.645 464 464 464H48C30.355 464 16 449.645 16 432V144C16 126.355 30.355 112 48 112H147.113L163.238 68.721C167.867 56.326 179.926 48 193.25 48H318.75C332 48 344.008 56.326 348.652 68.762L364.926 112H464C481.645 112 496 126.355 496 144V432ZM256 176C194.242 176 144 226.242 144 288C144 349.756 194.242 400 256 400S368 349.756 368 288C368 226.242 317.758 176 256 176ZM256 384C203 384 160 341 160 288S203 192 256 192S352 235 352 288S309 384 256 384Z" />
        </Icon>
    </>
}