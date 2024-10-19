
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `space-station-moon-construction` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/space-station-moon-construction?s=duotone space-station-moon-construction}
 * @preview ![space-station-moon-construction](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCAzNDMuMTM5QzM0MS41ODQgMzQ5LjAwNCAyOTguODE4IDM1MS45NjMgMjU2IDM1MkMxNzIuMTYgMzUyIDk0LjA5IDM0MS4yMDkgMjUuNTIgMzIyLjQzMkM1NC4zNTcgNDIyLjYyNyAxNDYuNTI1IDQ5NiAyNTYgNDk2QzMzNC42MzkgNDk2IDQwNC4yMjcgNDU4LjAwOCA0NDggMzk5LjU2MlYzODRIMzg0VjM0My4xMzlaTTQ5My42MjMgMjI0SDQ0OFYxNjBIMzY4Vjk2SDQxNlY3Ny40NzVDMzczLjUxOCAzOS4zNzMgMzE3LjU1NyAxNiAyNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NkMxNiAyNjYuMzY5IDE2Ljg3OSAyNzYuNTE2IDE4LjE1NCAyODYuNTM5Qzg3Ljg1IDMwNy41MTYgMTY4Ljg4OSAzMjAgMjU2IDMyMFM0MjQuMTUgMzA3LjUxNiA0OTMuODQ2IDI4Ni41MzlDNDk1LjEyMSAyNzYuNTE2IDQ5NiAyNjYuMzY5IDQ5NiAyNTZDNDk2IDI0NS4xMjEgNDk1LjAyNSAyMzQuNDk0IDQ5My42MjMgMjI0Wk0xOTIgMjQwQzE0Ny44MTYgMjQwIDExMiAyMDQuMTg0IDExMiAxNjBTMTQ3LjgxNiA4MCAxOTIgODBTMjcyIDExNS44MTYgMjcyIDE2MFMyMzYuMTg0IDI0MCAxOTIgMjQwWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0xOTEuODQ2IDI0MEMyMzYuMDI5IDI0MCAyNzEuODQ2IDIwNC4xODQgMjcxLjg0NiAxNjBTMjM2LjAyOSA4MCAxOTEuODQ2IDgwUzExMS44NDYgMTE1LjgxNiAxMTEuODQ2IDE2MFMxNDcuNjYyIDI0MCAxOTEuODQ2IDI0MFpNMTkxLjg0NiAxMzZDMjA1LjEgMTM2IDIxNS44NDYgMTQ2Ljc0NCAyMTUuODQ2IDE2MEMyMTUuODQ2IDE3My4yNTQgMjA1LjEgMTg0IDE5MS44NDYgMTg0UzE2Ny44NDYgMTczLjI1NCAxNjcuODQ2IDE2MEMxNjcuODQ2IDE0Ni43NDQgMTc4LjU5IDEzNiAxOTEuODQ2IDEzNlpNMjU1Ljg0NiAzMjBDMTY4LjczNCAzMjAgODcuNjk1IDMwNy41MTYgMTggMjg2LjUzOUMxOS41NjQgMjk4LjgxOCAyMi4wMiAzMTAuODAzIDI1LjM2NSAzMjIuNDMyQzkzLjkzNiAzNDEuMjA5IDE3Mi4wMDYgMzUyIDI1NS44NDYgMzUyUzQxNy43NTYgMzQxLjIwOSA0ODYuMzI2IDMyMi40MzJDNDg5LjY3MiAzMTAuODAzIDQ5Mi4xMjcgMjk4LjgxOCA0OTMuNjkxIDI4Ni41MzlDNDIzLjk5NiAzMDcuNTE2IDM0Mi45NTcgMzIwIDI1NS44NDYgMzIwWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SpaceStationMoonConstruction(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M384 343.139C341.584 349.004 298.818 351.963 256 352C172.16 352 94.09 341.209 25.52 322.432C54.357 422.627 146.525 496 256 496C334.639 496 404.227 458.008 448 399.562V384H384V343.139ZM493.623 224H448V160H368V96H416V77.475C373.518 39.373 317.557 16 256 16C123.451 16 16 123.451 16 256C16 266.369 16.879 276.516 18.154 286.539C87.85 307.516 168.889 320 256 320S424.15 307.516 493.846 286.539C495.121 276.516 496 266.369 496 256C496 245.121 495.025 234.494 493.623 224ZM192 240C147.816 240 112 204.184 112 160S147.816 80 192 80S272 115.816 272 160S236.184 240 192 240Z" />
            <path d="M191.846 240C236.029 240 271.846 204.184 271.846 160S236.029 80 191.846 80S111.846 115.816 111.846 160S147.662 240 191.846 240ZM191.846 136C205.1 136 215.846 146.744 215.846 160C215.846 173.254 205.1 184 191.846 184S167.846 173.254 167.846 160C167.846 146.744 178.59 136 191.846 136ZM255.846 320C168.734 320 87.695 307.516 18 286.539C19.564 298.818 22.02 310.803 25.365 322.432C93.936 341.209 172.006 352 255.846 352S417.756 341.209 486.326 322.432C489.672 310.803 492.127 298.818 493.691 286.539C423.996 307.516 342.957 320 255.846 320Z" />
        </Icon>
    </>
}