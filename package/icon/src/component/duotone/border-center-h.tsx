
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `border-center-h` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/border-center-h?s=duotone border-center-h}
 * @preview ![border-center-h](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIwOCA0ODBIMjQwQzI0OC44NzUgNDgwIDI1NiA0NzIuODc1IDI1NiA0NjRWNDMyQzI1NiA0MjMuMTI1IDI0OC44NzUgNDE2IDI0MCA0MTZIMjA4QzE5OS4xMjUgNDE2IDE5MiA0MjMuMTI1IDE5MiA0MzJWNDY0QzE5MiA0NzIuODc1IDE5OS4xMjUgNDgwIDIwOCA0ODBaTTMwNCA0ODBIMzM2QzM0NC44NzUgNDgwIDM1MiA0NzIuODc1IDM1MiA0NjRWNDMyQzM1MiA0MjMuMTI1IDM0NC44NzUgNDE2IDMzNiA0MTZIMzA0QzI5NS4xMjUgNDE2IDI4OCA0MjMuMTI1IDI4OCA0MzJWNDY0QzI4OCA0NzIuODc1IDI5NS4xMjUgNDgwIDMwNCA0ODBaTTQzMiA0MTZINDAwQzM5MS4xMjUgNDE2IDM4NCA0MjMuMTI1IDM4NCA0MzJWNDY0QzM4NCA0NzIuODc1IDM5MS4xMjUgNDgwIDQwMCA0ODBINDMyQzQ0MC44NzUgNDgwIDQ0OCA0NzIuODc1IDQ0OCA0NjRWNDMyQzQ0OCA0MjMuMTI1IDQ0MC44NzUgNDE2IDQzMiA0MTZaTTExMiA0ODBIMTQ0QzE1Mi44NzUgNDgwIDE2MCA0NzIuODc1IDE2MCA0NjRWNDMyQzE2MCA0MjMuMTI1IDE1Mi44NzUgNDE2IDE0NCA0MTZIMTEyQzEwMy4xMjUgNDE2IDk2IDQyMy4xMjUgOTYgNDMyVjQ2NEM5NiA0NzIuODc1IDEwMy4xMjUgNDgwIDExMiA0ODBaTTQzMiAzMjBINDAwQzM5MS4xMjUgMzIwIDM4NCAzMjcuMTI1IDM4NCAzMzZWMzY4QzM4NCAzNzYuODc1IDM5MS4xMjUgMzg0IDQwMCAzODRINDMyQzQ0MC44NzUgMzg0IDQ0OCAzNzYuODc1IDQ0OCAzNjhWMzM2QzQ0OCAzMjcuMTI1IDQ0MC44NzUgMzIwIDQzMiAzMjBaTTQzMiAxMjhINDAwQzM5MS4xMjUgMTI4IDM4NCAxMzUuMTI1IDM4NCAxNDRWMTc2QzM4NCAxODQuODc1IDM5MS4xMjUgMTkyIDQwMCAxOTJINDMyQzQ0MC44NzUgMTkyIDQ0OCAxODQuODc1IDQ0OCAxNzZWMTQ0QzQ0OCAxMzUuMTI1IDQ0MC44NzUgMTI4IDQzMiAxMjhaTTIwOCAzODRIMjQwQzI0OC44NzUgMzg0IDI1NiAzNzYuODc1IDI1NiAzNjhWMzM2QzI1NiAzMjcuMTI1IDI0OC44NzUgMzIwIDI0MCAzMjBIMjA4QzE5OS4xMjUgMzIwIDE5MiAzMjcuMTI1IDE5MiAzMzZWMzY4QzE5MiAzNzYuODc1IDE5OS4xMjUgMzg0IDIwOCAzODRaTTIwOCAxOTJIMjQwQzI0OC44NzUgMTkyIDI1NiAxODQuODc1IDI1NiAxNzZWMTQ0QzI1NiAxMzUuMTI1IDI0OC44NzUgMTI4IDI0MCAxMjhIMjA4QzE5OS4xMjUgMTI4IDE5MiAxMzUuMTI1IDE5MiAxNDRWMTc2QzE5MiAxODQuODc1IDE5OS4xMjUgMTkyIDIwOCAxOTJaTTIwOCA5NkgyNDBDMjQ4Ljg3NSA5NiAyNTYgODguODc1IDI1NiA4MFY0OEMyNTYgMzkuMTI1IDI0OC44NzUgMzIgMjQwIDMySDIwOEMxOTkuMTI1IDMyIDE5MiAzOS4xMjUgMTkyIDQ4VjgwQzE5MiA4OC44NzUgMTk5LjEyNSA5NiAyMDggOTZaTTMwNCA5NkgzMzZDMzQ0Ljg3NSA5NiAzNTIgODguODc1IDM1MiA4MFY0OEMzNTIgMzkuMTI1IDM0NC44NzUgMzIgMzM2IDMySDMwNEMyOTUuMTI1IDMyIDI4OCAzOS4xMjUgMjg4IDQ4VjgwQzI4OCA4OC44NzUgMjk1LjEyNSA5NiAzMDQgOTZaTTQzMiAzMkg0MDBDMzkxLjEyNSAzMiAzODQgMzkuMTI1IDM4NCA0OFY4MEMzODQgODguODc1IDM5MS4xMjUgOTYgNDAwIDk2SDQzMkM0NDAuODc1IDk2IDQ0OCA4OC44NzUgNDQ4IDgwVjQ4QzQ0OCAzOS4xMjUgNDQwLjg3NSAzMiA0MzIgMzJaTTE2IDQ4MEg0OEM1Ni44NzUgNDgwIDY0IDQ3Mi44NzUgNjQgNDY0VjQzMkM2NCA0MjMuMTI1IDU2Ljg3NSA0MTYgNDggNDE2SDE2QzcuMTI1IDQxNiAwIDQyMy4xMjUgMCA0MzJWNDY0QzAgNDcyLjg3NSA3LjEyNSA0ODAgMTYgNDgwWk0xNiAzODRINDhDNTYuODc1IDM4NCA2NCAzNzYuODc1IDY0IDM2OFYzMzZDNjQgMzI3LjEyNSA1Ni44NzUgMzIwIDQ4IDMyMEgxNkM3LjEyNSAzMjAgMCAzMjcuMTI1IDAgMzM2VjM2OEMwIDM3Ni44NzUgNy4xMjUgMzg0IDE2IDM4NFpNMTYgMTkySDQ4QzU2Ljg3NSAxOTIgNjQgMTg0Ljg3NSA2NCAxNzZWMTQ0QzY0IDEzNS4xMjUgNTYuODc1IDEyOCA0OCAxMjhIMTZDNy4xMjUgMTI4IDAgMTM1LjEyNSAwIDE0NFYxNzZDMCAxODQuODc1IDcuMTI1IDE5MiAxNiAxOTJaTTE2IDk2SDQ4QzU2Ljg3NSA5NiA2NCA4OC44NzUgNjQgODBWNDhDNjQgMzkuMTI1IDU2Ljg3NSAzMiA0OCAzMkgxNkM3LjEyNSAzMiAwIDM5LjEyNSAwIDQ4VjgwQzAgODguODc1IDcuMTI1IDk2IDE2IDk2Wk0xMTIgOTZIMTQ0QzE1Mi44NzUgOTYgMTYwIDg4Ljg3NSAxNjAgODBWNDhDMTYwIDM5LjEyNSAxNTIuODc1IDMyIDE0NCAzMkgxMTJDMTAzLjEyNSAzMiA5NiAzOS4xMjUgOTYgNDhWODBDOTYgODguODc1IDEwMy4xMjUgOTYgMTEyIDk2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00NDggMjU2VjI1NkM0NDggMjczLjY3MyA0MzMuNjczIDI4OCA0MTYgMjg4SDMyQzE0LjMyNyAyODggMCAyNzMuNjczIDAgMjU2VjI1NkMwIDIzOC4zMjcgMTQuMzI3IDIyNCAzMiAyMjRINDE2QzQzMy42NzMgMjI0IDQ0OCAyMzguMzI3IDQ0OCAyNTZaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BorderCenterH(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M208 480H240C248.875 480 256 472.875 256 464V432C256 423.125 248.875 416 240 416H208C199.125 416 192 423.125 192 432V464C192 472.875 199.125 480 208 480ZM304 480H336C344.875 480 352 472.875 352 464V432C352 423.125 344.875 416 336 416H304C295.125 416 288 423.125 288 432V464C288 472.875 295.125 480 304 480ZM432 416H400C391.125 416 384 423.125 384 432V464C384 472.875 391.125 480 400 480H432C440.875 480 448 472.875 448 464V432C448 423.125 440.875 416 432 416ZM112 480H144C152.875 480 160 472.875 160 464V432C160 423.125 152.875 416 144 416H112C103.125 416 96 423.125 96 432V464C96 472.875 103.125 480 112 480ZM432 320H400C391.125 320 384 327.125 384 336V368C384 376.875 391.125 384 400 384H432C440.875 384 448 376.875 448 368V336C448 327.125 440.875 320 432 320ZM432 128H400C391.125 128 384 135.125 384 144V176C384 184.875 391.125 192 400 192H432C440.875 192 448 184.875 448 176V144C448 135.125 440.875 128 432 128ZM208 384H240C248.875 384 256 376.875 256 368V336C256 327.125 248.875 320 240 320H208C199.125 320 192 327.125 192 336V368C192 376.875 199.125 384 208 384ZM208 192H240C248.875 192 256 184.875 256 176V144C256 135.125 248.875 128 240 128H208C199.125 128 192 135.125 192 144V176C192 184.875 199.125 192 208 192ZM208 96H240C248.875 96 256 88.875 256 80V48C256 39.125 248.875 32 240 32H208C199.125 32 192 39.125 192 48V80C192 88.875 199.125 96 208 96ZM304 96H336C344.875 96 352 88.875 352 80V48C352 39.125 344.875 32 336 32H304C295.125 32 288 39.125 288 48V80C288 88.875 295.125 96 304 96ZM432 32H400C391.125 32 384 39.125 384 48V80C384 88.875 391.125 96 400 96H432C440.875 96 448 88.875 448 80V48C448 39.125 440.875 32 432 32ZM16 480H48C56.875 480 64 472.875 64 464V432C64 423.125 56.875 416 48 416H16C7.125 416 0 423.125 0 432V464C0 472.875 7.125 480 16 480ZM16 384H48C56.875 384 64 376.875 64 368V336C64 327.125 56.875 320 48 320H16C7.125 320 0 327.125 0 336V368C0 376.875 7.125 384 16 384ZM16 192H48C56.875 192 64 184.875 64 176V144C64 135.125 56.875 128 48 128H16C7.125 128 0 135.125 0 144V176C0 184.875 7.125 192 16 192ZM16 96H48C56.875 96 64 88.875 64 80V48C64 39.125 56.875 32 48 32H16C7.125 32 0 39.125 0 48V80C0 88.875 7.125 96 16 96ZM112 96H144C152.875 96 160 88.875 160 80V48C160 39.125 152.875 32 144 32H112C103.125 32 96 39.125 96 48V80C96 88.875 103.125 96 112 96Z" />
            <path d="M448 256V256C448 273.673 433.673 288 416 288H32C14.327 288 0 273.673 0 256V256C0 238.327 14.327 224 32 224H416C433.673 224 448 238.327 448 256Z" />
        </Icon>
    </>
}