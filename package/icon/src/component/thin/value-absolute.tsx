
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `value-absolute` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/value-absolute?s=thin value-absolute}
 * @preview ![value-absolute](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik04IDMyQzMuNTk0IDMyIDAgMzUuNTk0IDAgNDBWNDcyQzAgNDc2LjQwNiAzLjU5NCA0ODAgOCA0ODBTMTYgNDc2LjQwNiAxNiA0NzJWNDBDMTYgMzUuNTk0IDEyLjQwNiAzMiA4IDMyWk01MDQgMzJDNDk5LjU5NCAzMiA0OTYgMzUuNTk0IDQ5NiA0MFY0NzJDNDk2IDQ3Ni40MDYgNDk5LjU5NCA0ODAgNTA0IDQ4MFM1MTIgNDc2LjQwNiA1MTIgNDcyVjQwQzUxMiAzNS41OTQgNTA4LjQwNiAzMiA1MDQgMzJaTTM4MS42NTYgMTMwLjM0NEMzNzguNTMxIDEyNy4yMTkgMzczLjQ2OSAxMjcuMjE5IDM3MC4zNDQgMTMwLjM0NEwyNTYgMjQ0LjY4OEwxNDEuNjU2IDEzMC4zNDRDMTM4LjUzMSAxMjcuMjE5IDEzMy40NjkgMTI3LjIxOSAxMzAuMzQ0IDEzMC4zNDRTMTI3LjIxOSAxMzguNTMxIDEzMC4zNDQgMTQxLjY1NkwyNDQuNjg4IDI1NkwxMzAuMzQ0IDM3MC4zNDRDMTI3LjIxOSAzNzMuNDY5IDEyNy4yMTkgMzc4LjUzMSAxMzAuMzQ0IDM4MS42NTZDMTMxLjkwNiAzODMuMjE5IDEzMy45MzggMzg0IDEzNiAzODRTMTQwLjA5NCAzODMuMjE5IDE0MS42NTYgMzgxLjY1NkwyNTYgMjY3LjMxMkwzNzAuMzQ0IDM4MS42NTZDMzcxLjkwNiAzODMuMjE5IDM3My45MzggMzg0IDM3NiAzODRTMzgwLjA5NCAzODMuMjE5IDM4MS42NTYgMzgxLjY1NkMzODQuNzgxIDM3OC41MzEgMzg0Ljc4MSAzNzMuNDY5IDM4MS42NTYgMzcwLjM0NEwyNjcuMzEyIDI1NkwzODEuNjU2IDE0MS42NTZDMzg0Ljc4MSAxMzguNTMxIDM4NC43ODEgMTMzLjQ2OSAzODEuNjU2IDEzMC4zNDRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ValueAbsolute(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M8 32C3.594 32 0 35.594 0 40V472C0 476.406 3.594 480 8 480S16 476.406 16 472V40C16 35.594 12.406 32 8 32ZM504 32C499.594 32 496 35.594 496 40V472C496 476.406 499.594 480 504 480S512 476.406 512 472V40C512 35.594 508.406 32 504 32ZM381.656 130.344C378.531 127.219 373.469 127.219 370.344 130.344L256 244.688L141.656 130.344C138.531 127.219 133.469 127.219 130.344 130.344S127.219 138.531 130.344 141.656L244.688 256L130.344 370.344C127.219 373.469 127.219 378.531 130.344 381.656C131.906 383.219 133.938 384 136 384S140.094 383.219 141.656 381.656L256 267.312L370.344 381.656C371.906 383.219 373.938 384 376 384S380.094 383.219 381.656 381.656C384.781 378.531 384.781 373.469 381.656 370.344L267.312 256L381.656 141.656C384.781 138.531 384.781 133.469 381.656 130.344Z" />
        </Icon>
    </>
}