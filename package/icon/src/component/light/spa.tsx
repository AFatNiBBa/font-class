
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `spa` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/spa?s=light spa}
 * @preview ![spa](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NjguMjUgMTkyLjExNEM1NDUuNjI1IDE5Mi4xMTQgNDc2LjI1IDE5Ni4zNjQgNDA5LjM3NSAyMzQuMzYxQzM5MCAxNTIuODY3IDM0OSA4MC40OTcgMjk2Ljg3NSAzNS4xMjVDMjk0LjUgMzMgMjkxLjI1IDMyIDI4OCAzMlMyODEuNjI1IDMzIDI3OS4xMjUgMzUuMTI1QzIyNyA4MC40OTcgMTg2IDE1Mi44NjcgMTY2LjYyNSAyMzQuNDg2Qzk5Ljc1IDE5Ni4zNjQgMzAuMzc1IDE5Mi4yMzkgNy43NSAxOTIuMTE0QzMuMzc1IDE5Mi4xMTQgMCAxOTUuNDg5IDAgMTk5Ljg2M0MwLjI1IDIyNy44NjEgNy4xMjUgMzI2LjEwNCA4OC43NSAzOTkuMjI0QzE0NyA0NTUuOTcgMjE5Ljg3NSA0NzQuMDk0IDI2NS43NSA0NzkuNzE5QzI2NS43NSA0ODAuMDk0IDMxMC4yNSA0ODAuMDk0IDMxMC4yNSA0NzkuNzE5QzM1Ni4xMjUgNDc0LjA5NCA0MjkgNDU1Ljk3IDQ4Ny4yNSAzOTkuMjI0QzU2OC44NzUgMzI2LjEwNCA1NzUuNzUgMjI3Ljg2MSA1NzYgMTk5Ljg2M0M1NzYgMTk1LjQ4OSA1NzIuNjI1IDE5Mi4xMTQgNTY4LjI1IDE5Mi4xMTRaTTExMC4xMjUgMzc1LjQ3NkM1NC44NzUgMzI1Ljk4IDM4LjUgMjYzLjIzNCAzMy43NSAyMjUuNDg2Qzc0LjYyNSAyMjkuNjExIDE0NC43NSAyNDQuODYgMjAwLjI1IDI5OC45ODFDMjI1LjYyNSAzMjEuNzMgMjQ0LjYyNSAzNDguOTc4IDI1OC4zNzUgMzgyLjIyNkMyNjYuODc1IDQwMi44NDkgMjcyIDQyMy41OTggMjcyIDQ0OC4wOTZDMjI5LjI1IDQ0Ni45NzEgMTU3LjM3NSA0MjEuNDczIDExMC4xMjUgMzc1LjQ3NlpNMjIxLjYyNSAyNzUuMTA4QzIxMy4xMjUgMjY2Ljg1OSAyMDQuMTI1IDI1OS43MzQgMTk1LjEyNSAyNTIuOTg1QzIxMC4yNSAxODEuMzY1IDI0My44NzUgMTE0Ljg2OSAyODggNzAuNjIyQzMzMi4yNSAxMTQuODY5IDM2NS43NSAxODEuMzY1IDM4MC44NzUgMjUyLjk4NUMzNzEuODc1IDI1OS43MzQgMzYyLjg3NSAyNjYuODU5IDM1NC4zNzUgMjc1LjEwOEMzMjEuMjUgMzA0LjczMSAzMDEgMzM4LjQ3OSAyODggMzY5Ljk3N0MyNzUgMzM4LjQ3OSAyNTQuNzUgMzA0LjczMSAyMjEuNjI1IDI3NS4xMDhaTTQ2NC44NzUgMzc2LjM1MUM0MjAuMjUgNDE5Ljg0OCAzNDguNzUgNDQ2Ljg0NiAzMDQgNDQ4LjA5NkMzMDQgNDIzLjcyMyAzMDkgNDAyLjk3NCAzMTcuNjI1IDM4Mi4yMjZDMzMxLjM3NSAzNDguODUzIDM1MC4zNzUgMzIxLjczIDM3Ni43NSAyOTcuOTgyQzQzMS41IDI0NC42MSA1MDEuNSAyMjkuNjExIDU0Mi4xMjUgMjI1LjQ4NkM1MzcuNSAyNjMuMjM0IDUyMC44NzUgMzI2LjEwNCA0NjQuODc1IDM3Ni4zNTFaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Spa(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M568.25 192.114C545.625 192.114 476.25 196.364 409.375 234.361C390 152.867 349 80.497 296.875 35.125C294.5 33 291.25 32 288 32S281.625 33 279.125 35.125C227 80.497 186 152.867 166.625 234.486C99.75 196.364 30.375 192.239 7.75 192.114C3.375 192.114 0 195.489 0 199.863C0.25 227.861 7.125 326.104 88.75 399.224C147 455.97 219.875 474.094 265.75 479.719C265.75 480.094 310.25 480.094 310.25 479.719C356.125 474.094 429 455.97 487.25 399.224C568.875 326.104 575.75 227.861 576 199.863C576 195.489 572.625 192.114 568.25 192.114ZM110.125 375.476C54.875 325.98 38.5 263.234 33.75 225.486C74.625 229.611 144.75 244.86 200.25 298.981C225.625 321.73 244.625 348.978 258.375 382.226C266.875 402.849 272 423.598 272 448.096C229.25 446.971 157.375 421.473 110.125 375.476ZM221.625 275.108C213.125 266.859 204.125 259.734 195.125 252.985C210.25 181.365 243.875 114.869 288 70.622C332.25 114.869 365.75 181.365 380.875 252.985C371.875 259.734 362.875 266.859 354.375 275.108C321.25 304.731 301 338.479 288 369.977C275 338.479 254.75 304.731 221.625 275.108ZM464.875 376.351C420.25 419.848 348.75 446.846 304 448.096C304 423.723 309 402.974 317.625 382.226C331.375 348.853 350.375 321.73 376.75 297.982C431.5 244.61 501.5 229.611 542.125 225.486C537.5 263.234 520.875 326.104 464.875 376.351Z" />
        </Icon>
    </>
}