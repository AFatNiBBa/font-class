
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `border-center-v` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/border-center-v?s=duotone border-center-v}
 * @preview ![border-center-v](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ0OCAyNzJWMjQwQzQ0OCAyMzEuMTI1IDQ0MC44NzUgMjI0IDQzMiAyMjRINDAwQzM5MS4xMjUgMjI0IDM4NCAyMzEuMTI1IDM4NCAyNDBWMjcyQzM4NCAyODAuODc1IDM5MS4xMjUgMjg4IDQwMCAyODhINDMyQzQ0MC44NzUgMjg4IDQ0OCAyODAuODc1IDQ0OCAyNzJaTTQ0OCAxNzZWMTQ0QzQ0OCAxMzUuMTI1IDQ0MC44NzUgMTI4IDQzMiAxMjhINDAwQzM5MS4xMjUgMTI4IDM4NCAxMzUuMTI1IDM4NCAxNDRWMTc2QzM4NCAxODQuODc1IDM5MS4xMjUgMTkyIDQwMCAxOTJINDMyQzQ0MC44NzUgMTkyIDQ0OCAxODQuODc1IDQ0OCAxNzZaTTM4NCA0OFY4MEMzODQgODguODc1IDM5MS4xMjUgOTYgNDAwIDk2SDQzMkM0NDAuODc1IDk2IDQ0OCA4OC44NzUgNDQ4IDgwVjQ4QzQ0OCAzOS4xMjUgNDQwLjg3NSAzMiA0MzIgMzJINDAwQzM5MS4xMjUgMzIgMzg0IDM5LjEyNSAzODQgNDhaTTQ0OCAzNjhWMzM2QzQ0OCAzMjcuMTI1IDQ0MC44NzUgMzIwIDQzMiAzMjBINDAwQzM5MS4xMjUgMzIwIDM4NCAzMjcuMTI1IDM4NCAzMzZWMzY4QzM4NCAzNzYuODc1IDM5MS4xMjUgMzg0IDQwMCAzODRINDMyQzQ0MC44NzUgMzg0IDQ0OCAzNzYuODc1IDQ0OCAzNjhaTTI4OCA0OFY4MEMyODggODguODc1IDI5NS4xMjUgOTYgMzA0IDk2SDMzNkMzNDQuODc1IDk2IDM1MiA4OC44NzUgMzUyIDgwVjQ4QzM1MiAzOS4xMjUgMzQ0Ljg3NSAzMiAzMzYgMzJIMzA0QzI5NS4xMjUgMzIgMjg4IDM5LjEyNSAyODggNDhaTTk2IDQ4VjgwQzk2IDg4Ljg3NSAxMDMuMTI1IDk2IDExMiA5NkgxNDRDMTUyLjg3NSA5NiAxNjAgODguODc1IDE2MCA4MFY0OEMxNjAgMzkuMTI1IDE1Mi44NzUgMzIgMTQ0IDMySDExMkMxMDMuMTI1IDMyIDk2IDM5LjEyNSA5NiA0OFpNMzUyIDI3MlYyNDBDMzUyIDIzMS4xMjUgMzQ0Ljg3NSAyMjQgMzM2IDIyNEgzMDRDMjk1LjEyNSAyMjQgMjg4IDIzMS4xMjUgMjg4IDI0MFYyNzJDMjg4IDI4MC44NzUgMjk1LjEyNSAyODggMzA0IDI4OEgzMzZDMzQ0Ljg3NSAyODggMzUyIDI4MC44NzUgMzUyIDI3MlpNMTYwIDI3MlYyNDBDMTYwIDIzMS4xMjUgMTUyLjg3NSAyMjQgMTQ0IDIyNEgxMTJDMTAzLjEyNSAyMjQgOTYgMjMxLjEyNSA5NiAyNDBWMjcyQzk2IDI4MC44NzUgMTAzLjEyNSAyODggMTEyIDI4OEgxNDRDMTUyLjg3NSAyODggMTYwIDI4MC44NzUgMTYwIDI3MlpNNjQgMjcyVjI0MEM2NCAyMzEuMTI1IDU2Ljg3NSAyMjQgNDggMjI0SDE2QzcuMTI1IDIyNCAwIDIzMS4xMjUgMCAyNDBWMjcyQzAgMjgwLjg3NSA3LjEyNSAyODggMTYgMjg4SDQ4QzU2Ljg3NSAyODggNjQgMjgwLjg3NSA2NCAyNzJaTTY0IDE3NlYxNDRDNjQgMTM1LjEyNSA1Ni44NzUgMTI4IDQ4IDEyOEgxNkM3LjEyNSAxMjggMCAxMzUuMTI1IDAgMTQ0VjE3NkMwIDE4NC44NzUgNy4xMjUgMTkyIDE2IDE5Mkg0OEM1Ni44NzUgMTkyIDY0IDE4NC44NzUgNjQgMTc2Wk0wIDQ4VjgwQzAgODguODc1IDcuMTI1IDk2IDE2IDk2SDQ4QzU2Ljg3NSA5NiA2NCA4OC44NzUgNjQgODBWNDhDNjQgMzkuMTI1IDU2Ljg3NSAzMiA0OCAzMkgxNkM3LjEyNSAzMiAwIDM5LjEyNSAwIDQ4Wk00NDggNDY0VjQzMkM0NDggNDIzLjEyNSA0NDAuODc1IDQxNiA0MzIgNDE2SDQwMEMzOTEuMTI1IDQxNiAzODQgNDIzLjEyNSAzODQgNDMyVjQ2NEMzODQgNDcyLjg3NSAzOTEuMTI1IDQ4MCA0MDAgNDgwSDQzMkM0NDAuODc1IDQ4MCA0NDggNDcyLjg3NSA0NDggNDY0Wk0zNTIgNDY0VjQzMkMzNTIgNDIzLjEyNSAzNDQuODc1IDQxNiAzMzYgNDE2SDMwNEMyOTUuMTI1IDQxNiAyODggNDIzLjEyNSAyODggNDMyVjQ2NEMyODggNDcyLjg3NSAyOTUuMTI1IDQ4MCAzMDQgNDgwSDMzNkMzNDQuODc1IDQ4MCAzNTIgNDcyLjg3NSAzNTIgNDY0Wk0xNjAgNDY0VjQzMkMxNjAgNDIzLjEyNSAxNTIuODc1IDQxNiAxNDQgNDE2SDExMkMxMDMuMTI1IDQxNiA5NiA0MjMuMTI1IDk2IDQzMlY0NjRDOTYgNDcyLjg3NSAxMDMuMTI1IDQ4MCAxMTIgNDgwSDE0NEMxNTIuODc1IDQ4MCAxNjAgNDcyLjg3NSAxNjAgNDY0Wk02NCA0NjRWNDMyQzY0IDQyMy4xMjUgNTYuODc1IDQxNiA0OCA0MTZIMTZDNy4xMjUgNDE2IDAgNDIzLjEyNSAwIDQzMlY0NjRDMCA0NzIuODc1IDcuMTI1IDQ4MCAxNiA0ODBINDhDNTYuODc1IDQ4MCA2NCA0NzIuODc1IDY0IDQ2NFpNNjQgMzY4VjMzNkM2NCAzMjcuMTI1IDU2Ljg3NSAzMjAgNDggMzIwSDE2QzcuMTI1IDMyMCAwIDMyNy4xMjUgMCAzMzZWMzY4QzAgMzc2Ljg3NSA3LjEyNSAzODQgMTYgMzg0SDQ4QzU2Ljg3NSAzODQgNjQgMzc2Ljg3NSA2NCAzNjhaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTIyNCAzMkgyMjRDMjQxLjY3MyAzMiAyNTYgNDYuMzI3IDI1NiA2NFY0NDhDMjU2IDQ2NS42NzMgMjQxLjY3MyA0ODAgMjI0IDQ4MEgyMjRDMjA2LjMyNyA0ODAgMTkyIDQ2NS42NzMgMTkyIDQ0OFY2NEMxOTIgNDYuMzI3IDIwNi4zMjcgMzIgMjI0IDMyWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BorderCenterV(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M448 272V240C448 231.125 440.875 224 432 224H400C391.125 224 384 231.125 384 240V272C384 280.875 391.125 288 400 288H432C440.875 288 448 280.875 448 272ZM448 176V144C448 135.125 440.875 128 432 128H400C391.125 128 384 135.125 384 144V176C384 184.875 391.125 192 400 192H432C440.875 192 448 184.875 448 176ZM384 48V80C384 88.875 391.125 96 400 96H432C440.875 96 448 88.875 448 80V48C448 39.125 440.875 32 432 32H400C391.125 32 384 39.125 384 48ZM448 368V336C448 327.125 440.875 320 432 320H400C391.125 320 384 327.125 384 336V368C384 376.875 391.125 384 400 384H432C440.875 384 448 376.875 448 368ZM288 48V80C288 88.875 295.125 96 304 96H336C344.875 96 352 88.875 352 80V48C352 39.125 344.875 32 336 32H304C295.125 32 288 39.125 288 48ZM96 48V80C96 88.875 103.125 96 112 96H144C152.875 96 160 88.875 160 80V48C160 39.125 152.875 32 144 32H112C103.125 32 96 39.125 96 48ZM352 272V240C352 231.125 344.875 224 336 224H304C295.125 224 288 231.125 288 240V272C288 280.875 295.125 288 304 288H336C344.875 288 352 280.875 352 272ZM160 272V240C160 231.125 152.875 224 144 224H112C103.125 224 96 231.125 96 240V272C96 280.875 103.125 288 112 288H144C152.875 288 160 280.875 160 272ZM64 272V240C64 231.125 56.875 224 48 224H16C7.125 224 0 231.125 0 240V272C0 280.875 7.125 288 16 288H48C56.875 288 64 280.875 64 272ZM64 176V144C64 135.125 56.875 128 48 128H16C7.125 128 0 135.125 0 144V176C0 184.875 7.125 192 16 192H48C56.875 192 64 184.875 64 176ZM0 48V80C0 88.875 7.125 96 16 96H48C56.875 96 64 88.875 64 80V48C64 39.125 56.875 32 48 32H16C7.125 32 0 39.125 0 48ZM448 464V432C448 423.125 440.875 416 432 416H400C391.125 416 384 423.125 384 432V464C384 472.875 391.125 480 400 480H432C440.875 480 448 472.875 448 464ZM352 464V432C352 423.125 344.875 416 336 416H304C295.125 416 288 423.125 288 432V464C288 472.875 295.125 480 304 480H336C344.875 480 352 472.875 352 464ZM160 464V432C160 423.125 152.875 416 144 416H112C103.125 416 96 423.125 96 432V464C96 472.875 103.125 480 112 480H144C152.875 480 160 472.875 160 464ZM64 464V432C64 423.125 56.875 416 48 416H16C7.125 416 0 423.125 0 432V464C0 472.875 7.125 480 16 480H48C56.875 480 64 472.875 64 464ZM64 368V336C64 327.125 56.875 320 48 320H16C7.125 320 0 327.125 0 336V368C0 376.875 7.125 384 16 384H48C56.875 384 64 376.875 64 368Z" />
            <path d="M224 32H224C241.673 32 256 46.327 256 64V448C256 465.673 241.673 480 224 480H224C206.327 480 192 465.673 192 448V64C192 46.327 206.327 32 224 32Z" />
        </Icon>
    </>
}