
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `message-arrow-down` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/message-arrow-down?s=thin message-arrow-down}
 * @preview ![message-arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMEg2NEMyOC43NSAwIDAgMjguNzQ4IDAgNjMuOTk0VjM1MS45NzFDMCAzODcuMjE5IDI4Ljc1IDQxNS45NjcgNjQgNDE1Ljk2N0gxNjBWNDk5Ljk1OUMxNjAgNTA3LjAzMSAxNjUuOTIgNTEyIDE3Mi4xNzggNTEyQzE3NC41NDcgNTEyIDE3Ni45NjMgNTExLjI4NyAxNzkuMTI1IDUwOS43MDlMMzA0IDQxNS45NjdINDQ4QzQ4My4yNSA0MTUuOTY3IDUxMiAzODcuMjE5IDUxMiAzNTEuOTcxVjYzLjk5NEM1MTIgMjguNzQ4IDQ4My4yNSAwIDQ0OCAwWk00OTYgMzUxLjk3MUM0OTYgMzc4LjQzNiA0NzQuNDY3IDM5OS45NjcgNDQ4IDM5OS45NjdIMjk4LjY2MkwyOTQuMzk1IDQwMy4xNzJMMTc2IDQ5Mi4wNTNWMzk5Ljk2N0g2NEMzNy41MzMgMzk5Ljk2NyAxNiAzNzguNDM2IDE2IDM1MS45NzFWNjMuOTk0QzE2IDM3LjUyOSAzNy41MzMgMTUuOTk4IDY0IDE1Ljk5OEg0NDhDNDc0LjQ2NyAxNS45OTggNDk2IDM3LjUyOSA0OTYgNjMuOTk0VjM1MS45NzFaTTM0Ni45MzggMjAwLjU2MkMzNDYuMDYyIDIwMC4yMTkgMzQ1LjMyOCAxOTkuOTA2IDM0NC40MzggMTk5LjkwNkMzMzkuMzE0IDE5OS45MDYgMzI4LjgzOCAyMTAuMjcxIDI2NCAyNzYuNDA0VjEyMEMyNjQgMTE1LjU5NCAyNjAuNDIyIDExMiAyNTYgMTEyUzI0OCAxMTUuNTk0IDI0OCAxMjBWMjc2LjY4OEwxNzMuNjU2IDIwMi4zNDRDMTcwLjUzMSAxOTkuMjE5IDE2NS40NjkgMTk5LjIxOSAxNjIuMzQ0IDIwMi4zNDRTMTU5LjIxOSAyMTAuNTMxIDE2Mi4zNDQgMjEzLjY1NkwyNTAuMzQ0IDMwMS42NTZDMjUxLjg0NCAzMDMuMTU2IDI1My44NzUgMzA0IDI1NiAzMDRIMjU2LjA0N0MyNTguMTcyIDMwNCAyNjAuMjE5IDMwMy4xMjUgMjYxLjcxOSAzMDEuNTk0QzI5Mi4xNzIgMjcwLjUzMSAzNDEuODkxIDIyMC4xODggMzQ4LjE4NyAyMTQuODEyQzM0OS42MDkgMjEzLjkzNyAzNTAuNzgxIDIxMi42MjUgMzUxLjQzNyAyMTAuOTM3QzM1My4wNjIgMjA2Ljg0NCAzNTEuMDQ3IDIwMi4xODggMzQ2LjkzOCAyMDAuNTYyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MessageArrowDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 0H64C28.75 0 0 28.748 0 63.994V351.971C0 387.219 28.75 415.967 64 415.967H160V499.959C160 507.031 165.92 512 172.178 512C174.547 512 176.963 511.287 179.125 509.709L304 415.967H448C483.25 415.967 512 387.219 512 351.971V63.994C512 28.748 483.25 0 448 0ZM496 351.971C496 378.436 474.467 399.967 448 399.967H298.662L294.395 403.172L176 492.053V399.967H64C37.533 399.967 16 378.436 16 351.971V63.994C16 37.529 37.533 15.998 64 15.998H448C474.467 15.998 496 37.529 496 63.994V351.971ZM346.938 200.562C346.062 200.219 345.328 199.906 344.438 199.906C339.314 199.906 328.838 210.271 264 276.404V120C264 115.594 260.422 112 256 112S248 115.594 248 120V276.688L173.656 202.344C170.531 199.219 165.469 199.219 162.344 202.344S159.219 210.531 162.344 213.656L250.344 301.656C251.844 303.156 253.875 304 256 304H256.047C258.172 304 260.219 303.125 261.719 301.594C292.172 270.531 341.891 220.188 348.187 214.812C349.609 213.937 350.781 212.625 351.437 210.937C353.062 206.844 351.047 202.188 346.938 200.562Z" />
        </Icon>
    </>
}