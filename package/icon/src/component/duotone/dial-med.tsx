
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dial-med` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dial-med?s=duotone dial-med}
 * @preview ![dial-med](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTg0LjM1MiA0NDYuMzk1QzcxLjg1NSA0NTguODkxIDcxLjg1NSA0NzkuMTUyIDg0LjM1MiA0OTEuNjVDOTYuODQ4IDUwNC4xNDYgMTE3LjEwOSA1MDQuMTQ2IDEyOS42MDcgNDkxLjY1QzE0Mi4xMDQgNDc5LjE1MiAxNDIuMTA0IDQ1OC44OTEgMTI5LjYwNyA0NDYuMzk1QzExNy4xMDkgNDMzLjg5OCA5Ni44NDggNDMzLjg5OCA4NC4zNTIgNDQ2LjM5NVpNODQuMzUyIDg0LjM1NUM3MS44NTUgOTYuODUyIDcxLjg1NSAxMTcuMTEzIDg0LjM1MiAxMjkuNjA5Qzk2Ljg0OCAxNDIuMTA3IDExNy4xMDkgMTQyLjEwNyAxMjkuNjA3IDEyOS42MDlDMTQyLjEwNCAxMTcuMTEzIDE0Mi4xMDQgOTYuODUyIDEyOS42MDcgODQuMzU1QzExNy4xMDkgNzEuODU3IDk2Ljg0OCA3MS44NTcgODQuMzUyIDg0LjM1NVpNMzIgMjU2LjAwMkMxNC4zMjYgMjU2LjAwMiAwIDI3MC4zMjggMCAyODguMDAyQzAgMzA1LjY3NCAxNC4zMjYgMzIwLjAwMiAzMiAzMjAuMDAyUzY0IDMwNS42NzQgNjQgMjg4LjAwMkM2NCAyNzAuMzI4IDQ5LjY3NCAyNTYuMDAyIDMyIDI1Ni4wMDJaTTQ0Ni4zOTEgODQuMzU1QzQzMy44OTUgOTYuODUyIDQzMy44OTUgMTE3LjExMyA0NDYuMzkxIDEyOS42MDlDNDU4Ljg4OSAxNDIuMTA3IDQ3OS4xNSAxNDIuMTA3IDQ5MS42NDYgMTI5LjYwOUM1MDQuMTQzIDExNy4xMTMgNTA0LjE0MyA5Ni44NTIgNDkxLjY0NiA4NC4zNTVDNDc5LjE1IDcxLjg1NyA0NTguODg5IDcxLjg1NyA0NDYuMzkxIDg0LjM1NVpNMjg4IDAuMDAyQzI3MC4zMjYgMC4wMDIgMjU2IDE0LjMyOCAyNTYgMzIuMDAyQzI1NiA0OS42NzQgMjcwLjMyNiA2NC4wMDIgMjg4IDY0LjAwMkMzMDUuNjcyIDY0LjAwMiAzMjAgNDkuNjc0IDMyMCAzMi4wMDJDMzIwIDE0LjMyOCAzMDUuNjcyIDAuMDAyIDI4OCAwLjAwMlpNNTQ0IDI1Ni4wMDJDNTI2LjMyNiAyNTYuMDAyIDUxMiAyNzAuMzMgNTEyIDI4OC4wMDJDNTEyIDMwNS42NzYgNTI2LjMyNiAzMjAuMDAyIDU0NCAzMjAuMDAyUzU3NiAzMDUuNjc2IDU3NiAyODguMDAyQzU3NiAyNzAuMzMgNTYxLjY3NCAyNTYuMDAyIDU0NCAyNTYuMDAyWk00NDYuMzkxIDQ0Ni4zOTVDNDMzLjg5NSA0NTguODkxIDQzMy44OTUgNDc5LjE1MiA0NDYuMzkxIDQ5MS42NUM0NTguODg5IDUwNC4xNDYgNDc5LjE1IDUwNC4xNDYgNDkxLjY0NiA0OTEuNjVDNTA0LjE0MyA0NzkuMTUyIDUwNC4xNDMgNDU4Ljg5MSA0OTEuNjQ2IDQ0Ni4zOTVTNDU4Ljg4OSA0MzMuODk4IDQ0Ni4zOTEgNDQ2LjM5NVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDQ4LjAwMiAyODhDNDQ4LjAwMiAzNzYuMzY1IDM3Ni4zNjcgNDQ4IDI4OC4wMDIgNDQ4QzE5OS42MzUgNDQ4IDEyOCAzNzYuMzY1IDEyOCAyODhDMTI4IDIwNS4xMTUgMTkxLjI2IDEzNy43NSAyNzIuMDAyIDEyOS42MTNWMjg4QzI3Mi4wMDIgMjk2Ljg0NCAyNzkuMTU4IDMwNCAyODguMDAyIDMwNFMzMDQuMDAyIDI5Ni44NDQgMzA0LjAwMiAyODhWMTI5LjYxM0MzODQuNzQyIDEzNy43NSA0NDguMDAyIDIwNS4xMTUgNDQ4LjAwMiAyODhaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const DialMed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M84.352 446.395C71.855 458.891 71.855 479.152 84.352 491.65C96.848 504.146 117.109 504.146 129.607 491.65C142.104 479.152 142.104 458.891 129.607 446.395C117.109 433.898 96.848 433.898 84.352 446.395ZM84.352 84.355C71.855 96.852 71.855 117.113 84.352 129.609C96.848 142.107 117.109 142.107 129.607 129.609C142.104 117.113 142.104 96.852 129.607 84.355C117.109 71.857 96.848 71.857 84.352 84.355ZM32 256.002C14.326 256.002 0 270.328 0 288.002C0 305.674 14.326 320.002 32 320.002S64 305.674 64 288.002C64 270.328 49.674 256.002 32 256.002ZM446.391 84.355C433.895 96.852 433.895 117.113 446.391 129.609C458.889 142.107 479.15 142.107 491.646 129.609C504.143 117.113 504.143 96.852 491.646 84.355C479.15 71.857 458.889 71.857 446.391 84.355ZM288 0.002C270.326 0.002 256 14.328 256 32.002C256 49.674 270.326 64.002 288 64.002C305.672 64.002 320 49.674 320 32.002C320 14.328 305.672 0.002 288 0.002ZM544 256.002C526.326 256.002 512 270.33 512 288.002C512 305.676 526.326 320.002 544 320.002S576 305.676 576 288.002C576 270.33 561.674 256.002 544 256.002ZM446.391 446.395C433.895 458.891 433.895 479.152 446.391 491.65C458.889 504.146 479.15 504.146 491.646 491.65C504.143 479.152 504.143 458.891 491.646 446.395S458.889 433.898 446.391 446.395Z" />
            <path d="M448.002 288C448.002 376.365 376.367 448 288.002 448C199.635 448 128 376.365 128 288C128 205.115 191.26 137.75 272.002 129.613V288C272.002 296.844 279.158 304 288.002 304S304.002 296.844 304.002 288V129.613C384.742 137.75 448.002 205.115 448.002 288Z" />
    </Icon>
);

export default DialMed;