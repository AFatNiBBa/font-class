
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `youtube-square` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/youtube-square?s=brands youtube-square}
 * @preview ![youtube-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xODYuOCAyMDIuMWw5NS4yIDU0LjEtOTUuMiA1NC4xVjIwMi4xek00NDggODB2MzUyYzAgMjYuNS0yMS41IDQ4LTQ4IDQ4SDQ4Yy0yNi41IDAtNDgtMjEuNS00OC00OFY4MGMwLTI2LjUgMjEuNS00OCA0OC00OGgzNTJjMjYuNSAwIDQ4IDIxLjUgNDggNDh6bS00MiAxNzYuM3MwLTU5LjYtNy42LTg4LjJjLTQuMi0xNS44LTE2LjUtMjguMi0zMi4yLTMyLjRDMzM3LjkgMTI4IDIyNCAxMjggMjI0IDEyOHMtMTEzLjkgMC0xNDIuMiA3LjdjLTE1LjcgNC4yLTI4IDE2LjYtMzIuMiAzMi40LTcuNiAyOC41LTcuNiA4OC4yLTcuNiA4OC4yczAgNTkuNiA3LjYgODguMmM0LjIgMTUuOCAxNi41IDI3LjcgMzIuMiAzMS45QzExMC4xIDM4NCAyMjQgMzg0IDIyNCAzODRzMTEzLjkgMCAxNDIuMi03LjdjMTUuNy00LjIgMjgtMTYuMSAzMi4yLTMxLjkgNy42LTI4LjUgNy42LTg4LjEgNy42LTg4LjF6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function YoutubeSquare(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z" />
        </Icon>
    </>
}