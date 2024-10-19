
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `rocket` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rocket?s=light rocket}
 * @preview ![rocket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDUuMDk4IDE5LjM3NUM1MDMuODQ4IDEzLjc1IDQ5OC4zNDggOC4yNSA0OTIuNzIzIDdDNDYwLjEgMCA0MzQuNjAxIDAgNDA5LjEwMyAwQzMwNS4zNTggMCAyNDIuOTg3IDU1LjEyNSAxOTYuMjM5IDEyOEg5NC44N0M3OC40OTYgMTI4IDU5LjI0NyAxMzkuODc1IDUxLjk5NyAxNTQuNUwyLjUgMjUzLjI1QzEgMjU2LjYyNSAwLjEyNSAyNjAuMjUgMCAyNjRDMCAyNzcuMjUgMTAuNzQ5IDI4OCAyMy45OTkgMjg4SDExNi42MTlMMTA1Ljk5NCAzMDkuMzc1Qzk2Ljc0NSAzMjguMzc1IDExMC4zNjkgMzQ0LjI1IDExMi4yNDQgMzQ2TDE2NS45OSAzOTkuNzVDMTY3Ljc0MSA0MDEuNjI1IDE4My43NCA0MTUuMjUgMjAyLjYxNCA0MDUuODc1TDIyMy45ODggMzk1LjM3NVY0ODhDMjIzLjk4OCA1MDEuMjUgMjM0LjczNyA1MTEuODc1IDI0Ny45ODcgNTEyQzI1MS42MTEgNTExLjg3NSAyNTUuMjM2IDUxMSAyNTguNjExIDUwOS41TDM1Ny4yMzEgNDYwLjEyNUMzNzEuODU1IDQ1Mi43NSAzODMuODU0IDQzMy42MjUgMzgzLjg1NCA0MTcuMjVWMzE1Ljc1QzQ1Ni42IDI2OC44NzUgNTExLjk3MiAyMDYuMjUgNTExLjk3MiAxMDNDNTEyLjA5NyA3Ny41IDUxMi4wOTcgNTIgNTA1LjA5OCAxOS4zNzVaTTM2Ljk5OCAyNTZMODAuNDk2IDE2OC43NUM4Mi45OTUgMTY0IDg5LjM3IDE2MCA5NC44NyAxNjBIMTc5Ljk5QzE2Ni4xMTYgMTg4IDE0OC4yNDIgMjI0IDEzMi40OTMgMjU2SDM2Ljk5OFpNMzUxLjg1NiA0MTcuMjVDMzUxLjczMSA0MjIuNjI1IDM0Ny44NTYgNDI5IDM0Mi45ODEgNDMxLjVMMjU1Ljk4NiA0NzVWMzc5LjVDMjg3Ljk4NCAzNjMuNjI1IDMyMy43MzIgMzQ1Ljg3NSAzNTEuODU2IDMzMlY0MTcuMjVaTTM2Ni40OCAyODguODc1QzMyNi45ODIgMzA4Ljc1IDIzMC42MTIgMzU2LjM3NSAxODguNDkgMzc3LjEyNUwxMzQuNzQzIDMyMy42MjVDMTU1LjYxNyAyODEuMzc1IDIwMy4yMzkgMTg1IDIyMi45ODggMTQ1LjM3NUMyNzMuMTEgNjcgMzMwLjYwNyAzMiA0MDkuMTAzIDMyQzQzMC43MjcgMzIgNDUxLjEwMSAzMiA0NzUuNzI0IDM2LjI1QzQ4MC4wOTkgNjEuMTI1IDQ3OS45NzQgODEuNSA0NzkuOTc0IDEwM0M0NzkuOTc0IDE4MSA0NDQuOTc2IDIzOC41IDM2Ni40OCAyODguODc1Wk0zNjcuOTggODhDMzM3LjEwNyA4OCAzMTEuOTgzIDExMy4xMjUgMzExLjk4MyAxNDRDMzExLjk4MyAxNzUgMzM2Ljk4MiAyMDAgMzY3Ljk4IDIwMEMzOTguODUzIDIwMCA0MjMuOTc3IDE3NSA0MjMuOTc3IDE0NEM0MjMuOTc3IDExMy4xMjUgMzk4Ljg1MyA4OCAzNjcuOTggODhaTTM2Ny45OCAxNjhDMzU0LjczMSAxNjggMzQzLjk4MSAxNTcuMjUgMzQzLjk4MSAxNDRTMzU0LjczMSAxMjAgMzY3Ljk4IDEyMEMzODEuMjI5IDEyMCAzOTEuOTc5IDEzMC43NSAzOTEuOTc5IDE0NFMzODEuMjI5IDE2OCAzNjcuOTggMTY4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Rocket(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M505.098 19.375C503.848 13.75 498.348 8.25 492.723 7C460.1 0 434.601 0 409.103 0C305.358 0 242.987 55.125 196.239 128H94.87C78.496 128 59.247 139.875 51.997 154.5L2.5 253.25C1 256.625 0.125 260.25 0 264C0 277.25 10.749 288 23.999 288H116.619L105.994 309.375C96.745 328.375 110.369 344.25 112.244 346L165.99 399.75C167.741 401.625 183.74 415.25 202.614 405.875L223.988 395.375V488C223.988 501.25 234.737 511.875 247.987 512C251.611 511.875 255.236 511 258.611 509.5L357.231 460.125C371.855 452.75 383.854 433.625 383.854 417.25V315.75C456.6 268.875 511.972 206.25 511.972 103C512.097 77.5 512.097 52 505.098 19.375ZM36.998 256L80.496 168.75C82.995 164 89.37 160 94.87 160H179.99C166.116 188 148.242 224 132.493 256H36.998ZM351.856 417.25C351.731 422.625 347.856 429 342.981 431.5L255.986 475V379.5C287.984 363.625 323.732 345.875 351.856 332V417.25ZM366.48 288.875C326.982 308.75 230.612 356.375 188.49 377.125L134.743 323.625C155.617 281.375 203.239 185 222.988 145.375C273.11 67 330.607 32 409.103 32C430.727 32 451.101 32 475.724 36.25C480.099 61.125 479.974 81.5 479.974 103C479.974 181 444.976 238.5 366.48 288.875ZM367.98 88C337.107 88 311.983 113.125 311.983 144C311.983 175 336.982 200 367.98 200C398.853 200 423.977 175 423.977 144C423.977 113.125 398.853 88 367.98 88ZM367.98 168C354.731 168 343.981 157.25 343.981 144S354.731 120 367.98 120C381.229 120 391.979 130.75 391.979 144S381.229 168 367.98 168Z" />
        </Icon>
    </>
}