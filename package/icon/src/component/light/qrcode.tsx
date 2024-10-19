
import { Icon } from "../../index";

/**
 * A component that renders the `qrcode` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/qrcode?s=light qrcode}
 * @preview ![qrcode](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMDggMzYwSDg0Qzc3LjM3MyAzNjAgNzIgMzY1LjM3MyA3MiAzNzJWMzk2QzcyIDQwMi42MjcgNzcuMzczIDQwOCA4NCA0MDhIMTA4QzExNC42MjcgNDA4IDEyMCA0MDIuNjI3IDEyMCAzOTZWMzcyQzEyMCAzNjUuMzczIDExNC42MjcgMzYwIDEwOCAzNjBaTTEwOCAxMDRIODRDNzcuMzczIDEwNCA3MiAxMDkuMzczIDcyIDExNlYxNDBDNzIgMTQ2LjYyNyA3Ny4zNzMgMTUyIDg0IDE1MkgxMDhDMTE0LjYyNyAxNTIgMTIwIDE0Ni42MjcgMTIwIDE0MFYxMTZDMTIwIDEwOS4zNzMgMTE0LjYyNyAxMDQgMTA4IDEwNFpNMTQ0IDI4OEg0OEMyMS40OSAyODggMCAzMDkuNDkgMCAzMzZWNDMyQzAgNDU4LjUxIDIxLjQ5IDQ4MCA0OCA0ODBIMTQ0QzE3MC41MSA0ODAgMTkyIDQ1OC41MSAxOTIgNDMyVjMzNkMxOTIgMzA5LjQ5IDE3MC41MSAyODggMTQ0IDI4OFpNMTYwIDQzMkMxNjAgNDQwLjgzNiAxNTIuODM2IDQ0OCAxNDQgNDQ4SDQ4QzM5LjE2NCA0NDggMzIgNDQwLjgzNiAzMiA0MzJWMzM2QzMyIDMyNy4xNjIgMzkuMTY0IDMyMCA0OCAzMjBIMTQ0QzE1Mi44MzYgMzIwIDE2MCAzMjcuMTYyIDE2MCAzMzZWNDMyWk0xNDQgMzJINDhDMjEuNDkgMzIgMCA1My40OSAwIDgwVjE3NkMwIDIwMi41MSAyMS40OSAyMjQgNDggMjI0SDE0NEMxNzAuNTEgMjI0IDE5MiAyMDIuNTEgMTkyIDE3NlY4MEMxOTIgNTMuNDkgMTcwLjUxIDMyIDE0NCAzMlpNMTYwIDE3NkMxNjAgMTg0LjgzNiAxNTIuODM2IDE5MiAxNDQgMTkySDQ4QzM5LjE2NCAxOTIgMzIgMTg0LjgzNiAzMiAxNzZWODBDMzIgNzEuMTYyIDM5LjE2NCA2NCA0OCA2NEgxNDRDMTUyLjgzNiA2NCAxNjAgNzEuMTYyIDE2MCA4MFYxNzZaTTM2NCAxMDRIMzQwQzMzMy4zNzMgMTA0IDMyOCAxMDkuMzczIDMyOCAxMTZWMTQwQzMyOCAxNDYuNjI3IDMzMy4zNzMgMTUyIDM0MCAxNTJIMzY0QzM3MC42MjcgMTUyIDM3NiAxNDYuNjI3IDM3NiAxNDBWMTE2QzM3NiAxMDkuMzczIDM3MC42MjcgMTA0IDM2NCAxMDRaTTQwMCAzMkgzMDRDMjc3LjQ5IDMyIDI1NiA1My40OSAyNTYgODBWMTc2QzI1NiAyMDIuNTEgMjc3LjQ5IDIyNCAzMDQgMjI0SDQwMEM0MjYuNTEgMjI0IDQ0OCAyMDIuNTEgNDQ4IDE3NlY4MEM0NDggNTMuNDkgNDI2LjUxIDMyIDQwMCAzMlpNNDE2IDE3NkM0MTYgMTg0LjgzNiA0MDguODM2IDE5MiA0MDAgMTkySDMwNEMyOTUuMTY0IDE5MiAyODggMTg0LjgzNiAyODggMTc2VjgwQzI4OCA3MS4xNjIgMjk1LjE2NCA2NCAzMDQgNjRINDAwQzQwOC44MzYgNjQgNDE2IDcxLjE2MiA0MTYgODBWMTc2Wk00MzIgMjg4QzQyMy4xNTYgMjg4IDQxNiAyOTUuMTU2IDQxNiAzMDRWMzY4SDM1MlYzMDRDMzUyIDI5NS4xNTYgMzQ0Ljg0NCAyODggMzM2IDI4OEgyNzJDMjYzLjE1NiAyODggMjU2IDI5NS4xNTYgMjU2IDMwNFY0NjRDMjU2IDQ3Mi44NDQgMjYzLjE1NiA0ODAgMjcyIDQ4MFMyODggNDcyLjg0NCAyODggNDY0VjMyMEgzMjBWMzg0QzMyMCAzOTIuODQ0IDMyNy4xNTYgNDAwIDMzNiA0MDBINDMyQzQ0MC44NDQgNDAwIDQ0OCAzOTIuODQ0IDQ0OCAzODRWMzA0QzQ0OCAyOTUuMTU2IDQ0MC44NDQgMjg4IDQzMiAyODhaTTQzNiA0MzJINDEyQzQwNS4zNzMgNDMyIDQwMCA0MzcuMzczIDQwMCA0NDRWNDY4QzQwMCA0NzQuNjI3IDQwNS4zNzMgNDgwIDQxMiA0ODBINDM2QzQ0Mi42MjcgNDgwIDQ0OCA0NzQuNjI3IDQ0OCA0NjhWNDQ0QzQ0OCA0MzcuMzczIDQ0Mi42MjcgNDMyIDQzNiA0MzJaTTM3MiA0MzJIMzQ4QzM0MS4zNzMgNDMyIDMzNiA0MzcuMzczIDMzNiA0NDRWNDY4QzMzNiA0NzQuNjI3IDM0MS4zNzMgNDgwIDM0OCA0ODBIMzcyQzM3OC42MjcgNDgwIDM4NCA0NzQuNjI3IDM4NCA0NjhWNDQ0QzM4NCA0MzcuMzczIDM3OC42MjcgNDMyIDM3MiA0MzJaIi8+PC9zdmc+|width=32|height=32)
 */
const Qrcode: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M108 360H84C77.373 360 72 365.373 72 372V396C72 402.627 77.373 408 84 408H108C114.627 408 120 402.627 120 396V372C120 365.373 114.627 360 108 360ZM108 104H84C77.373 104 72 109.373 72 116V140C72 146.627 77.373 152 84 152H108C114.627 152 120 146.627 120 140V116C120 109.373 114.627 104 108 104ZM144 288H48C21.49 288 0 309.49 0 336V432C0 458.51 21.49 480 48 480H144C170.51 480 192 458.51 192 432V336C192 309.49 170.51 288 144 288ZM160 432C160 440.836 152.836 448 144 448H48C39.164 448 32 440.836 32 432V336C32 327.162 39.164 320 48 320H144C152.836 320 160 327.162 160 336V432ZM144 32H48C21.49 32 0 53.49 0 80V176C0 202.51 21.49 224 48 224H144C170.51 224 192 202.51 192 176V80C192 53.49 170.51 32 144 32ZM160 176C160 184.836 152.836 192 144 192H48C39.164 192 32 184.836 32 176V80C32 71.162 39.164 64 48 64H144C152.836 64 160 71.162 160 80V176ZM364 104H340C333.373 104 328 109.373 328 116V140C328 146.627 333.373 152 340 152H364C370.627 152 376 146.627 376 140V116C376 109.373 370.627 104 364 104ZM400 32H304C277.49 32 256 53.49 256 80V176C256 202.51 277.49 224 304 224H400C426.51 224 448 202.51 448 176V80C448 53.49 426.51 32 400 32ZM416 176C416 184.836 408.836 192 400 192H304C295.164 192 288 184.836 288 176V80C288 71.162 295.164 64 304 64H400C408.836 64 416 71.162 416 80V176ZM432 288C423.156 288 416 295.156 416 304V368H352V304C352 295.156 344.844 288 336 288H272C263.156 288 256 295.156 256 304V464C256 472.844 263.156 480 272 480S288 472.844 288 464V320H320V384C320 392.844 327.156 400 336 400H432C440.844 400 448 392.844 448 384V304C448 295.156 440.844 288 432 288ZM436 432H412C405.373 432 400 437.373 400 444V468C400 474.627 405.373 480 412 480H436C442.627 480 448 474.627 448 468V444C448 437.373 442.627 432 436 432ZM372 432H348C341.373 432 336 437.373 336 444V468C336 474.627 341.373 480 348 480H372C378.627 480 384 474.627 384 468V444C384 437.373 378.627 432 372 432Z" />
    </Icon>
);

export default Qrcode;