
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `user-minus` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-minus?s=duotone user-minus}
 * @preview ![user-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI3NC42NjQgMzA0SDE3My4zMzZDNzcuNjA5IDMwNCAwIDM4MS42MDIgMCA0NzcuMzMyQzAgNDk2LjQ3NyAxNS41MjMgNTEyIDM0LjY2NCA1MTJINDEzLjMzNkM0MzIuNDc3IDUxMiA0NDggNDk2LjQ3NyA0NDggNDc3LjMzMkM0NDggMzgxLjYwMiAzNzAuMzk4IDMwNCAyNzQuNjY0IDMwNFpNMjI0IDI1NkMyOTQuNjk1IDI1NiAzNTIgMTk4LjY5MSAzNTIgMTI4UzI5NC42OTUgMCAyMjQgMEMxNTMuMzEyIDAgOTYgNTcuMzA5IDk2IDEyOFMxNTMuMzEyIDI1NiAyMjQgMjU2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik02MTYgMjAwSDQ3MkM0NTguNzUgMjAwIDQ0OCAyMTAuNzUgNDQ4IDIyNFM0NTguNzUgMjQ4IDQ3MiAyNDhINjE2QzYyOS4yNSAyNDggNjQwIDIzNy4yNSA2NDAgMjI0UzYyOS4yNSAyMDAgNjE2IDIwMFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function UserMinus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path opacity={.4} d="M274.664 304H173.336C77.609 304 0 381.602 0 477.332C0 496.477 15.523 512 34.664 512H413.336C432.477 512 448 496.477 448 477.332C448 381.602 370.398 304 274.664 304ZM224 256C294.695 256 352 198.691 352 128S294.695 0 224 0C153.312 0 96 57.309 96 128S153.312 256 224 256Z" />
            <path d="M616 200H472C458.75 200 448 210.75 448 224S458.75 248 472 248H616C629.25 248 640 237.25 640 224S629.25 200 616 200Z" />
        </Icon>
    </>
}