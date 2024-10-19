
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `fax` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/fax?s=duotone fax}
 * @preview ![fax](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI3MiAyNTZIMjQwQzIzMS4xMjUgMjU2IDIyNCAyNjMuMTI1IDIyNCAyNzJWMzA0QzIyNCAzMTIuODc1IDIzMS4xMjUgMzIwIDI0MCAzMjBIMjcyQzI4MC44NzUgMzIwIDI4OCAzMTIuODc1IDI4OCAzMDRWMjcyQzI4OCAyNjMuMTI1IDI4MC44NzUgMjU2IDI3MiAyNTZaTTI3MiAzODRIMjQwQzIzMS4xMjUgMzg0IDIyNCAzOTEuMTI1IDIyNCA0MDBWNDMyQzIyNCA0NDAuODc1IDIzMS4xMjUgNDQ4IDI0MCA0NDhIMjcyQzI4MC44NzUgNDQ4IDI4OCA0NDAuODc1IDI4OCA0MzJWNDAwQzI4OCAzOTEuMTI1IDI4MC44NzUgMzg0IDI3MiAzODRaTTQwMCAzODRIMzY4QzM1OS4xMjUgMzg0IDM1MiAzOTEuMTI1IDM1MiA0MDBWNDMyQzM1MiA0NDAuODc1IDM1OS4xMjUgNDQ4IDM2OCA0NDhINDAwQzQwOC44NzUgNDQ4IDQxNiA0NDAuODc1IDQxNiA0MzJWNDAwQzQxNiAzOTEuMTI1IDQwOC44NzUgMzg0IDQwMCAzODRaTTQwMCAyNTZIMzY4QzM1OS4xMjUgMjU2IDM1MiAyNjMuMTI1IDM1MiAyNzJWMzA0QzM1MiAzMTIuODc1IDM1OS4xMjUgMzIwIDM2OCAzMjBINDAwQzQwOC44NzUgMzIwIDQxNiAzMTIuODc1IDQxNiAzMDRWMjcyQzQxNiAyNjMuMTI1IDQwOC44NzUgMjU2IDQwMCAyNTZaTTQ3MC42MjUgNTQuNjI1TDQyNS4zNzUgOS4zNzVDNDE5LjM3NSAzLjM3NSA0MTEuMjE5IDAgNDAyLjc1IDBIMTYwQzE0Mi4zNDQgMCAxMjggMTQuMzI4IDEyOCAzMlYxOTJIMTkyVjY0SDM4OS40OUw0MTYgOTAuNTFWMTkySDQ4MFY3Ny4yNUM0ODAgNjguNzY2IDQ3Ni42MjUgNjAuNjI1IDQ3MC42MjUgNTQuNjI1WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik02NCAxMjhIMzJDMTQuMzc1IDEyOCAwIDE0Mi4zNzUgMCAxNjBWNDgwQzAgNDk3LjYyNSAxNC4zNzUgNTEyIDMyIDUxMkg2NEM4MS42MjUgNTEyIDk2IDQ5Ny42MjUgOTYgNDgwVjE2MEM5NiAxNDIuMzc1IDgxLjYyNSAxMjggNjQgMTI4Wk00ODAgMTkySDEyOFY0ODBDMTI4IDQ5Ny42IDE0Mi40IDUxMiAxNjAgNTEySDQ4MEM0OTcuNiA1MTIgNTEyIDQ5Ny42IDUxMiA0ODBWMjI0QzUxMiAyMDYuMzI2IDQ5Ny42NzQgMTkyIDQ4MCAxOTJaTTI4OCA0MzJDMjg4IDQ0MC44NzUgMjgwLjg3NSA0NDggMjcyIDQ0OEgyNDBDMjMxLjEyNSA0NDggMjI0IDQ0MC44NzUgMjI0IDQzMlY0MDBDMjI0IDM5MS4xMjUgMjMxLjEyNSAzODQgMjQwIDM4NEgyNzJDMjgwLjg3NSAzODQgMjg4IDM5MS4xMjUgMjg4IDQwMFY0MzJaTTI4OCAzMDRDMjg4IDMxMi44NzUgMjgwLjg3NSAzMjAgMjcyIDMyMEgyNDBDMjMxLjEyNSAzMjAgMjI0IDMxMi44NzUgMjI0IDMwNFYyNzJDMjI0IDI2My4xMjUgMjMxLjEyNSAyNTYgMjQwIDI1NkgyNzJDMjgwLjg3NSAyNTYgMjg4IDI2My4xMjUgMjg4IDI3MlYzMDRaTTQxNiA0MzJDNDE2IDQ0MC44NzUgNDA4Ljg3NSA0NDggNDAwIDQ0OEgzNjhDMzU5LjEyNSA0NDggMzUyIDQ0MC44NzUgMzUyIDQzMlY0MDBDMzUyIDM5MS4xMjUgMzU5LjEyNSAzODQgMzY4IDM4NEg0MDBDNDA4Ljg3NSAzODQgNDE2IDM5MS4xMjUgNDE2IDQwMFY0MzJaTTQxNiAzMDRDNDE2IDMxMi44NzUgNDA4Ljg3NSAzMjAgNDAwIDMyMEgzNjhDMzU5LjEyNSAzMjAgMzUyIDMxMi44NzUgMzUyIDMwNFYyNzJDMzUyIDI2My4xMjUgMzU5LjEyNSAyNTYgMzY4IDI1Nkg0MDBDNDA4Ljg3NSAyNTYgNDE2IDI2My4xMjUgNDE2IDI3MlYzMDRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Fax(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M272 256H240C231.125 256 224 263.125 224 272V304C224 312.875 231.125 320 240 320H272C280.875 320 288 312.875 288 304V272C288 263.125 280.875 256 272 256ZM272 384H240C231.125 384 224 391.125 224 400V432C224 440.875 231.125 448 240 448H272C280.875 448 288 440.875 288 432V400C288 391.125 280.875 384 272 384ZM400 384H368C359.125 384 352 391.125 352 400V432C352 440.875 359.125 448 368 448H400C408.875 448 416 440.875 416 432V400C416 391.125 408.875 384 400 384ZM400 256H368C359.125 256 352 263.125 352 272V304C352 312.875 359.125 320 368 320H400C408.875 320 416 312.875 416 304V272C416 263.125 408.875 256 400 256ZM470.625 54.625L425.375 9.375C419.375 3.375 411.219 0 402.75 0H160C142.344 0 128 14.328 128 32V192H192V64H389.49L416 90.51V192H480V77.25C480 68.766 476.625 60.625 470.625 54.625Z" />
            <path d="M64 128H32C14.375 128 0 142.375 0 160V480C0 497.625 14.375 512 32 512H64C81.625 512 96 497.625 96 480V160C96 142.375 81.625 128 64 128ZM480 192H128V480C128 497.6 142.4 512 160 512H480C497.6 512 512 497.6 512 480V224C512 206.326 497.674 192 480 192ZM288 432C288 440.875 280.875 448 272 448H240C231.125 448 224 440.875 224 432V400C224 391.125 231.125 384 240 384H272C280.875 384 288 391.125 288 400V432ZM288 304C288 312.875 280.875 320 272 320H240C231.125 320 224 312.875 224 304V272C224 263.125 231.125 256 240 256H272C280.875 256 288 263.125 288 272V304ZM416 432C416 440.875 408.875 448 400 448H368C359.125 448 352 440.875 352 432V400C352 391.125 359.125 384 368 384H400C408.875 384 416 391.125 416 400V432ZM416 304C416 312.875 408.875 320 400 320H368C359.125 320 352 312.875 352 304V272C352 263.125 359.125 256 368 256H400C408.875 256 416 263.125 416 272V304Z" />
        </Icon>
    </>
}