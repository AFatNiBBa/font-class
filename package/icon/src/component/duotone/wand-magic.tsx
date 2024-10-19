
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `wand-magic` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wand-magic?s=duotone wand-magic}
 * @preview ![wand-magic](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI4NSAxMjUuMDk0TDM5Ni4wNDMgMTQuMDU5QzQxNC43ODcgLTQuNjg3IDQ0NS4xODIgLTQuNjg2IDQ2My45MjYgMTQuMDYxTDQ5Ny44NSA0OEM1MTYuNTkyIDY2Ljc0NiA1MTYuNTkyIDk3LjEzNSA0OTcuODQ4IDExNS44NzlMMzg2LjgxNiAyMjYuOTA4TDM0Ny4yMTcgMTg3LjMxMUw0NTIuNjA5IDgxLjk0N0w0MjkuOTUxIDU5LjMyTDMyNC41OSAxNjQuNjg0TDI4NSAxMjUuMDk0WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zODYuOTEgMjI2LjkwOEwxMTUuODczIDQ5Ny45NDFDOTcuMTI3IDUxNi42ODcgNjYuNzMzIDUxNi42ODYgNDcuOTkgNDk3LjkzN0wxNC4wNTcgNDYzLjk5Qy00LjY4NyA0NDUuMjQ0IC00LjY4NSA0MTQuODU0IDE0LjA2MSAzOTYuMTA5TDI4NS4wOTQgMTI1LjA5NEwzODYuOTEgMjI2LjkwOFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function WandMagic(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M285 125.094L396.043 14.059C414.787 -4.687 445.182 -4.686 463.926 14.061L497.85 48C516.592 66.746 516.592 97.135 497.848 115.879L386.816 226.908L347.217 187.311L452.609 81.947L429.951 59.32L324.59 164.684L285 125.094Z" />
            <path d="M386.91 226.908L115.873 497.941C97.127 516.687 66.733 516.686 47.99 497.937L14.057 463.99C-4.687 445.244 -4.685 414.854 14.061 396.109L285.094 125.094L386.91 226.908Z" />
        </Icon>
    </>
}