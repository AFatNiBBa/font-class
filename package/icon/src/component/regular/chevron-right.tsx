
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chevron-right` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-right?s=regular chevron-right}
 * @preview ![chevron-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMTMuMzMzIDQ3LjQwOUwyOTcuMzE0IDIzOS40MDdDMzAxLjc4MyAyNDQuMDMyIDMwNC4wMDEgMjUwLjAzMiAzMDQuMDAxIDI1Ni4wMDFTMzAxLjc4MyAyNjcuOTY5IDI5Ny4zMTQgMjcyLjU5NEwxMTMuMzMzIDQ2NC41OTJDMTA0LjE4MSA0NzQuMTg2IDg4Ljk5NCA0NzQuNDk5IDc5LjQzMSA0NjUuMzExQzY5LjgwNiA0NTYuMTg2IDY5LjQ5NCA0NDAuOTM2IDc4LjcxMiA0MzEuNDA1TDI0Ni43NTkgMjU2LjAwMUw3OC43MTIgODAuNTk2QzY5LjQ5NCA3MS4wOTYgNjkuODA2IDU1LjgxNSA3OS40MzEgNDYuNjlDODguOTk0IDM3LjUwMyAxMDQuMTgxIDM3LjgxNSAxMTMuMzMzIDQ3LjQwOVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ChevronRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M113.333 47.409L297.314 239.407C301.783 244.032 304.001 250.032 304.001 256.001S301.783 267.969 297.314 272.594L113.333 464.592C104.181 474.186 88.994 474.499 79.431 465.311C69.806 456.186 69.494 440.936 78.712 431.405L246.759 256.001L78.712 80.596C69.494 71.096 69.806 55.815 79.431 46.69C88.994 37.503 104.181 37.815 113.333 47.409Z" />
        </Icon>
    </>
}