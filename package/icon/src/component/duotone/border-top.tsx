
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `border-top` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/border-top?s=duotone border-top}
 * @preview ![border-top](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI0MCAyMjRIMjA4QzE5OS4xMjUgMjI0IDE5MiAyMzEuMTI1IDE5MiAyNDBWMjcyQzE5MiAyODAuODc1IDE5OS4xMjUgMjg4IDIwOCAyODhIMjQwQzI0OC44NzUgMjg4IDI1NiAyODAuODc1IDI1NiAyNzJWMjQwQzI1NiAyMzEuMTI1IDI0OC44NzUgMjI0IDI0MCAyMjRaTTMzNiAyMjRIMzA0QzI5NS4xMjUgMjI0IDI4OCAyMzEuMTI1IDI4OCAyNDBWMjcyQzI4OCAyODAuODc1IDI5NS4xMjUgMjg4IDMwNCAyODhIMzM2QzM0NC44NzUgMjg4IDM1MiAyODAuODc1IDM1MiAyNzJWMjQwQzM1MiAyMzEuMTI1IDM0NC44NzUgMjI0IDMzNiAyMjRaTTQzMiAyMjRINDAwQzM5MS4xMjUgMjI0IDM4NCAyMzEuMTI1IDM4NCAyNDBWMjcyQzM4NCAyODAuODc1IDM5MS4xMjUgMjg4IDQwMCAyODhINDMyQzQ0MC44NzUgMjg4IDQ0OCAyODAuODc1IDQ0OCAyNzJWMjQwQzQ0OCAyMzEuMTI1IDQ0MC44NzUgMjI0IDQzMiAyMjRaTTE0NCAyMjRIMTEyQzEwMy4xMjUgMjI0IDk2IDIzMS4xMjUgOTYgMjQwVjI3MkM5NiAyODAuODc1IDEwMy4xMjUgMjg4IDExMiAyODhIMTQ0QzE1Mi44NzUgMjg4IDE2MCAyODAuODc1IDE2MCAyNzJWMjQwQzE2MCAyMzEuMTI1IDE1Mi44NzUgMjI0IDE0NCAyMjRaTTI0MCA0MTZIMjA4QzE5OS4xMjUgNDE2IDE5MiA0MjMuMTI1IDE5MiA0MzJWNDY0QzE5MiA0NzIuODc1IDE5OS4xMjUgNDgwIDIwOCA0ODBIMjQwQzI0OC44NzUgNDgwIDI1NiA0NzIuODc1IDI1NiA0NjRWNDMyQzI1NiA0MjMuMTI1IDI0OC44NzUgNDE2IDI0MCA0MTZaTTMzNiA0MTZIMzA0QzI5NS4xMjUgNDE2IDI4OCA0MjMuMTI1IDI4OCA0MzJWNDY0QzI4OCA0NzIuODc1IDI5NS4xMjUgNDgwIDMwNCA0ODBIMzM2QzM0NC44NzUgNDgwIDM1MiA0NzIuODc1IDM1MiA0NjRWNDMyQzM1MiA0MjMuMTI1IDM0NC44NzUgNDE2IDMzNiA0MTZaTTQzMiA0MTZINDAwQzM5MS4xMjUgNDE2IDM4NCA0MjMuMTI1IDM4NCA0MzJWNDY0QzM4NCA0NzIuODc1IDM5MS4xMjUgNDgwIDQwMCA0ODBINDMyQzQ0MC44NzUgNDgwIDQ0OCA0NzIuODc1IDQ0OCA0NjRWNDMyQzQ0OCA0MjMuMTI1IDQ0MC44NzUgNDE2IDQzMiA0MTZaTTQzMiAzMjBINDAwQzM5MS4xMjUgMzIwIDM4NCAzMjcuMTI1IDM4NCAzMzZWMzY4QzM4NCAzNzYuODc1IDM5MS4xMjUgMzg0IDQwMCAzODRINDMyQzQ0MC44NzUgMzg0IDQ0OCAzNzYuODc1IDQ0OCAzNjhWMzM2QzQ0OCAzMjcuMTI1IDQ0MC44NzUgMzIwIDQzMiAzMjBaTTQzMiAxMjhINDAwQzM5MS4xMjUgMTI4IDM4NCAxMzUuMTI1IDM4NCAxNDRWMTc2QzM4NCAxODQuODc1IDM5MS4xMjUgMTkyIDQwMCAxOTJINDMyQzQ0MC44NzUgMTkyIDQ0OCAxODQuODc1IDQ0OCAxNzZWMTQ0QzQ0OCAxMzUuMTI1IDQ0MC44NzUgMTI4IDQzMiAxMjhaTTI0MCAzMjBIMjA4QzE5OS4xMjUgMzIwIDE5MiAzMjcuMTI1IDE5MiAzMzZWMzY4QzE5MiAzNzYuODc1IDE5OS4xMjUgMzg0IDIwOCAzODRIMjQwQzI0OC44NzUgMzg0IDI1NiAzNzYuODc1IDI1NiAzNjhWMzM2QzI1NiAzMjcuMTI1IDI0OC44NzUgMzIwIDI0MCAzMjBaTTI0MCAxMjhIMjA4QzE5OS4xMjUgMTI4IDE5MiAxMzUuMTI1IDE5MiAxNDRWMTc2QzE5MiAxODQuODc1IDE5OS4xMjUgMTkyIDIwOCAxOTJIMjQwQzI0OC44NzUgMTkyIDI1NiAxODQuODc1IDI1NiAxNzZWMTQ0QzI1NiAxMzUuMTI1IDI0OC44NzUgMTI4IDI0MCAxMjhaTTE0NCA0MTZIMTEyQzEwMy4xMjUgNDE2IDk2IDQyMy4xMjUgOTYgNDMyVjQ2NEM5NiA0NzIuODc1IDEwMy4xMjUgNDgwIDExMiA0ODBIMTQ0QzE1Mi44NzUgNDgwIDE2MCA0NzIuODc1IDE2MCA0NjRWNDMyQzE2MCA0MjMuMTI1IDE1Mi44NzUgNDE2IDE0NCA0MTZaTTQ4IDIyNEgxNkM3LjEyNSAyMjQgMCAyMzEuMTI1IDAgMjQwVjI3MkMwIDI4MC44NzUgNy4xMjUgMjg4IDE2IDI4OEg0OEM1Ni44NzUgMjg4IDY0IDI4MC44NzUgNjQgMjcyVjI0MEM2NCAyMzEuMTI1IDU2Ljg3NSAyMjQgNDggMjI0Wk00OCA0MTZIMTZDNy4xMjUgNDE2IDAgNDIzLjEyNSAwIDQzMlY0NjRDMCA0NzIuODc1IDcuMTI1IDQ4MCAxNiA0ODBINDhDNTYuODc1IDQ4MCA2NCA0NzIuODc1IDY0IDQ2NFY0MzJDNjQgNDIzLjEyNSA1Ni44NzUgNDE2IDQ4IDQxNlpNNDggMzIwSDE2QzcuMTI1IDMyMCAwIDMyNy4xMjUgMCAzMzZWMzY4QzAgMzc2Ljg3NSA3LjEyNSAzODQgMTYgMzg0SDQ4QzU2Ljg3NSAzODQgNjQgMzc2Ljg3NSA2NCAzNjhWMzM2QzY0IDMyNy4xMjUgNTYuODc1IDMyMCA0OCAzMjBaTTQ4IDEyOEgxNkM3LjEyNSAxMjggMCAxMzUuMTI1IDAgMTQ0VjE3NkMwIDE4NC44NzUgNy4xMjUgMTkyIDE2IDE5Mkg0OEM1Ni44NzUgMTkyIDY0IDE4NC44NzUgNjQgMTc2VjE0NEM2NCAxMzUuMTI1IDU2Ljg3NSAxMjggNDggMTI4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00NDggNjRWNjRDNDQ4IDgxLjY3MyA0MzMuNjczIDk2IDQxNiA5NkgzMkMxNC4zMjcgOTYgMCA4MS42NzMgMCA2NFY2NEMwIDQ2LjMyNyAxNC4zMjcgMzIgMzIgMzJINDE2QzQzMy42NzMgMzIgNDQ4IDQ2LjMyNyA0NDggNjRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BorderTop(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M240 224H208C199.125 224 192 231.125 192 240V272C192 280.875 199.125 288 208 288H240C248.875 288 256 280.875 256 272V240C256 231.125 248.875 224 240 224ZM336 224H304C295.125 224 288 231.125 288 240V272C288 280.875 295.125 288 304 288H336C344.875 288 352 280.875 352 272V240C352 231.125 344.875 224 336 224ZM432 224H400C391.125 224 384 231.125 384 240V272C384 280.875 391.125 288 400 288H432C440.875 288 448 280.875 448 272V240C448 231.125 440.875 224 432 224ZM144 224H112C103.125 224 96 231.125 96 240V272C96 280.875 103.125 288 112 288H144C152.875 288 160 280.875 160 272V240C160 231.125 152.875 224 144 224ZM240 416H208C199.125 416 192 423.125 192 432V464C192 472.875 199.125 480 208 480H240C248.875 480 256 472.875 256 464V432C256 423.125 248.875 416 240 416ZM336 416H304C295.125 416 288 423.125 288 432V464C288 472.875 295.125 480 304 480H336C344.875 480 352 472.875 352 464V432C352 423.125 344.875 416 336 416ZM432 416H400C391.125 416 384 423.125 384 432V464C384 472.875 391.125 480 400 480H432C440.875 480 448 472.875 448 464V432C448 423.125 440.875 416 432 416ZM432 320H400C391.125 320 384 327.125 384 336V368C384 376.875 391.125 384 400 384H432C440.875 384 448 376.875 448 368V336C448 327.125 440.875 320 432 320ZM432 128H400C391.125 128 384 135.125 384 144V176C384 184.875 391.125 192 400 192H432C440.875 192 448 184.875 448 176V144C448 135.125 440.875 128 432 128ZM240 320H208C199.125 320 192 327.125 192 336V368C192 376.875 199.125 384 208 384H240C248.875 384 256 376.875 256 368V336C256 327.125 248.875 320 240 320ZM240 128H208C199.125 128 192 135.125 192 144V176C192 184.875 199.125 192 208 192H240C248.875 192 256 184.875 256 176V144C256 135.125 248.875 128 240 128ZM144 416H112C103.125 416 96 423.125 96 432V464C96 472.875 103.125 480 112 480H144C152.875 480 160 472.875 160 464V432C160 423.125 152.875 416 144 416ZM48 224H16C7.125 224 0 231.125 0 240V272C0 280.875 7.125 288 16 288H48C56.875 288 64 280.875 64 272V240C64 231.125 56.875 224 48 224ZM48 416H16C7.125 416 0 423.125 0 432V464C0 472.875 7.125 480 16 480H48C56.875 480 64 472.875 64 464V432C64 423.125 56.875 416 48 416ZM48 320H16C7.125 320 0 327.125 0 336V368C0 376.875 7.125 384 16 384H48C56.875 384 64 376.875 64 368V336C64 327.125 56.875 320 48 320ZM48 128H16C7.125 128 0 135.125 0 144V176C0 184.875 7.125 192 16 192H48C56.875 192 64 184.875 64 176V144C64 135.125 56.875 128 48 128Z" />
            <path d="M448 64V64C448 81.673 433.673 96 416 96H32C14.327 96 0 81.673 0 64V64C0 46.327 14.327 32 32 32H416C433.673 32 448 46.327 448 64Z" />
        </Icon>
    </>
}