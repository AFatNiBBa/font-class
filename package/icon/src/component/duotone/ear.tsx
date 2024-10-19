
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ear` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ear?s=duotone ear}
 * @preview ![ear](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE5MiAwQzg2IDAgMCA4NiAwIDE5MlYzNjhDMCA0NDcuNSA2NC41IDUxMiAxNDQgNTEyUzI4OCA0NDcuNSAyODggMzY4VjM1OC4xMjVDMzQ1LjM3NSAzMjQuODc1IDM4NCAyNjMgMzg0IDE5MkMzODQgODYgMjk4IDAgMTkyIDBaTTI4MCAyMDhDMjY2Ljc2NiAyMDggMjU2IDE5Ny4yMzQgMjU2IDE4NEMyNTYgMTUzLjEyMSAyMzAuODc5IDEyOCAyMDAgMTI4SDE4NEMxNTMuMTIxIDEyOCAxMjggMTUzLjEyMSAxMjggMTg0VjIxNS43MTdMMTQxLjkyIDIyMS4yOTNDMTYwLjY0OCAyMjguNzcgMTczLjU4NiAyNDUuMTU0IDE3Ni41MjMgMjY1LjExMUMxNzkuNDc5IDI4NS4wMzEgMTcxLjg1MiAzMDQuNDQxIDE1Ni4xMjEgMzE3LjAzM0wxMTguOTczIDM0Ni43MzhDMTE0LjYzNyAzNTAuMTgyIDEwOS41MTYgMzUyIDEwNC4xNjYgMzUyQzk2Ljg3OSAzNTIgODkuODE0IDM0OC42MzMgODUuMjQ4IDM0Mi45NjVDNzcuMDA0IDMzMi42NDEgNzguNjg0IDMxNy41MSA4OS4wMDQgMzA5LjIyNUwxMjYuMTI3IDI3OS41MzlDMTI5LjM2NyAyNzYuOTQ3IDEyOS4yNDYgMjczLjQ4OCAxMjkuMDQzIDI3Mi4xMjFDMTI4Ljg0IDI3MC43NDggMTI3Ljk1MSAyNjcuMzg1IDEyNC4wOTQgMjY1LjgzOEw5NS4xMTcgMjU0LjI1NkM4NS45MzQgMjUwLjYxOSA4MCAyNDEuODczIDgwIDIzMS45NzNWMTg0QzgwIDEyNi42NTQgMTI2LjY1NCA4MCAxODQgODBIMjAwQzI1Ny4zNDYgODAgMzA0IDEyNi42NTQgMzA0IDE4NEMzMDQgMTk3LjIzNCAyOTMuMjM0IDIwOCAyODAgMjA4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yMDAgODBIMTg0QzEyNi42NTQgODAgODAgMTI2LjY1NCA4MCAxODRWMjMxLjk3M0M4MCAyNDEuODczIDg1LjkzNCAyNTAuNjE5IDk1LjExNyAyNTQuMjU2TDEyNC4wOTQgMjY1LjgzOEMxMjcuOTUxIDI2Ny4zODUgMTI4Ljg0IDI3MC43NDggMTI5LjA0MyAyNzIuMTIxQzEyOS4yNDYgMjczLjQ4OCAxMjkuMzY3IDI3Ni45NDcgMTI2LjEyNyAyNzkuNTM5TDg5LjAwNCAzMDkuMjI1Qzc4LjY4NCAzMTcuNTEgNzcuMDA0IDMzMi42NDEgODUuMjQ4IDM0Mi45NjVDODkuODE0IDM0OC42MzMgOTYuODc5IDM1MiAxMDQuMTY2IDM1MkMxMDkuNTE2IDM1MiAxMTQuNjM3IDM1MC4xODIgMTE4Ljk3MyAzNDYuNzM4TDE1Ni4xMjEgMzE3LjAzM0MxNzEuODUyIDMwNC40NDEgMTc5LjQ3OSAyODUuMDMxIDE3Ni41MjMgMjY1LjExMUMxNzMuNTg2IDI0NS4xNTQgMTYwLjY0OCAyMjguNzcgMTQxLjkyIDIyMS4yOTNMMTI4IDIxNS43MTdWMTg0QzEyOCAxNTMuMTIxIDE1My4xMjEgMTI4IDE4NCAxMjhIMjAwQzIzMC44NzkgMTI4IDI1NiAxNTMuMTIxIDI1NiAxODRDMjU2IDE5Ny4yMzQgMjY2Ljc2NiAyMDggMjgwIDIwOFMzMDQgMTk3LjIzNCAzMDQgMTg0QzMwNCAxMjYuNjU0IDI1Ny4zNDYgODAgMjAwIDgwWk0xMDQuMTY2IDM0NEMxMDMuNzU2IDM0NCAxMDMuNDEyIDM0My43NTggMTAzLjAwOCAzNDMuNzI3QzEwNC4xNjIgMzQzLjgxNiAxMDUuMzI4IDM0My43ODkgMTA2LjUxIDM0My42MDdDMTA1LjcyNyAzNDMuNzI5IDEwNC45MzkgMzQ0IDEwNC4xNjYgMzQ0WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const Ear: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M192 0C86 0 0 86 0 192V368C0 447.5 64.5 512 144 512S288 447.5 288 368V358.125C345.375 324.875 384 263 384 192C384 86 298 0 192 0ZM280 208C266.766 208 256 197.234 256 184C256 153.121 230.879 128 200 128H184C153.121 128 128 153.121 128 184V215.717L141.92 221.293C160.648 228.77 173.586 245.154 176.523 265.111C179.479 285.031 171.852 304.441 156.121 317.033L118.973 346.738C114.637 350.182 109.516 352 104.166 352C96.879 352 89.814 348.633 85.248 342.965C77.004 332.641 78.684 317.51 89.004 309.225L126.127 279.539C129.367 276.947 129.246 273.488 129.043 272.121C128.84 270.748 127.951 267.385 124.094 265.838L95.117 254.256C85.934 250.619 80 241.873 80 231.973V184C80 126.654 126.654 80 184 80H200C257.346 80 304 126.654 304 184C304 197.234 293.234 208 280 208Z" />
            <path d="M200 80H184C126.654 80 80 126.654 80 184V231.973C80 241.873 85.934 250.619 95.117 254.256L124.094 265.838C127.951 267.385 128.84 270.748 129.043 272.121C129.246 273.488 129.367 276.947 126.127 279.539L89.004 309.225C78.684 317.51 77.004 332.641 85.248 342.965C89.814 348.633 96.879 352 104.166 352C109.516 352 114.637 350.182 118.973 346.738L156.121 317.033C171.852 304.441 179.479 285.031 176.523 265.111C173.586 245.154 160.648 228.77 141.92 221.293L128 215.717V184C128 153.121 153.121 128 184 128H200C230.879 128 256 153.121 256 184C256 197.234 266.766 208 280 208S304 197.234 304 184C304 126.654 257.346 80 200 80ZM104.166 344C103.756 344 103.412 343.758 103.008 343.727C104.162 343.816 105.328 343.789 106.51 343.607C105.727 343.729 104.939 344 104.166 344Z" />
    </Icon>
);

export default Ear;