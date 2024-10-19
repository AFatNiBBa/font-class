
import { Icon } from "../../index";

/**
 * A component that renders the `vest-patches` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/vest-patches?s=thin vest-patches}
 * @preview ![vest-patches](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDEuMTI1IDI1OS42ODhMNDAwIDE4OS44MTJWNDBDNDAwIDE3LjkwOCAzODIuMDkyIDAgMzYwIDBIMzIwQzMxMy43MjUgMCAzMTAuMzM0IDEuODI4IDMwNS4wOTggNS4yODdDMjIxLjAxNCA2MC44NDIgMTk5LjIyOSA0Mi41MDIgMTQyLjkwNCA1LjI4N0MxMzcuNjY4IDEuODI4IDEzNC4yNzUgMCAxMjggMEg4OEM2NS45MDggMCA0OCAxNy45MDggNDggNDBWMTg5LjgxMkw3LjIxOSAyNTkuMTg4QzIuNSAyNjUuOTM4IDAgMjczLjg3NSAwIDI4Mi4wOTRWNDcyQzAgNDk0LjA5MiAxNy45MDggNTEyIDQwIDUxMkg0MDhDNDMwLjA5MiA1MTIgNDQ4IDQ5NC4wOTIgNDQ4IDQ3MlYyODIuMDk0QzQ0OCAyNzMuODc1IDQ0NS41IDI2NS45MzggNDQxLjEyNSAyNTkuNjg4Wk0yMjQgNTYuMTI1QzI1MSA1Ni4xMjUgMjc0LjQ0MyA0Ni43MTkgMjk1LjczNCAzMC40NzNMMjI0IDIxMy4wNDlMMTUyLjI2NiAzMC40NzNDMTczLjU2MSA0Ni43MjEgMTk3LjAwNCA1Ni4xMjUgMjI0IDU2LjEyNVpNMTkyIDMwMC41NTVWNDk2SDQwQzI2Ljc4MSA0OTYgMTYgNDg1LjIxOSAxNiA0NzJWMjgyLjA5NEMxNiAyNzcuMTU2IDE3LjUgMjcyLjQwNiAyMC42ODggMjY3LjgxMkw2Mi45MDYgMTk2LjA2MkM2My4yNzcgMTk0LjY5OSA2My42MjkgMTkzLjQwOCA2NCAxOTIuMDQ3VjQwQzY0IDI2Ljc5OSA3NC44MDEgMTYgODggMTZIMTI5LjQwNkwyMTUuNDEgMjM0LjkxNEwxOTQuMjE3IDI4OC44NTJDMTkyLjc1MiAyOTIuNTggMTkyIDI5Ni41NDkgMTkyIDMwMC41NTVaTTQzMiA0NzJDNDMyIDQ4NS4yMTkgNDIxLjIxOSA0OTYgNDA4IDQ5NkgyMDhWMjk3LjVMMzE4LjU5NCAxNkgzNjBDMzczLjIxOSAxNiAzODQgMjYuNzgxIDM4NCA0MFYxOTJDMzg0IDE5My40MzggMzg0LjM3NSAxOTQuODEyIDM4NS4wOTQgMTk2LjA2Mkw0MjcuNjU2IDI2OC4zMTJDNDMwLjUgMjcyLjQwNiA0MzIgMjc3LjE1NiA0MzIgMjgyLjA5NFY0NzJaTTM1My4zNzUgMjg2LjY1NkMzNTIuMDk0IDI3MC42ODggMzM5Ljc1IDI1Ny41MzEgMzI0LjE1NiAyNTYuMTI1QzMxNC43ODEgMjU1LjI1IDMwNS45NjkgMjU4LjMxMiAyOTkuMDk0IDI2NC41QzI5Mi4yODEgMjcwLjY1NiAyODguMzEzIDI3OS40NjkgMjg4LjIxOSAyODguNjg4TDI4OCAzMzcuMjVDMjg3Ljk2OSAzNDEuMTg4IDI4OS41IDM0NC45MDYgMjkyLjI4MSAzNDcuNzE5QzI5NS4wNjIgMzUwLjQ2OSAyOTguNzE5IDM1MiAzMDIuNTk0IDM1MkgzMDIuNzE5TDM1MS4yODEgMzUxLjc4MUMzNjAuNDY5IDM1MS43MTkgMzY5LjI4MSAzNDcuNzgxIDM3NS40NjkgMzQwLjk2OUMzODEuNjI1IDMzNC4xODggMzg0LjY4NyAzMjUuMDYzIDM4My44NzUgMzE1LjkwNkMzODIuNDY5IDMwMC4zNDQgMzY5LjM0NCAyODcuOTY5IDM1My4zNzUgMjg2LjY1NlpNMzYzLjYyNSAzMzAuMjE5QzM2MC40MzcgMzMzLjcxOSAzNTUuOTA2IDMzNS43NSAzNTEuMTg3IDMzNS43ODFMMzA0IDMzNy4zNDRMMzA0LjIxOSAyODguODEyQzMwNC4yODEgMjg0LjA5NCAzMDYuMzEyIDI3OS41NjIgMzA5Ljg0NCAyNzYuMzc1QzMxMi45NjkgMjczLjUgMzE2Ljk2OSAyNzIgMzIxLjE1NiAyNzJDMzIxLjY1NiAyNzIgMzIyLjE4OCAyNzIgMzIyLjcxOSAyNzIuMDYyQzMzMS4wNjIgMjcyLjgxMiAzMzcuNTMxIDI4MC40NjkgMzM3LjUgMjg5LjQzOEwzMzcuMzQ0IDMwMi42ODhMMzUwLjU2MiAzMDIuNTMxQzM1OS41NjIgMzAyLjUzMSAzNjcuMTg3IDMwOS4wMzEgMzY3LjkzOCAzMTcuMzQ0QzM2OC4zNzUgMzIyLjA5NCAzNjYuODQ0IDMyNi42ODggMzYzLjYyNSAzMzAuMjE5Wk0xMTIgMzUyQzg1LjUzMSAzNTIgNjQgMzczLjUzMSA2NCA0MDBTODUuNTMxIDQ0OCAxMTIgNDQ4UzE2MCA0MjYuNDY5IDE2MCA0MDBTMTM4LjQ2OSAzNTIgMTEyIDM1MlpNMTEyIDQzMkM5NC4zNDQgNDMyIDgwIDQxNy42NTYgODAgNDAwUzk0LjM0NCAzNjggMTEyIDM2OFMxNDQgMzgyLjM0NCAxNDQgNDAwUzEyOS42NTYgNDMyIDExMiA0MzJaTTc4LjM0NCAzMDUuNjU2Qzc5LjkwNiAzMDcuMjE5IDgxLjkzOCAzMDggODQgMzA4Uzg4LjA5NCAzMDcuMjE5IDg5LjY1NiAzMDUuNjU2TDExMiAyODMuMzEyTDEzNC4zNDQgMzA1LjY1NkMxMzUuOTA2IDMwNy4yMTkgMTM3LjkzOCAzMDggMTQwIDMwOFMxNDQuMDk0IDMwNy4yMTkgMTQ1LjY1NiAzMDUuNjU2QzE0OC43ODEgMzAyLjUzMSAxNDguNzgxIDI5Ny40NjkgMTQ1LjY1NiAyOTQuMzQ0TDEyMy4zMTIgMjcyTDE0NS42NTYgMjQ5LjY1NkMxNDguNzgxIDI0Ni41MzEgMTQ4Ljc4MSAyNDEuNDY5IDE0NS42NTYgMjM4LjM0NFMxMzcuNDY5IDIzNS4yMTkgMTM0LjM0NCAyMzguMzQ0TDExMiAyNjAuNjg4TDg5LjY1NiAyMzguMzQ0Qzg2LjUzMSAyMzUuMjE5IDgxLjQ2OSAyMzUuMjE5IDc4LjM0NCAyMzguMzQ0Uzc1LjIxOSAyNDYuNTMxIDc4LjM0NCAyNDkuNjU2TDEwMC42ODggMjcyTDc4LjM0NCAyOTQuMzQ0Qzc1LjIxOSAyOTcuNDY5IDc1LjIxOSAzMDIuNTMxIDc4LjM0NCAzMDUuNjU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const VestPatches: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M441.125 259.688L400 189.812V40C400 17.908 382.092 0 360 0H320C313.725 0 310.334 1.828 305.098 5.287C221.014 60.842 199.229 42.502 142.904 5.287C137.668 1.828 134.275 0 128 0H88C65.908 0 48 17.908 48 40V189.812L7.219 259.188C2.5 265.938 0 273.875 0 282.094V472C0 494.092 17.908 512 40 512H408C430.092 512 448 494.092 448 472V282.094C448 273.875 445.5 265.938 441.125 259.688ZM224 56.125C251 56.125 274.443 46.719 295.734 30.473L224 213.049L152.266 30.473C173.561 46.721 197.004 56.125 224 56.125ZM192 300.555V496H40C26.781 496 16 485.219 16 472V282.094C16 277.156 17.5 272.406 20.688 267.812L62.906 196.062C63.277 194.699 63.629 193.408 64 192.047V40C64 26.799 74.801 16 88 16H129.406L215.41 234.914L194.217 288.852C192.752 292.58 192 296.549 192 300.555ZM432 472C432 485.219 421.219 496 408 496H208V297.5L318.594 16H360C373.219 16 384 26.781 384 40V192C384 193.438 384.375 194.812 385.094 196.062L427.656 268.312C430.5 272.406 432 277.156 432 282.094V472ZM353.375 286.656C352.094 270.688 339.75 257.531 324.156 256.125C314.781 255.25 305.969 258.312 299.094 264.5C292.281 270.656 288.313 279.469 288.219 288.688L288 337.25C287.969 341.188 289.5 344.906 292.281 347.719C295.062 350.469 298.719 352 302.594 352H302.719L351.281 351.781C360.469 351.719 369.281 347.781 375.469 340.969C381.625 334.188 384.687 325.063 383.875 315.906C382.469 300.344 369.344 287.969 353.375 286.656ZM363.625 330.219C360.437 333.719 355.906 335.75 351.187 335.781L304 337.344L304.219 288.812C304.281 284.094 306.312 279.562 309.844 276.375C312.969 273.5 316.969 272 321.156 272C321.656 272 322.188 272 322.719 272.062C331.062 272.812 337.531 280.469 337.5 289.438L337.344 302.688L350.562 302.531C359.562 302.531 367.187 309.031 367.938 317.344C368.375 322.094 366.844 326.688 363.625 330.219ZM112 352C85.531 352 64 373.531 64 400S85.531 448 112 448S160 426.469 160 400S138.469 352 112 352ZM112 432C94.344 432 80 417.656 80 400S94.344 368 112 368S144 382.344 144 400S129.656 432 112 432ZM78.344 305.656C79.906 307.219 81.938 308 84 308S88.094 307.219 89.656 305.656L112 283.312L134.344 305.656C135.906 307.219 137.938 308 140 308S144.094 307.219 145.656 305.656C148.781 302.531 148.781 297.469 145.656 294.344L123.312 272L145.656 249.656C148.781 246.531 148.781 241.469 145.656 238.344S137.469 235.219 134.344 238.344L112 260.688L89.656 238.344C86.531 235.219 81.469 235.219 78.344 238.344S75.219 246.531 78.344 249.656L100.688 272L78.344 294.344C75.219 297.469 75.219 302.531 78.344 305.656Z" />
    </Icon>
);

export default VestPatches;