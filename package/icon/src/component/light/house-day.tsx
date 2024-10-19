
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `house-day` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/house-day?s=light house-day}
 * @preview ![house-day](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzYuMTY2IDI3Ny4zNDRWMzYyLjYwNUMzMzYuMTY2IDM3NC40ODIgMzQ1Ljc5OSAzODMuOTgyIDM1Ny41NTkgMzgzLjk4Mkg0NDIuODgxQzQ1NC42NDEgMzgzLjk4MiA0NjQuMjczIDM3NC4zNTcgNDY0LjI3MyAzNjIuNjA1VjI3Ny4zNDRDNDY0LjI3MyAyNjUuNTkyIDQ1NC43NjYgMjU1Ljk2NyA0NDIuODgxIDI1NS45NjdIMzU3LjU1OUMzNDUuNzk5IDI1NS45NjcgMzM2LjE2NiAyNjUuNDY3IDMzNi4xNjYgMjc3LjM0NFpNMzY4LjE5MyAyODcuOTcxSDQzMi4yNDZWMzUxLjk3OUgzNjguMTkzVjI4Ny45NzFaTTY0MC4wMDEgMzA3LjYxOEM2NDAuMDAxIDMwMy4zNDQgNjM4LjMwNiAyOTkuMDkzIDYzNC45MTYgMjk1Ljk3MUw1NzYuMzY3IDI0NC43MTVWMTQzLjk1MUM1NzYuMzY3IDEzNS4wNzYgNTY5LjIzNiAxMjcuOTQ5IDU2MC4zNTQgMTI3Ljk0OVM1NDQuMzQgMTM1LjA3NiA1NDQuMzQgMTQzLjk1MVYyMTYuNzExTDQxMC43MjUgOTkuOTQzQzQwNy43MTcgOTcuMzE1IDQwMy45NjggOTYgNDAwLjIxOSA5NkMzOTYuNDY5IDk2IDM5Mi43MTkgOTcuMzE1IDM4OS43MTEgOTkuOTQ1TDE2NS41MjMgMjk1Ljk3MUMxNjEuODYyIDI5OS4xNTYgMTYwLjAwMSAzMDMuNTU0IDE2MC4wMDEgMzA3Ljk4OEMxNjAuMDAxIDMxNi41MSAxNjYuODcgMzI0LjAyNCAxNzYuMDA1IDMyNC4wMjRDMTc5Ljc0NyAzMjQuMDI0IDE4My41MSAzMjIuNzI4IDE4Ni41NDEgMzIwLjFMMjI0LjA3MiAyODcuMjIxVjQ0Ny45OTJDMjI0LjA3MiA0ODMuMzQyIDI1Mi43NSA1MTIgMjg4LjEyNSA1MTJINTEyLjMxMkM1NDcuNjg5IDUxMiA1NzYuMzY3IDQ4My4zNDIgNTc2LjM2NyA0NDcuOTkyVjI4Ny4yMjFMNjEzLjg5OCAzMTkuOTc1QzYxNi44NjkgMzIyLjQzOSA2MjAuNDkzIDMyMy42NDggNjI0LjA5NCAzMjMuNjQ4QzYzMy4xNzUgMzIzLjY0OCA2NDAuMDAxIDMxNi4yMzYgNjQwLjAwMSAzMDcuNjE4Wk01NDQuMzQgNDQ3Ljk5MkM1NDQuMzQgNDY1LjY2OCA1MzAuMDAyIDQ3OS45OTYgNTEyLjMxMiA0NzkuOTk2SDI4OC4xMjVDMjcwLjQzNyA0NzkuOTk2IDI1Ni4xIDQ2NS42NjggMjU2LjEgNDQ3Ljk5MlYyNjMuOTY3QzI1NS45NzUgMjYyLjU5MiAyNTUuNzIzIDI2MS4yMTcgMjU1LjM0OCAyNTkuOTY3TDQwMC4yMTkgMTMzLjE5OUw1NDQuMzQgMjU5LjIxN1Y0NDcuOTkyWk0xNzYuMDAyIDIyMS4yNzVDMTc2LjAwMiAyMDAuMzQzIDE0NCAyMDguNzc4IDE0NCAxNzZDMTQ0IDE1OC4zNDQgMTU4LjM1OSAxNDQgMTc2IDE0NEMxODkuNTQ3IDE0NCAyMDEuNjcyIDE1Mi41NjIgMjA2LjE4OCAxNjUuMzQ0QzIwOC41MDMgMTcxLjkyIDIxNC42NjIgMTc2LjAxMiAyMjEuMjUzIDE3Ni4wMTJDMjMwLjEzIDE3Ni4wMTIgMjM3LjI2NiAxNjguODA2IDIzNy4yNjYgMTYwLjAwMUMyMzcuMjY2IDE1MC43OTggMjE5LjM4NCAxMTIgMTc2IDExMkMxNDAuNzAzIDExMiAxMTIgMTQwLjcxOSAxMTIgMTc2QzExMiAyMTkuNTk5IDE1MC42NSAyMzcuMjgxIDE2MCAyMzcuMjgxQzE2OC44NzkgMjM3LjI4MSAxNzYuMDAyIDIzMC4wOCAxNzYuMDAyIDIyMS4yNzVaTTE3NiA4MEMxODQuODQ0IDgwIDE5MiA3Mi44NDQgMTkyIDY0VjE2QzE5MiA3LjE1NiAxODQuODQ0IDAgMTc2IDBTMTYwIDcuMTU2IDE2MCAxNlY2NEMxNjAgNzIuODQ0IDE2Ny4xNTYgODAgMTc2IDgwWk04MCAxNzZDODAgMTY3LjE1NiA3Mi44NDQgMTYwIDY0IDE2MEgxNkM3LjE1NiAxNjAgMCAxNjcuMTU2IDAgMTc2UzcuMTU2IDE5MiAxNiAxOTJINjRDNzIuODQ0IDE5MiA4MCAxODQuODQ0IDgwIDE3NlpNODUuNDg0IDEwOC4xMjVDODguNjA5IDExMS4yNSA5Mi43MDMgMTEyLjgxMiA5Ni43OTcgMTEyLjgxMkMxMDUuOTM2IDExMi44MTIgMTEyLjc5NyAxMDUuMzM5IDExMi43OTcgOTYuODEyQzExMi43OTcgOTIuNzE5IDExMS4yMzQgODguNjI1IDEwOC4xMDkgODUuNUw3NC4xNzIgNTEuNTYyQzcxLjA0NyA0OC40MzggNjYuOTUzIDQ2Ljg3NSA2Mi44NTkgNDYuODc1QzUzLjcyIDQ2Ljg3NSA0Ni44NTkgNTQuMzQ4IDQ2Ljg1OSA2Mi44NzVDNDYuODU5IDY2Ljk2OSA0OC40MjIgNzEuMDYzIDUxLjU0NyA3NC4xODhMODUuNDg0IDEwOC4xMjVaTTk2Ljc5NyAyMzkuMTg4QzkyLjcwMyAyMzkuMTg4IDg4LjYwOSAyNDAuNzUgODUuNDg0IDI0My44NzVMNTEuNTQ3IDI3Ny44MTJDNDguNDIyIDI4MC45MzggNDYuODU5IDI4NS4wMzEgNDYuODU5IDI4OS4xMjVDNDYuODU5IDI5Ny42NTIgNTMuNzI1IDMwNS4xMjUgNjIuODU5IDMwNS4xMjVDNjYuOTUzIDMwNS4xMjUgNzEuMDQ3IDMwMy41NjIgNzQuMTcyIDMwMC40MzdMMTA4LjEwOSAyNjYuNUMxMTEuMjM0IDI2My4zNzUgMTEyLjc5NyAyNTkuMjgxIDExMi43OTcgMjU1LjE4OEMxMTIuNzk3IDI0Ni42NjEgMTA1LjkzMiAyMzkuMTg4IDk2Ljc5NyAyMzkuMTg4Wk0yNTUuMjAzIDExMi44MTJDMjU5LjI5NyAxMTIuODEyIDI2My4zOTEgMTExLjI1IDI2Ni41MTYgMTA4LjEyNUwzMDAuNDUzIDc0LjE4N0MzMDMuNTc4IDcxLjA2MiAzMDUuMTQxIDY2Ljk2OSAzMDUuMTQxIDYyLjg3NUMzMDUuMTQxIDU0LjM0OCAyOTguMjc1IDQ2Ljg3NSAyODkuMTQxIDQ2Ljg3NUMyODUuMDQ3IDQ2Ljg3NSAyODAuOTUzIDQ4LjQzNyAyNzcuODI4IDUxLjU2MkwyNDMuODkxIDg1LjVDMjQwLjc2NiA4OC42MjUgMjM5LjIwMyA5Mi43MTkgMjM5LjIwMyA5Ni44MTJDMjM5LjIwMyAxMDUuMzM5IDI0Ni4wNjggMTEyLjgxMiAyNTUuMjAzIDExMi44MTJaICI+PC9wYXRoPjwvc3ZnPg==|width=32|height=32)
 */
export default function HouseDay(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M336.166 277.344V362.605C336.166 374.482 345.799 383.982 357.559 383.982H442.881C454.641 383.982 464.273 374.357 464.273 362.605V277.344C464.273 265.592 454.766 255.967 442.881 255.967H357.559C345.799 255.967 336.166 265.467 336.166 277.344ZM368.193 287.971H432.246V351.979H368.193V287.971ZM640.001 307.618C640.001 303.344 638.306 299.093 634.916 295.971L576.367 244.715V143.951C576.367 135.076 569.236 127.949 560.354 127.949S544.34 135.076 544.34 143.951V216.711L410.725 99.943C407.717 97.315 403.968 96 400.219 96C396.469 96 392.719 97.315 389.711 99.945L165.523 295.971C161.862 299.156 160.001 303.554 160.001 307.988C160.001 316.51 166.87 324.024 176.005 324.024C179.747 324.024 183.51 322.728 186.541 320.1L224.072 287.221V447.992C224.072 483.342 252.75 512 288.125 512H512.312C547.689 512 576.367 483.342 576.367 447.992V287.221L613.898 319.975C616.869 322.439 620.493 323.648 624.094 323.648C633.175 323.648 640.001 316.236 640.001 307.618ZM544.34 447.992C544.34 465.668 530.002 479.996 512.312 479.996H288.125C270.437 479.996 256.1 465.668 256.1 447.992V263.967C255.975 262.592 255.723 261.217 255.348 259.967L400.219 133.199L544.34 259.217V447.992ZM176.002 221.275C176.002 200.343 144 208.778 144 176C144 158.344 158.359 144 176 144C189.547 144 201.672 152.562 206.188 165.344C208.503 171.92 214.662 176.012 221.253 176.012C230.13 176.012 237.266 168.806 237.266 160.001C237.266 150.798 219.384 112 176 112C140.703 112 112 140.719 112 176C112 219.599 150.65 237.281 160 237.281C168.879 237.281 176.002 230.08 176.002 221.275ZM176 80C184.844 80 192 72.844 192 64V16C192 7.156 184.844 0 176 0S160 7.156 160 16V64C160 72.844 167.156 80 176 80ZM80 176C80 167.156 72.844 160 64 160H16C7.156 160 0 167.156 0 176S7.156 192 16 192H64C72.844 192 80 184.844 80 176ZM85.484 108.125C88.609 111.25 92.703 112.812 96.797 112.812C105.936 112.812 112.797 105.339 112.797 96.812C112.797 92.719 111.234 88.625 108.109 85.5L74.172 51.562C71.047 48.438 66.953 46.875 62.859 46.875C53.72 46.875 46.859 54.348 46.859 62.875C46.859 66.969 48.422 71.063 51.547 74.188L85.484 108.125ZM96.797 239.188C92.703 239.188 88.609 240.75 85.484 243.875L51.547 277.812C48.422 280.938 46.859 285.031 46.859 289.125C46.859 297.652 53.725 305.125 62.859 305.125C66.953 305.125 71.047 303.562 74.172 300.437L108.109 266.5C111.234 263.375 112.797 259.281 112.797 255.188C112.797 246.661 105.932 239.188 96.797 239.188ZM255.203 112.812C259.297 112.812 263.391 111.25 266.516 108.125L300.453 74.187C303.578 71.062 305.141 66.969 305.141 62.875C305.141 54.348 298.275 46.875 289.141 46.875C285.047 46.875 280.953 48.437 277.828 51.562L243.891 85.5C240.766 88.625 239.203 92.719 239.203 96.812C239.203 105.339 246.068 112.812 255.203 112.812Z " />
        </Icon>
    </>
}