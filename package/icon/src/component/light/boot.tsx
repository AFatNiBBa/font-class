
import { Icon } from "../../index";

/**
 * A component that renders the `boot` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/boot?s=light boot}
 * @preview ![boot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTUgMjQ3Ljc1TDM1MiAyMzJWMTkyQzM1MiAxNzQuMzI2IDMzNy42NzQgMTYwIDMyMCAxNjBIMjQwQzIzMS4xOTkgMTYwIDIyNCAxNjcuMTk5IDIyNCAxNzZTMjMxLjE5OSAxOTIgMjQwIDE5MkgzMjBWMjI0SDI0MEMyMzEuMTk5IDIyNCAyMjQgMjMxLjE5OSAyMjQgMjQwUzIzMS4xOTkgMjU2IDI0MCAyNTZIMzIwTDQwNy4yNSAyNzguNzVDNDUwLjEyNSAyODkuNSA0ODAgMzI3Ljc1IDQ4MCAzNzEuODc1VjM4NEgzMlYxMjhIMzUyQzM2OS42NzQgMTI4IDM4NCAxMTMuNjc0IDM4NCA5NlYzMkMzODQgMTQuMzI2IDM2OS42NzQgMCAzNTIgMEgzMkMxNC4zMjYgMCAwIDE0LjMyNiAwIDMyVjQ2Ni43NUMwIDQ3NS4yNSAzLjM3NSA0ODMuMjUgOS4zNzUgNDg5LjI1TDIyLjc1IDUwMi42MjVDMjguNzUgNTA4LjYyNSAzNi43NSA1MTIgNDUuMjUgNTEySDgyLjc0MkM5MS4yMyA1MTIgOTkuMzczIDUwOC42MjcgMTA1LjM3NSA1MDIuNjI1TDEyOCA0ODBMMTUwLjYyNSA1MDIuNjI1QzE1Ni42MjcgNTA4LjYyNyAxNjQuNzcgNTEyIDE3My4yNTggNTEySDIxMC43NUMyMTkuMTIzIDUxMiAyMjcuMTU2IDUwOC42ODYgMjMzLjA5NCA1MDIuNzgxTDI1NiA0ODBMMjc4LjYyNSA1MDIuNjI1QzI4NC42MjcgNTA4LjYyNyAyOTIuNzcgNTEyIDMwMS4yNTggNTEySDMzOC41MjdDMzQ3LjA0MyA1MTIgMzU1LjIxMyA1MDguNjI5IDM2MS4yNSA1MDIuNjI1TDM4NCA0ODBMNDA2LjYyNSA1MDIuNjI1QzQxMi42MjcgNTA4LjYyNyA0MjAuNzcgNTEyIDQyOS4yNTggNTEySDQ2Ni43NUM0NzUuMjUgNTEyIDQ4My4yNSA1MDguNjI1IDQ4OS4yNSA1MDIuNjI1TDUwMi42MjUgNDg5LjI1QzUwOC42MjUgNDgzLjI1IDUxMiA0NzUuMjUgNTEyIDQ2Ni43NVYzNzEuOTg0QzUxMiAzMTMuMjIzIDQ3Mi4wMDggMjYyLjAwMiA0MTUgMjQ3Ljc1Wk0zMiAzMkgzNTJWOTZIMzJWMzJaTTQ4MCA0NjYuNzVMNDY2Ljc1IDQ4MEg0MjkuMjVMNDA2LjYyNSA0NTcuMzc1QzQwMC42MjUgNDUxLjM3NSAzOTIuNSA0NDggMzg0IDQ0OFMzNjcuMzc1IDQ1MS4zNzUgMzYxLjM3NSA0NTcuMzc1TDMzOC43NSA0ODBIMzAxLjI1TDI3OC42MjUgNDU3LjM3NUMyNzIuNjI1IDQ1MS4zNzUgMjY0LjUgNDQ4IDI1NiA0NDhTMjM5LjM3NSA0NTEuMzc1IDIzMy4zNzUgNDU3LjM3NUwyMTAuNzUgNDgwSDE3My4yNUwxNTAuNjI1IDQ1Ny4zNzVDMTQ0LjYyNSA0NTEuMzc1IDEzNi41IDQ0OCAxMjggNDQ4UzExMS4zNzUgNDUxLjM3NSAxMDUuMzc1IDQ1Ny4zNzVMODIuNzUgNDgwSDQ1LjI1TDMyIDQ2Ni43NVY0MTZINDgwVjQ2Ni43NVoiLz48L3N2Zz4=|width=32|height=32)
 */
const Boot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M415 247.75L352 232V192C352 174.326 337.674 160 320 160H240C231.199 160 224 167.199 224 176S231.199 192 240 192H320V224H240C231.199 224 224 231.199 224 240S231.199 256 240 256H320L407.25 278.75C450.125 289.5 480 327.75 480 371.875V384H32V128H352C369.674 128 384 113.674 384 96V32C384 14.326 369.674 0 352 0H32C14.326 0 0 14.326 0 32V466.75C0 475.25 3.375 483.25 9.375 489.25L22.75 502.625C28.75 508.625 36.75 512 45.25 512H82.742C91.23 512 99.373 508.627 105.375 502.625L128 480L150.625 502.625C156.627 508.627 164.77 512 173.258 512H210.75C219.123 512 227.156 508.686 233.094 502.781L256 480L278.625 502.625C284.627 508.627 292.77 512 301.258 512H338.527C347.043 512 355.213 508.629 361.25 502.625L384 480L406.625 502.625C412.627 508.627 420.77 512 429.258 512H466.75C475.25 512 483.25 508.625 489.25 502.625L502.625 489.25C508.625 483.25 512 475.25 512 466.75V371.984C512 313.223 472.008 262.002 415 247.75ZM32 32H352V96H32V32ZM480 466.75L466.75 480H429.25L406.625 457.375C400.625 451.375 392.5 448 384 448S367.375 451.375 361.375 457.375L338.75 480H301.25L278.625 457.375C272.625 451.375 264.5 448 256 448S239.375 451.375 233.375 457.375L210.75 480H173.25L150.625 457.375C144.625 451.375 136.5 448 128 448S111.375 451.375 105.375 457.375L82.75 480H45.25L32 466.75V416H480V466.75Z" />
    </Icon>
);

export default Boot;