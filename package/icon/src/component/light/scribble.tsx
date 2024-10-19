
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `scribble` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/scribble?s=light scribble}
 * @preview ![scribble](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzAuMTIzIDUxMkM0MDMuNDY3IDUxMiAzNzcuMzc0IDQ5OS41NDYgMzU5LjcwMiA0NzYuNDE5QzMzMy42NTUgNDQyLjMyMiAzMzUuNzY1IDM5OS4wODQgMzY1LjA2MSAzNjYuMjg0TDQ2OC4zODkgMjQ1LjQ3NkM0ODMuNzE3IDIyOS4xNzggNDgzLjY4NiAyMDQuNTY3IDQ2OC43OTUgMTg4Ljg5M0M0NjEuMTM5IDE4MC44MTQgNDUwLjc4IDE3Ni4yOTggNDM5LjY1NSAxNzYuMTU4QzQyOC41NzcgMTc2LjgzIDQxOC4wNjEgMTgwLjMxNCA0MTAuMjE3IDE4OC4yMjFMMTU4LjI4MSA0NTUuOTMzQzE0NCA0NzAuMjMxIDEyNS42NTYgNDc4LjM3MiAxMDUuNzUgNDc3LjUxM0M4NiA0NzcuMjYzIDY3LjY3MiA0NjkuMjE1IDU0LjA5NCA0NTQuODg2QzI3LjMxMyA0MjYuNTU1IDI3LjY0MSAzODIuNTA0IDU0Ljg0NCAzNTQuNTk1TDI3Ny4yOCAxMjYuNTQ0QzI5Ny4wNzcgMTA0LjQ4IDI5Ni4xNTUgNzAuMDcgMjc0LjczNCA0OC42NzhDMjYzLjY0IDM3LjU5OSAyNDkuMDkzIDMxLjU4MyAyMzMuMjAzIDMyLjAwNEMyMTcuNSAzMi4zNDggMjAzLjAxNSAzOC45MTEgMTkyLjQwNiA1MC40OUwyNy4yMTkgMjEyLjk0MkMyMC45MDcgMjE5LjEzIDEwLjc1MSAyMTkuMDUyIDQuNTk0IDIxMi43NTVDLTEuNjA5IDIwNi40NTcgLTEuNTE1IDE5Ni4zMTYgNC43ODIgMTkwLjEyOEwxNjkuMzkgMjguMjdDMTg1LjM3NSAxMC43OTkgMjA4IDAuNTQ5IDIzMi40OTkgMC4wMDJDMjU2Ljg1OSAtMC4xMzkgMjgwLjA0NiA4LjcwNiAyOTcuMzU4IDI2LjA1MUMzMzAuODExIDU5LjQ2IDMzMi4yNDkgMTEzLjIxNSAzMDAuNjQgMTQ4LjQwNUw3Ny43NSAzNzYuOTQxQzYyLjU3OCAzOTIuNTA1IDYyLjM5MSA0MTcuMDg1IDc3LjM0NCA0MzIuODg0Qzg0LjkwNiA0NDAuODg0IDk1LjE1NiA0NDUuMzY5IDEwNi4xNzIgNDQ1LjUxQzEwNi4zNDQgNDQ1LjUyNSAxMDYuNTMxIDQ0NS41MjUgMTA2LjcxOSA0NDUuNTI1QzExNy41MzEgNDQ1LjUyNSAxMjcuNjU2IDQ0MS4zMjIgMTM1LjI5NyA0MzMuNjY1TDM4Ny4yMDIgMTY1Ljk2OUM0MDEuNDk5IDE1MS41NzggNDIwLjMxMSAxNDMuOTM2IDQ0MC4wMTQgMTQ0LjE1NUM0NTkuODg5IDE0NC4zODkgNDc4LjM1OCAxNTIuNDUzIDQ5Mi4wMTQgMTY2Ljg2QzUxOC41NzYgMTk0Ljg0NyA1MTguNjU0IDIzOC43NzMgNDkyLjE4NiAyNjYuODUzTDM4OS4xNTUgMzg3LjM0OEMzNjYuMzU4IDQxMi44NjYgMzcyLjE3MSA0NDAuMDA5IDM4NS4xMjQgNDU2Ljk4QzM5OS4zODkgNDc1LjY2OSA0MjYuNTc3IDQ4OC4xMzkgNDU0Ljk4MyA0NzMuOTVMNDg5LjI0OCA0NTcuOTk1QzQ5Ny4zMTEgNDU0LjIyOSA1MDYuNzk1IDQ1Ny43NDUgNTEwLjQ5OCA0NjUuNzQ2QzUxNC4yMzIgNDczLjc0NyA1MTAuNzY0IDQ4My4yNzkgNTAyLjc0OCA0ODYuOTk4TDQ2OC44ODkgNTAyLjc2NUM0NTYuNDUxIDUwOC45ODQgNDQzLjIxNyA1MTIgNDMwLjEyMyA1MTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Scribble(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M430.123 512C403.467 512 377.374 499.546 359.702 476.419C333.655 442.322 335.765 399.084 365.061 366.284L468.389 245.476C483.717 229.178 483.686 204.567 468.795 188.893C461.139 180.814 450.78 176.298 439.655 176.158C428.577 176.83 418.061 180.314 410.217 188.221L158.281 455.933C144 470.231 125.656 478.372 105.75 477.513C86 477.263 67.672 469.215 54.094 454.886C27.313 426.555 27.641 382.504 54.844 354.595L277.28 126.544C297.077 104.48 296.155 70.07 274.734 48.678C263.64 37.599 249.093 31.583 233.203 32.004C217.5 32.348 203.015 38.911 192.406 50.49L27.219 212.942C20.907 219.13 10.751 219.052 4.594 212.755C-1.609 206.457 -1.515 196.316 4.782 190.128L169.39 28.27C185.375 10.799 208 0.549 232.499 0.002C256.859 -0.139 280.046 8.706 297.358 26.051C330.811 59.46 332.249 113.215 300.64 148.405L77.75 376.941C62.578 392.505 62.391 417.085 77.344 432.884C84.906 440.884 95.156 445.369 106.172 445.51C106.344 445.525 106.531 445.525 106.719 445.525C117.531 445.525 127.656 441.322 135.297 433.665L387.202 165.969C401.499 151.578 420.311 143.936 440.014 144.155C459.889 144.389 478.358 152.453 492.014 166.86C518.576 194.847 518.654 238.773 492.186 266.853L389.155 387.348C366.358 412.866 372.171 440.009 385.124 456.98C399.389 475.669 426.577 488.139 454.983 473.95L489.248 457.995C497.311 454.229 506.795 457.745 510.498 465.746C514.232 473.747 510.764 483.279 502.748 486.998L468.889 502.765C456.451 508.984 443.217 512 430.123 512Z" />
        </Icon>
    </>
}