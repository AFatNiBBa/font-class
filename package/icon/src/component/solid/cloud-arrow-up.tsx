
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-arrow-up` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-arrow-up?s=solid cloud-arrow-up}
 * @preview ![cloud-arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MzcuNTk0IDIyNi41OTRDNTQxLjY4OCAyMTUuOTA2IDU0NCAyMDQuMjAzIDU0NCAxOTJDNTQ0IDEzOSA1MDEgOTYgNDQ4IDk2QzQyOC4zMTIgOTYgNDA5LjkwNiAxMDIgMzk0LjY4OCAxMTIuMjAzQzM2NyA2NC4yMDMgMzE1LjMxMiAzMiAyNTYgMzJDMTY3LjU5NCAzMiA5NiAxMDMuNTk0IDk2IDE5MkM5NiAxOTQuNzAzIDk2LjA5NCAxOTcuNDA2IDk2LjE4OCAyMDAuMDk0QzQwLjE4OCAyMTkuNzk3IDAgMjczLjIwMyAwIDMzNkMwIDQxNS41IDY0LjUgNDgwIDE0NCA0ODBINTEyQzU4Mi42ODggNDgwIDY0MCA0MjIuNzAzIDY0MCAzNTJDNjQwIDI5MC4wOTQgNTk2IDIzOC40MDYgNTM3LjU5NCAyMjYuNTk0Wk0yMTUuMDMxIDI1NS4wMzFMMzAzLjAzMSAxNjcuMDMxQzMwNS41OTUgMTY0LjQ2NyAzMTEuNTA2IDE2MCAzMjAgMTYwUzMzNC40MDUgMTY0LjQ2NyAzMzYuOTY5IDE2Ny4wMzFMNDI0Ljk2OSAyNTUuMDMxQzQzNC4zNDQgMjY0LjQwNiA0MzQuMzQ0IDI3OS41OTQgNDI0Ljk2OSAyODguOTY5UzQwMC40MDYgMjk4LjM0NCAzOTEuMDMxIDI4OC45NjlMMzQ0IDI0MS45MzhWMzkyQzM0NCA0MDUuMjUgMzMzLjI1IDQxNiAzMjAgNDE2UzI5NiA0MDUuMjUgMjk2IDM5MlYyNDEuOTM4TDI0OC45NjkgMjg4Ljk2OUMyMzkuNTk0IDI5OC4zNDQgMjI0LjQwNiAyOTguMzQ0IDIxNS4wMzEgMjg4Ljk2OVMyMDUuNjU2IDI2NC40MDYgMjE1LjAzMSAyNTUuMDMxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CloudArrowUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M537.594 226.594C541.688 215.906 544 204.203 544 192C544 139 501 96 448 96C428.312 96 409.906 102 394.688 112.203C367 64.203 315.312 32 256 32C167.594 32 96 103.594 96 192C96 194.703 96.094 197.406 96.188 200.094C40.188 219.797 0 273.203 0 336C0 415.5 64.5 480 144 480H512C582.688 480 640 422.703 640 352C640 290.094 596 238.406 537.594 226.594ZM215.031 255.031L303.031 167.031C305.595 164.467 311.506 160 320 160S334.405 164.467 336.969 167.031L424.969 255.031C434.344 264.406 434.344 279.594 424.969 288.969S400.406 298.344 391.031 288.969L344 241.938V392C344 405.25 333.25 416 320 416S296 405.25 296 392V241.938L248.969 288.969C239.594 298.344 224.406 298.344 215.031 288.969S205.656 264.406 215.031 255.031Z" />
        </Icon>
    </>
}