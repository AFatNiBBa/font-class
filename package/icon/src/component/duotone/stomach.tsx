
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `stomach` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/stomach?s=duotone stomach}
 * @preview ![stomach](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI3My4xMzEgMTYwSDI1NkMyMjAuNjU0IDE2MCAxOTIgMTMxLjM0NiAxOTIgOTZWMTZDMTkyIDcuMTY0IDE4NC44MzYgMCAxNzYgMEgxNDRDMTM1LjE2NCAwIDEyOCA3LjE2NCAxMjggMTZWOTZDMTI4IDE2Ni42OTMgMTg1LjMwNyAyMjQgMjU2IDIyNEMyNTUuOTY3IDIwMS41MjkgMjYxLjg3NyAxNzkuNDQ5IDI3My4xMzEgMTYwWk0zODQgMzIwQzM2Ni43MyAzMDIuNzMgMzQxLjM4MSAyOTcuOTM5IDMxOC43ODkgMzA1LjkzOUMzMTEuNjYgMzU4LjE4OSAyNzQuMTMxIDM5Mi4zNCAyNDEuNiA0MDYuMDJDMjM0LjkxOCA0MDguNzY0IDIzMS43MjMgNDE2LjQwNCAyMzQuNDY3IDQyMy4wODhDMjM1LjU3NiA0MjUuNzkxIDIzNy41NTkgNDI4LjA0NSAyNDAuMSA0MjkuNDlDMjQ5LjE5MSA0MzQuNzIzIDI1OC44MjQgNDM4Ljk1MSAyNjguODMgNDQyLjFDMzEyLjE5OSA0NTUuNjg5IDM2Ny4wOSA0NDYuNjg5IDQwNi41MjkgNDA3LjY4OUM0MjYuMzU5IDM4Ny45NzcgNDM5LjgzIDM2Mi43NzcgNDQ1LjIxMSAzMzUuMzRDNDIzLjY3IDM0MS4zNjkgNDAwLjI1IDMzNi4yNSAzODQgMzIwWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zODQgOTZDMzY2LjY3IDk2IDMwNy44NSAxMDAgMjczLjEzMSAxNjBDMjY0LjAzOSAxNzUuNzMyIDI1OC40MTIgMTkzLjIyNyAyNTYuNjMxIDIxMS4zMTFDMjU2LjA3IDIxNyAyNTYgMjIyLjEgMjU2IDIyNFYyODhDMjU2IDMyMy4zNDYgMjI3LjM0NiAzNTIgMTkyIDM1MkgxMjhDNTcuMzA3IDM1MiAwIDQwOS4zMDcgMCA0ODBWNDk2QzAgNTA0LjgzNiA3LjE2NCA1MTIgMTYgNTEySDQ4QzU2LjgzNiA1MTIgNjQgNTA0LjgzNiA2NCA0OTZWNDgwQzY0IDQ0Mi4zNjkgOTggNDI4Ljc4OSAxMTcuOTIgNDI4Ljc4OUMxMzUuMDI5IDQyOC43ODkgMTQ3LjUxIDQzNS41IDE1OC45OSA0NDYuOTlDMjIyLjA2MSA1MTAuMDYxIDI4OC44MyA1MTEuOTkgMzA1LjY5OSA1MTEuOTlIMzA4LjM1OUM0MjAuODQgNTEyIDUxMiA0MjAuODMgNTEyIDMwOC4zNVYyMjRDNTEyIDE1My4zMDcgNDU0LjY5MyA5NiAzODQgOTZaTTQ0OCAzMDdDNDQ4IDM0NC43MyA0MzMuMzUgMzgxLjE5OSA0MDYuNTIgNDA3LjcyMUMzNjcuMDggNDQ2LjcyMSAzMTIuMTg5IDQ1NS43MjEgMjY4LjgyIDQ0Mi4xMzFDMjU4LjgxNCA0MzguOTggMjQ5LjE4MiA0MzQuNzUyIDI0MC4wOSA0MjkuNTJDMjMzLjc5NyA0MjUuOTc1IDIzMS41NjggNDE3Ljk5OCAyMzUuMTEzIDQxMS43MDVDMjM2LjU2NiA0MDkuMTIzIDIzOC44NTQgNDA3LjExMSAyNDEuNiA0MDZDMjc3LjcxMSAzOTAuODExIDMyMCAzNTAuNCAzMjAgMjg4VjIyNEMzMjAuODMgMjAyLjE0MSAzNDAuMTUgMTYwIDM4NCAxNjBDNDE5LjMzIDE2MC4wMzkgNDQ3Ljk2MSAxODguNjcgNDQ4IDIyNFYzMDdaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Stomach(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M273.131 160H256C220.654 160 192 131.346 192 96V16C192 7.164 184.836 0 176 0H144C135.164 0 128 7.164 128 16V96C128 166.693 185.307 224 256 224C255.967 201.529 261.877 179.449 273.131 160ZM384 320C366.73 302.73 341.381 297.939 318.789 305.939C311.66 358.189 274.131 392.34 241.6 406.02C234.918 408.764 231.723 416.404 234.467 423.088C235.576 425.791 237.559 428.045 240.1 429.49C249.191 434.723 258.824 438.951 268.83 442.1C312.199 455.689 367.09 446.689 406.529 407.689C426.359 387.977 439.83 362.777 445.211 335.34C423.67 341.369 400.25 336.25 384 320Z" />
            <path d="M384 96C366.67 96 307.85 100 273.131 160C264.039 175.732 258.412 193.227 256.631 211.311C256.07 217 256 222.1 256 224V288C256 323.346 227.346 352 192 352H128C57.307 352 0 409.307 0 480V496C0 504.836 7.164 512 16 512H48C56.836 512 64 504.836 64 496V480C64 442.369 98 428.789 117.92 428.789C135.029 428.789 147.51 435.5 158.99 446.99C222.061 510.061 288.83 511.99 305.699 511.99H308.359C420.84 512 512 420.83 512 308.35V224C512 153.307 454.693 96 384 96ZM448 307C448 344.73 433.35 381.199 406.52 407.721C367.08 446.721 312.189 455.721 268.82 442.131C258.814 438.98 249.182 434.752 240.09 429.52C233.797 425.975 231.568 417.998 235.113 411.705C236.566 409.123 238.854 407.111 241.6 406C277.711 390.811 320 350.4 320 288V224C320.83 202.141 340.15 160 384 160C419.33 160.039 447.961 188.67 448 224V307Z" />
        </Icon>
    </>
}