
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `ban-parking` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ban-parking?s=solid ban-parking}
 * @preview ![ban-parking](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0MzJDMTU4Ljk1MyA0MzIgODAgMzUzLjA0NyA4MCAyNTZDODAgMjIzLjcwNyA4OC44OTMgMTkzLjUxNiAxMDQuMTM1IDE2Ny40NzFMMzc4LjI2NCAzODIuMzI4QzM0Ni41NyA0MTMuMDEgMzAzLjQ5IDQzMiAyNTYgNDMyWk0yNDAgMjEyLjk2MVYxOTJIMjcyQzI4OS42MjUgMTkyIDMwNCAyMDYuMzc1IDMwNCAyMjRDMzA0IDIzNS41MjkgMjk3LjUyMyAyNDUuMjExIDI4OC4zMzYgMjUwLjg0NkwyNDAgMjEyLjk2MVpNNDA3Ljg2NSAzNDQuNTI5TDMzOS4zOTUgMjkwLjg2M0MzNTIuNTc0IDI3OC4xNTQgMzYyLjQxMiAyNjIuMDk4IDM2Ni4xMTMgMjQzLjIzQzM3OC4xMjUgMTgxLjk5OCAzMzEuMTY2IDEyOCAyNzIgMTI4SDIwOEMxOTAuNCAxMjggMTc2IDE0Mi40IDE3NiAxNjBWMTYyLjc5OUwxMzMuNzM2IDEyOS42NzJDMTY1LjQzIDk4Ljk5IDIwOC41MSA4MCAyNTYgODBDMzUzLjA0NyA4MCA0MzIgMTU4Ljk1MyA0MzIgMjU2QzQzMiAyODguMjkzIDQyMy4xMDcgMzE4LjQ4NCA0MDcuODY1IDM0NC41MjlaTTIwOCAzODRIMjA4QzIyNS42IDM4NCAyNDAgMzY5LjYgMjQwIDM1MlYzMzQuOTQ1TDE3NiAyODQuNzgzVjM1MkMxNzYgMzY5LjYgMTkwLjQgMzg0IDIwOCAzODRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BanParking(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 432C158.953 432 80 353.047 80 256C80 223.707 88.893 193.516 104.135 167.471L378.264 382.328C346.57 413.01 303.49 432 256 432ZM240 212.961V192H272C289.625 192 304 206.375 304 224C304 235.529 297.523 245.211 288.336 250.846L240 212.961ZM407.865 344.529L339.395 290.863C352.574 278.154 362.412 262.098 366.113 243.23C378.125 181.998 331.166 128 272 128H208C190.4 128 176 142.4 176 160V162.799L133.736 129.672C165.43 98.99 208.51 80 256 80C353.047 80 432 158.953 432 256C432 288.293 423.107 318.484 407.865 344.529ZM208 384H208C225.6 384 240 369.6 240 352V334.945L176 284.783V352C176 369.6 190.4 384 208 384Z" />
        </Icon>
    </>
}