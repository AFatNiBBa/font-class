
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `z` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/z?s=light z}
 * @preview ![z](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjggNDgwSDE2QzkuNzgxIDQ4MCA0LjA5NCA0NzYuMzc1IDEuNSA0NzAuNzE5Qy0xLjEyNSA0NjUuMDk0IC0wLjI1IDQ1OC40MDYgMy43ODEgNDUzLjY1NkwzMzMuNSA2NEgxNkM3LjE1NiA2NCAwIDU2Ljg0NCAwIDQ4UzcuMTU2IDMyIDE2IDMySDM2OEMzNzQuMjE5IDMyIDM3OS45MDYgMzUuNjI1IDM4Mi41IDQxLjI4MUMzODUuMTI1IDQ2LjkwNiAzODQuMjUgNTMuNTk0IDM4MC4yMTkgNTguMzQ0TDUwLjUgNDQ4SDM2OEMzNzYuODQ0IDQ0OCAzODQgNDU1LjE1NiAzODQgNDY0UzM3Ni44NDQgNDgwIDM2OCA0ODBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Z(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M368 480H16C9.781 480 4.094 476.375 1.5 470.719C-1.125 465.094 -0.25 458.406 3.781 453.656L333.5 64H16C7.156 64 0 56.844 0 48S7.156 32 16 32H368C374.219 32 379.906 35.625 382.5 41.281C385.125 46.906 384.25 53.594 380.219 58.344L50.5 448H368C376.844 448 384 455.156 384 464S376.844 480 368 480Z" />
        </Icon>
    </>
}