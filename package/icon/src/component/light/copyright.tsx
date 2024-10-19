
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `copyright` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/copyright?s=light copyright}
 * @preview ![copyright](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0NjRDMTQxLjMwOSA0NjQgNDggMzcwLjY5MSA0OCAyNTZTMTQxLjMwOSA0OCAyNTYgNDhTNDY0IDE0MS4zMDkgNDY0IDI1NlMzNzAuNjkxIDQ2NCAyNTYgNDY0Wk0zMjMuODc1IDE4OC4xMjVDMzMwLjEyNSAxOTQuMzc1IDM0MC4yNSAxOTQuMzc1IDM0Ni41IDE4OC4xMjVTMzUyLjc1IDE3MS43NSAzNDYuNSAxNjUuNUMyOTguMTg4IDExNy4xMjUgMjEzLjgxMiAxMTcuMTI1IDE2NS41IDE2NS41QzE0MS4zMTIgMTg5LjY1NiAxMjggMjIxLjgxMiAxMjggMjU2UzE0MS4zMTIgMzIyLjM0NCAxNjUuNSAzNDYuNUMxODkuNjU2IDM3MC42ODggMjIxLjgxMiAzODQgMjU2IDM4NFMzMjIuMzQ0IDM3MC42ODggMzQ2LjUgMzQ2LjVDMzUyLjc1IDM0MC4yNSAzNTIuNzUgMzMwLjEyNSAzNDYuNSAzMjMuODc1UzMzMC4xMjUgMzE3LjYyNSAzMjMuODc1IDMyMy44NzVDMjg3LjYyNSAzNjAuMTI1IDIyNC4zNzUgMzYwLjEyNSAxODguMTI1IDMyMy44NzVDMTY5Ljk5OSAzMDUuNzUgMTYwIDI4MS42NTYgMTYwIDI1NlMxNjkuOTk5IDIwNi4yNSAxODguMTI1IDE4OC4xMjVDMjI0LjM3NSAxNTEuODc1IDI4Ny42MjUgMTUxLjg3NSAzMjMuODc1IDE4OC4xMjVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Copyright(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM323.875 188.125C330.125 194.375 340.25 194.375 346.5 188.125S352.75 171.75 346.5 165.5C298.188 117.125 213.812 117.125 165.5 165.5C141.312 189.656 128 221.812 128 256S141.312 322.344 165.5 346.5C189.656 370.688 221.812 384 256 384S322.344 370.688 346.5 346.5C352.75 340.25 352.75 330.125 346.5 323.875S330.125 317.625 323.875 323.875C287.625 360.125 224.375 360.125 188.125 323.875C169.999 305.75 160 281.656 160 256S169.999 206.25 188.125 188.125C224.375 151.875 287.625 151.875 323.875 188.125Z" />
        </Icon>
    </>
}