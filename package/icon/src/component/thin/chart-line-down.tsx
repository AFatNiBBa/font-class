
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chart-line-down` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chart-line-down?s=thin chart-line-down}
 * @preview ![chart-line-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xODYuMzUgMjYxLjY1NkMxODkuNDc1IDI2NC43ODEgMTk0LjUzNyAyNjQuNzgxIDE5Ny42NjIgMjYxLjY1NkwyODguMDA2IDE3MS4zMTJMNDUyLjY5MyAzMzZIMzUyLjAwNkMzNDcuNiAzMzYgMzQ0LjAwNiAzMzkuNTc4IDM0NC4wMDYgMzQ0UzM0Ny42IDM1MiAzNTIuMDA2IDM1Mkg0NzIuMDA2QzQ3Ni40MTIgMzUyIDQ4MC4wMDYgMzQ4LjQyMiA0ODAuMDA2IDM0NFYyMjRDNDgwLjAwNiAyMTkuNTc4IDQ3Ni40MTIgMjE2IDQ3Mi4wMDYgMjE2UzQ2NC4wMDYgMjE5LjU3OCA0NjQuMDA2IDIyNFYzMjQuNjg4TDI5My42NjIgMTU0LjM0NEMyOTAuNTM3IDE1MS4yMTkgMjg1LjQ3NSAxNTEuMjE5IDI4Mi4zNSAxNTQuMzQ0TDE5Mi4wMDYgMjQ0LjY4OEwxMDkuNjU2IDE2Mi4zMzZDMTA4LjA5NCAxNjAuNzczIDEwNi4wNjIgMTU5Ljk5MiAxMDQgMTU5Ljk5MlM5OS45MDYgMTYwLjc3MyA5OC4zNDQgMTYyLjMzNkM5NS4yMTkgMTY1LjQ2MSA5NS4yMTkgMTcwLjUyMyA5OC4zNDQgMTczLjY0OEwxODYuMzUgMjYxLjY1NlpNNTA0IDQ2NEg3MkM0MS4xMjUgNDY0IDE2IDQzOC44NzUgMTYgNDA4VjQwQzE2IDM1LjU5NCAxMi40MDYgMzIgOCAzMlMwIDM1LjU5NCAwIDQwVjQwOEMwIDQ0Ny42ODggMzIuMzEyIDQ4MCA3MiA0ODBINTA0QzUwOC40MDYgNDgwIDUxMiA0NzYuNDA2IDUxMiA0NzJTNTA4LjQwNiA0NjQgNTA0IDQ2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ChartLineDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M186.35 261.656C189.475 264.781 194.537 264.781 197.662 261.656L288.006 171.312L452.693 336H352.006C347.6 336 344.006 339.578 344.006 344S347.6 352 352.006 352H472.006C476.412 352 480.006 348.422 480.006 344V224C480.006 219.578 476.412 216 472.006 216S464.006 219.578 464.006 224V324.688L293.662 154.344C290.537 151.219 285.475 151.219 282.35 154.344L192.006 244.688L109.656 162.336C108.094 160.773 106.062 159.992 104 159.992S99.906 160.773 98.344 162.336C95.219 165.461 95.219 170.523 98.344 173.648L186.35 261.656ZM504 464H72C41.125 464 16 438.875 16 408V40C16 35.594 12.406 32 8 32S0 35.594 0 40V408C0 447.688 32.312 480 72 480H504C508.406 480 512 476.406 512 472S508.406 464 504 464Z" />
        </Icon>
    </>
}