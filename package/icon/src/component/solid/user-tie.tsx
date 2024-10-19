
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `user-tie` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-tie?s=solid user-tie}
 * @preview ![user-tie](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMjU2QzI5NC43NSAyNTYgMzUyIDE5OC43NSAzNTIgMTI4UzI5NC43NSAwIDIyNCAwUzk2IDU3LjI1IDk2IDEyOFMxNTMuMjUgMjU2IDIyNCAyNTZaTTMxNC43MDUgMzA4LjgzNkwyNzEuOTg4IDQ3OS45NTNMMjQwIDM0NEwyNzIgMjg4SDE3NkwyMDggMzQ0TDE3Ni4wMTIgNDc5Ljk1M0wxMzMuMjk1IDMwOC44MzZDNTYuOTA2IDMyNi45MyAwIDM5NS40MDYgMCA0NzcuMzMyQzAgNDk2LjQ3NyAxNS41MjMgNTEyIDM0LjY2NCA1MTJINDEzLjMzNkM0MzIuNDc3IDUxMiA0NDggNDk2LjQ3NyA0NDggNDc3LjMzMkM0NDggMzk1LjQwNiAzOTEuMSAzMjYuOTMgMzE0LjcwNSAzMDguODM2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function UserTie(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224 256C294.75 256 352 198.75 352 128S294.75 0 224 0S96 57.25 96 128S153.25 256 224 256ZM314.705 308.836L271.988 479.953L240 344L272 288H176L208 344L176.012 479.953L133.295 308.836C56.906 326.93 0 395.406 0 477.332C0 496.477 15.523 512 34.664 512H413.336C432.477 512 448 496.477 448 477.332C448 395.406 391.1 326.93 314.705 308.836Z" />
        </Icon>
    </>
}