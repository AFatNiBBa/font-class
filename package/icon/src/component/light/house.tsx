
import { Icon } from "../../index";

/**
 * A component that renders the `house` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/house?s=light house}
 * @preview ![house](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzYuMDAxIDI1Ni4wMUM1NzYuMDAxIDI1MS41NzUgNTc0LjE2OSAyNDcuMTYxIDU3MC41NzcgMjQ0TDUxMS45NDcgMTkyLjI2NkM1MTEuOTQ5IDE5Mi4xNzIgNTExLjk5OSAxOTIuMDk0IDUxMS45OTkgMTkyVjQ4QzUxMS45OTkgMzkuMTU2IDUwNC44NDMgMzIgNDk1Ljk5OSAzMkg0MDBDMzkxLjE1NiAzMiAzODQgMzkuMTU2IDM4NCA0OFY3OS4zNzNMMjk4LjU3OSA0QzI5NS41NjMgMS4zNDQgMjkxLjc4MiAwLjAxNiAyODguMDAxIDAuMDE2UzI4MC40MzggMS4zNDQgMjc3LjQyMiA0TDUuNDI0IDI0NEMxLjgzMiAyNDcuMTYxIDAgMjUxLjU3NSAwIDI1Ni4wMUMwIDI2NC45MzQgNy4yNDMgMjcxLjk5MyAxNi4wNSAyNzEuOTkzQzE5LjgwOCAyNzEuOTkzIDIzLjU3IDI3MC42OCAyNi41OCAyNjhMNjQuMDAyIDIzNC45ODJWNDMyQzY0LjAwMiA0NzYuMTI1IDk5Ljg5MiA1MTIgMTQ0LjAwMSA1MTJINDMyQzQ3Ni4xMDkgNTEyIDUxMS45OTkgNDc2LjEyNSA1MTEuOTk5IDQzMlYyMzQuOTgyTDU0OS40MjEgMjY4QzU1Mi40NTIgMjcwLjY4OCA1NTYuMjMzIDI3MiA1NTkuOTk5IDI3MkM1NjguNzI2IDI3MiA1NzYuMDAxIDI2NC45NDcgNTc2LjAwMSAyNTYuMDFaTTQxNiA2NEg0NzkuOTk5VjE2NC4wNzhMNDE2IDEwNy42MDhWNjRaTTQ3OS45OTkgMjA4VjQzMkM0NzkuOTk5IDQ1OC40NjkgNDU4LjQ2OCA0ODAgNDMyIDQ4MEgxNDQuMDAxQzExNy41MzMgNDgwIDk2LjAwMiA0NTguNDY5IDk2LjAwMiA0MzJWMjA4Qzk2LjAwMiAyMDcuNjIzIDk1LjgxMiAyMDcuMzA5IDk1Ljc4NyAyMDYuOTM4TDI4OC4wMDEgMzcuMzQ0TDQ4MC4yMTQgMjA2LjkzOEM0ODAuMTg5IDIwNy4zMDkgNDc5Ljk5OSAyMDcuNjIzIDQ3OS45OTkgMjA4Wk0yMDguNDIxIDIxOC42MjVWMzI1LjM3NUMyMDguNDIxIDM0MCAyMjAuNDIxIDM1MiAyMzUuMDQ2IDM1MkgzNDEuNjdDMzU2LjQyIDM1MiAzNjguNDIgMzQwIDM2OC40MiAzMjUuMzc1VjIxOC42MjVDMzY4LjQyIDIwNCAzNTYuNDIgMTkyIDM0MS42NyAxOTJIMjM1LjA0NkMyMjAuNDIxIDE5MiAyMDguNDIxIDIwNCAyMDguNDIxIDIxOC42MjVaTTI0MC40MjEgMjI0SDMzNi40MlYzMjBIMjQwLjQyMVYyMjRaICI+PC9wYXRoPjwvc3ZnPg==|width=32|height=32)
 */
const House: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576.001 256.01C576.001 251.575 574.169 247.161 570.577 244L511.947 192.266C511.949 192.172 511.999 192.094 511.999 192V48C511.999 39.156 504.843 32 495.999 32H400C391.156 32 384 39.156 384 48V79.373L298.579 4C295.563 1.344 291.782 0.016 288.001 0.016S280.438 1.344 277.422 4L5.424 244C1.832 247.161 0 251.575 0 256.01C0 264.934 7.243 271.993 16.05 271.993C19.808 271.993 23.57 270.68 26.58 268L64.002 234.982V432C64.002 476.125 99.892 512 144.001 512H432C476.109 512 511.999 476.125 511.999 432V234.982L549.421 268C552.452 270.688 556.233 272 559.999 272C568.726 272 576.001 264.947 576.001 256.01ZM416 64H479.999V164.078L416 107.608V64ZM479.999 208V432C479.999 458.469 458.468 480 432 480H144.001C117.533 480 96.002 458.469 96.002 432V208C96.002 207.623 95.812 207.309 95.787 206.938L288.001 37.344L480.214 206.938C480.189 207.309 479.999 207.623 479.999 208ZM208.421 218.625V325.375C208.421 340 220.421 352 235.046 352H341.67C356.42 352 368.42 340 368.42 325.375V218.625C368.42 204 356.42 192 341.67 192H235.046C220.421 192 208.421 204 208.421 218.625ZM240.421 224H336.42V320H240.421V224Z " />
    </Icon>
);

export default House;