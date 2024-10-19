
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `rocket-launch` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rocket-launch?s=regular rocket-launch}
 * @preview ![rocket-launch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNS42MjMgMzUyLjEyNUM5Ljg3NCAzNzcuODc1IC0zIDQ0Mi42MjUgMC42MjUgNTExLjM3NUM2OS43NDYgNTE1IDEzNC4xMTggNTAyIDE1OS45OTEgNDc2LjI1QzIwMC4yMzkgNDM2IDIwMi44NjQgMzgyLjM3NSAxNjYuMjQxIDM0NS43NUMxMjkuNjE4IDMwOS4yNSA3NS45OTYgMzExLjc1IDM1LjYyMyAzNTIuMTI1Wk0xMTcuMzY5IDQzNi4xMjVDMTA4Ljc0NCA0NDQuNjI1IDg3LjI0NSA0NDkgNjQuMjQ3IDQ0Ny43NUM2Mi45OTcgNDI0Ljg3NSA2Ny4yNDYgNDAzLjI1IDc1Ljg3MSAzOTQuNzVDODkuMzcgMzgxLjI1IDEwNy4yNDQgMzgwLjM3NSAxMTkuMzY5IDM5Mi42MjVDMTMxLjYxOCA0MDQuNzUgMTMwLjc0MyA0MjIuNjI1IDExNy4zNjkgNDM2LjEyNVpNNTA1LjA5OCAxOS4yNUM1MDMuOTczIDEzLjg3NSA0OTguMDk4IDggNDkyLjcyMyA2Ljg3NUM0NjAuNiAwIDQzNS40NzYgMCA0MTAuMzUzIDBDMzA3LjIzMyAwIDI0NS4yMzcgNTUuMjUgMTk5LjExNCAxMjhIOTQuODdDNzguNjIxIDEyOCA1OS4yNDcgMTM5Ljg3NSA1MS45OTcgMTU0LjVMMi42MjUgMjUzLjI1QzEgMjU2LjYyNSAwLjI1IDI2MC4yNSAwIDI2NEMwLjEyNSAyNzcuMjUgMTAuNzQ5IDI4OCAyNC4xMjQgMjg4SDEyNy45OTNDMTgwLjk5IDI4OCAyMjMuOTg4IDMzMSAyMjMuOTg4IDM4NFY0ODhDMjIzLjk4OCA1MDEuMjUgMjM0LjczNyA1MTIgMjQ3Ljk4NyA1MTJDMjUxLjczNiA1MTEuODc1IDI1NS4zNjEgNTExIDI1OC43MzYgNTA5LjVMMzU3LjQ4MSA0NjAuMTI1QzM3MS45OCA0NTIuNzUgMzgzLjk3OSA0MzMuNSAzODMuOTc5IDQxNy4yNVYzMTIuNzVDNDU2LjQ3NSAyNjYuNSA1MTEuOTcyIDIwNC4zNzUgNTExLjk3MiAxMDEuNzVDNTEyLjA5NyA3Ni41IDUxMi4wOTcgNTEuMzc1IDUwNS4wOTggMTkuMjVaTTM1OC4xMDYgMjcyLjM3NUMzMzIuNzMyIDI4OC41IDM1MC42MDYgMjc5LjEyNSAyNTguODYxIDMyNC41QzI0NC4zNjIgMjkzIDIxOC45ODggMjY3LjYyNSAxODcuMzY1IDI1My4xMjVDMjMyLjczNyAxNjEuNSAyMjMuMjM4IDE3OS4zNzUgMjM5LjYxMiAxNTMuNzVDMjg2LjYwOSA3OS42MjUgMzM3LjczMiA0OCA0MTAuMzUzIDQ4QzQyOC4xMDIgNDggNDQzLjk3NiA0OCA0NjEuNzI1IDUwLjI1QzQ2NC4xIDY4LjUgNDYzLjk3NSA4NC43NSA0NjMuOTc1IDEwMS43NUM0NjMuOTc1IDE3NCA0MzIuMzUyIDIyNSAzNTguMTA2IDI3Mi4zNzVaTTM2Ny45OCAxMDRDMzQ1Ljk4MSAxMDQgMzI3Ljk4MiAxMjEuODc1IDMyNy45ODIgMTQ0QzMyOC4xMDcgMTY2LjEyNSAzNDUuOTgxIDE4NCAzNjguMTA1IDE4NEMzOTAuMTA0IDE4NCA0MDcuOTc4IDE2Ni4xMjUgNDA3Ljk3OCAxNDRTMzkwLjEwNCAxMDQgMzY3Ljk4IDEwNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function RocketLaunch(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M35.623 352.125C9.874 377.875 -3 442.625 0.625 511.375C69.746 515 134.118 502 159.991 476.25C200.239 436 202.864 382.375 166.241 345.75C129.618 309.25 75.996 311.75 35.623 352.125ZM117.369 436.125C108.744 444.625 87.245 449 64.247 447.75C62.997 424.875 67.246 403.25 75.871 394.75C89.37 381.25 107.244 380.375 119.369 392.625C131.618 404.75 130.743 422.625 117.369 436.125ZM505.098 19.25C503.973 13.875 498.098 8 492.723 6.875C460.6 0 435.476 0 410.353 0C307.233 0 245.237 55.25 199.114 128H94.87C78.621 128 59.247 139.875 51.997 154.5L2.625 253.25C1 256.625 0.25 260.25 0 264C0.125 277.25 10.749 288 24.124 288H127.993C180.99 288 223.988 331 223.988 384V488C223.988 501.25 234.737 512 247.987 512C251.736 511.875 255.361 511 258.736 509.5L357.481 460.125C371.98 452.75 383.979 433.5 383.979 417.25V312.75C456.475 266.5 511.972 204.375 511.972 101.75C512.097 76.5 512.097 51.375 505.098 19.25ZM358.106 272.375C332.732 288.5 350.606 279.125 258.861 324.5C244.362 293 218.988 267.625 187.365 253.125C232.737 161.5 223.238 179.375 239.612 153.75C286.609 79.625 337.732 48 410.353 48C428.102 48 443.976 48 461.725 50.25C464.1 68.5 463.975 84.75 463.975 101.75C463.975 174 432.352 225 358.106 272.375ZM367.98 104C345.981 104 327.982 121.875 327.982 144C328.107 166.125 345.981 184 368.105 184C390.104 184 407.978 166.125 407.978 144S390.104 104 367.98 104Z" />
        </Icon>
    </>
}