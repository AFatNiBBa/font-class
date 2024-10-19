
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `border-bottom` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/border-bottom?s=duotone border-bottom}
 * @preview ![border-bottom](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIwOCAyODhIMjQwQzI0OC44NzUgMjg4IDI1NiAyODAuODc1IDI1NiAyNzJWMjQwQzI1NiAyMzEuMTI1IDI0OC44NzUgMjI0IDI0MCAyMjRIMjA4QzE5OS4xMjUgMjI0IDE5MiAyMzEuMTI1IDE5MiAyNDBWMjcyQzE5MiAyODAuODc1IDE5OS4xMjUgMjg4IDIwOCAyODhaTTMwNCAyODhIMzM2QzM0NC44NzUgMjg4IDM1MiAyODAuODc1IDM1MiAyNzJWMjQwQzM1MiAyMzEuMTI1IDM0NC44NzUgMjI0IDMzNiAyMjRIMzA0QzI5NS4xMjUgMjI0IDI4OCAyMzEuMTI1IDI4OCAyNDBWMjcyQzI4OCAyODAuODc1IDI5NS4xMjUgMjg4IDMwNCAyODhaTTQzMiAyMjRINDAwQzM5MS4xMjUgMjI0IDM4NCAyMzEuMTI1IDM4NCAyNDBWMjcyQzM4NCAyODAuODc1IDM5MS4xMjUgMjg4IDQwMCAyODhINDMyQzQ0MC44NzUgMjg4IDQ0OCAyODAuODc1IDQ0OCAyNzJWMjQwQzQ0OCAyMzEuMTI1IDQ0MC44NzUgMjI0IDQzMiAyMjRaTTExMiAyODhIMTQ0QzE1Mi44NzUgMjg4IDE2MCAyODAuODc1IDE2MCAyNzJWMjQwQzE2MCAyMzEuMTI1IDE1Mi44NzUgMjI0IDE0NCAyMjRIMTEyQzEwMy4xMjUgMjI0IDk2IDIzMS4xMjUgOTYgMjQwVjI3MkM5NiAyODAuODc1IDEwMy4xMjUgMjg4IDExMiAyODhaTTQzMiAzMjBINDAwQzM5MS4xMjUgMzIwIDM4NCAzMjcuMTI1IDM4NCAzMzZWMzY4QzM4NCAzNzYuODc1IDM5MS4xMjUgMzg0IDQwMCAzODRINDMyQzQ0MC44NzUgMzg0IDQ0OCAzNzYuODc1IDQ0OCAzNjhWMzM2QzQ0OCAzMjcuMTI1IDQ0MC44NzUgMzIwIDQzMiAzMjBaTTQzMiAxMjhINDAwQzM5MS4xMjUgMTI4IDM4NCAxMzUuMTI1IDM4NCAxNDRWMTc2QzM4NCAxODQuODc1IDM5MS4xMjUgMTkyIDQwMCAxOTJINDMyQzQ0MC44NzUgMTkyIDQ0OCAxODQuODc1IDQ0OCAxNzZWMTQ0QzQ0OCAxMzUuMTI1IDQ0MC44NzUgMTI4IDQzMiAxMjhaTTIwOCAzODRIMjQwQzI0OC44NzUgMzg0IDI1NiAzNzYuODc1IDI1NiAzNjhWMzM2QzI1NiAzMjcuMTI1IDI0OC44NzUgMzIwIDI0MCAzMjBIMjA4QzE5OS4xMjUgMzIwIDE5MiAzMjcuMTI1IDE5MiAzMzZWMzY4QzE5MiAzNzYuODc1IDE5OS4xMjUgMzg0IDIwOCAzODRaTTIwOCAxOTJIMjQwQzI0OC44NzUgMTkyIDI1NiAxODQuODc1IDI1NiAxNzZWMTQ0QzI1NiAxMzUuMTI1IDI0OC44NzUgMTI4IDI0MCAxMjhIMjA4QzE5OS4xMjUgMTI4IDE5MiAxMzUuMTI1IDE5MiAxNDRWMTc2QzE5MiAxODQuODc1IDE5OS4xMjUgMTkyIDIwOCAxOTJaTTIwOCA5NkgyNDBDMjQ4Ljg3NSA5NiAyNTYgODguODc1IDI1NiA4MFY0OEMyNTYgMzkuMTI1IDI0OC44NzUgMzIgMjQwIDMySDIwOEMxOTkuMTI1IDMyIDE5MiAzOS4xMjUgMTkyIDQ4VjgwQzE5MiA4OC44NzUgMTk5LjEyNSA5NiAyMDggOTZaTTMwNCA5NkgzMzZDMzQ0Ljg3NSA5NiAzNTIgODguODc1IDM1MiA4MFY0OEMzNTIgMzkuMTI1IDM0NC44NzUgMzIgMzM2IDMySDMwNEMyOTUuMTI1IDMyIDI4OCAzOS4xMjUgMjg4IDQ4VjgwQzI4OCA4OC44NzUgMjk1LjEyNSA5NiAzMDQgOTZaTTQzMiAzMkg0MDBDMzkxLjEyNSAzMiAzODQgMzkuMTI1IDM4NCA0OFY4MEMzODQgODguODc1IDM5MS4xMjUgOTYgNDAwIDk2SDQzMkM0NDAuODc1IDk2IDQ0OCA4OC44NzUgNDQ4IDgwVjQ4QzQ0OCAzOS4xMjUgNDQwLjg3NSAzMiA0MzIgMzJaTTE2IDI4OEg0OEM1Ni44NzUgMjg4IDY0IDI4MC44NzUgNjQgMjcyVjI0MEM2NCAyMzEuMTI1IDU2Ljg3NSAyMjQgNDggMjI0SDE2QzcuMTI1IDIyNCAwIDIzMS4xMjUgMCAyNDBWMjcyQzAgMjgwLjg3NSA3LjEyNSAyODggMTYgMjg4Wk0xNiAzODRINDhDNTYuODc1IDM4NCA2NCAzNzYuODc1IDY0IDM2OFYzMzZDNjQgMzI3LjEyNSA1Ni44NzUgMzIwIDQ4IDMyMEgxNkM3LjEyNSAzMjAgMCAzMjcuMTI1IDAgMzM2VjM2OEMwIDM3Ni44NzUgNy4xMjUgMzg0IDE2IDM4NFpNMTYgMTkySDQ4QzU2Ljg3NSAxOTIgNjQgMTg0Ljg3NSA2NCAxNzZWMTQ0QzY0IDEzNS4xMjUgNTYuODc1IDEyOCA0OCAxMjhIMTZDNy4xMjUgMTI4IDAgMTM1LjEyNSAwIDE0NFYxNzZDMCAxODQuODc1IDcuMTI1IDE5MiAxNiAxOTJaTTE2IDk2SDQ4QzU2Ljg3NSA5NiA2NCA4OC44NzUgNjQgODBWNDhDNjQgMzkuMTI1IDU2Ljg3NSAzMiA0OCAzMkgxNkM3LjEyNSAzMiAwIDM5LjEyNSAwIDQ4VjgwQzAgODguODc1IDcuMTI1IDk2IDE2IDk2Wk0xMTIgOTZIMTQ0QzE1Mi44NzUgOTYgMTYwIDg4Ljg3NSAxNjAgODBWNDhDMTYwIDM5LjEyNSAxNTIuODc1IDMyIDE0NCAzMkgxMTJDMTAzLjEyNSAzMiA5NiAzOS4xMjUgOTYgNDhWODBDOTYgODguODc1IDEwMy4xMjUgOTYgMTEyIDk2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00NDggNDQ4VjQ0OEM0NDggNDY1LjY3MyA0MzMuNjczIDQ4MCA0MTYgNDgwSDMyQzE0LjMyNyA0ODAgMCA0NjUuNjczIDAgNDQ4VjQ0OEMwIDQzMC4zMjcgMTQuMzI3IDQxNiAzMiA0MTZINDE2QzQzMy42NzMgNDE2IDQ0OCA0MzAuMzI3IDQ0OCA0NDhaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BorderBottom(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M208 288H240C248.875 288 256 280.875 256 272V240C256 231.125 248.875 224 240 224H208C199.125 224 192 231.125 192 240V272C192 280.875 199.125 288 208 288ZM304 288H336C344.875 288 352 280.875 352 272V240C352 231.125 344.875 224 336 224H304C295.125 224 288 231.125 288 240V272C288 280.875 295.125 288 304 288ZM432 224H400C391.125 224 384 231.125 384 240V272C384 280.875 391.125 288 400 288H432C440.875 288 448 280.875 448 272V240C448 231.125 440.875 224 432 224ZM112 288H144C152.875 288 160 280.875 160 272V240C160 231.125 152.875 224 144 224H112C103.125 224 96 231.125 96 240V272C96 280.875 103.125 288 112 288ZM432 320H400C391.125 320 384 327.125 384 336V368C384 376.875 391.125 384 400 384H432C440.875 384 448 376.875 448 368V336C448 327.125 440.875 320 432 320ZM432 128H400C391.125 128 384 135.125 384 144V176C384 184.875 391.125 192 400 192H432C440.875 192 448 184.875 448 176V144C448 135.125 440.875 128 432 128ZM208 384H240C248.875 384 256 376.875 256 368V336C256 327.125 248.875 320 240 320H208C199.125 320 192 327.125 192 336V368C192 376.875 199.125 384 208 384ZM208 192H240C248.875 192 256 184.875 256 176V144C256 135.125 248.875 128 240 128H208C199.125 128 192 135.125 192 144V176C192 184.875 199.125 192 208 192ZM208 96H240C248.875 96 256 88.875 256 80V48C256 39.125 248.875 32 240 32H208C199.125 32 192 39.125 192 48V80C192 88.875 199.125 96 208 96ZM304 96H336C344.875 96 352 88.875 352 80V48C352 39.125 344.875 32 336 32H304C295.125 32 288 39.125 288 48V80C288 88.875 295.125 96 304 96ZM432 32H400C391.125 32 384 39.125 384 48V80C384 88.875 391.125 96 400 96H432C440.875 96 448 88.875 448 80V48C448 39.125 440.875 32 432 32ZM16 288H48C56.875 288 64 280.875 64 272V240C64 231.125 56.875 224 48 224H16C7.125 224 0 231.125 0 240V272C0 280.875 7.125 288 16 288ZM16 384H48C56.875 384 64 376.875 64 368V336C64 327.125 56.875 320 48 320H16C7.125 320 0 327.125 0 336V368C0 376.875 7.125 384 16 384ZM16 192H48C56.875 192 64 184.875 64 176V144C64 135.125 56.875 128 48 128H16C7.125 128 0 135.125 0 144V176C0 184.875 7.125 192 16 192ZM16 96H48C56.875 96 64 88.875 64 80V48C64 39.125 56.875 32 48 32H16C7.125 32 0 39.125 0 48V80C0 88.875 7.125 96 16 96ZM112 96H144C152.875 96 160 88.875 160 80V48C160 39.125 152.875 32 144 32H112C103.125 32 96 39.125 96 48V80C96 88.875 103.125 96 112 96Z" />
            <path d="M448 448V448C448 465.673 433.673 480 416 480H32C14.327 480 0 465.673 0 448V448C0 430.327 14.327 416 32 416H416C433.673 416 448 430.327 448 448Z" />
        </Icon>
    </>
}