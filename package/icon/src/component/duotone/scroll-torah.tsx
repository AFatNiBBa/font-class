
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `scroll-torah` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/scroll-torah?s=duotone scroll-torah}
 * @preview ![scroll-torah](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1Ny41IDIwMC41SDIyMC43NUwyMzkuMTI1IDIzMS4zNzVMMjU3LjUgMjAwLjVaTTIyMC43NSAzMTEuNUgyNTcuNjI1TDIzOS4xMjUgMjgwLjYyNUwyMjAuNzUgMzExLjVaTTMyMCAxNDUuNUwzMDIuMjUgMTc1LjEyNUgzMzcuNjI1TDMyMCAxNDUuNVpNNDE5LjI1IDIwMC41SDM4Mi4zNzVMNDAwLjg3NSAyMzEuMjVMNDE5LjI1IDIwMC41Wk0zODIuNSAzMTEuNUg0MTkuMjVMNDAwLjg3NSAyODAuNzVMMzgyLjUgMzExLjVaTTk2IDMyVjQ4MEg1NDRWMzJIOTZaTTQ0NS4yNSAzMjYuMTI1QzQ0MS41IDMzMi43NSA0MzQuMzc1IDMzNi44NzUgNDI2Ljc1IDMzNi44NzVIMzY3LjI1TDMzOC4xMjUgMzg1LjVDMzM0LjM3NSAzOTIgMzI3LjUgMzk1Ljg3NSAzMjAgMzk2QzMxMi42MjUgMzk2IDMwNS43NSAzOTIuMTI1IDMwMS45OTkgMzg1Ljc1TDI3Mi43NSAzMzYuODc1SDIxMy4yNUMyMDUuNjI1IDMzNi44NzUgMTk4LjYyNSAzMzIuNzUgMTk0Ljg3NSAzMjYuMTI1UzE5MS4yNSAzMTEuMzc1IDE5NS4xMjUgMzA0Ljg3NUwyMjQuMzc1IDI1NkwxOTUgMjA3QzE5MS4xMjUgMjAwLjUgMTkxIDE5Mi4zNzUgMTk0Ljc1IDE4NS44NzVDMTk4LjUgMTc5LjI1IDIwNS42MjUgMTc1LjEyNSAyMTMuMjUgMTc1LjEyNUgyNzIuNzVMMzAxLjg3NSAxMjYuNUMzMDUuNjI1IDEyMCAzMTIuNjI1IDExNi4xMjUgMzIwIDExNi4xMjVDMzI3LjM3NSAxMTYgMzM0LjI1IDEyMCAzMzcuOTk5IDEyNi4yNUwzNjcuMjUgMTc1LjEyNUg0MjYuNzVDNDM0LjM3NSAxNzUuMTI1IDQ0MS4zNzUgMTc5LjI1IDQ0NS4xMjUgMTg1Ljg3NVM0NDguNzUgMjAwLjYyNSA0NDQuODc1IDIwNy4xMjVMNDE1LjYyNSAyNTZMNDQ1IDMwNUM0NDkgMzExLjUgNDQ5IDMxOS42MjUgNDQ1LjI1IDMyNi4xMjVaTTMyMCAzNjYuNUwzMzcuNzUgMzM2Ljg3NUgzMDIuMjVMMzIwIDM2Ni41Wk0zNTIuODc1IDIwMC41SDI4Ny4xMjVMMjUzLjg3NSAyNTZMMjg3LjEyNSAzMTEuNUgzNTIuODc1TDM4Ni4xMjUgMjU2TDM1Mi44NzUgMjAwLjVaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQ4IDBDMjEuNSAwIDAgMTQuMzc1IDAgMzJWNDgwQzAgNDk3LjYyNSAyMS41IDUxMiA0OCA1MTJTOTYgNDk3LjYyNSA5NiA0ODBWMzJDOTYgMTQuMzc1IDc0LjUgMCA0OCAwWk01OTIgMEM1NjUuNSAwIDU0NCAxNC4zNzUgNTQ0IDMyVjQ4MEM1NDQgNDk3LjYyNSA1NjUuNSA1MTIgNTkyIDUxMlM2NDAgNDk3LjYyNSA2NDAgNDgwVjMyQzY0MCAxNC4zNzUgNjE4LjUgMCA1OTIgMFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function ScrollTorah(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path opacity={.4} d="M257.5 200.5H220.75L239.125 231.375L257.5 200.5ZM220.75 311.5H257.625L239.125 280.625L220.75 311.5ZM320 145.5L302.25 175.125H337.625L320 145.5ZM419.25 200.5H382.375L400.875 231.25L419.25 200.5ZM382.5 311.5H419.25L400.875 280.75L382.5 311.5ZM96 32V480H544V32H96ZM445.25 326.125C441.5 332.75 434.375 336.875 426.75 336.875H367.25L338.125 385.5C334.375 392 327.5 395.875 320 396C312.625 396 305.75 392.125 301.999 385.75L272.75 336.875H213.25C205.625 336.875 198.625 332.75 194.875 326.125S191.25 311.375 195.125 304.875L224.375 256L195 207C191.125 200.5 191 192.375 194.75 185.875C198.5 179.25 205.625 175.125 213.25 175.125H272.75L301.875 126.5C305.625 120 312.625 116.125 320 116.125C327.375 116 334.25 120 337.999 126.25L367.25 175.125H426.75C434.375 175.125 441.375 179.25 445.125 185.875S448.75 200.625 444.875 207.125L415.625 256L445 305C449 311.5 449 319.625 445.25 326.125ZM320 366.5L337.75 336.875H302.25L320 366.5ZM352.875 200.5H287.125L253.875 256L287.125 311.5H352.875L386.125 256L352.875 200.5Z" />
            <path d="M48 0C21.5 0 0 14.375 0 32V480C0 497.625 21.5 512 48 512S96 497.625 96 480V32C96 14.375 74.5 0 48 0ZM592 0C565.5 0 544 14.375 544 32V480C544 497.625 565.5 512 592 512S640 497.625 640 480V32C640 14.375 618.5 0 592 0Z" />
        </Icon>
    </>
}