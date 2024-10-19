
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `glasses` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/glasses?s=regular glasses}
 * @preview ![glasses](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzQuMTI1IDI4MC4zNzFMNTI4Ljc1IDk4LjYxOEM1MjIuODc1IDc0Ljk5MyA1MDcuMTI1IDU0LjYxNyA0ODUuNzUgNDIuODY3QzQ2NC4yNSAzMS4xMTcgNDM4Ljc1IDI4Ljc0MiA0MTUuNSAzNi40OTJMNDAwLjI1IDQxLjYxN0MzOTEuODc1IDQ0LjM2NyAzODcuMzc1IDUzLjQ5MiAzOTAuMjUgNjEuODY4TDM5NS4yNSA3Ni45OTNDMzk4IDg1LjM2OCA0MDcuMTI1IDg5Ljg2OCA0MTUuNSA4Ny4xMThMNDI4LjYyNSA4Mi43NDNDNDM5LjUgNzkuMTE4IDQ1MS42MjUgNzkuMTE4IDQ2MS44NzUgODQuNDkzUzQ3OS4zNzUgOTguOTkzIDQ4Mi4yNSAxMTAuMjQzTDUyMC42MjUgMjY0LjEyMUM0OTguNSAyNTcuMjQ2IDQ3MC44NzUgMjUxLjYyMSA0MzkuNSAyNTEuNjIxQzM5OS41IDI1MS42MjEgMzUzLjg3NSAyNjAuODcxIDMwNi4zNzUgMjg3Ljk5N0gyNjkuNjI1QzIyMi4yNSAyNjAuODcxIDE3Ni41IDI1MS42MjEgMTM2LjUgMjUxLjYyMUMxMDUuMTI1IDI1MS42MjEgNzcuNSAyNTcuMjQ2IDU1LjM3NSAyNjQuMTIxTDkzLjc1IDExMC4yNDNDOTYuNjI1IDk4Ljk5MyAxMDMuODc1IDg5Ljg2OCAxMTQuMjUgODQuNDkzQzEyNC4zNzUgNzkuMTE4IDEzNi41IDc5LjExOCAxNDcuMzc1IDgyLjc0M0wxNjAuNSA4Ny4xMThDMTY4Ljg3NSA4OS44NjggMTc4IDg1LjM2OCAxODAuNzUgNzYuOTkzTDE4NS43NSA2MS44NjhDMTg4LjYyNSA1My40OTIgMTg0LjEyNSA0NC4zNjcgMTc1LjYyNSA0MS42MTdMMTYwLjM3NSAzNi40OTJDMTM3LjI1IDI4Ljc0MiAxMTEuNjI1IDMxLjExNyA5MC4yNSA0Mi44NjdDNjguODc1IDU0LjYxNyA1My4xMjUgNzQuOTkzIDQ3LjI1IDk4LjYxOEwxLjg3NSAyODAuMzcxQzAuNjI1IDI4NS4zNzIgMCAyOTAuNjIyIDAgMjk1Ljg3MlYzNjYuMTIzQzAgNDI4Ljk5OSA1MS42MjUgNDgwIDExNS4yNSA0ODBIMTUyLjM3NUMyMTIuNjI1IDQ4MCAyNjIuNzUgNDMzLjk5OSAyNjcuMjUgMzc0LjYyM0wyNzAuMTI1IDMzNS45OTdIMzA1Ljg3NUwzMDguNzUgMzc0LjYyM0MzMTMuMjUgNDMzLjk5OSAzNjMuMzc1IDQ4MCA0MjMuNjI1IDQ4MEg0NjAuNzVDNTI0LjM3NSA0ODAgNTc2IDQyOC45OTkgNTc2IDM2Ni4xMjNWMjk1Ljg3MkM1NzYgMjkwLjYyMiA1NzUuMzc1IDI4NS40OTcgNTc0LjEyNSAyODAuMzcxWk0yMTkuMzc1IDM3MC45OThDMjE2Ljc1IDQwNS4yNDkgMTg3LjI1IDQzMS45OTkgMTUyLjI1IDQzMS45OTlIMTE1LjI1Qzc4LjEyNSA0MzEuOTk5IDQ4IDQwMi40OTkgNDggMzY2LjEyM1YzMTcuNjIyQzY3Ljc1IDMwOS40OTcgOTkuMjUgMjk5LjYyMiAxMzYuNjI1IDI5OS42MjJDMTY2LjM3NSAyOTkuNjIyIDE5NS41IDMwNS44NzIgMjIzLjM3NSAzMTguMTIyTDIxOS4zNzUgMzcwLjk5OFpNNTI4IDM2Ni4xMjNDNTI4IDQwMi40OTkgNDk3Ljg3NSA0MzEuOTk5IDQ2MC43NSA0MzEuOTk5SDQyMy42MjVDMzg4Ljc1IDQzMS45OTkgMzU5LjI1IDQwNS4yNDkgMzU2LjYyNSAzNzAuOTk4TDM1Mi42MjUgMzE4LjEyMkMzODAuNjI1IDMwNS44NzIgNDA5LjYyNSAyOTkuNjIyIDQzOS41IDI5OS42MjJDNDc2Ljg3NSAyOTkuNjIyIDUwOC4yNSAzMDkuNDk3IDUyOCAzMTcuNjIyVjM2Ni4xMjNaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Glasses(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M574.125 280.371L528.75 98.618C522.875 74.993 507.125 54.617 485.75 42.867C464.25 31.117 438.75 28.742 415.5 36.492L400.25 41.617C391.875 44.367 387.375 53.492 390.25 61.868L395.25 76.993C398 85.368 407.125 89.868 415.5 87.118L428.625 82.743C439.5 79.118 451.625 79.118 461.875 84.493S479.375 98.993 482.25 110.243L520.625 264.121C498.5 257.246 470.875 251.621 439.5 251.621C399.5 251.621 353.875 260.871 306.375 287.997H269.625C222.25 260.871 176.5 251.621 136.5 251.621C105.125 251.621 77.5 257.246 55.375 264.121L93.75 110.243C96.625 98.993 103.875 89.868 114.25 84.493C124.375 79.118 136.5 79.118 147.375 82.743L160.5 87.118C168.875 89.868 178 85.368 180.75 76.993L185.75 61.868C188.625 53.492 184.125 44.367 175.625 41.617L160.375 36.492C137.25 28.742 111.625 31.117 90.25 42.867C68.875 54.617 53.125 74.993 47.25 98.618L1.875 280.371C0.625 285.372 0 290.622 0 295.872V366.123C0 428.999 51.625 480 115.25 480H152.375C212.625 480 262.75 433.999 267.25 374.623L270.125 335.997H305.875L308.75 374.623C313.25 433.999 363.375 480 423.625 480H460.75C524.375 480 576 428.999 576 366.123V295.872C576 290.622 575.375 285.497 574.125 280.371ZM219.375 370.998C216.75 405.249 187.25 431.999 152.25 431.999H115.25C78.125 431.999 48 402.499 48 366.123V317.622C67.75 309.497 99.25 299.622 136.625 299.622C166.375 299.622 195.5 305.872 223.375 318.122L219.375 370.998ZM528 366.123C528 402.499 497.875 431.999 460.75 431.999H423.625C388.75 431.999 359.25 405.249 356.625 370.998L352.625 318.122C380.625 305.872 409.625 299.622 439.5 299.622C476.875 299.622 508.25 309.497 528 317.622V366.123Z" />
        </Icon>
    </>
}