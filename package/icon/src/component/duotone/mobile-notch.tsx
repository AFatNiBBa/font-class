
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-notch` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-notch?s=duotone mobile-notch}
 * @preview ![mobile-notch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI4OCAwSDk2QzUxLjgxOCAwIDE2IDM1LjgxNiAxNiA4MFY0MzJDMTYgNDc2LjE4MiA1MS44MTggNTEyIDk2IDUxMkgyODhDMzMyLjE4NCA1MTIgMzY4IDQ3Ni4xODIgMzY4IDQzMlY4MEMzNjggMzUuODE2IDMzMi4xODQgMCAyODggMFpNMzA0IDQzMkMzMDQgNDQwLjgyMiAyOTYuODIyIDQ0OCAyODggNDQ4SDk2Qzg3LjE3OCA0NDggODAgNDQwLjgyMiA4MCA0MzJWODBDODAgNzEuMTc4IDg3LjE3OCA2NCA5NiA2NEgxMjhWODBDMTI4IDg4LjgzNiAxMzUuMTY0IDk2IDE0NCA5NkgyNDBDMjQ4LjgzOCA5NiAyNTYgODguODM2IDI1NiA4MFY2NEgyODhDMjk2LjgyMiA2NCAzMDQgNzEuMTc4IDMwNCA4MFY0MzJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI4OCA2NEgyNTZWODBDMjU2IDg4LjgzNiAyNDguODM4IDk2IDI0MCA5NkgxNDRDMTM1LjE2NCA5NiAxMjggODguODM2IDEyOCA4MFY2NEg5NkM4Ny4xNzggNjQgODAgNzEuMTc4IDgwIDgwVjQzMkM4MCA0NDAuODIyIDg3LjE3OCA0NDggOTYgNDQ4SDI4OEMyOTYuODIyIDQ0OCAzMDQgNDQwLjgyMiAzMDQgNDMyVjgwQzMwNCA3MS4xNzggMjk2LjgyMiA2NCAyODggNjRaTTI0MCA0MTZIMTQ0QzEzNS4xNjQgNDE2IDEyOCA0MDguODM2IDEyOCA0MDBDMTI4IDM5MS4xNjIgMTM1LjE2NCAzODQgMTQ0IDM4NEgyNDBDMjQ4LjgzOCAzODQgMjU2IDM5MS4xNjIgMjU2IDQwMEMyNTYgNDA4LjgzNiAyNDguODM4IDQxNiAyNDAgNDE2WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function MobileNotch(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path opacity={.4} d="M288 0H96C51.818 0 16 35.816 16 80V432C16 476.182 51.818 512 96 512H288C332.184 512 368 476.182 368 432V80C368 35.816 332.184 0 288 0ZM304 432C304 440.822 296.822 448 288 448H96C87.178 448 80 440.822 80 432V80C80 71.178 87.178 64 96 64H128V80C128 88.836 135.164 96 144 96H240C248.838 96 256 88.836 256 80V64H288C296.822 64 304 71.178 304 80V432Z" />
            <path d="M288 64H256V80C256 88.836 248.838 96 240 96H144C135.164 96 128 88.836 128 80V64H96C87.178 64 80 71.178 80 80V432C80 440.822 87.178 448 96 448H288C296.822 448 304 440.822 304 432V80C304 71.178 296.822 64 288 64ZM240 416H144C135.164 416 128 408.836 128 400C128 391.162 135.164 384 144 384H240C248.838 384 256 391.162 256 400C256 408.836 248.838 416 240 416Z" />
        </Icon>
    </>
}