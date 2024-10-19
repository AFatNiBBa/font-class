
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `rocket` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rocket?s=regular rocket}
 * @preview ![rocket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjggMTA0QzM0NS44NzUgMTA0IDMyOCAxMjEuODc1IDMyOCAxNDRTMzQ1Ljg3NSAxODQgMzY4IDE4NFM0MDggMTY2LjEyNSA0MDggMTQ0UzM4OS45OTkgMTA0IDM2OCAxMDRaTTUwNS4xMjUgMTkuMzc1QzUwMy44NzUgMTMuNzUgNDk4LjM3NSA4LjI1IDQ5Mi43NSA3QzQ2MC4xMjUgMCA0MzQuNjI1IDAgNDA5LjEyNSAwQzMwNS4zNzUgMCAyNDMgNTUuMTI1IDE5Ni4yNSAxMjhIOTQuODc1Qzc4LjUgMTI4IDU5LjI1IDEzOS44NzUgNTIgMTU0LjVMMi41IDI1My4yNUMxIDI1Ni42MjUgMC4xMjUgMjYwLjI1IDAgMjY0QzAgMjc3LjI1IDEwLjc1IDI4OCAyNCAyODhIMTE2LjYyNUwxMDUuOTk5IDMwOS4zNzVDOTYuNzUgMzI4LjM3NSAxMTAuMzc1IDM0NC4xMjUgMTEyLjI1IDM0NkwxNjUuOTk5IDM5OS43NUMxODEuNSA0MTUuMjUgMTk5Ljc1IDQwNy4yNSAyMDIuNjI1IDQwNS44NzVMMjI0IDM5NS4zNzVWNDg4QzIyNCA1MDEuMjUgMjM0Ljc1IDUxMiAyNDggNTEyQzI1MS42MjUgNTExLjg3NSAyNTUuMjUgNTExIDI1OC42MjUgNTA5LjVMMzU3LjM3NSA0NjAuMTI1QzM3MiA0NTIuNzUgMzgzLjg3NSA0MzMuNjI1IDM4My44NzUgNDE3LjI1VjMxNS43NUM0NTYuNjI1IDI2OC44NzUgNTEyIDIwNi4yNSA1MTIgMTAzQzUxMi4xMjUgNzcuNSA1MTIuMTI1IDUyIDUwNS4xMjUgMTkuMzc1Wk0zNTguNSAyNzVDMzIxLjYyNSAyOTMuNSAyMzcuMzc1IDMzNS4xMjUgMTkxLjc1IDM1Ny43NUwxNTQuMjUgMzIwLjI1QzE3Ni44NzUgMjc0LjUgMjE4LjUgMTkwLjI1IDIzNyAxNTMuMzc1QzI4NC4zNzUgNzkuNSAzMzYgNDggNDA5LjEyNSA0OEM0MjcuMTI1IDQ4IDQ0My41IDQ4IDQ2MS43NSA1MC4zNzVDNDY0LjEyNSA2OSA0NjQgODUuNjI1IDQ2NCAxMDNDNDY0IDE3NS43NSA0MzIuMzc1IDIyNy4yNSAzNTguNSAyNzVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Rocket(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M368 104C345.875 104 328 121.875 328 144S345.875 184 368 184S408 166.125 408 144S389.999 104 368 104ZM505.125 19.375C503.875 13.75 498.375 8.25 492.75 7C460.125 0 434.625 0 409.125 0C305.375 0 243 55.125 196.25 128H94.875C78.5 128 59.25 139.875 52 154.5L2.5 253.25C1 256.625 0.125 260.25 0 264C0 277.25 10.75 288 24 288H116.625L105.999 309.375C96.75 328.375 110.375 344.125 112.25 346L165.999 399.75C181.5 415.25 199.75 407.25 202.625 405.875L224 395.375V488C224 501.25 234.75 512 248 512C251.625 511.875 255.25 511 258.625 509.5L357.375 460.125C372 452.75 383.875 433.625 383.875 417.25V315.75C456.625 268.875 512 206.25 512 103C512.125 77.5 512.125 52 505.125 19.375ZM358.5 275C321.625 293.5 237.375 335.125 191.75 357.75L154.25 320.25C176.875 274.5 218.5 190.25 237 153.375C284.375 79.5 336 48 409.125 48C427.125 48 443.5 48 461.75 50.375C464.125 69 464 85.625 464 103C464 175.75 432.375 227.25 358.5 275Z" />
        </Icon>
    </>
}