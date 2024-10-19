
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-up-square-triangle` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-square-triangle?s=thin arrow-up-square-triangle}
 * @preview ![arrow-up-square-triangle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NzYuMTMzIDQzOC44NzVMMzkzLjAwOCAzMDEuNzVDMzg3LjQ0MyAyOTIuNTYzIDM3Ny43NTYgMjg3Ljk2OSAzNjguMDY4IDI4Ny45NjlTMzQ4LjY5MyAyOTIuNTYzIDM0My4xMzEgMzAxLjc1TDI1OS44ODEgNDM4Ljg3NUMyNDguODgxIDQ1Ny4xMjUgMjYyLjYzMSA0ODAgMjg0Ljg4MSA0ODBINDUxLjEzM0M0NzMuMzgzIDQ4MCA0ODcuMTMzIDQ1Ny4xMjUgNDc2LjEzMyA0MzguODc1Wk00NjIuNTkyIDQ1Ny42ODlDNDYwLjM2MSA0NjEuNjQxIDQ1Ni4wNzYgNDY0IDQ1MS4xMzMgNDY0SDI4NC44ODFDMjc5LjkzNiA0NjQgMjc1LjY1MiA0NjEuNjQxIDI3My40MiA0NTcuNjg5QzI3Mi4zMDEgNDU1LjcwNyAyNzAuODMyIDQ1MS42OTkgMjczLjU1NyA0NDcuMTc4TDM1Ni44MTggMzEwLjAzN0MzNjAuMTM1IDMwNC41NjEgMzY1Ljc5MSAzMDMuOTY5IDM2OC4wNjggMzAzLjk2OUMzNzAuMzQ4IDMwMy45NjkgMzc2LjAwNCAzMDQuNTYxIDM3OS4zMjQgMzEwLjA0NUw0NjIuNDMgNDQ3LjEzNUM0NjUuMTggNDUxLjY5OSA0NjMuNzEzIDQ1NS43MDcgNDYyLjU5MiA0NTcuNjg5Wk0zMDQuMDA2IDIyNEg0MzIuMDA4QzQ0OS42OCAyMjQgNDY0LjAwOCAyMDkuNjc0IDQ2NC4wMDggMTkyVjY0QzQ2NC4wMDggNDYuMzI2IDQ0OS42OCAzMiA0MzIuMDA4IDMySDMwNC4wMDZDMjg2LjMzMiAzMiAyNzIuMDA2IDQ2LjMyNiAyNzIuMDA2IDY0VjE5MkMyNzIuMDA2IDIwOS42NzQgMjg2LjMzMiAyMjQgMzA0LjAwNiAyMjRaTTI4OC4wMDYgNjRDMjg4LjAwNiA1NS4xNzggMjk1LjE4NCA0OCAzMDQuMDA2IDQ4SDQzMi4wMDhDNDQwLjgzIDQ4IDQ0OC4wMDggNTUuMTc4IDQ0OC4wMDggNjRWMTkyQzQ0OC4wMDggMjAwLjgyMiA0NDAuODMgMjA4IDQzMi4wMDggMjA4SDMwNC4wMDZDMjk1LjE4NCAyMDggMjg4LjAwNiAyMDAuODIyIDI4OC4wMDYgMTkyVjY0Wk0xMzMuOTA2IDM0LjQ4NEMxMzAuODQ0IDMxLjE3MiAxMjUuMTU2IDMxLjE3MiAxMjIuMDk0IDM0LjQ4NEwzNC4wOSAxMzAuNTA4QzMxLjEyMSAxMzMuNzYgMzEuMzQgMTM4LjgyMiAzNC41OSAxNDEuODI0QzM3Ljg0IDE0NC44MjQgNDIuOTA0IDE0NC42MDUgNDUuOTA0IDE0MS4zMjRMMTIwIDYwLjQ3MVY0NzEuOTk4QzEyMCA0NzYuNDA2IDEyMy41OTQgNDgwIDEyOCA0ODBTMTM2IDQ3Ni40MDYgMTM2IDQ3MS45OThWNjAuNDcxTDIxMC4wOTggMTQxLjMyNEMyMTEuNjkxIDE0My4wNDMgMjEzLjg0OCAxNDMuOTE4IDIxNi4wMDQgMTQzLjkxOEMyMTcuOTQxIDE0My45MTggMjE5Ljg3OSAxNDMuMjMgMjIxLjQxIDE0MS44MjRDMjI0LjY2IDEzOC44MjIgMjI0Ljg3OSAxMzMuNzYgMjIxLjkxIDEzMC41MDhMMTMzLjkwNiAzNC40ODRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ArrowUpSquareTriangle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M476.133 438.875L393.008 301.75C387.443 292.563 377.756 287.969 368.068 287.969S348.693 292.563 343.131 301.75L259.881 438.875C248.881 457.125 262.631 480 284.881 480H451.133C473.383 480 487.133 457.125 476.133 438.875ZM462.592 457.689C460.361 461.641 456.076 464 451.133 464H284.881C279.936 464 275.652 461.641 273.42 457.689C272.301 455.707 270.832 451.699 273.557 447.178L356.818 310.037C360.135 304.561 365.791 303.969 368.068 303.969C370.348 303.969 376.004 304.561 379.324 310.045L462.43 447.135C465.18 451.699 463.713 455.707 462.592 457.689ZM304.006 224H432.008C449.68 224 464.008 209.674 464.008 192V64C464.008 46.326 449.68 32 432.008 32H304.006C286.332 32 272.006 46.326 272.006 64V192C272.006 209.674 286.332 224 304.006 224ZM288.006 64C288.006 55.178 295.184 48 304.006 48H432.008C440.83 48 448.008 55.178 448.008 64V192C448.008 200.822 440.83 208 432.008 208H304.006C295.184 208 288.006 200.822 288.006 192V64ZM133.906 34.484C130.844 31.172 125.156 31.172 122.094 34.484L34.09 130.508C31.121 133.76 31.34 138.822 34.59 141.824C37.84 144.824 42.904 144.605 45.904 141.324L120 60.471V471.998C120 476.406 123.594 480 128 480S136 476.406 136 471.998V60.471L210.098 141.324C211.691 143.043 213.848 143.918 216.004 143.918C217.941 143.918 219.879 143.23 221.41 141.824C224.66 138.822 224.879 133.76 221.91 130.508L133.906 34.484Z" />
        </Icon>
    </>
}