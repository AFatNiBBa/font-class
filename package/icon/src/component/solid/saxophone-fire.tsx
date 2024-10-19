
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `saxophone-fire` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/saxophone-fire?s=solid saxophone-fire}
 * @preview ![saxophone-fire](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzUuMjQ3IDEwMC43NUw2MDcuOTk3IDczLjM3NUM2MDEuOTk3IDY3LjM3NSA1OTMuODcyIDY0IDU4NS4zNzIgNjRINTM4LjQ5N0M1MjEuNDk3IDY0IDUwNS4yNDcgNzAuNzUgNDkzLjI0NyA4Mi43NUw0NDguOTk4IDEyN0w0MzguNjIzIDExNi42MjVDNDMyLjM3MyAxMTAuMzc1IDQyMi4yNDggMTEwLjM3NSA0MTUuOTk4IDExNi42MjVMNDA0Ljc0OCAxMjhDMzk4LjQ5OCAxMzQuMjUgMzk4LjQ5OCAxNDQuMzc0IDQwNC43NDggMTUwLjYyNEw0MTQuOTk4IDE2MC45OTlMNDAwLjk5OCAxNzQuOTk5TDM5MC42MjMgMTY0LjYyNEMzODQuMzczIDE1OC4zNzQgMzc0LjI0OCAxNTguMzc0IDM2Ny45OTggMTY0LjYyNEwzNTYuNzQ4IDE3NS45OTlDMzUwLjQ5OCAxODIuMjQ5IDM1MC40OTggMTkyLjM3NCAzNTYuNzQ4IDE5OC42MjRMMzY2Ljk5OCAyMDguOTk5TDM1Mi45OTggMjIyLjk5OUwzNDIuNjIzIDIxMi42MjRDMzM2LjM3MyAyMDYuMzc0IDMyNi4yNDggMjA2LjM3NCAzMTkuOTk4IDIxMi42MjRMMzA4Ljc0OCAyMjMuOTk5QzMwMi40OTggMjMwLjI0OSAzMDIuNDk4IDI0MC4zNzQgMzA4Ljc0OCAyNDYuNjI0TDMxOC45OTggMjU2Ljk5OUwyMDkuOTk5IDM2NS45OTlDMjAwLjg3NCAzNzQuOTk5IDE4Ni40OTkgMzc1Ljg3NCAxNzYuNDk5IDM2Ny45OTlDMTY2LjM3NCAzNjAuMTI0IDE2My43NDkgMzQ1Ljk5OSAxNzAuMjQ5IDMzNC45OTlMMjE3LjYyNCAyNTUuOTk5SDIzOS45OTlDMjQ4Ljg3NCAyNTUuOTk5IDI1NS45OTkgMjQ4Ljg3NCAyNTUuOTk5IDIzOS45OTlWMjIzLjk5OUMyNTUuOTk5IDIxNS4xMjQgMjQ4Ljg3NCAyMDcuOTk5IDIzOS45OTkgMjA3Ljk5OUgxNkM3LjEyNSAyMDcuOTk5IDAgMjE1LjEyNCAwIDIyMy45OTlWMjM5Ljk5OUMwIDI0OC40OTkgNi43NSAyNTUuNDk5IDE1LjI1IDI1NS44NzRDNy41IDI4OC40OTkgMCAzMjYuNzQ5IDAgMzUxLjk5OUMwIDQxMy4zNzQgMzUgNDY2LjEyMyA4NS43NSA0OTIuODczQzEwOC4zNzQgNTA1LjYyMyAxMzMuOTk5IDUxMi4xMjMgMTU5Ljk5OSA1MTEuOTk4QzIzNy4xMjQgNTExLjk5OCAyNzYuNDk5IDQ2MC42MjMgMjg3Ljk5OCA0NDcuOTk4TDUzNC4zNzIgMTQwQzU0MC40OTcgMTMyLjM3NSA1NDkuNjIyIDEyOCA1NTkuMzcyIDEyOEg2MjMuOTk3QzYzOC4yNDcgMTI4IDY0NS4zNzIgMTEwLjc1IDYzNS4yNDcgMTAwLjc1Wk04OCAzOTEuOTk5Qzc0Ljc1IDM5MS45OTkgNjQgMzgxLjI0OSA2NCAzNjcuOTk5QzY0IDM1NC43NDkgNzQuNzUgMzQzLjk5OSA4OCAzNDMuOTk5UzExMS45OTkgMzU0Ljc0OSAxMTEuOTk5IDM2Ny45OTlDMTExLjk5OSAzODEuMjQ5IDEwMS4yNDkgMzkxLjk5OSA4OCAzOTEuOTk5Wk0xMTkuOTk5IDMwMy45OTlDMTA2Ljc0OSAzMDMuOTk5IDk1Ljk5OSAyOTMuMjQ5IDk1Ljk5OSAyNzkuOTk5Qzk1Ljk5OSAyNjYuNzQ5IDEwNi43NDkgMjU1Ljk5OSAxMTkuOTk5IDI1NS45OTlTMTQzLjk5OSAyNjYuNzQ5IDE0My45OTkgMjc5Ljk5OUMxNDMuOTk5IDI5My4yNDkgMTMzLjI0OSAzMDMuOTk5IDExOS45OTkgMzAzLjk5OVpNODMuMjUgMTc1Ljk5OUM3NS44NzUgMTY1Ljc0OSA3MiAxNTMuMzc0IDcyIDE0MC43NUM3MiAxMzMuMTI1IDgwLjYyNSAxMTAuNSAxMDAuNDk5IDgzLjI1QzEwMS43NDkgODUgMTAzLjEyNCA4Ni43NSAxMDQuMzc0IDg4LjVMMTQ2Ljk5OSAxNDcuMjQ5TDE3My45OTkgMTE0LjEyNUMxODAuMTI0IDEyNi4yNSAxODMuNjI0IDEzNi4zNzUgMTgzLjk5OSAxNDAuNzVDMTgzLjk5OSAxNTMuMzc0IDE3OS45OTkgMTY1Ljc0OSAxNzIuNzQ5IDE3NS45OTlIMjM0LjEyNEMyMzcuODc0IDE2NC42MjQgMjM5Ljg3NCAxNTIuNzQ5IDIzOS45OTkgMTQwLjc1QzIzOS45OTkgMTE0LjEyNSAyMTMuOTk5IDU5LjI1IDE3Ny43NDkgMjUuNjI1QzE2Ny43NDkgMzUgMTU4LjM3NCA0NSAxNDkuNjI0IDU1LjYyNUMxMzQuOTk5IDM1LjUgMTE4LjI0OSAxNi44NzUgOTkuOTk5IDBDNTAuODc1IDQ1LjYyNSAxNiAxMDUgMTYgMTQwLjc1QzE2LjEyNSAxNTIuNzQ5IDE4LjEyNSAxNjQuNjI0IDIxLjg3NSAxNzUuOTk5SDgzLjI1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SaxophoneFire(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M635.247 100.75L607.997 73.375C601.997 67.375 593.872 64 585.372 64H538.497C521.497 64 505.247 70.75 493.247 82.75L448.998 127L438.623 116.625C432.373 110.375 422.248 110.375 415.998 116.625L404.748 128C398.498 134.25 398.498 144.374 404.748 150.624L414.998 160.999L400.998 174.999L390.623 164.624C384.373 158.374 374.248 158.374 367.998 164.624L356.748 175.999C350.498 182.249 350.498 192.374 356.748 198.624L366.998 208.999L352.998 222.999L342.623 212.624C336.373 206.374 326.248 206.374 319.998 212.624L308.748 223.999C302.498 230.249 302.498 240.374 308.748 246.624L318.998 256.999L209.999 365.999C200.874 374.999 186.499 375.874 176.499 367.999C166.374 360.124 163.749 345.999 170.249 334.999L217.624 255.999H239.999C248.874 255.999 255.999 248.874 255.999 239.999V223.999C255.999 215.124 248.874 207.999 239.999 207.999H16C7.125 207.999 0 215.124 0 223.999V239.999C0 248.499 6.75 255.499 15.25 255.874C7.5 288.499 0 326.749 0 351.999C0 413.374 35 466.123 85.75 492.873C108.374 505.623 133.999 512.123 159.999 511.998C237.124 511.998 276.499 460.623 287.998 447.998L534.372 140C540.497 132.375 549.622 128 559.372 128H623.997C638.247 128 645.372 110.75 635.247 100.75ZM88 391.999C74.75 391.999 64 381.249 64 367.999C64 354.749 74.75 343.999 88 343.999S111.999 354.749 111.999 367.999C111.999 381.249 101.249 391.999 88 391.999ZM119.999 303.999C106.749 303.999 95.999 293.249 95.999 279.999C95.999 266.749 106.749 255.999 119.999 255.999S143.999 266.749 143.999 279.999C143.999 293.249 133.249 303.999 119.999 303.999ZM83.25 175.999C75.875 165.749 72 153.374 72 140.75C72 133.125 80.625 110.5 100.499 83.25C101.749 85 103.124 86.75 104.374 88.5L146.999 147.249L173.999 114.125C180.124 126.25 183.624 136.375 183.999 140.75C183.999 153.374 179.999 165.749 172.749 175.999H234.124C237.874 164.624 239.874 152.749 239.999 140.75C239.999 114.125 213.999 59.25 177.749 25.625C167.749 35 158.374 45 149.624 55.625C134.999 35.5 118.249 16.875 99.999 0C50.875 45.625 16 105 16 140.75C16.125 152.749 18.125 164.624 21.875 175.999H83.25Z" />
        </Icon>
    </>
}