
import { Icon } from "../../index";

/**
 * A component that renders the `restroom` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/restroom?s=regular restroom}
 * @preview ![restroom](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjguMDA2IDk2QzE1NC41MDYgOTYgMTc2LjAwNCA3NC41IDE3Ni4wMDQgNDhTMTU0LjUwNiAwIDEyOC4wMDYgMEMxMDEuNTA4IDAgODAuMDA4IDIxLjUgODAuMDA4IDQ4UzEwMS41MDggOTYgMTI4LjAwNiA5NlpNNTExLjk5NSA5NkM1MzguNDk1IDk2IDU1OS45OTUgNzQuNSA1NTkuOTk1IDQ4UzUzOC40OTUgMCA1MTEuOTk1IDBDNDg1LjQ5NyAwIDQ2My45OTcgMjEuNSA0NjMuOTk3IDQ4UzQ4NS40OTcgOTYgNTExLjk5NSA5NlpNMjEwLjQ0MiAxNzIuNTc4QzE5OS4yODYgMTQ1LjUgMTczLjE2MyAxMjggMTQzLjg1IDEyOEgxMTIuMTYzQzgyLjg1MiAxMjggNTYuNzI3IDE0NS41IDQ1LjU3MSAxNzIuNTc4TDEuODIzIDI3OC44NTlDLTMuMjQgMjkxLjEyNSAyLjYwNCAzMDUuMTQxIDE0Ljg4NSAzMTAuMTg4QzE3Ljg2IDMxMS40MyAyMC45NTIgMzEyLjAyIDIzLjk5OSAzMTIuMDJDMzMuMzk5IDMxMi4wMiA0Mi4zNzQgMzA2LjQxNiA0Ni4xOTYgMjk3LjE0MUw2NC4wMDggMjUzLjg2OVY0ODhDNjQuMDA4IDUwMS4yNTQgNzQuNzUyIDUxMiA4OC4wMDggNTEyUzExMi4wMDYgNTAxLjI1NCAxMTIuMDA2IDQ4OFYzNTJIMTQ0LjAwNlY0ODhDMTQ0LjAwNiA1MDEuMjU0IDE1NC43NSA1MTIgMTY4LjAwNiA1MTJDMTgxLjI2IDUxMiAxOTIuMDA0IDUwMS4yNTQgMTkyLjAwNCA0ODhWMjUzLjg2OUwyMDkuODE3IDI5Ny4xNDFDMjEzLjYyOSAzMDYuNDA2IDIyMi41NjcgMzEyIDIzMi4wMDQgMzEyQzIzNS4wNjcgMzEyIDIzOC4xNjEgMzExLjQyMiAyNDEuMTI3IDMxMC4xODhDMjUzLjQwOSAzMDUuMTQxIDI1OS4yNTIgMjkxLjEyNSAyNTQuMTkgMjc4Ljg1OUwyMTAuNDQyIDE3Mi41NzhaTTExMi4wMDggMzA0VjE3NkgxNDQuMDA0VjI1My44NjlMMTQ0LjAwNiAzMDRIMTEyLjAwOFpNNjM4LjE3OCAyNzguODU5TDU5NC40MyAxNzIuNTc4QzU4My4yNzQgMTQ1LjUgNTU3LjE1MSAxMjggNTI3LjgzOCAxMjhINDk2LjE1M0M0NjYuODQgMTI4IDQ0MC43MTUgMTQ1LjUgNDI5LjU2MSAxNzIuNTc4TDM4NS44MTEgMjc4Ljg1OUMzODAuNzQ5IDI5MS4xMjUgMzg2LjU5MiAzMDUuMTQxIDM5OC44NzQgMzEwLjE4OEM0MDEuNzUgMzExLjM5MyA0MDQuNzE5IDMxMS45NTkgNDA3LjYzNyAzMTEuOTU5QzQxNS41OTQgMzExLjk1OSA0MjMuMjA0IDMwNy43NTQgNDI3LjcyNyAzMDAuODE0TDM5OS45OTkgMzg0SDQ0Ny45OTdWNDg4QzQ0Ny45OTcgNTAxLjI1NCA0NTguNzQxIDUxMiA0NzEuOTk3IDUxMlM0OTUuOTk3IDUwMS4yNTQgNDk1Ljk5NyA0ODhWMzg0SDUyNy45OTVWNDg4QzUyNy45OTUgNTAxLjI1NCA1MzguNzM5IDUxMiA1NTEuOTk1IDUxMkM1NjUuMjQ5IDUxMiA1NzUuOTkzIDUwMS4yNTQgNTc1Ljk5MyA0ODhWMzg0SDYyMy45OTNMNTk2LjU3MyAzMDEuNzQyQzYwMS4wOTYgMzA4LjEzNyA2MDguMjk3IDMxMiA2MTUuOTkzIDMxMkM2MTkuMDU1IDMxMiA2MjIuMTQ5IDMxMS40MjIgNjI1LjExOCAzMTAuMTg4QzYzNy4zOTcgMzA1LjE0MSA2NDMuMjQxIDI5MS4xMjUgNjM4LjE3OCAyNzguODU5Wk00NjYuNTk0IDMzNkw0NzMuMjY0IDMxNS45OTJMNTExLjk5NSAxOTkuNzk1TDU1MS4wMzYgMzE2LjkyTDU1Ny4zOTUgMzM2SDQ2Ni41OTRaTTMyMCAwQzMwNi44MDEgMCAyOTYuMDAyIDEwLjc5OSAyOTYuMDAyIDI0VjQ4OEMyOTYuMDAyIDUwMS4xOTkgMzA2LjgwMSA1MTIgMzIwIDUxMlMzNDQgNTAxLjE5OSAzNDQgNDg4VjI0QzM0NCAxMC43OTkgMzMzLjIgMCAzMjAgMFoiLz48L3N2Zz4=|width=32|height=32)
 */
const Restroom: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128.006 96C154.506 96 176.004 74.5 176.004 48S154.506 0 128.006 0C101.508 0 80.008 21.5 80.008 48S101.508 96 128.006 96ZM511.995 96C538.495 96 559.995 74.5 559.995 48S538.495 0 511.995 0C485.497 0 463.997 21.5 463.997 48S485.497 96 511.995 96ZM210.442 172.578C199.286 145.5 173.163 128 143.85 128H112.163C82.852 128 56.727 145.5 45.571 172.578L1.823 278.859C-3.24 291.125 2.604 305.141 14.885 310.188C17.86 311.43 20.952 312.02 23.999 312.02C33.399 312.02 42.374 306.416 46.196 297.141L64.008 253.869V488C64.008 501.254 74.752 512 88.008 512S112.006 501.254 112.006 488V352H144.006V488C144.006 501.254 154.75 512 168.006 512C181.26 512 192.004 501.254 192.004 488V253.869L209.817 297.141C213.629 306.406 222.567 312 232.004 312C235.067 312 238.161 311.422 241.127 310.188C253.409 305.141 259.252 291.125 254.19 278.859L210.442 172.578ZM112.008 304V176H144.004V253.869L144.006 304H112.008ZM638.178 278.859L594.43 172.578C583.274 145.5 557.151 128 527.838 128H496.153C466.84 128 440.715 145.5 429.561 172.578L385.811 278.859C380.749 291.125 386.592 305.141 398.874 310.188C401.75 311.393 404.719 311.959 407.637 311.959C415.594 311.959 423.204 307.754 427.727 300.814L399.999 384H447.997V488C447.997 501.254 458.741 512 471.997 512S495.997 501.254 495.997 488V384H527.995V488C527.995 501.254 538.739 512 551.995 512C565.249 512 575.993 501.254 575.993 488V384H623.993L596.573 301.742C601.096 308.137 608.297 312 615.993 312C619.055 312 622.149 311.422 625.118 310.188C637.397 305.141 643.241 291.125 638.178 278.859ZM466.594 336L473.264 315.992L511.995 199.795L551.036 316.92L557.395 336H466.594ZM320 0C306.801 0 296.002 10.799 296.002 24V488C296.002 501.199 306.801 512 320 512S344 501.199 344 488V24C344 10.799 333.2 0 320 0Z" />
    </Icon>
);

export default Restroom;