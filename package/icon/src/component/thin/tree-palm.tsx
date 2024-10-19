
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `tree-palm` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tree-palm?s=thin tree-palm}
 * @preview ![tree-palm](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTYuMDE5IDY0QzM3OS43NjYgNjQgMzQ0Ljc3OSA3My4xNDEgMzE2LjI3NyA4OS45MDZDMjk4LjE1IDM3LjE4OCAyMzQuNjMgMCAxNTkuOTk5IDBDNzkuNjMzIDAgMTIuNTE5IDQyLjc1IDAuNDA5IDEwMS42NTZDLTAuODI2IDEwNy42MjUgMC43NjggMTEzLjg1OSA0Ljc2OCAxMTguNzY2QzkuNDcyIDEyNC41NDcgMTcuMDk3IDEyOCAyNS4xNzYgMTI4SDYzLjk5MkM2Ni40OTIgMTI4IDY4LjgzNiAxMjYuODI4IDcwLjM1MiAxMjQuODQ0TDk1Ljk5NCA5MS4yMDNMMTIxLjYzNyAxMjQuODQ0QzEyMy4xNTIgMTI2LjgyOCAxMjUuNDk2IDEyOCAxMjcuOTk3IDEyOEgxNTkuMzc0QzE0NS44MjYgMTM2LjQzOCAxMzMuMDI4IDE0Ni41OTQgMTIxLjQ4IDE1OC4xNDFDNjQuNjQ4IDIxNC45NTMgNDcuNDEyIDI5Mi42NDEgODAuNTA5IDM0Mi44NDRDODkuNzMgMzU2Ljg5MSAxMDcuOTEzIDM1Mi43MjMgMTE2LjY2OCAzNDMuOTY5TDI0OS40MDYgMjExLjI0QzI1Ni4xOTggMzIzLjMzNiAyMzAuNTk0IDQ0MC4xOTEgMjI1LjEyOSA0NjMuNTE2QzIyMi4yMzggNDc1LjcwMyAyMjQuOTU3IDQ4OC4yNSAyMzIuNjE0IDQ5Ny45MzhDMjM5LjY3NyA1MDYuODc1IDI1MC4wNTMgNTEyIDI2MS4wODUgNTEySDMxMS4xOThDMzI5LjkwMyA1MTIgMzQ1LjcxNyA0OTcuNjU2IDM0Ny45OTggNDc4LjY0MUMzNjEuNzUzIDM2NS4xMzkgMzM2LjM2NCAyNDEuNjU4IDMyNC4yODMgMTkySDQzMi4wMkM0MzQuNTIgMTkyIDQzNi44NjQgMTkwLjgyOCA0MzguMzggMTg4Ljg0NEw0NjQuMDIzIDE1NS4yMDNMNDg5LjY2NSAxODguODQ0QzQ5MS4xODEgMTkwLjgyOCA0OTMuNTI1IDE5MiA0OTYuMDI1IDE5Mkg1NTAuODQyQzU2OC4zODIgMTkyIDU3OC4xMTkgMTc3Ljc5MSA1NzUuNjA5IDE2NS42NTZDNTYzLjQ5OSAxMDYuNzUgNDk2LjM4NCA2NCA0MTYuMDE5IDY0Wk0zMzIuMTIyIDQ3Ni43MTlDMzMwLjc5MyA0ODcuNzAzIDMyMS44MDggNDk2IDMxMS4xOTggNDk2SDI2MS4wODVDMjQ0LjAyMyA0OTYgMjM4LjE0IDQ3OC4wMTYgMjQwLjY5MyA0NjcuMTg4QzI0Ni40ODYgNDQyLjQ5IDI3NC40MjggMzE0Ljc5NyAyNjQuMzQ5IDE5Ni4yOTlMMjY4LjY0OCAxOTJIMzA4LjU5NkMzMDguNDg1IDIwMS40NDUgMzQ4LjU1NyAzNDAuOTc5IDMzMi4xMjIgNDc2LjcxOVpNNTUwLjg0MiAxNzZINDk5Ljk5NEw0NzAuMzgyIDEzNy4xNTZDNDY3LjM1MSAxMzMuMTg4IDQ2MC42OTQgMTMzLjE4OCA0NTcuNjYzIDEzNy4xNTZMNDI4LjA1MSAxNzZIMjY1LjMzNUMyNjMuMjEgMTc2IDI2MS4xNzkgMTc2Ljg0NCAyNTkuNjc5IDE3OC4zNDRMMTA1LjM1NCAzMzIuNjU2QzEwMC4wNjcgMzM3Ljk3OSA5NS4wNTcgMzM1Ljg1NyA5My44ODUgMzM0LjA0N0M2NS4zOTggMjkwLjg1OSA4Mi4xMzQgMjIwLjA5NCAxMzIuNzk0IDE2OS40NTNDMTUxLjE3IDE1MS4wNzggMTcyLjg5MSAxMzYuNTQ3IDE5NS42MjcgMTI3LjQyMkMxOTkuMTc0IDEyNiAyMDEuMjIxIDEyMi4yNSAyMDAuNTAyIDExOC40ODRDMTk5Ljc2OCAxMTQuNzE5IDE5Ni40NzEgMTEyIDE5Mi42NDIgMTEySDEzMS45NjZMMTAyLjM1NCA3My4xNTZDOTkuMzIyIDY5LjE4OCA5Mi42NjYgNjkuMTg4IDg5LjYzNCA3My4xNTZMNjAuMDIzIDExMkgyNS4xNzZDMjAuMjc5IDExMiAxNS4yNjkgMTA4Ljc2NiAxNi4wNjYgMTA0Ljg3NUMyNi41MDQgNTQuMjAzIDg4LjM2OSAxNiAxNTkuOTk5IDE2QzIzMC45ODkgMTYgMjkyLjc1OSA1My44NzUgMzAzLjY2NiAxMDQuMTA5QzMwNC44NjIgMTA5LjYyMyAzMTEuMjQ3IDExMi4yMTUgMzE1Ljk5NSAxMDkuMDE2QzM0My4zNzMgOTAuMjk3IDM3OC45MDcgODAgNDE2LjAxOSA4MEM0ODcuNjQ5IDgwIDU0OS41MTMgMTE4LjIwMyA1NTkuOTUyIDE2OC44NzVDNTYwLjc5MiAxNzIuOTc1IDU1NS40ODUgMTc2IDU1MC44NDIgMTc2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TreePalm(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M416.019 64C379.766 64 344.779 73.141 316.277 89.906C298.15 37.188 234.63 0 159.999 0C79.633 0 12.519 42.75 0.409 101.656C-0.826 107.625 0.768 113.859 4.768 118.766C9.472 124.547 17.097 128 25.176 128H63.992C66.492 128 68.836 126.828 70.352 124.844L95.994 91.203L121.637 124.844C123.152 126.828 125.496 128 127.997 128H159.374C145.826 136.438 133.028 146.594 121.48 158.141C64.648 214.953 47.412 292.641 80.509 342.844C89.73 356.891 107.913 352.723 116.668 343.969L249.406 211.24C256.198 323.336 230.594 440.191 225.129 463.516C222.238 475.703 224.957 488.25 232.614 497.938C239.677 506.875 250.053 512 261.085 512H311.198C329.903 512 345.717 497.656 347.998 478.641C361.753 365.139 336.364 241.658 324.283 192H432.02C434.52 192 436.864 190.828 438.38 188.844L464.023 155.203L489.665 188.844C491.181 190.828 493.525 192 496.025 192H550.842C568.382 192 578.119 177.791 575.609 165.656C563.499 106.75 496.384 64 416.019 64ZM332.122 476.719C330.793 487.703 321.808 496 311.198 496H261.085C244.023 496 238.14 478.016 240.693 467.188C246.486 442.49 274.428 314.797 264.349 196.299L268.648 192H308.596C308.485 201.445 348.557 340.979 332.122 476.719ZM550.842 176H499.994L470.382 137.156C467.351 133.188 460.694 133.188 457.663 137.156L428.051 176H265.335C263.21 176 261.179 176.844 259.679 178.344L105.354 332.656C100.067 337.979 95.057 335.857 93.885 334.047C65.398 290.859 82.134 220.094 132.794 169.453C151.17 151.078 172.891 136.547 195.627 127.422C199.174 126 201.221 122.25 200.502 118.484C199.768 114.719 196.471 112 192.642 112H131.966L102.354 73.156C99.322 69.188 92.666 69.188 89.634 73.156L60.023 112H25.176C20.279 112 15.269 108.766 16.066 104.875C26.504 54.203 88.369 16 159.999 16C230.989 16 292.759 53.875 303.666 104.109C304.862 109.623 311.247 112.215 315.995 109.016C343.373 90.297 378.907 80 416.019 80C487.649 80 549.513 118.203 559.952 168.875C560.792 172.975 555.485 176 550.842 176Z" />
        </Icon>
    </>
}