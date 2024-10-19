
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `spider-web` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/spider-web?s=light spider-web}
 * @preview ![spider-web](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NjcuMTg4IDI0NC45OTRDNTA1LjQ0NSAxNzkuNjE4IDQ1OS43IDk4Ljg2NiA0MzQuOTUzIDExLjYxNEM0MzIuNTc4IDMuMzY0IDQyNC4wNzkgLTEuNjM2IDQxNS43MDUgMC40ODlDMzI5LjIxNCAyMi4yMzkgMjM3Ljk3NCAyMi4yMzkgMTUxLjQ4NCAwLjQ4OUMxNDIuOTg0IC0xLjYzNiAxMzQuNjEgMy4zNjQgMTMyLjIzNiAxMS42MTRDMTA3LjQ4OCA5OC44NjYgNjEuNzQzIDE3OS42MTggMCAyNDQuOTk0Qy01Ljg3NCAyNTEuMTE5IC01Ljg3NCAyNjAuODcgMCAyNjYuOTk1QzYxLjc0MyAzMzIuMzcxIDEwNy40ODggNDEzLjEyMyAxMzIuMjM2IDUwMC4zNzVDMTM0LjYxIDUwOC42MjUgMTQyLjk4NCA1MTMuNjI1IDE1MS40ODQgNTExLjVDMjM3Ljk3NCA0ODkuNzUgMzI5LjIxNCA0ODkuNzUgNDE1LjcwNSA1MTEuNUM0MTYuOTU1IDUxMS44NzUgNDE4LjMzIDUxMiA0MTkuNTc5IDUxMkM0MjYuNTc5IDUxMiA0MzIuOTUzIDUwNy4zNzUgNDM0Ljk1MyA1MDAuMzc1QzQ1OS43IDQxMy4xMjMgNTA1LjQ0NSAzMzIuMzcxIDU2Ny4xODggMjY2Ljk5NUM1NzMuMDYzIDI2MC44NyA1NzMuMDYzIDI1MS4xMTkgNTY3LjE4OCAyNDQuOTk0Wk01MjAuOTQzIDIzOS45OTRINDUxLjA3NkM0MTkuNzA0IDIwNC42MTggMzk1Ljk1NyAxNjIuMTE3IDM4MS45NTkgMTE2LjI0Mkw0MTYuMzMgNTUuOTlDNDQwLjA3NyAxMjMuMjQyIDQ3NS41NzMgMTg1LjYxOCA1MjAuOTQzIDIzOS45OTRaTTI1NS45NzIgMjM5Ljk5NEgxNTcuMzU4QzE3Ny40ODEgMjEzLjM2OSAxOTMuOTc5IDE4NC4xMTggMjA2LjM1MyAxNTIuOTkyTDI1NS45NzIgMjM5Ljk5NFpNMjMyLjIyNSAxMzMuNzQyQzI2Ni4yMjEgMTM4Ljk5MiAzMDAuOTY3IDEzOC45OTIgMzM0Ljk2NCAxMzMuNzQyTDI4My41OTQgMjIzLjc0NEwyMzIuMjI1IDEzMy43NDJaTTI1NS45NzIgMjcxLjk5NUwyMDYuMzUzIDM1OC45OTdDMTkzLjk3OSAzMjcuODcxIDE3Ny40ODEgMjk4LjYyIDE1Ny4zNTggMjcxLjk5NUgyNTUuOTcyWk0yODMuNTk0IDI4OC4yNDVMMzM0Ljk2NCAzNzguMjQ3QzMxNy45NjYgMzc1LjYyMiAzMDAuODQyIDM3My44NzIgMjgzLjU5NCAzNzMuODcyUzI0OS4yMjMgMzc1LjYyMiAyMzIuMjI1IDM3OC4yNDdMMjgzLjU5NCAyODguMjQ1Wk0zMTEuMjE2IDI3MS45OTVINDA5LjgzQzM4OS41ODMgMjk4LjYyIDM3My4yMDkgMzI3Ljg3MSAzNjAuODM2IDM1OC45OTdMMzExLjIxNiAyNzEuOTk1Wk0zMTEuMjE2IDIzOS45OTRMMzYwLjgzNiAxNTIuOTkyQzM3My4yMDkgMTg0LjI0MyAzODkuNzA4IDIxMy40OTQgNDA5LjgzIDIzOS45OTRIMzExLjIxNlpNMzg5LjU4MyAzOC4yNEwzNTUuODM2IDk3LjI0MUMzMDguNDY3IDEwOC43NDEgMjU4LjcyMiAxMDguNzQxIDIxMS4zNTIgOTcuMjQxTDE3Ny42MDYgMzguMjRDMjQ3LjU5OCA1MS4zNjUgMzE5LjU5IDUxLjM2NSAzODkuNTgzIDM4LjI0Wk0xNTAuODU5IDU1Ljk5TDE4NS4yMyAxMTYuMjQyQzE3MS4yMzEgMTYyLjExNyAxNDcuNDg0IDIwNC42MTggMTE2LjExMiAyMzkuOTk0SDQ2LjI0NUM5MS42MTUgMTg1LjYxOCAxMjcuMTExIDEyMy4yNDIgMTUwLjg1OSA1NS45OVpNNDYuMjQ1IDI3MS45OTVIMTE2LjExMkMxNDcuNDg0IDMwNy4zNzEgMTcxLjIzMSAzNDkuODcyIDE4NS4yMyAzOTUuNzQ4TDE1MC44NTkgNDU1Ljk5OUMxMjcuMTExIDM4OC44NzIgOTEuNjE1IDMyNi4zNzEgNDYuMjQ1IDI3MS45OTVaTTE3Ny42MDYgNDczLjc0OUwyMTEuMzUyIDQxNC43NDhDMjU4LjcyMiA0MDMuMjQ4IDMwOC40NjcgNDAzLjI0OCAzNTUuODM2IDQxNC43NDhMMzg5LjU4MyA0NzMuNzQ5QzM1NC41ODcgNDY3LjI0OSAzMTkuMDkgNDYzLjEyNCAyODMuNTk0IDQ2My4xMjRTMjEyLjYwMiA0NjcuMjQ5IDE3Ny42MDYgNDczLjc0OVpNNDE2LjMzIDQ1NS45OTlMMzgxLjk1OSAzOTUuNzQ4QzM5NS45NTcgMzQ5Ljg3MiA0MTkuNzA0IDMwNy4zNzEgNDUxLjA3NiAyNzEuOTk1SDUyMC45NDNDNDc1LjU3MyAzMjYuMzcxIDQ0MC4wNzcgMzg4Ljg3MiA0MTYuMzMgNDU1Ljk5OVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SpiderWeb(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M567.188 244.994C505.445 179.618 459.7 98.866 434.953 11.614C432.578 3.364 424.079 -1.636 415.705 0.489C329.214 22.239 237.974 22.239 151.484 0.489C142.984 -1.636 134.61 3.364 132.236 11.614C107.488 98.866 61.743 179.618 0 244.994C-5.874 251.119 -5.874 260.87 0 266.995C61.743 332.371 107.488 413.123 132.236 500.375C134.61 508.625 142.984 513.625 151.484 511.5C237.974 489.75 329.214 489.75 415.705 511.5C416.955 511.875 418.33 512 419.579 512C426.579 512 432.953 507.375 434.953 500.375C459.7 413.123 505.445 332.371 567.188 266.995C573.063 260.87 573.063 251.119 567.188 244.994ZM520.943 239.994H451.076C419.704 204.618 395.957 162.117 381.959 116.242L416.33 55.99C440.077 123.242 475.573 185.618 520.943 239.994ZM255.972 239.994H157.358C177.481 213.369 193.979 184.118 206.353 152.992L255.972 239.994ZM232.225 133.742C266.221 138.992 300.967 138.992 334.964 133.742L283.594 223.744L232.225 133.742ZM255.972 271.995L206.353 358.997C193.979 327.871 177.481 298.62 157.358 271.995H255.972ZM283.594 288.245L334.964 378.247C317.966 375.622 300.842 373.872 283.594 373.872S249.223 375.622 232.225 378.247L283.594 288.245ZM311.216 271.995H409.83C389.583 298.62 373.209 327.871 360.836 358.997L311.216 271.995ZM311.216 239.994L360.836 152.992C373.209 184.243 389.708 213.494 409.83 239.994H311.216ZM389.583 38.24L355.836 97.241C308.467 108.741 258.722 108.741 211.352 97.241L177.606 38.24C247.598 51.365 319.59 51.365 389.583 38.24ZM150.859 55.99L185.23 116.242C171.231 162.117 147.484 204.618 116.112 239.994H46.245C91.615 185.618 127.111 123.242 150.859 55.99ZM46.245 271.995H116.112C147.484 307.371 171.231 349.872 185.23 395.748L150.859 455.999C127.111 388.872 91.615 326.371 46.245 271.995ZM177.606 473.749L211.352 414.748C258.722 403.248 308.467 403.248 355.836 414.748L389.583 473.749C354.587 467.249 319.09 463.124 283.594 463.124S212.602 467.249 177.606 473.749ZM416.33 455.999L381.959 395.748C395.957 349.872 419.704 307.371 451.076 271.995H520.943C475.573 326.371 440.077 388.872 416.33 455.999Z" />
        </Icon>
    </>
}