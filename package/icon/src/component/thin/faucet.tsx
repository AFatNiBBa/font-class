
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `faucet` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/faucet?s=thin faucet}
 * @preview ![faucet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIgMjU2SDMxMy4zOTVDMjkyLjA2OCAyMzcuNzU2IDI2My40MDYgMjI2LjM3MyAyMzEuNzE5IDIyNC42NzZDMjMxLjc0NCAyMjQuNDIgMjMyIDIyNC4yNjQgMjMyIDIyNFYxNzcuNzU2TDM2Ni4zNzUgMTkxLjkxMkMzNjYuOTMgMTkxLjk3MSAzNjcuNDggMTkxLjk5OCAzNjguMDIzIDE5MS45OThDMzc2Ljc5NyAxOTEuOTk4IDM4NCAxODQuNTc4IDM4NCAxNzUuMTYyVjExMi45MTJDMzg0IDEwMy40OTYgMzc2Ljc5NSA5Ni4wNzYgMzY4LjAyMyA5Ni4wNzZDMzY3LjQ4IDk2LjA3NiAzNjYuOTMgOTYuMTA0IDM2Ni4zNzUgOTYuMTYyTDIzMiAxMTEuMTQ1VjcyQzIzMiA2Ny41OTQgMjI4LjQwNiA2NCAyMjQgNjRTMjE2IDY3LjU5NCAyMTYgNzJWMTExLjE0NUw4MS42MjUgOTYuMTYyQzgxLjA3IDk2LjEwNCA4MC41MiA5Ni4wNzYgNzkuOTc3IDk2LjA3NkM3MS4yMDMgOTYuMDc2IDY0IDEwMy40OTYgNjQgMTEyLjkxMlYxNzUuMTYyQzY0IDE4NC41NzggNzEuMjA1IDE5MS45OTggNzkuOTc3IDE5MS45OThDODAuNTIgMTkxLjk5OCA4MS4wNyAxOTEuOTcxIDgxLjYyNSAxOTEuOTEyTDIxNiAxNzcuNzU2VjIyNEMyMTYgMjI0LjI2NCAyMTYuMjU2IDIyNC40MiAyMTYuMjgxIDIyNC42NzZDMTg0LjU5NCAyMjYuMzczIDE1NS45MzIgMjM3Ljc1NiAxMzQuNjA1IDI1NkgzMkMxNC4zMjYgMjU2IDAgMjcwLjMyNiAwIDI4OFYzNTJDMCAzNjkuNjcyIDE0LjMyNiAzODQgMzIgMzg0SDEwOC43OTFDMTI5LjM3OSA0MjEuNzM0IDE3My4wMjUgNDQ4IDIyNCA0NDhTMzE4LjYyMSA0MjEuNzM0IDMzOS4yMDkgMzg0SDM1MkMzNjkuNTg0IDM4NCAzODQuMTQ1IDM5OC4xNTIgMzg0LjAwMiA0MTUuNzM0QzM4My44NTUgNDMzLjQ4IDM5OC4yODcgNDQ4IDQxNiA0NDhINDgwQzQ5Ny4xMDcgNDQ4IDUxMS44NSA0MzQuNDkgNTExLjk5NCA0MTcuMzgzQzUxMi43NDYgMzI4LjM3MyA0NDAuODM2IDI1NiAzNTIgMjU2Wk0zNjguMDAyIDExMi4wOEwzNjggMTEyLjkxMkwzNjguMDUxIDE3NkwyMzIgMTYxLjY2NlYxMjcuMjQ2TDM2OC4wMDIgMTEyLjA4Wk04MCAxNzUuMTYyTDc5Ljg1MiAxMTIuMDY0TDIxNiAxMjcuMjQ2VjE2MS42MjlMODAgMTc1LjE2MlpNNDgwIDQzMkg0MTZDNDExLjcyNSA0MzIgNDA3LjY5NSA0MzAuMzEyIDQwNC42NTYgNDI3LjI0OEM0MDEuNjE5IDQyNC4xODYgMzk5Ljk2NyA0MjAuMTQzIDQwMC4wMDIgNDE1Ljg2NUM0MDAuMTA0IDQwMy4yMjkgMzk1LjIyNyAzOTEuMjk3IDM4Ni4yNjYgMzgyLjI2NEMzNzcuMTQzIDM3My4wNjYgMzY0Ljk3MyAzNjggMzUyIDM2OEgzMjkuNzEzTDMyNS4xNjQgMzc2LjMzOEMzMDYuNzE1IDQxMC4xNSAyNjcuMDA2IDQzMiAyMjQgNDMyUzE0MS4yODUgNDEwLjE1IDEyMi44MzYgMzc2LjMzOEwxMTguMjg3IDM2OEgzMkMyMy4xNzggMzY4IDE2IDM2MC44MjIgMTYgMzUyVjI4OEMxNiAyNzkuMTc4IDIzLjE3OCAyNzIgMzIgMjcySDE0MC41MTZMMTQ1LjAwNiAyNjguMTU4QzE2Ni4yMyAyNTAuMDAxIDE5NC4yODUgMjQwIDIyNCAyNDBTMjgxLjc3IDI1MC4wMDEgMzAyLjk5NCAyNjguMTU4TDMwNy40ODQgMjcySDM1MkMzOTAuNjk5IDI3MiA0MjcuMDE2IDI4Ny4xMzEgNDU0LjI2IDMxNC42MDdDNDgxLjUgMzQyLjA3OCA0OTYuMzIyIDM3OC41MzEgNDk1Ljk5NCA0MTcuMjQ4QzQ5NS45MjggNDI1LjI0NCA0ODguNjAyIDQzMiA0ODAgNDMyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Faucet(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M352 256H313.395C292.068 237.756 263.406 226.373 231.719 224.676C231.744 224.42 232 224.264 232 224V177.756L366.375 191.912C366.93 191.971 367.48 191.998 368.023 191.998C376.797 191.998 384 184.578 384 175.162V112.912C384 103.496 376.795 96.076 368.023 96.076C367.48 96.076 366.93 96.104 366.375 96.162L232 111.145V72C232 67.594 228.406 64 224 64S216 67.594 216 72V111.145L81.625 96.162C81.07 96.104 80.52 96.076 79.977 96.076C71.203 96.076 64 103.496 64 112.912V175.162C64 184.578 71.205 191.998 79.977 191.998C80.52 191.998 81.07 191.971 81.625 191.912L216 177.756V224C216 224.264 216.256 224.42 216.281 224.676C184.594 226.373 155.932 237.756 134.605 256H32C14.326 256 0 270.326 0 288V352C0 369.672 14.326 384 32 384H108.791C129.379 421.734 173.025 448 224 448S318.621 421.734 339.209 384H352C369.584 384 384.145 398.152 384.002 415.734C383.855 433.48 398.287 448 416 448H480C497.107 448 511.85 434.49 511.994 417.383C512.746 328.373 440.836 256 352 256ZM368.002 112.08L368 112.912L368.051 176L232 161.666V127.246L368.002 112.08ZM80 175.162L79.852 112.064L216 127.246V161.629L80 175.162ZM480 432H416C411.725 432 407.695 430.312 404.656 427.248C401.619 424.186 399.967 420.143 400.002 415.865C400.104 403.229 395.227 391.297 386.266 382.264C377.143 373.066 364.973 368 352 368H329.713L325.164 376.338C306.715 410.15 267.006 432 224 432S141.285 410.15 122.836 376.338L118.287 368H32C23.178 368 16 360.822 16 352V288C16 279.178 23.178 272 32 272H140.516L145.006 268.158C166.23 250.001 194.285 240 224 240S281.77 250.001 302.994 268.158L307.484 272H352C390.699 272 427.016 287.131 454.26 314.607C481.5 342.078 496.322 378.531 495.994 417.248C495.928 425.244 488.602 432 480 432Z" />
        </Icon>
    </>
}