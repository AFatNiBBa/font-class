
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `rotate-left` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rotate-left?s=thin rotate-left}
 * @preview ![rotate-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDU2LjY1NlYxOTkuMzc1QzAgMjEyLjk1MyAxMS4wMzEgMjI0IDI0LjYyNSAyMjRIMTY3LjM0NEMxNzcuNSAyMjQgMTg2LjIxOSAyMTguMTcyIDE5MC4wOTQgMjA4Ljc5N1MxOTEuOTM4IDE4OS4xNDEgMTg0Ljc1IDE4MS45NjlMMTE0LjU3MiAxMTEuNzkxTDExNy40MDYgMTA4LjM3NUMxOTguMDk0IDI3LjgxMiAzMzAuMDMxIDI3Ljg3NSA0MTEuMDk0IDEwOC45MjJDNDkyLjE4OCAxOTAuMDE2IDQ5Mi4xODggMzIxLjk2OSA0MTEuMDk0IDQwMy4wOTRDMzI5Ljk2OSA0ODQuMTU2IDE5OC4wMzEgNDg0LjEyNSAxMTYuOTA2IDQwMy4wOTRDMTEzLjc1IDM5OS45MzcgMTA4LjY4OCA0MDAgMTA1LjU5NCA0MDMuMDk0QzEwMi40NjkgNDA2LjIxOSAxMDIuNDY5IDQxMS4yODEgMTA1LjU5NCA0MTQuNDA2QzE0OS4yODEgNDU4LjA2MiAyMDYuNjI1IDQ3OS45MDYgMjY0IDQ3OS45MDZTMzc4LjcxOSA0NTguMDYyIDQyMi40MDYgNDE0LjQwNkM1MDkuNzE5IDMyNy4wNjIgNTA5LjcxOSAxODQuOTM3IDQyMi40MDYgOTcuNjA5QzMzNS4wMzEgMTAuMjY2IDE5Mi45NjkgMTAuMjY2IDEwNS41OTQgOTcuNjA5TDEwMy4yMjcgMTAwLjQ0NUw0Mi4wMzEgMzkuMjVDMzQuODQ0IDMyLjA5NCAyNC42MjUgMzAuMDQ3IDE1LjE4OCAzMy45MDZDNS44MTIgMzcuNzk3IDAgNDYuNTE2IDAgNTYuNjU2Wk0xNiA1Ni42NTZDMTYgNTEuMzEyIDIwLjA2MiA0OS4yMDMgMjEuMzEyIDQ4LjY4OEMyMS45MDYgNDguNDUzIDIzLjE4OCA0OC4wMTYgMjQuNzgxIDQ4LjAxNkMyNi41NjIgNDguMDE2IDI4LjcxOSA0OC41NjIgMzAuNzE5IDUwLjU2MkwxNzMuNDM3IDE5My4yODFDMTc3LjIxOSAxOTcuMDYyIDE3NS44MTIgMjAxLjQzNyAxNzUuMzEyIDIwMi42ODdDMTc0Ljc4MSAyMDMuOTIyIDE3Mi42ODggMjA4IDE2Ny4zNDQgMjA4SDI0LjYyNUMxOS44NzUgMjA4IDE2IDIwNC4xMjUgMTYgMTk5LjM3NVY1Ni42NTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function RotateLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M0 56.656V199.375C0 212.953 11.031 224 24.625 224H167.344C177.5 224 186.219 218.172 190.094 208.797S191.938 189.141 184.75 181.969L114.572 111.791L117.406 108.375C198.094 27.812 330.031 27.875 411.094 108.922C492.188 190.016 492.188 321.969 411.094 403.094C329.969 484.156 198.031 484.125 116.906 403.094C113.75 399.937 108.688 400 105.594 403.094C102.469 406.219 102.469 411.281 105.594 414.406C149.281 458.062 206.625 479.906 264 479.906S378.719 458.062 422.406 414.406C509.719 327.062 509.719 184.937 422.406 97.609C335.031 10.266 192.969 10.266 105.594 97.609L103.227 100.445L42.031 39.25C34.844 32.094 24.625 30.047 15.188 33.906C5.812 37.797 0 46.516 0 56.656ZM16 56.656C16 51.312 20.062 49.203 21.312 48.688C21.906 48.453 23.188 48.016 24.781 48.016C26.562 48.016 28.719 48.562 30.719 50.562L173.437 193.281C177.219 197.062 175.812 201.437 175.312 202.687C174.781 203.922 172.688 208 167.344 208H24.625C19.875 208 16 204.125 16 199.375V56.656Z" />
        </Icon>
    </>
}