
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `swatchbook` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/swatchbook?s=regular swatchbook}
 * @preview ![swatchbook](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMTIgNDI0QzEyNS4yNSA0MjQgMTM2IDQxMy4yNSAxMzYgNDAwUzEyNS4yNSAzNzYgMTEyIDM3NlM4OCAzODYuNzUgODggNDAwUzk4Ljc1IDQyNCAxMTIgNDI0Wk00ODAgMjg4SDM4Mi4zNzVMNDUxLjM3NSAyMTlDNDYzLjg3NSAyMDYuNSA0NjMuODc1IDE4Ni4yNSA0NTEuMzc1IDE3My43NUwzMzguMjUgNjAuNjI1QzMzMiA1NC4zNzUgMzIzLjg3NSA1MS4yNSAzMTUuNjI1IDUxLjI1QzMwNy41IDUxLjI1IDI5OS4yNSA1NC4zNzUgMjkzIDYwLjYyNUwyMjQgMTI5LjYyNVYzMkMyMjQgMTQuMzc1IDIwOS42MjUgMCAxOTIgMEgzMkMxNC4zNzUgMCAwIDE0LjM3NSAwIDMyVjQwMEMwIDQ2MS44NzUgNTAuMTI1IDUxMiAxMTIgNTEySDQ4MEM0OTcuNjI1IDUxMiA1MTIgNDk3LjYyNSA1MTIgNDgwVjMyMEM1MTIgMzAyLjM3NSA0OTcuNjI1IDI4OCA0ODAgMjg4Wk0xNzYgNDAwQzE3NiA0MDQuMzY1IDE3NS41NDEgNDA3Ljg3MyAxNzQuODg5IDQxMS4wMThDMTY5LjY0MyA0NDEuMDggMTQzLjU2MSA0NjQgMTEyIDQ2NEM3Ni42NjYgNDY0IDQ4IDQzNS4zMzIgNDggNDAwVjMwNEgxNzZWNDAwWk0xNzYgMjU2SDQ4VjE3NkgxNzZWMjU2Wk0xNzYgMTI4SDQ4VjQ4SDE3NlYxMjhaTTIyNCAxOTcuNUwzMTUuNjI1IDEwNS44NzVMNDA2LjEyNSAxOTYuMzc1TDIyNCAzNzguNVYxOTcuNVpNNDY0IDQ2NEgyMDYuMzc1TDMzNC4zNzUgMzM2SDQ2NFY0NjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Swatchbook(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M112 424C125.25 424 136 413.25 136 400S125.25 376 112 376S88 386.75 88 400S98.75 424 112 424ZM480 288H382.375L451.375 219C463.875 206.5 463.875 186.25 451.375 173.75L338.25 60.625C332 54.375 323.875 51.25 315.625 51.25C307.5 51.25 299.25 54.375 293 60.625L224 129.625V32C224 14.375 209.625 0 192 0H32C14.375 0 0 14.375 0 32V400C0 461.875 50.125 512 112 512H480C497.625 512 512 497.625 512 480V320C512 302.375 497.625 288 480 288ZM176 400C176 404.365 175.541 407.873 174.889 411.018C169.643 441.08 143.561 464 112 464C76.666 464 48 435.332 48 400V304H176V400ZM176 256H48V176H176V256ZM176 128H48V48H176V128ZM224 197.5L315.625 105.875L406.125 196.375L224 378.5V197.5ZM464 464H206.375L334.375 336H464V464Z" />
        </Icon>
    </>
}