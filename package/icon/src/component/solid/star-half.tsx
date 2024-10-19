
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `star-half` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/star-half?s=solid star-half}
 * @preview ![star-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODcuOTk5IDQzOS41NTVMMTU3LjA3MyA1MDguMjVDMTUyLjE5NiA1MTAuODI4IDE0Ny4xMjIgNTEyIDE0Mi4xOSA1MTJDMTIzLjU5OSA1MTIgMTA3LjAxOCA0OTUuMzQ0IDExMC41ODMgNDc0LjU1MUwxMzUuNjI4IDMyOS4wNjZMMjkuNzE4IDIyNi4wNzhDMTAuNjgyIDIwNy41OCAyMS4yMDIgMTc1LjI4NyA0Ny40NjggMTcxLjQ5TDE5My44MjcgMTUwLjE5NUwyNTkuMjU5IDE3LjgwNUMyNjUuMTQxIDUuODk4IDI3Ni41MzIgMCAyODcuOTI3IDBDMjg3Ljk1IDAgMjg3Ljk3NSAwLjAxIDI4Ny45OTkgMC4wMVY0MzkuNTU1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function StarHalf(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M287.999 439.555L157.073 508.25C152.196 510.828 147.122 512 142.19 512C123.599 512 107.018 495.344 110.583 474.551L135.628 329.066L29.718 226.078C10.682 207.58 21.202 175.287 47.468 171.49L193.827 150.195L259.259 17.805C265.141 5.898 276.532 0 287.927 0C287.95 0 287.975 0.01 287.999 0.01V439.555Z" />
        </Icon>
    </>
}