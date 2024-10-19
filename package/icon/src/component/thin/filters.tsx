
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `filters` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/filters?s=thin filters}
 * @preview ![filters](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMDguMzg5IDI4Mi44MkwyNzEuOTk3IDMyNS41MVY0NTAuOTk4QzI3MS45OTcgNDU1LjkzNiAyNjkuMzg3IDQ2MC4yMzIgMjY1LjAyOCA0NjIuNDk4QzI2MC42MzcgNDY0Ljc5NSAyNTUuNjA2IDQ2NC40ODIgMjUxLjU1OSA0NjEuNjU0TDE4MS41NDIgNDEyLjY1NEMxNzguMDczIDQxMC4yMzIgMTc1Ljk5MyA0MDYuMjYyIDE3NS45OTMgNDAyLjAxMlYzMjUuNTFMMjAuMzY0IDE0Mi45MjZDMTUuNjI5IDEzNy4yMDcgMTQuNjYxIDEyOS43OTkgMTcuODAxIDEyMy4xMjdDMjEuMDgzIDExNi4xNTggMjcuNzIzIDExMi4wMDIgMzUuNTgzIDExMi4wMDJIMTU5Ljk5M0MxNjQuNDE1IDExMi4wMDIgMTY3Ljk5MyAxMDguNDI0IDE2Ny45OTMgMTA0LjAwMlMxNjQuNDE1IDk2LjAwMiAxNTkuOTkzIDk2LjAwMkgzNS41ODNDMjEuNTY3IDk2LjAwMiA5LjIwOCAxMDMuNzgzIDMuMzE1IDExNi4zMTRDLTIuNDM1IDEyOC41NjQgLTAuNjIyIDE0Mi42NzYgOC4xMTIgMTUzLjIyM0wxNTkuOTkzIDMzMS40MTZWNDAyLjAxMkMxNTkuOTkzIDQxMS40ODIgMTY0LjYzMyA0MjAuMzczIDE3Mi4zNjggNDI1Ljc2NEwyNDIuMzcyIDQ3NC43NUMyNDcuMzQgNDc4LjIzNCAyNTMuMTM3IDQ4MCAyNTguOTY1IDQ4MEMyNjMuNTU5IDQ4MCAyNjguMTY5IDQ3OC45MDYgMjcyLjQxOSA0NzYuNzAzQzI4Mi4wMjggNDcxLjY4OCAyODcuOTk5IDQ2MS44NDIgMjg3Ljk5OSA0NTAuOTk4VjMzMS40MTZMMzIwLjU3NyAyOTMuMTk1QzMyMy40MzYgMjg5LjgzNiAzMjMuMDMgMjg0Ljc4OSAzMTkuNjcgMjgxLjkxNEMzMTYuMzQyIDI3OS4wNyAzMTEuMjggMjc5LjQzIDMwOC4zODkgMjgyLjgyWk02MzYuNjgyIDUyLjMxMkM2MzAuODA3IDM5Ljc4MSA2MTguNDMgMzIgNjA0LjQxNSAzMkgyMjcuNTg4QzIxMy41NzMgMzIgMjAxLjE5OCAzOS43ODEgMTk1LjMyMyA1Mi4zMTJDMTg5LjU3MyA2NC41NDcgMTkxLjM4NSA3OC42MjcgMjAwLjEzNSA4OS4xNThMMzUyLjAwMSAyNjcuMTAyVjM3MC4xMDVDMzUyLjAwMSAzNzkuNTU5IDM1Ni42NDEgMzg4LjQ0OSAzNjQuMzkxIDM5My44NTVMNDM0LjM5MyA0NDIuNzY0QzQzOS4zNjIgNDQ2LjIzMiA0NDUuMTQzIDQ0Ny45OTggNDUwLjk3MSA0NDcuOTk4QzQ1NS41NjcgNDQ3Ljk5OCA0NjAuMTkyIDQ0Ni45MDQgNDY0LjQ0MiA0NDQuNjg2QzQ3NC4wMzYgNDM5LjY4NiA0ODAuMDA0IDQyOS44NTcgNDgwLjAwNCA0MTkuMDI5VjI2Ny4xMDJMNjMxLjk0OCA4OS4wOEM2NDAuNjIgNzguNjI3IDY0Mi40MzIgNjQuNTQ3IDYzNi42ODIgNTIuMzEyWk02MTkuNzExIDc4Ljc4M0w0NjQuMDA0IDI2MS4xOTVWNDE5LjAyOUM0NjQuMDA0IDQyMy45MzYgNDYxLjQxMSA0MjguMjMyIDQ1Ny4wNTEgNDMwLjQ5OEM0NTIuNjU5IDQzMi44MTEgNDQ3LjYxMiA0MzIuNDgyIDQ0My41NDkgNDI5LjYzOUwzNzMuNTQ3IDM4MC43M0MzNzAuMDc5IDM3OC4zMDkgMzY4LjAwMSAzNzQuMzQgMzY4LjAwMSAzNzAuMTA1VjI2MS4xOTVMMjEyLjM3IDc4Ljg2MUMyMDcuNjM1IDczLjE1NiAyMDYuNjgyIDY1Ljc2NiAyMDkuODA3IDU5LjEwOUMyMTMuMDczIDUyLjE1NiAyMTkuNzEzIDQ4IDIyNy41ODggNDhINjA0LjQxNUM2MTIuMjkgNDggNjE4LjkzIDUyLjE1NiA2MjIuMTk2IDU5LjEwOUM2MjUuMzIzIDY1Ljc2NiA2MjQuMzcgNzMuMTU2IDYxOS43MTEgNzguNzgzWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Filters(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M308.389 282.82L271.997 325.51V450.998C271.997 455.936 269.387 460.232 265.028 462.498C260.637 464.795 255.606 464.482 251.559 461.654L181.542 412.654C178.073 410.232 175.993 406.262 175.993 402.012V325.51L20.364 142.926C15.629 137.207 14.661 129.799 17.801 123.127C21.083 116.158 27.723 112.002 35.583 112.002H159.993C164.415 112.002 167.993 108.424 167.993 104.002S164.415 96.002 159.993 96.002H35.583C21.567 96.002 9.208 103.783 3.315 116.314C-2.435 128.564 -0.622 142.676 8.112 153.223L159.993 331.416V402.012C159.993 411.482 164.633 420.373 172.368 425.764L242.372 474.75C247.34 478.234 253.137 480 258.965 480C263.559 480 268.169 478.906 272.419 476.703C282.028 471.688 287.999 461.842 287.999 450.998V331.416L320.577 293.195C323.436 289.836 323.03 284.789 319.67 281.914C316.342 279.07 311.28 279.43 308.389 282.82ZM636.682 52.312C630.807 39.781 618.43 32 604.415 32H227.588C213.573 32 201.198 39.781 195.323 52.312C189.573 64.547 191.385 78.627 200.135 89.158L352.001 267.102V370.105C352.001 379.559 356.641 388.449 364.391 393.855L434.393 442.764C439.362 446.232 445.143 447.998 450.971 447.998C455.567 447.998 460.192 446.904 464.442 444.686C474.036 439.686 480.004 429.857 480.004 419.029V267.102L631.948 89.08C640.62 78.627 642.432 64.547 636.682 52.312ZM619.711 78.783L464.004 261.195V419.029C464.004 423.936 461.411 428.232 457.051 430.498C452.659 432.811 447.612 432.482 443.549 429.639L373.547 380.73C370.079 378.309 368.001 374.34 368.001 370.105V261.195L212.37 78.861C207.635 73.156 206.682 65.766 209.807 59.109C213.073 52.156 219.713 48 227.588 48H604.415C612.29 48 618.93 52.156 622.196 59.109C625.323 65.766 624.37 73.156 619.711 78.783Z" />
        </Icon>
    </>
}