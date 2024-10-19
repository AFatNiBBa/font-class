
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `stethoscope` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/stethoscope?s=solid stethoscope}
 * @preview ![stethoscope](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAgMTEyLjAwNEM0MzUuODE2IDExMi4wMDQgNDAwIDE0Ny44MjIgNDAwIDE5Mi4wMDhDNDAwIDIyNC44NDggNDE5LjgyNCAyNTIuOTk4IDQ0OC4xMjUgMjY1LjMyNFYzNDMuOTk0QzQ0OC4xMjUgNDAxLjI0NiAzOTcuODc1IDQ0Ny45OTggMzM2LjEyNSA0NDcuOTk4QzI3Ni4xMjUgNDQ3Ljk5OCAyMjYuODc1IDQwMy44NzEgMjI0LjI1IDM0OC43NDRDMjk3IDMzMy43NDQgMzUyIDI2OS4yNCAzNTIgMTkxLjk4OFYzNi42MDdDMzUyIDI1LjIzMiAzNDMuODc1IDE1LjIzMiAzMzIuNzUgMTMuMTA3TDI2OS43NSAwLjQ4QzI1Ni43NSAtMi4xNDUgMjQ0LjI1IDYuMjMyIDI0MS42MjUgMTkuMjMyTDIzOC4zNzUgMzQuOTgyQzIzNS43NSA0Ny45ODIgMjQ0LjI1IDYwLjYwOSAyNTcuMjUgNjMuMjM0TDI4Ny44NzUgNjkuMjM0VjE5MC43MzhDMjg3Ljg3NSAyNDMuNjE1IDI0NS43NSAyODcuMzY3IDE5Mi43NSAyODcuODY3QzEzOS4zNzUgMjg4LjM2NyA5NS44NzUgMjQ1LjI0IDk1Ljg3NSAxOTEuODYzVjY5LjM1OUwxMjYuNjI1IDYzLjIzNEMxMzkuNjI1IDYwLjczNCAxNDggNDguMTA3IDE0NS4zNzUgMzUuMTA3TDE0Mi4yNSAxOS4zNTdDMTM5Ljc1IDYuMzU3IDEyNy4xMjUgLTIuMDIgMTE0LjEyNSAwLjYwNUw1MS4yNSAxMi45ODJDNDAuMTI1IDE1LjIzMiAzMiAyNS4xMDcgMzIgMzYuNjA3VjE5MS45ODhDMzIgMjY5LjI0IDg3LjEyNSAzMzMuOTk0IDE2MC4xMjUgMzQ4Ljc0NEMxNjIuNzUgNDM5LjI0OCAyNDAuNjI1IDUxMiAzMzYgNTEyQzQzMyA1MTIgNTEyIDQzNi42MjMgNTEyIDM0My45OTRWMjY1LjI1NkM1NDAuMjMyIDI1Mi45IDU2MCAyMjQuNzk3IDU2MCAxOTIuMDA4QzU2MCAxNDcuODIyIDUyNC4xODQgMTEyLjAwNCA0ODAgMTEyLjAwNFpNNDgwIDIxNkM0NjYuNzQ2IDIxNiA0NTYgMjA1LjI1NCA0NTYgMTkyUzQ2Ni43NDYgMTY4IDQ4MCAxNjhTNTA0IDE3OC43NDYgNTA0IDE5MlM0OTMuMjU0IDIxNiA0ODAgMjE2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Stethoscope(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M480 112.004C435.816 112.004 400 147.822 400 192.008C400 224.848 419.824 252.998 448.125 265.324V343.994C448.125 401.246 397.875 447.998 336.125 447.998C276.125 447.998 226.875 403.871 224.25 348.744C297 333.744 352 269.24 352 191.988V36.607C352 25.232 343.875 15.232 332.75 13.107L269.75 0.48C256.75 -2.145 244.25 6.232 241.625 19.232L238.375 34.982C235.75 47.982 244.25 60.609 257.25 63.234L287.875 69.234V190.738C287.875 243.615 245.75 287.367 192.75 287.867C139.375 288.367 95.875 245.24 95.875 191.863V69.359L126.625 63.234C139.625 60.734 148 48.107 145.375 35.107L142.25 19.357C139.75 6.357 127.125 -2.02 114.125 0.605L51.25 12.982C40.125 15.232 32 25.107 32 36.607V191.988C32 269.24 87.125 333.994 160.125 348.744C162.75 439.248 240.625 512 336 512C433 512 512 436.623 512 343.994V265.256C540.232 252.9 560 224.797 560 192.008C560 147.822 524.184 112.004 480 112.004ZM480 216C466.746 216 456 205.254 456 192S466.746 168 480 168S504 178.746 504 192S493.254 216 480 216Z" />
        </Icon>
    </>
}