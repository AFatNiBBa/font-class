
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `meat` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/meat?s=solid meat}
 * @preview ![meat](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDMuOTc1IDY4LjQ5M0MzOTkuNDcxIDIzLjk5NyAzNDUuMDkyIDAgMjk5LjA4OCAwQzI3NS40NjEgMCAyNTQuMzM1IDYuNzQ5IDIzNy43MDggMTkuOTk4QzIzNC45NTggMjEuNjIzIDIzMi41ODMgMjMuNjIyIDIzMC4zMzMgMjUuODcyQzE5MS41OCA2NC40OTMgMTI4LjA3NCAxMzkuNjEgMTI4LjA3NCAyMDkuMzUzVjMwOS43MTdMMTE5LjQ0OSAzMTguMzQxQzEwOS44MjMgMzI4LjA5IDk1LjQ0NyAzMjkuNDY1IDgyLjY5NiAzMjQuMzRDNTYuMDY5IDMxMy43MTYgMjUuNjkxIDMyMy4zNCA5Ljk0IDM0Ny4yMTNDLTUuODExIDM3MS4wODUgLTIuNTYxIDQwMi44MzIgMTcuNjkxIDQyMy4wOEMzMi45NDIgNDM4LjMyOCA1NC4xOTQgNDQyLjcwMyA3My44MiA0MzguMjAzQzY5LjMyIDQ1Ny43MDEgNzMuNjk1IDQ3OC45NDkgODguOTQ2IDQ5NC4xOTdDMTA5LjE5OCA1MTQuNTcgMTQwLjk1MSA1MTcuODIgMTY0Ljk1MiA1MDIuMDcxQzE4OC44MjkgNDg2LjMyMyAxOTguNDU1IDQ1NS45NTEgMTg3LjcwNCA0MjkuMjA0QzE4Mi43MDQgNDE2LjU4IDE4NC4wNzkgNDAyLjIwNyAxOTMuNzA1IDM5Mi40NThMMjAyLjMzIDM4My45NTlIMzAyLjgzOEMzNzIuNzE5IDM4My45NTkgNDQ3Ljk3NSAzMjAuNDY2IDQ4Ni42MDMgMjgxLjg0NUM0ODkuMjI4IDI3OS4wOTUgNDkxLjQ3OSAyNzYuMDk1IDQ5My4zNTQgMjcyLjg0NkM1MzAuNzMyIDIyMy4zNTEgNTEwLjczIDEzNS4yMzYgNDQzLjk3NSA2OC40OTNaTTQ1Mi43MjUgMjQ3Ljg0OUM0NDIuOTc1IDI1Ny41OTcgNDI4LjM0OCAyNTkuNzIyIDQxNy45NzMgMjU5LjcyMkMzODMuMjIgMjU5LjcyMiAzNDAuNzE2IDIzOC44NDkgMzA3LjA4OSAyMDUuMjI4QzI3OS44MzcgMTc4LjEwNiAyNjAuNzEgMTQ0Ljg2IDI1NC41ODUgMTE0LjIzOEMyNDkuODM0IDkwLjQ5IDI1My40NiA3MC42MTcgMjY0LjMzNSA1OS43NDRDMjc0LjA4NiA0OS45OTUgMjg4LjcxMiA0Ny45OTUgMjk5LjA4OCA0Ny45OTVDMzMzLjg0MSA0Ny45OTUgMzc2LjM0NCA2OC44NjggNDA5Ljk3MiAxMDIuNDg5QzQ2My44NTEgMTU2LjIzMyA0NzYuOTc3IDIyMy42MDEgNDUyLjcyNSAyNDcuODQ5Wk0zMzEuODQxIDEyNy4yMzZDMzIyLjA5IDEzNi45ODUgMzI1Ljk2NSAxNTYuODU4IDM0MC43MTYgMTcxLjYwN0MzNTUuNDY4IDE4Ni4yMyAzNzUuMzQ0IDE5MC4yMyAzODUuMjIgMTgwLjQ4MUMzOTQuOTcxIDE3MC42MDcgMzkwLjk3IDE1MC43MzQgMzc2LjIxOSAxMzYuMTFDMzYxLjU5MyAxMjEuMzYyIDM0MS43MTcgMTE3LjM2MiAzMzEuODQxIDEyNy4yMzZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Meat(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M443.975 68.493C399.471 23.997 345.092 0 299.088 0C275.461 0 254.335 6.749 237.708 19.998C234.958 21.623 232.583 23.622 230.333 25.872C191.58 64.493 128.074 139.61 128.074 209.353V309.717L119.449 318.341C109.823 328.09 95.447 329.465 82.696 324.34C56.069 313.716 25.691 323.34 9.94 347.213C-5.811 371.085 -2.561 402.832 17.691 423.08C32.942 438.328 54.194 442.703 73.82 438.203C69.32 457.701 73.695 478.949 88.946 494.197C109.198 514.57 140.951 517.82 164.952 502.071C188.829 486.323 198.455 455.951 187.704 429.204C182.704 416.58 184.079 402.207 193.705 392.458L202.33 383.959H302.838C372.719 383.959 447.975 320.466 486.603 281.845C489.228 279.095 491.479 276.095 493.354 272.846C530.732 223.351 510.73 135.236 443.975 68.493ZM452.725 247.849C442.975 257.597 428.348 259.722 417.973 259.722C383.22 259.722 340.716 238.849 307.089 205.228C279.837 178.106 260.71 144.86 254.585 114.238C249.834 90.49 253.46 70.617 264.335 59.744C274.086 49.995 288.712 47.995 299.088 47.995C333.841 47.995 376.344 68.868 409.972 102.489C463.851 156.233 476.977 223.601 452.725 247.849ZM331.841 127.236C322.09 136.985 325.965 156.858 340.716 171.607C355.468 186.23 375.344 190.23 385.22 180.481C394.971 170.607 390.97 150.734 376.219 136.11C361.593 121.362 341.717 117.362 331.841 127.236Z" />
        </Icon>
    </>
}