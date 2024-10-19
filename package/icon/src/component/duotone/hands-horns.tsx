
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hands-horns` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hands-horns?s=duotone hands-horns}
 * @preview ![hands-horns](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NC4wMDggNjRDMzY2LjMyMSA2NCAzNTIuMDA4IDc4LjMyOCAzNTIuMDA4IDk2VjI4OEMzNTIuMDA4IDMyMy4zNDQgMzIzLjM1MiAzNTIgMjg4LjAwOCAzNTJDMjY4Ljc4MyAzNTIgMjUxLjc0IDM0My4zNDYgMjQwLjAwOCAzMjkuOTI2QzIzNi43MTcgMzMzLjY4OSAyMzIuOTI0IDMzNi45NTkgMjI4Ljg2NSAzMzkuODg3QzIyMS44MTUgMzY0LjIwMyAyMDIuNDQ2IDM4NC4xNzQgMTc2LjAwOCAzOTAuMjAzTDExNC44NjcgNDA0LjE1TDk2LjUwOCAzNzUuNTE2TDE2OC45MTQgMzU5QzE4Ny40NTQgMzU0Ljc2MiAyMDAuMDE3IDMzOC4yNzggMjAwLjAxNyAzMjAuMDMzQzIwMC4wMTcgMjk5LjYyIDE4My43NTkgMjgwLjAwMiAxNjAuMDQ4IDI4MC4wMDJDMTU3LjEwMyAyODAuMDAyIDE1NC4xMDYgMjgwLjMyNiAxNTEuMTAyIDI4MUwzMS4xMDIgMzA4LjM3NUMxLjg4NSAzMTUuMDU0IDAgMzQzLjA2OSAwIDM0Ny4zODhDMCAzNTIuOTcgMS4xNjcgMzU4LjU1NCAzLjUwOCAzNjMuNzY2TDI1LjYwMiA0MTIuODc1QzUyLjY2NCA0NzMuMDk0IDExMi43ODkgNTEyIDE3OC44MjEgNTEySDI0MC4wMDhDMzM3LjAzOSA1MTIgNDE2LjAwOCA0MzMuMDQ3IDQxNi4wMDggMzM2Vjk2QzQxNi4wMDggNzguMzI4IDQwMS42OTYgNjQgMzg0LjAwOCA2NFpNMTI4LjAwOCAzMkMxMjguMDA4IDE0LjMyOCAxMTMuNjk2IDAgOTYuMDA4IDBTNjQuMDA4IDE0LjMyOCA2NC4wMDggMzJWMjY4LjA0N0wxMjguMDA4IDI1My40NDdWMzJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI4OCAxOTJDMjcwLjMxMiAxOTIgMjU2IDIwNi4zMjggMjU2IDIyNFYyODhDMjU2IDMwNS42NzIgMjcwLjMxMiAzMjAgMjg4IDMyMFMzMjAgMzA1LjY3MiAzMjAgMjg4VjIyNEMzMjAgMjA2LjMyOCAzMDUuNjg4IDE5MiAyODggMTkyWk0xOTIgMTYwQzE3NC4zMTIgMTYwIDE2MCAxNzQuMzI4IDE2MCAxOTJWMjQ4LjE0MUMxODYuOTg2IDI0OC4xNjYgMjExLjc4NyAyNjMuNDcxIDIyNCAyODcuNTE2VjE5MkMyMjQgMTc0LjMyOCAyMDkuNjg4IDE2MCAxOTIgMTYwWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const HandsHorns: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M384.008 64C366.321 64 352.008 78.328 352.008 96V288C352.008 323.344 323.352 352 288.008 352C268.783 352 251.74 343.346 240.008 329.926C236.717 333.689 232.924 336.959 228.865 339.887C221.815 364.203 202.446 384.174 176.008 390.203L114.867 404.15L96.508 375.516L168.914 359C187.454 354.762 200.017 338.278 200.017 320.033C200.017 299.62 183.759 280.002 160.048 280.002C157.103 280.002 154.106 280.326 151.102 281L31.102 308.375C1.885 315.054 0 343.069 0 347.388C0 352.97 1.167 358.554 3.508 363.766L25.602 412.875C52.664 473.094 112.789 512 178.821 512H240.008C337.039 512 416.008 433.047 416.008 336V96C416.008 78.328 401.696 64 384.008 64ZM128.008 32C128.008 14.328 113.696 0 96.008 0S64.008 14.328 64.008 32V268.047L128.008 253.447V32Z" />
            <path d="M288 192C270.312 192 256 206.328 256 224V288C256 305.672 270.312 320 288 320S320 305.672 320 288V224C320 206.328 305.688 192 288 192ZM192 160C174.312 160 160 174.328 160 192V248.141C186.986 248.166 211.787 263.471 224 287.516V192C224 174.328 209.688 160 192 160Z" />
    </Icon>
);

export default HandsHorns;