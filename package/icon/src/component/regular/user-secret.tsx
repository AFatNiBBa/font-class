
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `user-secret` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-secret?s=regular user-secret}
 * @preview ![user-secret](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzguNzk5IDMzOS43MzRMNDE0LjA2MiAyNTcuNDUzQzQxNy4yNSAyNTAuMDMxIDQxNi40NjkgMjQxLjUxNiA0MTIuMDMxIDIzNC43ODFTNDAwLjA2MiAyMjQgMzkyIDIyNEgzNDcuNDc1QzM1MC4xMzkgMjEzLjcxNSAzNTIgMjAzLjExNyAzNTIgMTkyQzM1MiAxODIuNTA4IDM1MC44MDkgMTczLjMyNCAzNDguODQ4IDE2NC40MjJDMzg5Ljg5OCAxNTUuNjE5IDQxNiAxNDIuNTgyIDQxNiAxMjhDNDE2IDExMS45MTggMzg0LjI1IDk3LjcxOSAzMzUuNjg2IDg5LjAwOEMzMjMuODA1IDQ1LjE0OCAzMDQuOTQ1IDAgMjc3LjQzOCAwQzI2Ny4wNjIgMCAyNTcuODEzIDQuNSAyNTAuMDYyIDEwLjVDMjM0LjgxMiAyMi4zNzUgMjEzLjMxMiAyMi4zNzUgMTk4LjA2MiAxMC41QzE5MC4zMTIgNC41IDE4MS4wNjIgMCAxNzAuNjg4IDBDMTQzLjE3OCAwIDEyNC40MzIgNDUuMTU2IDExMi40OTYgODguOTc3QzYzLjgyNiA5Ny42OCAzMiAxMTEuODk4IDMyIDEyOEMzMiAxNDIuNTgyIDU4LjEwMiAxNTUuNjE5IDk5LjE1MiAxNjQuNDIyQzk3LjE5MSAxNzMuMzI0IDk2IDE4Mi41MDggOTYgMTkyQzk2IDIwMy4xMTcgOTcuODYxIDIxMy43MTUgMTAwLjUyNSAyMjRINTZDNDcuOTM4IDIyNCA0MC40MDYgMjI4LjA0NyAzNS45NjkgMjM0Ljc4MVMzMC43NSAyNTAuMDMxIDMzLjkzOCAyNTcuNDUzTDY5LjIwMSAzMzkuNzM0QzI3LjQxIDM3MS4zMjQgMCA0MjAuODg5IDAgNDc3LjMzMkMwIDQ5Ni40NzcgMTUuNTIzIDUxMiAzNC42NjQgNTEySDQxMy4zMzZDNDMyLjQ3NyA1MTIgNDQ4IDQ5Ni40NzcgNDQ4IDQ3Ny4zMzJDNDQ4IDQyMC44ODUgNDIwLjU5IDM3MS4zMiAzNzguNzk5IDMzOS43MzRaTTIyNCAyNzJDMTg5LjU4NiAyNzIgMTYwLjQzOCAyNTAuMDM1IDE0OS4xNyAyMTkuNDg0QzE1NC40MTggMjIyLjE0MyAxNjAuMTE3IDIyNCAxNjYuNDE2IDIyNEgxNzguNzVDMTk1LjIwOSAyMjQgMjA5LjAzOSAyMTMuNjA1IDIxNC4zODUgMTk5LjAwOEMyMTUuODk1IDE5NC44ODcgMjE5LjYxMSAxOTIgMjI0IDE5MlMyMzIuMTA1IDE5NC44ODcgMjMzLjYxNSAxOTkuMDA4QzIzOC45NjEgMjEzLjYwNSAyNTIuNzkxIDIyNCAyNjkuMjUgMjI0SDI4MS41ODRDMjg3Ljg4MyAyMjQgMjkzLjU4MiAyMjIuMTQzIDI5OC44MyAyMTkuNDg0QzI4Ny41NjIgMjUwLjAzNSAyNTguNDE0IDI3MiAyMjQgMjcyWk00OC43MTMgNDY0QzUzLjQ3OCA0MTkuNjkgODQuMDYgMzg2LjgxMiA4OS4zNzcgMzg2LjgxMkwxMDUuOTM4IDQyNS40NTNDMTA5Ljg0NCA0MzQuNTYyIDExOC42ODggNDQwIDEyOCA0NDBDMTMxLjE1NiA0NDAgMTM0LjM3NSA0MzkuMzc1IDEzNy40NjkgNDM4LjA2MkMxNDkuNjI1IDQzMi44NDQgMTU1LjI4MSA0MTguNzM0IDE1MC4wNjIgNDA2LjU0N0w5Mi40MDYgMjcySDEyNC44MThDMTM5LjU0NSAyOTAuMjI5IDE1OC45NDUgMzA0LjIyNyAxODEuNDcxIDMxMi4yMDVMMjA4IDM1MkwxNzYgNDY0SDQ4LjcxM1pNMjcyIDQ2NEwyNDAgMzUyTDI2Ni41MjkgMzEyLjIwNUMyODkuMDU1IDMwNC4yMjcgMzA4LjQ1NSAyOTAuMjI5IDMyMy4xODIgMjcySDM1NS41OTRMMjk3LjkzOCA0MDYuNTQ3QzI5Mi43MTkgNDE4LjczNCAyOTguMzc1IDQzMi44NDQgMzEwLjUzMSA0MzguMDYyQzMxMy42MjUgNDM5LjM3NSAzMTYuODQ0IDQ0MCAzMjAgNDQwQzMyOS4zMTIgNDQwIDMzOC4xNTYgNDM0LjU0NyAzNDIuMDYyIDQyNS40NTNMMzU4LjYyMyAzODYuODEzQzM2NC4zOTkgMzg2LjgxMyAzOTQuNTYzIDQyMC4wNjYgMzk5LjI4NyA0NjRIMjcyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function UserSecret(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M378.799 339.734L414.062 257.453C417.25 250.031 416.469 241.516 412.031 234.781S400.062 224 392 224H347.475C350.139 213.715 352 203.117 352 192C352 182.508 350.809 173.324 348.848 164.422C389.898 155.619 416 142.582 416 128C416 111.918 384.25 97.719 335.686 89.008C323.805 45.148 304.945 0 277.438 0C267.062 0 257.813 4.5 250.062 10.5C234.812 22.375 213.312 22.375 198.062 10.5C190.312 4.5 181.062 0 170.688 0C143.178 0 124.432 45.156 112.496 88.977C63.826 97.68 32 111.898 32 128C32 142.582 58.102 155.619 99.152 164.422C97.191 173.324 96 182.508 96 192C96 203.117 97.861 213.715 100.525 224H56C47.938 224 40.406 228.047 35.969 234.781S30.75 250.031 33.938 257.453L69.201 339.734C27.41 371.324 0 420.889 0 477.332C0 496.477 15.523 512 34.664 512H413.336C432.477 512 448 496.477 448 477.332C448 420.885 420.59 371.32 378.799 339.734ZM224 272C189.586 272 160.438 250.035 149.17 219.484C154.418 222.143 160.117 224 166.416 224H178.75C195.209 224 209.039 213.605 214.385 199.008C215.895 194.887 219.611 192 224 192S232.105 194.887 233.615 199.008C238.961 213.605 252.791 224 269.25 224H281.584C287.883 224 293.582 222.143 298.83 219.484C287.562 250.035 258.414 272 224 272ZM48.713 464C53.478 419.69 84.06 386.812 89.377 386.812L105.938 425.453C109.844 434.562 118.688 440 128 440C131.156 440 134.375 439.375 137.469 438.062C149.625 432.844 155.281 418.734 150.062 406.547L92.406 272H124.818C139.545 290.229 158.945 304.227 181.471 312.205L208 352L176 464H48.713ZM272 464L240 352L266.529 312.205C289.055 304.227 308.455 290.229 323.182 272H355.594L297.938 406.547C292.719 418.734 298.375 432.844 310.531 438.062C313.625 439.375 316.844 440 320 440C329.312 440 338.156 434.547 342.062 425.453L358.623 386.813C364.399 386.813 394.563 420.066 399.287 464H272Z" />
        </Icon>
    </>
}