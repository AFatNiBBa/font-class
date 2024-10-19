
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `message-arrow-up` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/message-arrow-up?s=duotone message-arrow-up}
 * @preview ![message-arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ0OCAwSDY0QzI4Ljc1IDAgMCAyOC43NDggMCA2My45OTRWMzUxLjk3MUMwIDM4Ny4yMTkgMjguNzUgNDE1Ljk2NyA2NCA0MTUuOTY3SDE2MFY0OTkuOTU5QzE2MCA1MDkuNzA5IDE3MS4yNSA1MTUuNDU5IDE3OS4xMjUgNTA5LjcwOUwzMDQgNDE1Ljk2N0g0NDhDNDgzLjI1IDQxNS45NjcgNTEyIDM4Ny4yMTkgNTEyIDM1MS45NzFWNjMuOTk0QzUxMiAyOC43NDggNDgzLjI1IDAgNDQ4IDBaTTM1MC42MjEgMjI0Ljk2OUMzNDUuOTM0IDIyOS42NTYgMzM5LjgwOSAyMzIgMzMzLjY1MiAyMzJTMzIxLjM3MSAyMjkuNjU2IDMxNi42ODQgMjI0Ljk2OUwyNzcuNjUyIDE4NS45MzdWMjg4QzI3Ny42NTIgMzAxLjI1IDI2Ni45MDIgMzEyIDI1My42NTIgMzEyUzIyOS42NTIgMzAxLjI1IDIyOS42NTIgMjg4VjE4NS45MzhMMTkwLjYyMSAyMjQuOTY5QzE4MS4yNDYgMjM0LjM0NCAxNjYuMDU5IDIzNC4zNDQgMTU2LjY4NCAyMjQuOTY5UzE0Ny4zMDkgMjAwLjQwNiAxNTYuNjg0IDE5MS4wMzFMMjM2LjY4NCAxMTEuMDMxQzI0Ni4wNTkgMTAxLjY1NiAyNjEuMjQ2IDEwMS42NTYgMjcwLjYyMSAxMTEuMDMxTDM1MC42MjEgMTkxLjAzMUMzNTkuOTk2IDIwMC40MDYgMzU5Ljk5NiAyMTUuNTk0IDM1MC42MjEgMjI0Ljk2OVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzUwLjk2OCAyMjQuOTY5QzM0Ni4yOCAyMjkuNjU2IDM0MC4xNTUgMjMyIDMzMy45OTkgMjMyUzMyMS43MTcgMjI5LjY1NiAzMTcuMDMgMjI0Ljk2OUwyNzcuOTk5IDE4NS45MzdWMjg4QzI3Ny45OTkgMzAxLjI1IDI2Ny4yNDkgMzEyIDI1My45OTkgMzEyUzIyOS45OTkgMzAxLjI1IDIyOS45OTkgMjg4VjE4NS45MzhMMTkwLjk2OCAyMjQuOTY5QzE4MS41OTIgMjM0LjM0NCAxNjYuNDA1IDIzNC4zNDQgMTU3LjAzIDIyNC45NjlTMTQ3LjY1NSAyMDAuNDA2IDE1Ny4wMyAxOTEuMDMxTDIzNy4wMyAxMTEuMDMxQzI0Ni40MDUgMTAxLjY1NiAyNjEuNTkyIDEwMS42NTYgMjcwLjk2OCAxMTEuMDMxTDM1MC45NjggMTkxLjAzMUMzNjAuMzQyIDIwMC40MDYgMzYwLjM0MiAyMTUuNTk0IDM1MC45NjggMjI0Ljk2OVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function MessageArrowUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M448 0H64C28.75 0 0 28.748 0 63.994V351.971C0 387.219 28.75 415.967 64 415.967H160V499.959C160 509.709 171.25 515.459 179.125 509.709L304 415.967H448C483.25 415.967 512 387.219 512 351.971V63.994C512 28.748 483.25 0 448 0ZM350.621 224.969C345.934 229.656 339.809 232 333.652 232S321.371 229.656 316.684 224.969L277.652 185.937V288C277.652 301.25 266.902 312 253.652 312S229.652 301.25 229.652 288V185.938L190.621 224.969C181.246 234.344 166.059 234.344 156.684 224.969S147.309 200.406 156.684 191.031L236.684 111.031C246.059 101.656 261.246 101.656 270.621 111.031L350.621 191.031C359.996 200.406 359.996 215.594 350.621 224.969Z" />
            <path d="M350.968 224.969C346.28 229.656 340.155 232 333.999 232S321.717 229.656 317.03 224.969L277.999 185.937V288C277.999 301.25 267.249 312 253.999 312S229.999 301.25 229.999 288V185.938L190.968 224.969C181.592 234.344 166.405 234.344 157.03 224.969S147.655 200.406 157.03 191.031L237.03 111.031C246.405 101.656 261.592 101.656 270.968 111.031L350.968 191.031C360.342 200.406 360.342 215.594 350.968 224.969Z" />
        </Icon>
    </>
}