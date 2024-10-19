
import { Icon, generic } from "../../index";

/**
 * A component that renders the `glasses` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/glasses?s=duotone glasses}
 * @preview ![glasses](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIyMS43MzQgMzcwLjgzNEMyMTkuMTg0IDQwMy45ODcgMTkwLjY0OCA0MjkuODEyIDE1Ni42OTUgNDI5LjgxMkgxMDkuMzU1QzczLjMyOCA0MjkuODEyIDQ0IDQwMS4yOCA0NCAzNjYuMjA5VjMxOC4zODhDNjcuMTEzIDMxMC4wOTkgOTkuMzEyIDMwMS44MDkgMTM2LjYxMyAzMDEuODA5QzE2Ny4wNTkgMzAxLjgwOSAxOTYuODY3IDMwNy4zODggMjI1LjcxOSAzMTguMzg4TDIyMS43MzQgMzcwLjgzNFpNNTMxLjIxOSAzNjYuMjA5QzUzMS4yMTkgNDAxLjI4IDUwMS44OTEgNDI5LjgxMiA0NjUuODYzIDQyOS44MTJINDE4LjUyM0MzODQuNTcgNDI5LjgxMiAzNTYuMDM1IDQwMy45ODcgMzUzLjQ4NCAzNzAuODM0TDM0OS41IDMxOC4zODhDMzc4LjM1MiAzMDcuMzg4IDQwOC4zMiAzMDEuODA5IDQzOC43NjYgMzAxLjgwOUM0NzUuNzQ2IDMwMS44MDkgNTA4LjEwNSAzMTAuMDk5IDUzMS4yMTkgMzE4LjM4OFYzNjYuMjA5WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik01NzQuMTI1IDI4MC4zNzFMNTI4Ljc1IDk4LjYxOEM1MjIuODc1IDc0Ljk5MyA1MDcuMTI1IDU0LjYxNyA0ODUuNzUgNDIuODY3QzQ2NC4yNSAzMS4xMTcgNDM4Ljc1IDI4Ljc0MiA0MTUuNSAzNi40OTJMNDAwLjI1IDQxLjYxN0MzOTEuODc1IDQ0LjM2NyAzODcuMzc1IDUzLjQ5MiAzOTAuMjUgNjEuODY4TDM5NS4yNSA3Ni45OTNDMzk4IDg1LjM2OCA0MDcuMTI1IDg5Ljg2OCA0MTUuNSA4Ny4xMThMNDI4LjYyNSA4Mi43NDNDNDM5LjUgNzkuMTE4IDQ1MS42MjUgNzkuMTE4IDQ2MS44NzUgODQuNDkzQzQ3Mi4xMjUgODkuODY4IDQ3OS4zNzUgOTguOTkzIDQ4Mi4yNSAxMTAuMjQzTDUyMC42MjUgMjY0LjEyMUM0OTguNSAyNTcuMjQ2IDQ3MC44NzUgMjUxLjYyMSA0MzkuNSAyNTEuNjIxQzQwNC42MjUgMjUxLjYyMSAzNjUuNSAyNTguNjIxIDMyNC42MjUgMjc4LjM3MUgyNTEuMzc1QzIxMC41IDI1OC42MjEgMTcxLjM3NSAyNTEuNjIxIDEzNi41IDI1MS42MjFDMTA1LjEyNSAyNTEuNjIxIDc3LjUgMjU3LjI0NiA1NS4zNzUgMjY0LjEyMUw5My43NSAxMTAuMjQzQzk2LjYyNSA5OC45OTMgMTAzLjg3NSA4OS44NjggMTE0LjI1IDg0LjQ5M0MxMjQuMzc1IDc5LjExOCAxMzYuNSA3OS4xMTggMTQ3LjM3NSA4Mi43NDNMMTYwLjUgODcuMTE4QzE2OC44NzUgODkuODY4IDE3OCA4NS4zNjggMTgwLjc1IDc2Ljk5M0wxODUuNzUgNjEuODY4QzE4OC42MjUgNTMuNDkyIDE4NC4xMjUgNDQuMzY3IDE3NS42MjUgNDEuNjE3TDE2MC4zNzUgMzYuNDkyQzEzNy4yNSAyOC43NDIgMTExLjYyNSAzMS4xMTcgOTAuMjUgNDIuODY3UzUzLjEyNSA3NC45OTMgNDcuMjUgOTguNjE4TDEuODc1IDI4MC4zNzFDMC42MjUgMjg1LjM3MiAwIDI5MC42MjIgMCAyOTUuODcyVjM2Ni4xMjNDMCA0MjguOTk5IDUxLjYyNSA0ODAgMTE1LjI1IDQ4MEgxNTIuMzc1QzIxMi42MjUgNDgwIDI2Mi43NSA0MzMuOTk5IDI2Ny4yNSAzNzQuNjIzTDI3MC4xMjUgMzM1Ljk5N0gzMDUuODc1TDMwOC43NSAzNzQuNjIzQzMxMy4yNSA0MzMuOTk5IDM2My4zNzUgNDgwIDQyMy42MjUgNDgwSDQ2MC43NUM1MjQuMzc1IDQ4MCA1NzYgNDI4Ljk5OSA1NzYgMzY2LjEyM1YyOTUuODcyQzU3NiAyOTAuNjIyIDU3NS4zNzUgMjg1LjQ5NyA1NzQuMTI1IDI4MC4zNzFaTTIyMi4xMjUgMzcwLjgzNEMyMTkuNTc0IDQwMy45ODcgMTkxLjAzOSA0MjkuODEyIDE1Ny4wODYgNDI5LjgxMkgxMDkuNzQ2QzczLjcxOSA0MjkuODEyIDQ0LjM5MSA0MDEuMjggNDQuMzkxIDM2Ni4yMDlWMzE4LjM4OEM2Ny41MDQgMzEwLjA5OSA5OS43MDMgMzAxLjgwOSAxMzcuMDA0IDMwMS44MDlDMTY3LjQ0OSAzMDEuODA5IDE5Ny4yNTggMzA3LjM4OCAyMjYuMTA5IDMxOC4zODhMMjIyLjEyNSAzNzAuODM0Wk01MzEuNjA5IDM2Ni4yMDlDNTMxLjYwOSA0MDEuMjggNTAyLjI4MSA0MjkuODEyIDQ2Ni4yNTQgNDI5LjgxMkg0MTguOTE0QzM4NC45NjEgNDI5LjgxMiAzNTYuNDI2IDQwMy45ODcgMzUzLjg3NSAzNzAuODM0TDM0OS44OTEgMzE4LjM4OEMzNzguNzQyIDMwNy4zODggNDA4LjcxMSAzMDEuODA5IDQzOS4xNTYgMzAxLjgwOUM0NzYuMTM3IDMwMS44MDkgNTA4LjQ5NiAzMTAuMDk5IDUzMS42MDkgMzE4LjM4OFYzNjYuMjA5WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const Glasses: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M221.734 370.834C219.184 403.987 190.648 429.812 156.695 429.812H109.355C73.328 429.812 44 401.28 44 366.209V318.388C67.113 310.099 99.312 301.809 136.613 301.809C167.059 301.809 196.867 307.388 225.719 318.388L221.734 370.834ZM531.219 366.209C531.219 401.28 501.891 429.812 465.863 429.812H418.523C384.57 429.812 356.035 403.987 353.484 370.834L349.5 318.388C378.352 307.388 408.32 301.809 438.766 301.809C475.746 301.809 508.105 310.099 531.219 318.388V366.209Z" />
            <path d="M574.125 280.371L528.75 98.618C522.875 74.993 507.125 54.617 485.75 42.867C464.25 31.117 438.75 28.742 415.5 36.492L400.25 41.617C391.875 44.367 387.375 53.492 390.25 61.868L395.25 76.993C398 85.368 407.125 89.868 415.5 87.118L428.625 82.743C439.5 79.118 451.625 79.118 461.875 84.493C472.125 89.868 479.375 98.993 482.25 110.243L520.625 264.121C498.5 257.246 470.875 251.621 439.5 251.621C404.625 251.621 365.5 258.621 324.625 278.371H251.375C210.5 258.621 171.375 251.621 136.5 251.621C105.125 251.621 77.5 257.246 55.375 264.121L93.75 110.243C96.625 98.993 103.875 89.868 114.25 84.493C124.375 79.118 136.5 79.118 147.375 82.743L160.5 87.118C168.875 89.868 178 85.368 180.75 76.993L185.75 61.868C188.625 53.492 184.125 44.367 175.625 41.617L160.375 36.492C137.25 28.742 111.625 31.117 90.25 42.867S53.125 74.993 47.25 98.618L1.875 280.371C0.625 285.372 0 290.622 0 295.872V366.123C0 428.999 51.625 480 115.25 480H152.375C212.625 480 262.75 433.999 267.25 374.623L270.125 335.997H305.875L308.75 374.623C313.25 433.999 363.375 480 423.625 480H460.75C524.375 480 576 428.999 576 366.123V295.872C576 290.622 575.375 285.497 574.125 280.371ZM222.125 370.834C219.574 403.987 191.039 429.812 157.086 429.812H109.746C73.719 429.812 44.391 401.28 44.391 366.209V318.388C67.504 310.099 99.703 301.809 137.004 301.809C167.449 301.809 197.258 307.388 226.109 318.388L222.125 370.834ZM531.609 366.209C531.609 401.28 502.281 429.812 466.254 429.812H418.914C384.961 429.812 356.426 403.987 353.875 370.834L349.891 318.388C378.742 307.388 408.711 301.809 439.156 301.809C476.137 301.809 508.496 310.099 531.609 318.388V366.209Z" />
    </Icon>
);

export default Glasses;