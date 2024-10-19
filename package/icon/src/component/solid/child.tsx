
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `child` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/child?s=solid child}
 * @preview ![child](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjMuOTk5IDE0NEMyNjMuNzQ5IDE0NCAyOTUuOTk5IDExMS43NSAyOTUuOTk5IDcyUzI2My43NDkgMCAyMjMuOTk5IDBTMTUxLjk5OSAzMi4yNSAxNTEuOTk5IDcyUzE4NC4yNDkgMTQ0IDIyMy45OTkgMTQ0Wk00MTUuMDc3IDExMC44MjhDNDAxLjE4NyA5My42ODggMzc2LjAxNSA5MS4wMzEgMzU4LjgyNyAxMDQuOTIyTDMwNy42MjQgMTQ2LjM5MUMyNjAuNDY4IDE4NC41NzggMTg3LjUzIDE4NC41NzggMTQwLjM3NCAxNDYuMzkxTDg5LjE3MSAxMDQuOTIyQzcyLjAxNSA5MSA0Ni43OTYgOTMuNjcyIDMyLjkyMSAxMTAuODI4QzE5LjAxNSAxMjggMjEuNjU1IDE1My4xODggMzguODI3IDE2Ny4wNzhMOTAuMDE1IDIwOC41NDdDMTAxLjc0MyAyMTguMDQzIDExNC42NDUgMjI1LjcwNyAxMjcuOTk5IDIzMi40NjNWNDgwQzEyNy45OTkgNDk3LjYyNSAxNDIuMzc0IDUxMiAxNTkuOTk5IDUxMkgxNzUuOTk5QzE5My42MjQgNTEyIDIwNy45OTkgNDk3LjYyNSAyMDcuOTk5IDQ4MFYzNjhIMjM5Ljk5OVY0ODBDMjM5Ljk5OSA0OTcuNjI1IDI1NC4zNzQgNTEyIDI3MS45OTkgNTEySDI4Ny45OTlDMzA1LjYyNCA1MTIgMzE5Ljk5OSA0OTcuNjI1IDMxOS45OTkgNDgwVjIzMi40NjFDMzMzLjM0OSAyMjUuNzA1IDM0Ni4yNDcgMjE4LjA0MyAzNTcuOTY4IDIwOC41NDdMNDA5LjE3MSAxNjcuMDc4QzQyNi4zNDMgMTUzLjE4OCA0MjguOTgzIDEyOCA0MTUuMDc3IDExMC44MjhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Child(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M223.999 144C263.749 144 295.999 111.75 295.999 72S263.749 0 223.999 0S151.999 32.25 151.999 72S184.249 144 223.999 144ZM415.077 110.828C401.187 93.688 376.015 91.031 358.827 104.922L307.624 146.391C260.468 184.578 187.53 184.578 140.374 146.391L89.171 104.922C72.015 91 46.796 93.672 32.921 110.828C19.015 128 21.655 153.188 38.827 167.078L90.015 208.547C101.743 218.043 114.645 225.707 127.999 232.463V480C127.999 497.625 142.374 512 159.999 512H175.999C193.624 512 207.999 497.625 207.999 480V368H239.999V480C239.999 497.625 254.374 512 271.999 512H287.999C305.624 512 319.999 497.625 319.999 480V232.461C333.349 225.705 346.247 218.043 357.968 208.547L409.171 167.078C426.343 153.188 428.983 128 415.077 110.828Z" />
        </Icon>
    </>
}