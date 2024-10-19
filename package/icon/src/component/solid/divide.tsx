
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `divide` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/divide?s=solid divide}
 * @preview ![divide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMTQ0QzI1MC41MzEgMTQ0IDI3MiAxMjIuNTMxIDI3MiA5NlMyNTAuNTMxIDQ4IDIyNCA0OFMxNzYgNjkuNDY5IDE3NiA5NlMxOTcuNDY5IDE0NCAyMjQgMTQ0Wk0yMjQgMzY4QzE5Ny40NjkgMzY4IDE3NiAzODkuNDY5IDE3NiA0MTZTMTk3LjQ2OSA0NjQgMjI0IDQ2NFMyNzIgNDQyLjUzMSAyNzIgNDE2UzI1MC41MzEgMzY4IDIyNCAzNjhaTTM5MiAyMTZINTZDMzMuOTA2IDIxNiAxNiAyMzMuOTA2IDE2IDI1NlMzMy45MDYgMjk2IDU2IDI5NkgzOTJDNDE0LjA5NCAyOTYgNDMyIDI3OC4wOTQgNDMyIDI1NlM0MTQuMDk0IDIxNiAzOTIgMjE2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Divide(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224 144C250.531 144 272 122.531 272 96S250.531 48 224 48S176 69.469 176 96S197.469 144 224 144ZM224 368C197.469 368 176 389.469 176 416S197.469 464 224 464S272 442.531 272 416S250.531 368 224 368ZM392 216H56C33.906 216 16 233.906 16 256S33.906 296 56 296H392C414.094 296 432 278.094 432 256S414.094 216 392 216Z" />
        </Icon>
    </>
}