
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `paper-plane-top` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/paper-plane-top?s=solid paper-plane-top}
 * @preview ![paper-plane-top](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMjU1Ljk5OUM1MTIgMjY4Ljc5NSA1MDQuMzc1IDI4MC4zNzQgNDkyLjU5NCAyODUuNDA1TDQ0LjU5NSA0NzcuNDA1QzQwLjUzMyA0NzkuMTU1IDM2LjI1MiA0NzkuOTk5IDMyLjAwMiA0NzkuOTk5QzIzLjM3NyA0NzkuOTk5IDE0LjkwOCA0NzYuNDk5IDguNzIxIDQ2OS45NTJDLTAuNDk4IDQ2MC4xODYgLTIuNjIzIDQ0NS43MDIgMy4zNzcgNDMzLjY4Nkw3Ny4wMzUgMjg2LjM3TDMyMC4wMDEgMjU1Ljk5OUw3Ny4wMzUgMjI1LjYyN0wzLjM3NyA3OC4zMTFDLTIuNjIzIDY2LjI5NSAtMC40OTggNTEuODExIDguNzIxIDQyLjA0NUMxNy45NzEgMzIuMjggMzIuMjgzIDI5LjI5NSA0NC41OTUgMzQuNTkyTDQ5Mi41OTQgMjI2LjU5MkM1MDQuMzc1IDIzMS42MjQgNTEyIDI0My4yMDIgNTEyIDI1NS45OTlaIi8+PC9zdmc+|width=32|height=32)
 */
export default function PaperPlaneTop(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M512 255.999C512 268.795 504.375 280.374 492.594 285.405L44.595 477.405C40.533 479.155 36.252 479.999 32.002 479.999C23.377 479.999 14.908 476.499 8.721 469.952C-0.498 460.186 -2.623 445.702 3.377 433.686L77.035 286.37L320.001 255.999L77.035 225.627L3.377 78.311C-2.623 66.295 -0.498 51.811 8.721 42.045C17.971 32.28 32.283 29.295 44.595 34.592L492.594 226.592C504.375 231.624 512 243.202 512 255.999Z" />
        </Icon>
    </>
}