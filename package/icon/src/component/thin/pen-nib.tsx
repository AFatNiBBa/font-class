
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `pen-nib` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pen-nib?s=thin pen-nib}
 * @preview ![pen-nib](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYuMDMxIDczLjcyNUw0MzcuNzk3IDE1LjQyN0M0MTcuMjAzIC01LjE4OSAzODEuMDYzIC01LjA0OCAzNjAuNzUgMTUuMjg2TDI4My43OTcgODguNTA3TDEzOC4wNDggMTM0LjM2OUMxMTUuNzk4IDE0MC43MiA5OC4xMSAxNTcuNjI5IDkwLjYyNiAxNzkuOTk3TDAuMjk4IDUwMS44MTdDLTAuNDgzIDUwNC42MTcgMC4yOTggNTA3LjYwNSAyLjM0NSA1MDkuNjU0QzMuODYgNTExLjE3MSA1LjkwNyA1MTIgOC4wMDEgNTEyQzguNzIgNTEyIDkuNDU0IDUxMS45MDYgMTAuMTczIDUxMS43MDNMMzMyLjAxNiA0MjEuMTUxQzM1NC4wMzIgNDEzLjc2OCAzNzAuOTM4IDM5Ni4wMTQgMzc3LjE3MiAzNzMuOTEyTDQyMy4wMzEgMjI3Ljg5M0w0OTYuMDMxIDE1MC45OTdDNTA2LjMyOCAxNDAuNjg5IDUxMiAxMjYuOTcxIDUxMiAxMTIuMzYxUzUwNi4zMjggODQuMDMzIDQ5Ni4wMzEgNzMuNzI1Wk0zNjEuODQ0IDM2OS4zMjlDMzU2Ljk4NSAzODYuNTY2IDM0My45MjIgNDAwLjI2OSAzMjcuMjk3IDQwNS44NTNMMzUuMjk2IDQ4Ny45OTFMMTc0LjYyIDM0OC41MTVDMTgzLjk2OSAzNTUuNTI3IDE5NS40NDggMzU5LjgzNCAyMDguMDAxIDM1OS44MzRDMjM4Ljg3NiAzNTkuODM0IDI2NCAzMzQuNjgyIDI2NCAzMDMuNzczUzIzOC44NzUgMjQ3LjcxMiAyMDguMDAxIDI0Ny43MTJTMTUyLjAwMSAyNzIuODY0IDE1Mi4wMDEgMzAzLjc3M0MxNTIuMDAxIDMxNi4zMzkgMTU2LjMwMyAzMjcuODMgMTYzLjMwNyAzMzcuMTlMMjMuOTgzIDQ3Ni42NjdMMTA1LjkwNyAxODQuNzIxQzExMS42MSAxNjcuNzAyIDEyNS4yOTggMTU0LjYyNiAxNDIuNTE2IDE0OS43NjFDMTQyLjU5NCAxNDkuNzMgMTQyLjY3MyAxNDkuNzE0IDE0Mi43NTEgMTQ5LjY4M0wyODUuNzM1IDEwNC42OTZMNDA2Ljg2IDIyNS45NTRMMzYxLjg0NCAzNjkuMzI5Wk0xNjguMDAxIDMwMy43NzNDMTY4LjAwMSAyODEuNjg2IDE4NS45MzggMjYzLjcyOSAyMDguMDAxIDI2My43MjlDMjMwLjA2MyAyNjMuNzI5IDI0OCAyODEuNjg2IDI0OCAzMDMuNzczQzI0OCAzMjUuODU5IDIzMC4wNjMgMzQzLjgxNiAyMDguMDAxIDM0My44MTZDMTg1LjkzOCAzNDMuODE2IDE2OC4wMDEgMzI1Ljg1OSAxNjguMDAxIDMwMy43NzNaTTQ4NC41NzggMTM5LjgxM0w0MTUuODEzIDIxMi4yNTFMMjk5LjQyMiA5NS43MzNMMzcxLjkyMiAyNi43NTJDMzg2LjQ4NSAxMi4xNzMgNDExLjk2OSAxMi4xNzMgNDI2LjQ4NSAyNi43NTJMNDg0LjcxOSA4NS4wNUM0OTIgOTIuMzIzIDQ5NiAxMDIuMDIxIDQ5NiAxMTIuMzYxQzQ5NiAxMjIuNjg1IDQ5MiAxMzIuMzgzIDQ4NC41NzggMTM5LjgxM1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PenNib(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M496.031 73.725L437.797 15.427C417.203 -5.189 381.063 -5.048 360.75 15.286L283.797 88.507L138.048 134.369C115.798 140.72 98.11 157.629 90.626 179.997L0.298 501.817C-0.483 504.617 0.298 507.605 2.345 509.654C3.86 511.171 5.907 512 8.001 512C8.72 512 9.454 511.906 10.173 511.703L332.016 421.151C354.032 413.768 370.938 396.014 377.172 373.912L423.031 227.893L496.031 150.997C506.328 140.689 512 126.971 512 112.361S506.328 84.033 496.031 73.725ZM361.844 369.329C356.985 386.566 343.922 400.269 327.297 405.853L35.296 487.991L174.62 348.515C183.969 355.527 195.448 359.834 208.001 359.834C238.876 359.834 264 334.682 264 303.773S238.875 247.712 208.001 247.712S152.001 272.864 152.001 303.773C152.001 316.339 156.303 327.83 163.307 337.19L23.983 476.667L105.907 184.721C111.61 167.702 125.298 154.626 142.516 149.761C142.594 149.73 142.673 149.714 142.751 149.683L285.735 104.696L406.86 225.954L361.844 369.329ZM168.001 303.773C168.001 281.686 185.938 263.729 208.001 263.729C230.063 263.729 248 281.686 248 303.773C248 325.859 230.063 343.816 208.001 343.816C185.938 343.816 168.001 325.859 168.001 303.773ZM484.578 139.813L415.813 212.251L299.422 95.733L371.922 26.752C386.485 12.173 411.969 12.173 426.485 26.752L484.719 85.05C492 92.323 496 102.021 496 112.361C496 122.685 492 132.383 484.578 139.813Z" />
        </Icon>
    </>
}