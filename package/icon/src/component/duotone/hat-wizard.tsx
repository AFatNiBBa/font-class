
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hat-wizard` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hat-wizard?s=duotone hat-wizard}
 * @preview ![hat-wizard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ5NiA0NDhIMTZDNy4xNjQgNDQ4IDAgNDU1LjE2NCAwIDQ2NEMwIDQ5MC41MDggMjEuNDkyIDUxMiA0OCA1MTJINDY0QzQ5MC41MDggNTEyIDUxMiA0OTAuNTA4IDUxMiA0NjRDNTEyIDQ1NS4xNjQgNTA0LjgzNiA0NDggNDk2IDQ0OFpNMjU2IDE5MkwyNjguNDIyIDIxNi44NDRDMjY5Ljg5OCAyMTkuNzkzIDI3NC4xMDIgMjE5Ljc5MyAyNzUuNTc4IDIxNi44NDRMMjg4IDE5MkwzMTIuODQ0IDE3OS41NzhDMzE1Ljc5MyAxNzguMTAyIDMxNS43OTMgMTczLjg5OCAzMTIuODQ0IDE3Mi40MjJMMjg4IDE2MEwyNzUuNTc4IDEzNS4xNTZDMjc0LjEwMiAxMzIuMjA3IDI2OS44OTggMTMyLjIwNyAyNjguNDIyIDEzNS4xNTZMMjU2IDE2MEwyMzEuMTU2IDE3Mi40MjJDMjI4LjIwNyAxNzMuODk4IDIyOC4yMDcgMTc4LjEwMiAyMzEuMTU2IDE3OS41NzhMMjU2IDE5MloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzYxLjQ4NCAyMTQuMzc1QzM1NS4yMzQgMjAwIDM1NC42MDkgMTgzLjc1IDM1OS42MDkgMTY4Ljg3NUw0MTUuODU5IDBMMjI4LjIzNCAxMDcuMjVDMjA0LjYwOSAxMjAuNzUgMTg1Ljg1OSAxNDEuMzc1IDE3NC44NTkgMTY2LjM3NUw0OCA0NDhINDU5Ljc3M0wzNjEuNDg0IDIxNC4zNzVaTTIzMS4wMTYgMTcyLjQyMkwyNTUuODU5IDE2MEwyNjguMjgxIDEzNS4xNTZDMjY5Ljc1OCAxMzIuMjA3IDI3My45NjEgMTMyLjIwNyAyNzUuNDM4IDEzNS4xNTZMMjg3Ljg1OSAxNjBMMzEyLjcwMyAxNzIuNDIyQzMxNS42NTIgMTczLjg5OCAzMTUuNjUyIDE3OC4xMDIgMzEyLjcwMyAxNzkuNTc4TDI4Ny44NTkgMTkyTDI3NS40MzggMjE2Ljg0NEMyNzMuOTYxIDIxOS43OTMgMjY5Ljc1OCAyMTkuNzkzIDI2OC4yODEgMjE2Ljg0NEwyNTUuODU5IDE5MkwyMzEuMDE2IDE3OS41NzhDMjI4LjA2NiAxNzguMTAyIDIyOC4wNjYgMTczLjg5OCAyMzEuMDE2IDE3Mi40MjJaTTMxNC4zMDUgMzQzLjcxNUwyNjQuMjU4IDM2MC4zOThMMjQ3LjU3IDQxMC40NDVDMjQ1LjEwMiA0MTcuODUyIDIzNC42MTcgNDE3Ljg1MiAyMzIuMTQxIDQxMC40NDVMMjE1LjQ2NSAzNjAuMzk4TDE2NS40MTggMzQzLjcxNUMxNjEuNzExIDM0Mi40OCAxNTkuODU5IDMzOS4yNDIgMTU5Ljg1OSAzMzZTMTYxLjcxMSAzMjkuNTIgMTY1LjQxNCAzMjguMjg1TDIxNS40NjEgMzExLjYwMkwyMzIuMTQ4IDI2MS41NTVDMjM0LjYxNyAyNTQuMTQ4IDI0NS4xMDIgMjU0LjE0OCAyNDcuNTc4IDI2MS41NTVMMjY0LjI1NCAzMTEuNjAyTDMxNC4zMDEgMzI4LjI4NUMzMTguMDA4IDMyOS41MiAzMTkuODU5IDMzMi43NTggMzE5Ljg1OSAzMzZTMzE4LjAwOCAzNDIuNDggMzE0LjMwNSAzNDMuNzE1WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function HatWizard(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M496 448H16C7.164 448 0 455.164 0 464C0 490.508 21.492 512 48 512H464C490.508 512 512 490.508 512 464C512 455.164 504.836 448 496 448ZM256 192L268.422 216.844C269.898 219.793 274.102 219.793 275.578 216.844L288 192L312.844 179.578C315.793 178.102 315.793 173.898 312.844 172.422L288 160L275.578 135.156C274.102 132.207 269.898 132.207 268.422 135.156L256 160L231.156 172.422C228.207 173.898 228.207 178.102 231.156 179.578L256 192Z" />
            <path d="M361.484 214.375C355.234 200 354.609 183.75 359.609 168.875L415.859 0L228.234 107.25C204.609 120.75 185.859 141.375 174.859 166.375L48 448H459.773L361.484 214.375ZM231.016 172.422L255.859 160L268.281 135.156C269.758 132.207 273.961 132.207 275.438 135.156L287.859 160L312.703 172.422C315.652 173.898 315.652 178.102 312.703 179.578L287.859 192L275.438 216.844C273.961 219.793 269.758 219.793 268.281 216.844L255.859 192L231.016 179.578C228.066 178.102 228.066 173.898 231.016 172.422ZM314.305 343.715L264.258 360.398L247.57 410.445C245.102 417.852 234.617 417.852 232.141 410.445L215.465 360.398L165.418 343.715C161.711 342.48 159.859 339.242 159.859 336S161.711 329.52 165.414 328.285L215.461 311.602L232.148 261.555C234.617 254.148 245.102 254.148 247.578 261.555L264.254 311.602L314.301 328.285C318.008 329.52 319.859 332.758 319.859 336S318.008 342.48 314.305 343.715Z" />
        </Icon>
    </>
}