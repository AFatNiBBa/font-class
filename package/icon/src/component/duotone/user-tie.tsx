
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `user-tie` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-tie?s=duotone user-tie}
 * @preview ![user-tie](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE3NiAyODhMMjA4IDM0NEwxNzYuMDEyIDQ3OS45NTNMMTg0IDUxMkgyNjRMMjcxLjk4OCA0NzkuOTUzTDI0MCAzNDRMMjcyIDI4OEgxNzZaTTIyNCAwQzE1My4yNSAwIDk2IDU3LjI1IDk2IDEyOFMxNTMuMjUgMjU2IDIyNCAyNTZTMzUyIDE5OC43NSAzNTIgMTI4UzI5NC43NSAwIDIyNCAwWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0xMzMuMjk1IDMwOC44MzZDNTYuOTA2IDMyNi45MyAwIDM5NS40MDYgMCA0NzcuMzMyQzAgNDk2LjQ3NyAxNS41MjMgNTEyIDM0LjY2NCA1MTJIMTg0TDE3Ni4wMTIgNDc5Ljk1M0wxMzMuMjk1IDMwOC44MzZaTTMxNC43MDUgMzA4LjgzNkwyNzEuOTg4IDQ3OS45NTNMMjY0IDUxMkg0MTMuMzM2QzQzMi40NzcgNTEyIDQ0OCA0OTYuNDc3IDQ0OCA0NzcuMzMyQzQ0OCAzOTUuNDA2IDM5MS4xIDMyNi45MyAzMTQuNzA1IDMwOC44MzZaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function UserTie(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M176 288L208 344L176.012 479.953L184 512H264L271.988 479.953L240 344L272 288H176ZM224 0C153.25 0 96 57.25 96 128S153.25 256 224 256S352 198.75 352 128S294.75 0 224 0Z" />
            <path d="M133.295 308.836C56.906 326.93 0 395.406 0 477.332C0 496.477 15.523 512 34.664 512H184L176.012 479.953L133.295 308.836ZM314.705 308.836L271.988 479.953L264 512H413.336C432.477 512 448 496.477 448 477.332C448 395.406 391.1 326.93 314.705 308.836Z" />
        </Icon>
    </>
}