
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-pointer` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-pointer?s=regular arrow-pointer}
 * @preview ![arrow-pointer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTEuODcxIDI3OS40NTlMMzkuODc0IDM4LjAxNEMzNS40MDggMzQuMDU3IDI5Ljc1MyAzMiAyNC4wMTEgMzJDMjAuNjc0IDMyIDE3LjMwNiAzMi42OTYgMTQuMTI1IDM0LjExNkM1LjUzMSAzOC4wMTUgMCA0Ni42MjkgMCA1Ni4xMjNWNDI2LjMzOEMwIDQzNi40NjEgNi4yODEgNDQ1LjUxNSAxNS43MTkgNDQ5LjAwNUMxOC40MjIgNDQ5Ljk5NSAyMS4yMTggNDUwLjQ4MiAyNCA0NTAuNDgyQzMwLjkwNiA0NTAuNDgyIDM3LjY0IDQ0Ny40OCA0Mi4yODEgNDQxLjk3OEwxMjUuNzYgMzQzLjE2OEwxODQuMDEgNDY2LjIzMUMxODkuNzA3IDQ3OC4yNjcgMjA0LjAyNCA0ODMuMzggMjE1Ljk5IDQ3Ny42NTJMMjE1Ljk5IDQ3Ny42NTJDMjI3Ljk2MiA0NzEuOTIyIDIzMy4wNDcgNDU3LjUxMiAyMjcuMzQ4IDQ0NS40N0wxNjguNzY5IDMyMS43MTJIMjk1Ljk5NkMzMDUuOTggMzIxLjcxMiAzMTQuOTE4IDMxNS41MDMgMzE4LjQ0OSAzMDYuMTAzQzMyMS45OCAyOTYuNzE5IDMxOS4zNTUgMjg2LjEwOCAzMTEuODcxIDI3OS40NTlaTTEyMS42OTIgMjczLjQyM0wxMDcuMzE3IDI5MC40MzlMNDcuOTk5IDM2MC42NDhWMTA5LjYyN0wyMzIuNTI0IDI3My40MjNIMTIxLjY5MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ArrowPointer(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M311.871 279.459L39.874 38.014C35.408 34.057 29.753 32 24.011 32C20.674 32 17.306 32.696 14.125 34.116C5.531 38.015 0 46.629 0 56.123V426.338C0 436.461 6.281 445.515 15.719 449.005C18.422 449.995 21.218 450.482 24 450.482C30.906 450.482 37.64 447.48 42.281 441.978L125.76 343.168L184.01 466.231C189.707 478.267 204.024 483.38 215.99 477.652L215.99 477.652C227.962 471.922 233.047 457.512 227.348 445.47L168.769 321.712H295.996C305.98 321.712 314.918 315.503 318.449 306.103C321.98 296.719 319.355 286.108 311.871 279.459ZM121.692 273.423L107.317 290.439L47.999 360.648V109.627L232.524 273.423H121.692Z" />
        </Icon>
    </>
}