
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `filter` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/filter?s=light filter}
 * @preview ![filter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NzkuMjk5IDMySDMyLjcwMUM1LjIxMyAzMiAtOS45NjUgNjMuMjc1IDcuMzc1IDg0LjE4NkwxOTIgMzA2LjgyMlY0MDBDMTkyIDQwNy44MjggMTk1LjgxMyA0MTUuMTcyIDIwMi4yNSA0MTkuNjU2TDI4Mi4yNSA0NzUuNjQxQzI4Ni41MzUgNDc4LjYzOSAyOTEuMjc0IDQ4MCAyOTUuOTA2IDQ4MEMzMDguMzQgNDgwIDMyMCA0NzAuMjAxIDMyMCA0NTUuOTg0VjMwNi44MjJMNTA0LjYyNSA4NC4xODZDNTIxLjk2NSA2My4yNzUgNTA2Ljc4NyAzMiA0NzkuMjk5IDMyWk0yOTUuMzY3IDI4Ni4zOTVMMjg4IDI5NS4yNzlWNDQwLjYwN0wyMjQgMzk1LjgyVjI5NS4yNzlMMjE2LjYzMyAyODYuMzk1TDMyLjcwMSA2NEg0NzkuMjk5TDQ3OS45OTIgNjMuNzU4TDI5NS4zNjcgMjg2LjM5NVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Filter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M479.299 32H32.701C5.213 32 -9.965 63.275 7.375 84.186L192 306.822V400C192 407.828 195.813 415.172 202.25 419.656L282.25 475.641C286.535 478.639 291.274 480 295.906 480C308.34 480 320 470.201 320 455.984V306.822L504.625 84.186C521.965 63.275 506.787 32 479.299 32ZM295.367 286.395L288 295.279V440.607L224 395.82V295.279L216.633 286.395L32.701 64H479.299L479.992 63.758L295.367 286.395Z" />
        </Icon>
    </>
}