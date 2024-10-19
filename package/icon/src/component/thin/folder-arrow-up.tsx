
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `folder-arrow-up` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/folder-arrow-up?s=thin folder-arrow-up}
 * @preview ![folder-arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQgOTZIMjcyTDIxNy4zNzMgNDEuMzc1QzIxMS4zNzEgMzUuMzcxIDIwMy4yMzIgMzIgMTk0Ljc0NiAzMkg0OEMyMS40OSAzMiAwIDUzLjQ5MiAwIDgwVjQzMkMwIDQ1OC41MDggMjEuNDkgNDgwIDQ4IDQ4MEg0NjRDNDkwLjUxIDQ4MCA1MTIgNDU4LjUwOCA1MTIgNDMyVjE0NEM1MTIgMTE3LjQ5MiA0OTAuNTEgOTYgNDY0IDk2Wk00OTYgNDMyQzQ5NiA0NDkuNjcyIDQ4MS42NzQgNDY0IDQ2NCA0NjRINDhDMzAuMzI2IDQ2NCAxNiA0NDkuNjcyIDE2IDQzMlY4MEMxNiA2Mi4zMjggMzAuMzI2IDQ4IDQ4IDQ4SDE4OC4xMTdDMTk2LjYwNCA0OCAyMDQuNzQyIDUxLjM3MSAyMTAuNzQ0IDU3LjM3MUwyNjUuMzcxIDExMkg0NjRDNDgxLjY3NCAxMTIgNDk2IDEyNi4zMjggNDk2IDE0NFY0MzJaTTI2MS42NiAxODYuMzQ4QzI2MC4yMTMgMTg0Ljg5OCAyNTguMjEzIDE4NCAyNTYgMTg0UzI1MS43ODcgMTg0Ljg5OCAyNTAuMzQgMTg2LjM0OEwxNTQuMzQ0IDI4Mi4zNDRDMTUxLjIxOSAyODUuNDY5IDE1MS4yMTkgMjkwLjUzMSAxNTQuMzQ0IDI5My42NTZTMTYyLjUzMSAyOTYuNzgxIDE2NS42NTYgMjkzLjY1NkwyNDggMjExLjMxMlYzODRDMjQ4IDM4OC40MjIgMjUxLjU3OCAzOTIgMjU2IDM5MlMyNjQgMzg4LjQyMiAyNjQgMzg0VjIxMS4zMTJMMzQ2LjM0NCAyOTMuNjU2QzM0Ny45MDYgMjk1LjIxOSAzNDkuOTUzIDI5NiAzNTIgMjk2UzM1Ni4wOTQgMjk1LjIxOSAzNTcuNjU2IDI5My42NTZDMzYwLjc4MSAyOTAuNTMxIDM2MC43ODEgMjg1LjQ2OSAzNTcuNjU2IDI4Mi4zNDRMMjYxLjY2IDE4Ni4zNDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FolderArrowUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M464 96H272L217.373 41.375C211.371 35.371 203.232 32 194.746 32H48C21.49 32 0 53.492 0 80V432C0 458.508 21.49 480 48 480H464C490.51 480 512 458.508 512 432V144C512 117.492 490.51 96 464 96ZM496 432C496 449.672 481.674 464 464 464H48C30.326 464 16 449.672 16 432V80C16 62.328 30.326 48 48 48H188.117C196.604 48 204.742 51.371 210.744 57.371L265.371 112H464C481.674 112 496 126.328 496 144V432ZM261.66 186.348C260.213 184.898 258.213 184 256 184S251.787 184.898 250.34 186.348L154.344 282.344C151.219 285.469 151.219 290.531 154.344 293.656S162.531 296.781 165.656 293.656L248 211.312V384C248 388.422 251.578 392 256 392S264 388.422 264 384V211.312L346.344 293.656C347.906 295.219 349.953 296 352 296S356.094 295.219 357.656 293.656C360.781 290.531 360.781 285.469 357.656 282.344L261.66 186.348Z" />
        </Icon>
    </>
}