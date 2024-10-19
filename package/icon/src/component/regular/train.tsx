
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `train` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/train?s=regular train}
 * @preview ![train](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIgMEg5NkM0Mi45OCAwIDAgNDIuOTggMCA5NlYzNTJDMCAzOTQuODQ2IDI4LjI1NiA0MzAuNzA1IDY3LjAwOCA0NDMuMDU1TDM5LjAzMSA0NzEuMDMxQzI5LjY1NiA0ODAuNDA2IDI5LjY1NiA0OTUuNTk0IDM5LjAzMSA1MDQuOTY5QzQzLjcxOSA1MDkuNjU2IDQ5Ljg1OSA1MTIgNTYgNTEyUzY4LjI4MSA1MDkuNjU2IDcyLjk2OSA1MDQuOTY5TDEyOS45MzggNDQ4SDMxOC4wNjJMMzc1LjAzMSA1MDQuOTY5QzM3OS43MTkgNTA5LjY1NiAzODUuODU5IDUxMiAzOTIgNTEyUzQwNC4yODEgNTA5LjY1NiA0MDguOTY5IDUwNC45NjlDNDE4LjM0NCA0OTUuNTk0IDQxOC4zNDQgNDgwLjQwNiA0MDguOTY5IDQ3MS4wMzFMMzgwLjk5MiA0NDMuMDU1QzQxOS43NDQgNDMwLjcwNSA0NDggMzk0Ljg0NiA0NDggMzUyVjk2QzQ0OCA0Mi45OCA0MDUuMDIgMCAzNTIgMFpNNDAwIDM1MkM0MDAgMzc4LjQ2NyAzNzguNDY3IDQwMCAzNTIgNDAwSDk2QzY5LjUzMyA0MDAgNDggMzc4LjQ2NyA0OCAzNTJWMjI0SDQwMFYzNTJaTTQwMCAxNzZINDhWOTZDNDggNjkuNTMzIDY5LjUzMyA0OCA5NiA0OEgzNTJDMzc4LjQ2NyA0OCA0MDAgNjkuNTMzIDQwMCA5NlYxNzZaTTIyNCAzNjBDMjQ2LjA5MiAzNjAgMjY0IDM0Mi4wOTIgMjY0IDMyMFMyNDYuMDkyIDI4MCAyMjQgMjgwUzE4NCAyOTcuOTA4IDE4NCAzMjBTMjAxLjkwOCAzNjAgMjI0IDM2MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Train(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M352 0H96C42.98 0 0 42.98 0 96V352C0 394.846 28.256 430.705 67.008 443.055L39.031 471.031C29.656 480.406 29.656 495.594 39.031 504.969C43.719 509.656 49.859 512 56 512S68.281 509.656 72.969 504.969L129.938 448H318.062L375.031 504.969C379.719 509.656 385.859 512 392 512S404.281 509.656 408.969 504.969C418.344 495.594 418.344 480.406 408.969 471.031L380.992 443.055C419.744 430.705 448 394.846 448 352V96C448 42.98 405.02 0 352 0ZM400 352C400 378.467 378.467 400 352 400H96C69.533 400 48 378.467 48 352V224H400V352ZM400 176H48V96C48 69.533 69.533 48 96 48H352C378.467 48 400 69.533 400 96V176ZM224 360C246.092 360 264 342.092 264 320S246.092 280 224 280S184 297.908 184 320S201.908 360 224 360Z" />
        </Icon>
    </>
}