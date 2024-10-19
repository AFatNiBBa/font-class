
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `down-right` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/down-right?s=duotone down-right}
 * @preview ![down-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1LjM3MyAxMzQuNjI2TDcwLjYyOSA4OS4zNzJDODMuMTI1IDc2Ljg3NiAxMDMuMzg1IDc2Ljg3NiAxMTUuODgzIDg5LjM3MkwyNDUuNDkyIDIxOC45ODRMMTU0Ljk4NCAzMDkuNDk2TDI1LjM3MyAxNzkuODg0QzEyLjg3NSAxNjcuMzg0IDEyLjg3NyAxNDcuMTI2IDI1LjM3MyAxMzQuNjI2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zMTMuNjQ3IDE1MS4xMDJDMzIyLjc5NSAxNDEuOTUzIDMzNi41NjMgMTM5LjIxNSAzNDguNTE2IDE0NC4xNjRDMzYwLjQ4MiAxNDkuMTIxIDM2OC4yNzIgMTYwLjc3NyAzNjguMjcyIDE3My43M1Y0MDAuMDA0QzM2OC4yNzIgNDA4Ljg0IDM2NC42OTEgNDE2Ljg0IDM1OC45MDIgNDIyLjYyOUMzNTMuMTExIDQyOC40MTggMzQ1LjExMyA0MzIgMzM2LjI3MyA0MzJIMTEwQzk3LjA1MSA0MzIgODUuMzk1IDQyNC4yMTEgODAuNDM0IDQxMi4yNDZDNzUuNDg0IDQwMC4yOTMgNzguMjI1IDM4Ni41MjMgODcuMzczIDM3Ny4zNzVMMzEzLjY0NyAxNTEuMTAyWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function DownRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M25.373 134.626L70.629 89.372C83.125 76.876 103.385 76.876 115.883 89.372L245.492 218.984L154.984 309.496L25.373 179.884C12.875 167.384 12.877 147.126 25.373 134.626Z" />
            <path d="M313.647 151.102C322.795 141.953 336.563 139.215 348.516 144.164C360.482 149.121 368.272 160.777 368.272 173.73V400.004C368.272 408.84 364.691 416.84 358.902 422.629C353.111 428.418 345.113 432 336.273 432H110C97.051 432 85.395 424.211 80.434 412.246C75.484 400.293 78.225 386.523 87.373 377.375L313.647 151.102Z" />
        </Icon>
    </>
}