
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `film-slash` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/film-slash?s=duotone film-slash}
 * @preview ![film-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQwMCA0MTZIMjQwQzIzMS4xNjQgNDE2IDIyNCA0MDguODM2IDIyNCA0MDBWMzA0QzIyNCAyOTUuMTY0IDIzMS4xNjQgMjg4IDI0MCAyODhIMjQ0LjA4MkwxNzYgMjM0LjYzOVYyODBDMTc2IDI4NC40MTggMTcyLjQxOCAyODggMTY4IDI4OEgxMjBDMTE1LjU4MiAyODggMTEyIDI4NC40MTggMTEyIDI4MFYyMzJDMTEyIDIyNy41ODIgMTE1LjU4MiAyMjQgMTIwIDIyNEgxNjIuNDI2TDY0IDE0Ni44NTVWNDMyQzY0IDQ1OC41MDggODUuNDkyIDQ4MCAxMTIgNDgwSDQ4OS4wNDlMNDA1Ljg3OSA0MTQuODEyQzQwNC4wNTMgNDE1LjUzOSA0MDIuMDg2IDQxNiA0MDAgNDE2Wk0xNzYgNDA4QzE3NiA0MTIuNDE4IDE3Mi40MTggNDE2IDE2OCA0MTZIMTIwQzExNS41ODIgNDE2IDExMiA0MTIuNDE4IDExMiA0MDhWMzYwQzExMiAzNTUuNTgyIDExNS41ODIgMzUyIDEyMCAzNTJIMTY4QzE3Mi40MTggMzUyIDE3NiAzNTUuNTgyIDE3NiAzNjBWNDA4Wk01MjggMzJIMTEyQzEwMS42OTkgMzIgOTIuMjExIDM1LjMxMiA4NC4zOTEgNDAuODM2TDIyNCAxNTAuMjZWMTEyQzIyNCAxMDMuMTY0IDIzMS4xNjQgOTYgMjQwIDk2SDQwMEM0MDguODM2IDk2IDQxNiAxMDMuMTY0IDQxNiAxMTJWMjA4QzQxNiAyMTYuODM2IDQwOC44MzYgMjI0IDQwMCAyMjRIMzE4LjA4NEw0ODEuMzk2IDM1Mkg1MjBDNTI0LjQxOCAzNTIgNTI4IDM1NS41ODIgNTI4IDM2MFYzODguNTI3TDU3NiA0MjYuMTQ4VjgwQzU3NiA1My40OTIgNTU0LjUwOCAzMiA1MjggMzJaTTUyOCAyODBDNTI4IDI4NC40MTggNTI0LjQxOCAyODggNTIwIDI4OEg0NzJDNDY3LjU4MiAyODggNDY0IDI4NC40MTggNDY0IDI4MFYyMzJDNDY0IDIyNy41ODIgNDY3LjU4MiAyMjQgNDcyIDIyNEg1MjBDNTI0LjQxOCAyMjQgNTI4IDIyNy41ODIgNTI4IDIzMlYyODBaTTUyOCAxNTJDNTI4IDE1Ni40MTggNTI0LjQxOCAxNjAgNTIwIDE2MEg0NzJDNDY3LjU4MiAxNjAgNDY0IDE1Ni40MTggNDY0IDE1MlYxMDRDNDY0IDk5LjU4MiA0NjcuNTgyIDk2IDQ3MiA5Nkg1MjBDNTI0LjQxOCA5NiA1MjggOTkuNTgyIDUyOCAxMDRWMTUyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik02MzAuODEzIDQ2OS4xMDlMMzguODEyIDUuMTE0QzI4LjM0MyAtMy4wNTggMTMuMzEyIC0xLjI0NiA1LjEwOSA5LjE5MkMtMy4wNjMgMTkuNjI5IC0xLjIzNSAzNC43MjMgOS4xODcgNDIuODk1TDYwMS4xODggNTA2Ljg5MUM2MDUuNTk0IDUxMC4zMjggNjEwLjc5NyA1MTIgNjE1Ljk4NSA1MTJDNjIzLjExIDUxMiA2MzAuMTU3IDUwOC44NDQgNjM0Ljg5MSA1MDIuODEyQzY0My4wNjMgNDkyLjM3NSA2NDEuMjM1IDQ3Ny4yODEgNjMwLjgxMyA0NjkuMTA5WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FilmSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path opacity={.4} d="M400 416H240C231.164 416 224 408.836 224 400V304C224 295.164 231.164 288 240 288H244.082L176 234.639V280C176 284.418 172.418 288 168 288H120C115.582 288 112 284.418 112 280V232C112 227.582 115.582 224 120 224H162.426L64 146.855V432C64 458.508 85.492 480 112 480H489.049L405.879 414.812C404.053 415.539 402.086 416 400 416ZM176 408C176 412.418 172.418 416 168 416H120C115.582 416 112 412.418 112 408V360C112 355.582 115.582 352 120 352H168C172.418 352 176 355.582 176 360V408ZM528 32H112C101.699 32 92.211 35.312 84.391 40.836L224 150.26V112C224 103.164 231.164 96 240 96H400C408.836 96 416 103.164 416 112V208C416 216.836 408.836 224 400 224H318.084L481.396 352H520C524.418 352 528 355.582 528 360V388.527L576 426.148V80C576 53.492 554.508 32 528 32ZM528 280C528 284.418 524.418 288 520 288H472C467.582 288 464 284.418 464 280V232C464 227.582 467.582 224 472 224H520C524.418 224 528 227.582 528 232V280ZM528 152C528 156.418 524.418 160 520 160H472C467.582 160 464 156.418 464 152V104C464 99.582 467.582 96 472 96H520C524.418 96 528 99.582 528 104V152Z" />
            <path d="M630.813 469.109L38.812 5.114C28.343 -3.058 13.312 -1.246 5.109 9.192C-3.063 19.629 -1.235 34.723 9.187 42.895L601.188 506.891C605.594 510.328 610.797 512 615.985 512C623.11 512 630.157 508.844 634.891 502.812C643.063 492.375 641.235 477.281 630.813 469.109Z" />
        </Icon>
    </>
}