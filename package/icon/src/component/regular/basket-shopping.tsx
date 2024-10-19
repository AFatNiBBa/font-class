
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `basket-shopping` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/basket-shopping?s=regular basket-shopping}
 * @preview ![basket-shopping](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NTIgMTkyLjAwM0g0MTUuNDE2TDM1OC44NDQgMTYuNjNDMzU0Ljc4MSA0LjAzNiAzNDEuMjY2IC0yLjkwMSAzMjguNjI1IDEuMTYxQzMxNi4wMTYgNS4yMzkgMzA5LjA5NCAxOC43NTUgMzEzLjE1NiAzMS4zOEwzNjQuOTcxIDE5Mi4wMDNIMjExLjAyOUwyNjIuODQ0IDMxLjM4QzI2Ni45MDYgMTguNzU1IDI1OS45ODQgNS4yMzkgMjQ3LjM3NSAxLjE2MUMyMzQuNzgxIC0yLjg4NSAyMjEuMjE5IDQuMDM2IDIxNy4xNTYgMTYuNjNMMTYwLjU4NCAxOTIuMDAzSDI0QzEwLjc1IDE5Mi4wMDMgMCAyMDIuNzUzIDAgMjE2LjAwM0MwIDIyOS4yNTMgMTAuNzUgMjQwLjAwMyAyNCAyNDAuMDAzSDQyLjg1NEw4OC40NTMgNDU0LjkzOEM5NS40NjkgNDg4IDEyNS4wOTQgNTEyIDE1OC44OTEgNTEySDQxNy4xMDlDNDUwLjkwNiA1MTIgNDgwLjUzMSA0ODggNDg3LjU0NyA0NTQuOTM4TDUzMy4xNDYgMjQwLjAwM0g1NTJDNTY1LjI1IDI0MC4wMDMgNTc2IDIyOS4yNTMgNTc2IDIxNi4wMDNDNTc2IDIwMi43NTMgNTY1LjI1IDE5Mi4wMDMgNTUyIDE5Mi4wMDNaTTQ0MC41NzggNDQ0Ljk2OUM0MzguMjUgNDU2LjAwMSA0MjguMzc1IDQ2NCA0MTcuMTA5IDQ2NEgxNTguODkxQzE0Ny42MjUgNDY0IDEzNy43NSA0NTYuMDAxIDEzNS40MjIgNDQ0Ljk2OUw5MS45MzYgMjQwLjAwM0gxNDUuMUwxMzcuMTU2IDI2NC42MjhDMTMzLjA5NCAyNzcuMjUyIDE0MC4wMTYgMjkwLjc2OCAxNTIuNjI1IDI5NC44NDZDMTU1LjA3OCAyOTUuNjI3IDE1Ny41NjIgMjk2LjAwMiAxNjAgMjk2LjAwMkMxNzAuMTQxIDI5Ni4wMDIgMTc5LjU2MiAyODkuNTMzIDE4Mi44NDQgMjc5LjM3N0wxOTUuNTQ1IDI0MC4wMDNIMzgwLjQ1NUwzOTMuMTU2IDI3OS4zNzdDMzk2LjQzOCAyODkuNTMzIDQwNS44NTkgMjk2LjAwMiA0MTYgMjk2LjAwMkM0MTguNDM4IDI5Ni4wMDIgNDIwLjkyMiAyOTUuNjI3IDQyMy4zNzUgMjk0Ljg0NkM0MzUuOTg0IDI5MC43NjggNDQyLjkwNiAyNzcuMjUyIDQzOC44NDQgMjY0LjYyOEw0MzAuOSAyNDAuMDAzSDQ4NC4wNjRMNDQwLjU3OCA0NDQuOTY5Wk0yMjQgMzE5Ljk5OFY0MDcuOTk3QzIyNCA0MTYuODQxIDIxNi44NDQgNDIzLjk5NyAyMDggNDIzLjk5N1MxOTIgNDE2Ljg0MSAxOTIgNDA3Ljk5N1YzMTkuOTk4QzE5MiAzMTEuMTU0IDE5OS4xNTYgMzAzLjk5OCAyMDggMzAzLjk5OFMyMjQgMzExLjE1NCAyMjQgMzE5Ljk5OFpNMzA0IDMxOS45OThWNDA3Ljk5N0MzMDQgNDE2Ljg0MSAyOTYuODQ0IDQyMy45OTcgMjg4IDQyMy45OTdTMjcyIDQxNi44NDEgMjcyIDQwNy45OTdWMzE5Ljk5OEMyNzIgMzExLjE1NCAyNzkuMTU2IDMwMy45OTggMjg4IDMwMy45OThTMzA0IDMxMS4xNTQgMzA0IDMxOS45OThaTTM4NCAzMTkuOTk4VjQwNy45OTdDMzg0IDQxNi44NDEgMzc2Ljg0NCA0MjMuOTk3IDM2OCA0MjMuOTk3UzM1MiA0MTYuODQxIDM1MiA0MDcuOTk3VjMxOS45OThDMzUyIDMxMS4xNTQgMzU5LjE1NiAzMDMuOTk4IDM2OCAzMDMuOTk4UzM4NCAzMTEuMTU0IDM4NCAzMTkuOTk4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BasketShopping(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M552 192.003H415.416L358.844 16.63C354.781 4.036 341.266 -2.901 328.625 1.161C316.016 5.239 309.094 18.755 313.156 31.38L364.971 192.003H211.029L262.844 31.38C266.906 18.755 259.984 5.239 247.375 1.161C234.781 -2.885 221.219 4.036 217.156 16.63L160.584 192.003H24C10.75 192.003 0 202.753 0 216.003C0 229.253 10.75 240.003 24 240.003H42.854L88.453 454.938C95.469 488 125.094 512 158.891 512H417.109C450.906 512 480.531 488 487.547 454.938L533.146 240.003H552C565.25 240.003 576 229.253 576 216.003C576 202.753 565.25 192.003 552 192.003ZM440.578 444.969C438.25 456.001 428.375 464 417.109 464H158.891C147.625 464 137.75 456.001 135.422 444.969L91.936 240.003H145.1L137.156 264.628C133.094 277.252 140.016 290.768 152.625 294.846C155.078 295.627 157.562 296.002 160 296.002C170.141 296.002 179.562 289.533 182.844 279.377L195.545 240.003H380.455L393.156 279.377C396.438 289.533 405.859 296.002 416 296.002C418.438 296.002 420.922 295.627 423.375 294.846C435.984 290.768 442.906 277.252 438.844 264.628L430.9 240.003H484.064L440.578 444.969ZM224 319.998V407.997C224 416.841 216.844 423.997 208 423.997S192 416.841 192 407.997V319.998C192 311.154 199.156 303.998 208 303.998S224 311.154 224 319.998ZM304 319.998V407.997C304 416.841 296.844 423.997 288 423.997S272 416.841 272 407.997V319.998C272 311.154 279.156 303.998 288 303.998S304 311.154 304 319.998ZM384 319.998V407.997C384 416.841 376.844 423.997 368 423.997S352 416.841 352 407.997V319.998C352 311.154 359.156 303.998 368 303.998S384 311.154 384 319.998Z" />
        </Icon>
    </>
}