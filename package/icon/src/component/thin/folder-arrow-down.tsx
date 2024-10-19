
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `folder-arrow-down` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/folder-arrow-down?s=thin folder-arrow-down}
 * @preview ![folder-arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQgOTZIMjcyTDIxNy4zNzMgNDEuMzc1QzIxMS4zNzEgMzUuMzcxIDIwMy4yMzIgMzIgMTk0Ljc0NiAzMkg0OEMyMS40OSAzMiAwIDUzLjQ5MiAwIDgwVjQzMkMwIDQ1OC41MDggMjEuNDkgNDgwIDQ4IDQ4MEg0NjRDNDkwLjUxIDQ4MCA1MTIgNDU4LjUwOCA1MTIgNDMyVjE0NEM1MTIgMTE3LjQ5MiA0OTAuNTEgOTYgNDY0IDk2Wk00OTYgNDMyQzQ5NiA0NDkuNjcyIDQ4MS42NzQgNDY0IDQ2NCA0NjRINDhDMzAuMzI2IDQ2NCAxNiA0NDkuNjcyIDE2IDQzMlY4MEMxNiA2Mi4zMjggMzAuMzI2IDQ4IDQ4IDQ4SDE4OC4xMTdDMTk2LjYwNCA0OCAyMDQuNzQyIDUxLjM3MSAyMTAuNzQ0IDU3LjM3MUwyNjUuMzcxIDExMkg0NjRDNDgxLjY3NCAxMTIgNDk2IDEyNi4zMjggNDk2IDE0NFY0MzJaTTI1MC4zNCAzODkuNjUyQzI1MS43ODcgMzkxLjEwMiAyNTMuNzg3IDM5MiAyNTYgMzkyUzI2MC4yMTMgMzkxLjEwMiAyNjEuNjYgMzg5LjY1MkwzNTcuNjU2IDI5My42NTZDMzYwLjc4MSAyOTAuNTMxIDM2MC43ODEgMjg1LjQ2OSAzNTcuNjU2IDI4Mi4zNDRTMzQ5LjQ2OSAyNzkuMjE5IDM0Ni4zNDQgMjgyLjM0NEwyNjQgMzY0LjY4OFYxOTJDMjY0IDE4Ny41NzggMjYwLjQyMiAxODQgMjU2IDE4NFMyNDggMTg3LjU3OCAyNDggMTkyVjM2NC42ODhMMTY1LjY1NiAyODIuMzQ0QzE2NC4wOTQgMjgwLjc4MSAxNjIuMDQ3IDI4MCAxNjAgMjgwUzE1NS45MDYgMjgwLjc4MSAxNTQuMzQ0IDI4Mi4zNDRDMTUxLjIxOSAyODUuNDY5IDE1MS4yMTkgMjkwLjUzMSAxNTQuMzQ0IDI5My42NTZMMjUwLjM0IDM4OS42NTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FolderArrowDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M464 96H272L217.373 41.375C211.371 35.371 203.232 32 194.746 32H48C21.49 32 0 53.492 0 80V432C0 458.508 21.49 480 48 480H464C490.51 480 512 458.508 512 432V144C512 117.492 490.51 96 464 96ZM496 432C496 449.672 481.674 464 464 464H48C30.326 464 16 449.672 16 432V80C16 62.328 30.326 48 48 48H188.117C196.604 48 204.742 51.371 210.744 57.371L265.371 112H464C481.674 112 496 126.328 496 144V432ZM250.34 389.652C251.787 391.102 253.787 392 256 392S260.213 391.102 261.66 389.652L357.656 293.656C360.781 290.531 360.781 285.469 357.656 282.344S349.469 279.219 346.344 282.344L264 364.688V192C264 187.578 260.422 184 256 184S248 187.578 248 192V364.688L165.656 282.344C164.094 280.781 162.047 280 160 280S155.906 280.781 154.344 282.344C151.219 285.469 151.219 290.531 154.344 293.656L250.34 389.652Z" />
        </Icon>
    </>
}