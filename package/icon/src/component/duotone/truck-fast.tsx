
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `truck-fast` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/truck-fast?s=duotone truck-fast}
 * @preview ![truck-fast](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE3NiAzNTJDMTMxLjgxNiAzNTIgOTYgMzg3LjgxNiA5NiA0MzJDOTYgNDc2LjE4MiAxMzEuODE2IDUxMiAxNzYgNTEyUzI1NiA0NzYuMTgyIDI1NiA0MzJDMjU2IDM4Ny44MTYgMjIwLjE4NCAzNTIgMTc2IDM1MlpNNDY0IDM1MkM0MTkuODE2IDM1MiAzODQgMzg3LjgxNiAzODQgNDMyQzM4NCA0NzYuMTgyIDQxOS44MTYgNTEyIDQ2NCA1MTJTNTQ0IDQ3Ni4xODIgNTQ0IDQzMkM1NDQgMzg3LjgxNiA1MDguMTg0IDM1MiA0NjQgMzUyWk0yNDAgMTYwSDQ4QzM5LjE2NCAxNjAgMzIgMTY3LjE2NCAzMiAxNzZTMzkuMTY0IDE5MiA0OCAxOTJIMjQwQzI0OC44MzYgMTkyIDI1NiAxODQuODM2IDI1NiAxNzZTMjQ4LjgzNiAxNjAgMjQwIDE2MFpNMjI0IDI0MEMyMjQgMjMxLjE2NCAyMTYuODM2IDIyNCAyMDggMjI0SDE2QzcuMTY0IDIyNCAwIDIzMS4xNjQgMCAyNDBTNy4xNjQgMjU2IDE2IDI1NkgyMDhDMjE2LjgzNiAyNTYgMjI0IDI0OC44MzYgMjI0IDI0MFpNMjcyIDk2SDE2QzcuMTY0IDk2IDAgMTAzLjE2NCAwIDExMlM3LjE2NCAxMjggMTYgMTI4SDI3MkMyODAuODM2IDEyOCAyODggMTIwLjgzNiAyODggMTEyUzI4MC44MzYgOTYgMjcyIDk2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik02MjQuMTU4IDM1Mkg2MDguMTU4VjIzNy4yNUM2MDguMTU4IDIyMC4xNTYgNjAxLjUwMiAyMDQuMDk0IDU4OS40MDggMTkyTDUxMi4xNTggMTE0Ljc1QzUwMC4yNTIgMTAyLjgyOCA0ODMuNzUyIDk2IDQ2Ni45MDggOTZINDE2LjE1OFY0OEM0MTYuMTU4IDIxLjUgMzk0LjY1OCAwIDM2OC4xNTggMEgxMTBDODMuNSAwIDYyIDIxLjUgNjIgNDhWOTZIMjcyLjE1OEMyODAuOTk0IDk2IDI4OC4xNTggMTAzLjE2NCAyODguMTU4IDExMlMyODAuOTk0IDEyOCAyNzIuMTU4IDEyOEg2MlYxNjBIMjQwLjE1OEMyNDguOTk0IDE2MCAyNTYuMTU4IDE2Ny4xNjQgMjU2LjE1OCAxNzZTMjQ4Ljk5NCAxOTIgMjQwLjE1OCAxOTJINjJWMjI0SDIwOC4xNThDMjE2Ljk5NCAyMjQgMjI0LjE1OCAyMzEuMTY0IDIyNC4xNTggMjQwUzIxNi45OTQgMjU2IDIwOC4xNTggMjU2SDYyVjM2OEM2MiAzNzguMjUgNjUuMjc3IDM4Ny43MDMgNzAuNzU2IDM5NS41MDRDODUuOTUxIDM1MS42NzIgMTI3LjE1NiAzMjAgMTc2LjE1OCAzMjBDMjMyLjUzMyAzMjAgMjc4LjcyMSAzNjEuNzkxIDI4Ni41NDUgNDE2SDM1My43NzVDMzYxLjYyMyAzNjEuODYxIDQwNy44NzkgMzIwIDQ2NC4xNTggMzIwQzUyMC4zODEgMzIwIDU2Ni4xMzEgMzYxLjkyNiA1NzQgNDE2SDYyNC4xNThDNjMyLjk3MSA0MTYgNjQwLjE1OCA0MDguNzk3IDY0MC4xNTggNDAwVjM2OEM2NDAuMTU4IDM1OS4yMDMgNjMyLjk3MSAzNTIgNjI0LjE1OCAzNTJaTTU0NC4xNTggMjU2SDQxNi4xNThWMTYwSDQ2Ni45MDhMNTQ0LjE1OCAyMzcuMjVWMjU2WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function TruckFast(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M176 352C131.816 352 96 387.816 96 432C96 476.182 131.816 512 176 512S256 476.182 256 432C256 387.816 220.184 352 176 352ZM464 352C419.816 352 384 387.816 384 432C384 476.182 419.816 512 464 512S544 476.182 544 432C544 387.816 508.184 352 464 352ZM240 160H48C39.164 160 32 167.164 32 176S39.164 192 48 192H240C248.836 192 256 184.836 256 176S248.836 160 240 160ZM224 240C224 231.164 216.836 224 208 224H16C7.164 224 0 231.164 0 240S7.164 256 16 256H208C216.836 256 224 248.836 224 240ZM272 96H16C7.164 96 0 103.164 0 112S7.164 128 16 128H272C280.836 128 288 120.836 288 112S280.836 96 272 96Z" />
            <path d="M624.158 352H608.158V237.25C608.158 220.156 601.502 204.094 589.408 192L512.158 114.75C500.252 102.828 483.752 96 466.908 96H416.158V48C416.158 21.5 394.658 0 368.158 0H110C83.5 0 62 21.5 62 48V96H272.158C280.994 96 288.158 103.164 288.158 112S280.994 128 272.158 128H62V160H240.158C248.994 160 256.158 167.164 256.158 176S248.994 192 240.158 192H62V224H208.158C216.994 224 224.158 231.164 224.158 240S216.994 256 208.158 256H62V368C62 378.25 65.277 387.703 70.756 395.504C85.951 351.672 127.156 320 176.158 320C232.533 320 278.721 361.791 286.545 416H353.775C361.623 361.861 407.879 320 464.158 320C520.381 320 566.131 361.926 574 416H624.158C632.971 416 640.158 408.797 640.158 400V368C640.158 359.203 632.971 352 624.158 352ZM544.158 256H416.158V160H466.908L544.158 237.25V256Z" />
        </Icon>
    </>
}