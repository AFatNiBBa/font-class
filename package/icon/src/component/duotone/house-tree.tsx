
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `house-tree` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/house-tree?s=duotone house-tree}
 * @preview ![house-tree](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTYwNi40MzggNTEyLjAyOUg0MDUuNTc0QzQxMS44NTUgNTAxLjg0NCA0MTUuNjY0IDQ4OS45NzMgNDE1LjY2NiA0NzcuMTU0TDQxNS42NzQgMjgxLjMxMkM0MTUuNjcgMjU3LjY5MyA0MDUuNjE1IDIzNS4wMDggMzg4LjA4MiAyMTkuMDY4TDI4NyAxMjcuMTc4TDM5Ni40NTUgOC4yNzlDNDA2LjQ1MyAtMi43MjEgNDI0Ljk1MSAtMi43MjEgNDM0Ljk1MSA4LjI3OUw1NjkuOTM5IDE1NC43NzlDNTgzLjQzOSAxNjkuNTI5IDU3MS45MzkgMTkyLjAyOSA1NTAuNTY2IDE5Mi4wMjlINTA1LjgyTDYwMC42ODggMzAzLjUyOUM2MTYuOTM2IDMyMi43NzkgNjAzLjA2MyAzNTIuMDI5IDU3Ny40MzkgMzUyLjAyOUg1NDEuNDQzTDYzMS4zMTEgNDU1LjY1NEM2NTAuMTg0IDQ3Ny40MDQgNjM1LjA2MSA1MTIuMDI5IDYwNi40MzggNTEyLjAyOVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMjE1LjQ3NyAxMDUuMTA3QzIwMi4xNjIgOTMuMDAyIDE4MS44MjggOTMuMDAyIDE2OC41MTQgMTA1LjEwN0wxNy4xMzkgMjQyLjcyQzYuMjIzIDI1Mi42NDYgMCAyNjYuNzE1IDAgMjgxLjQ2N1Y0NzcuMTE5QzAgNDk2LjQgMTUuNjI5IDUxMi4wMjkgMzQuOTA4IDUxMi4wMjlIMzQ5LjA4NEMzNjguMzYxIDUxMi4wMjkgMzgzLjk5IDQ5Ni40MjkgMzgzLjk5MiA0NzcuMTVDMzgzLjk5NiA0MjQuNTY4IDM4NCAzMjguOTkyIDM4NCAyODEuMzFDMzgzLjk5OCAyNjYuNTggMzc3Ljc4MyAyNTIuNjU2IDM2Ni44ODMgMjQyLjc0NkwyMTUuNDc3IDEwNS4xMDdaTTI0MCAzNjguMDI5QzI0MCAzNzYuOTA0IDIzMi44NzUgMzg0LjAyOSAyMjQgMzg0LjAyOUgxNjBDMTUxLjEyNSAzODQuMDI5IDE0NCAzNzYuOTA0IDE0NCAzNjguMDI5VjMwNC4wMjlDMTQ0IDI5NS4xNTQgMTUxLjEyNSAyODguMDI5IDE2MCAyODguMDI5SDIyNEMyMzIuODc1IDI4OC4wMjkgMjQwIDI5NS4xNTQgMjQwIDMwNC4wMjlWMzY4LjAyOVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function HouseTree(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path opacity={.4} d="M606.438 512.029H405.574C411.855 501.844 415.664 489.973 415.666 477.154L415.674 281.312C415.67 257.693 405.615 235.008 388.082 219.068L287 127.178L396.455 8.279C406.453 -2.721 424.951 -2.721 434.951 8.279L569.939 154.779C583.439 169.529 571.939 192.029 550.566 192.029H505.82L600.688 303.529C616.936 322.779 603.063 352.029 577.439 352.029H541.443L631.311 455.654C650.184 477.404 635.061 512.029 606.438 512.029Z" />
            <path d="M215.477 105.107C202.162 93.002 181.828 93.002 168.514 105.107L17.139 242.72C6.223 252.646 0 266.715 0 281.467V477.119C0 496.4 15.629 512.029 34.908 512.029H349.084C368.361 512.029 383.99 496.429 383.992 477.15C383.996 424.568 384 328.992 384 281.31C383.998 266.58 377.783 252.656 366.883 242.746L215.477 105.107ZM240 368.029C240 376.904 232.875 384.029 224 384.029H160C151.125 384.029 144 376.904 144 368.029V304.029C144 295.154 151.125 288.029 160 288.029H224C232.875 288.029 240 295.154 240 304.029V368.029Z" />
        </Icon>
    </>
}