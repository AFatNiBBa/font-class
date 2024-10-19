
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-up` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up?s=solid arrow-up}
 * @preview ![arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTMgMjUxLjU2MkM0MDUuMTQgMjU5LjgxMiAzOTQuNTc4IDI2NCAzODQgMjY0QzM3NC4wOTMgMjY0IDM2NC4xODcgMjYwLjM0NCAzNTYuNDUzIDI1M0wyNjQgMTY1LjE4VjQ0MEMyNjQgNDYyLjA5NCAyNDYuMDkzIDQ4MCAyMjQgNDgwUzE4NCA0NjIuMDk0IDE4NCA0NDBWMTY1LjE4TDkxLjU0NyAyNTNDNzUuNTYyIDI2OC4xODggNTAuMjM0IDI2Ny41MzEgMzUgMjUxLjU2MkMxOS43ODEgMjM1LjUzMSAyMC40MzcgMjEwLjIxOSAzNi40NTMgMTk1TDE5Ni40NTMgNDNDMjExLjg5IDI4LjMxMiAyMzYuMTA5IDI4LjMxMiAyNTEuNTQ3IDQzTDQxMS41NDcgMTk1QzQyNy41NjIgMjEwLjIxOSA0MjguMjE4IDIzNS41MzEgNDEzIDI1MS41NjJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ArrowUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M413 251.562C405.14 259.812 394.578 264 384 264C374.093 264 364.187 260.344 356.453 253L264 165.18V440C264 462.094 246.093 480 224 480S184 462.094 184 440V165.18L91.547 253C75.562 268.188 50.234 267.531 35 251.562C19.781 235.531 20.437 210.219 36.453 195L196.453 43C211.89 28.312 236.109 28.312 251.547 43L411.547 195C427.562 210.219 428.218 235.531 413 251.562Z" />
        </Icon>
    </>
}