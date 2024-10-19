
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `mandolin` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mandolin?s=light mandolin}
 * @preview ![mandolin](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDcuMzE0IDUwLjcxMUw0NjEuMzA1IDQuNjg4QzQ1Ni4wMzkgLTAuNTggNDQ3LjgzNyAtMS41MTYgNDQxLjUyMiAyLjQzTDM3Mi4wNjggNDUuODA4QzM2OC41ODYgNDcuOTgyIDM2Ni4wNzUgNTEuNDEyIDM2NS4wNSA1NS4zODhMMzQxLjE1NCAxNDguMTMyTDI5Ny4zNCAxOTEuOTZIMjY2LjA4NkM4OC43NDQgMTkxLjk2IDQ1Ljc1MiAyNDEuMjE2IDMwLjc1NSAyNTYuMjE4Qy0xNi4xMTEgMzAzLjA5OSAtOC43MzggNDA2LjYxMiA0OC4yNTIgNDYzLjc0NEM4MC4yNDYgNDk1LjYyMyAxMjYuNzM3IDUxMiAxNjkuNzI5IDUxMkMyMDMuNDczIDUxMiAyMzUuMDkyIDUwMS44NzQgMjU1LjcxMyA0ODEuMjQ2QzI3MS4yMSA0NjUuNjE5IDMyMy43MSA0MTcuOTg4IDMxOS45NiAyMjMuOTY0VjIxNC41ODdMMzYzLjc5IDE3MC43NDRMNDU2LjQ1NCAxNDYuODUyQzQ2MC40MTMgMTQ1LjgzMSA0NjMuODMyIDE0My4zMzIgNDY2LjAwNyAxMzkuODY5TDUwOS41NDggNzAuNTM4QzUxMy41MTggNjQuMjE3IDUxMi41OTIgNTUuOTg5IDUwNy4zMTQgNTAuNzExWk0yODcuNzA3IDI1OC4yMThDMjg1LjcwNyA0MDYuMTEyIDI0Ny44MzkgNDQ0LjExNiAyMzQuNzE3IDQ1Ni45OTNMMjMzLjA5MiA0NTguNjE4QzIxOS40NyA0NzIuMjQ1IDE5Ni4zNDkgNDc5Ljk5NiAxNjkuNzI5IDQ3OS45OTZDMTMyLjczNiA0NzkuOTk2IDk0Ljg2OCA0NjUuMTE5IDcwLjg3MiA0NDEuMTE2QzIzLjM4MSAzOTMuNDg1IDIxLjUwNyAzMTAuNzI1IDUzLjM3NiAyNzguODQ1TDU1IDI3Ny4yMkM2Ny42MjMgMjY0LjQ2OSAxMDUuNzQxIDIyNi4yMTQgMjUzLjgzOCAyMjQuMjE0TDI2NS4xOCAyMjQuMTNMMjYwLjY1OSAyMjguNjUyQzI1NC40MSAyMzQuOTAyIDI1NC40MSAyNDUuMDI5IDI2MC42NTkgMjUxLjI4QzI2My43ODMgMjU0LjQwNSAyNjcuODc2IDI1NS45NjggMjcxLjk2OSAyNTUuOTY4UzI4MC4xNTUgMjU0LjQwNSAyODMuMjggMjUxLjI4TDI4Ny43ODcgMjQ2Ljc3MUwyODcuNzA3IDI1OC4yMThaTTQ0Mi4zMDMgMTE3LjQ1TDM3OS44NjUgMTMzLjU0OEMzNzkuNjE5IDEzMy4yNjcgMzc5LjUyOSAxMzIuOTA3IDM3OS4yNjIgMTMyLjYzOUMzNzguOTkgMTMyLjM2OCAzNzguNjI3IDEzMi4yNzYgMzc4LjM0MiAxMzIuMDI4TDM5NC40MzcgNjkuNTY5TDQ0Ny42NzcgMzYuMzE1TDQ3NS42NzIgNjQuMzE4TDQ0Mi4zMDMgMTE3LjQ1Wk0xOTEuOTg0IDI1NS45NjhDMTU2LjY5NCAyNTUuOTY4IDEyNy45OTYgMjg0LjY3NCAxMjcuOTk2IDMxOS45NzZTMTU2LjY5NCAzODMuOTg0IDE5MS45ODQgMzgzLjk4NFMyNTUuOTcyIDM1NS4yNzcgMjU1Ljk3MiAzMTkuOTc2UzIyNy4yNzUgMjU1Ljk2OCAxOTEuOTg0IDI1NS45NjhaTTE5MS45ODQgMzUxLjk4QzE3NC4zNDcgMzUxLjk4IDE1OS45OSAzMzcuNjE5IDE1OS45OSAzMTkuOTc2UzE3NC4zNDcgMjg3Ljk3MiAxOTEuOTg0IDI4Ny45NzJTMjIzLjk3OCAzMDIuMzMzIDIyMy45NzggMzE5Ljk3NlMyMDkuNjIyIDM1MS45OCAxOTEuOTg0IDM1MS45OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Mandolin(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M507.314 50.711L461.305 4.688C456.039 -0.58 447.837 -1.516 441.522 2.43L372.068 45.808C368.586 47.982 366.075 51.412 365.05 55.388L341.154 148.132L297.34 191.96H266.086C88.744 191.96 45.752 241.216 30.755 256.218C-16.111 303.099 -8.738 406.612 48.252 463.744C80.246 495.623 126.737 512 169.729 512C203.473 512 235.092 501.874 255.713 481.246C271.21 465.619 323.71 417.988 319.96 223.964V214.587L363.79 170.744L456.454 146.852C460.413 145.831 463.832 143.332 466.007 139.869L509.548 70.538C513.518 64.217 512.592 55.989 507.314 50.711ZM287.707 258.218C285.707 406.112 247.839 444.116 234.717 456.993L233.092 458.618C219.47 472.245 196.349 479.996 169.729 479.996C132.736 479.996 94.868 465.119 70.872 441.116C23.381 393.485 21.507 310.725 53.376 278.845L55 277.22C67.623 264.469 105.741 226.214 253.838 224.214L265.18 224.13L260.659 228.652C254.41 234.902 254.41 245.029 260.659 251.28C263.783 254.405 267.876 255.968 271.969 255.968S280.155 254.405 283.28 251.28L287.787 246.771L287.707 258.218ZM442.303 117.45L379.865 133.548C379.619 133.267 379.529 132.907 379.262 132.639C378.99 132.368 378.627 132.276 378.342 132.028L394.437 69.569L447.677 36.315L475.672 64.318L442.303 117.45ZM191.984 255.968C156.694 255.968 127.996 284.674 127.996 319.976S156.694 383.984 191.984 383.984S255.972 355.277 255.972 319.976S227.275 255.968 191.984 255.968ZM191.984 351.98C174.347 351.98 159.99 337.619 159.99 319.976S174.347 287.972 191.984 287.972S223.978 302.333 223.978 319.976S209.622 351.98 191.984 351.98Z" />
        </Icon>
    </>
}