
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-plus` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-plus?s=solid hexagon-plus}
 * @preview ![hexagon-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDUuODI0IDIzMy4zNjVMNDAwLjQzNyA1NC4xNjZDMzkyLjMyMiA0MC41MTYgMzc3LjUwMiAzMiAzNjEuMzg3IDMySDE1MC42MTNDMTM0LjQ5OCAzMiAxMTkuNjc4IDQwLjUxNiAxMTEuNTYzIDU0LjE2Nkw2LjE3NiAyMzMuMzY1Qy0yLjA1OSAyNDcuMzY1IC0yLjA1OSAyNjQuNjMzIDYuMTc2IDI3OC42MzNMMTExLjU2MyA0NTcuODMyQzExOS42NzggNDcxLjQ4MiAxMzQuNDk4IDQ4MCAxNTAuNjEzIDQ4MEgzNjEuMzg3QzM3Ny41MDIgNDgwIDM5Mi4zMjIgNDcxLjQ4MiA0MDAuNDM3IDQ1Ny44MzJMNTA1LjgyNCAyNzguNjMzQzUxNC4wNTkgMjY0LjYzMyA1MTQuMDU5IDI0Ny4zNjUgNTA1LjgyNCAyMzMuMzY1Wk0zNTEuOTk4IDI4MEgyNzkuOTk2VjM1MkMyNzkuOTk2IDM2NS4xOTcgMjY5LjE5NSAzNzYgMjU1Ljk5OCAzNzZDMjQyLjc5NyAzNzYgMjMxLjk5NiAzNjUuMTk3IDIzMS45OTYgMzUyVjI4MEgxNTkuOTk4QzE0Ni43OTcgMjgwIDEzNS45OTYgMjY5LjE5NyAxMzUuOTk2IDI1NkMxMzUuOTk2IDI0Mi43OTkgMTQ2Ljc5NyAyMzIgMTU5Ljk5OCAyMzJIMjMxLjk5NlYxNjBDMjMxLjk5NiAxNDYuNzk5IDI0Mi43OTcgMTM2IDI1NS45OTggMTM2QzI2OS4xOTUgMTM2IDI3OS45OTYgMTQ2Ljc5OSAyNzkuOTk2IDE2MFYyMzJIMzUxLjk5OEMzNjUuMTk1IDIzMiAzNzUuOTk2IDI0Mi43OTkgMzc1Ljk5NiAyNTZDMzc1Ljk5NiAyNjkuMTk3IDM2NS4xOTUgMjgwIDM1MS45OTggMjgwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HexagonPlus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M505.824 233.365L400.437 54.166C392.322 40.516 377.502 32 361.387 32H150.613C134.498 32 119.678 40.516 111.563 54.166L6.176 233.365C-2.059 247.365 -2.059 264.633 6.176 278.633L111.563 457.832C119.678 471.482 134.498 480 150.613 480H361.387C377.502 480 392.322 471.482 400.437 457.832L505.824 278.633C514.059 264.633 514.059 247.365 505.824 233.365ZM351.998 280H279.996V352C279.996 365.197 269.195 376 255.998 376C242.797 376 231.996 365.197 231.996 352V280H159.998C146.797 280 135.996 269.197 135.996 256C135.996 242.799 146.797 232 159.998 232H231.996V160C231.996 146.799 242.797 136 255.998 136C269.195 136 279.996 146.799 279.996 160V232H351.998C365.195 232 375.996 242.799 375.996 256C375.996 269.197 365.195 280 351.998 280Z" />
        </Icon>
    </>
}