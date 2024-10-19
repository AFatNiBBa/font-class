
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cloud-bolt` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-bolt?s=light cloud-bolt}
 * @preview ![cloud-bolt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTUuNzUgMTEyLjI1QzQxMS43NSA2Ny4zNzUgMzczLjg3NSAzMiAzMjggMzJDMzEwLjI1IDMyIDI5My4yNSAzNy4yNSAyNzguNzUgNDcuMjVDMjQ1LjE1NCAzLjIwMSAxODQuMjQ4IC0xNC42NSAxMjcuNjU0IDEzLjY3Qzg3LjkwMyAzMy41NjEgNjQgNzUuNTQ3IDY0IDEyMFYxMjAuMzc1QzIwLjI2OCAxMzguNjY4IC03LjEyMyAxODUuMDY0IDEuNjI1IDIzNC4zNDZDMTAuNTg0IDI4NC43OTkgNTcuMDY3IDMyMCAxMDguMzA5IDMyMEgxNDRDMTUyLjgzNiAzMjAgMTYwIDMxMi44MzYgMTYwIDMwNEMxNjAgMjk1LjE3NCAxNTIuODQ4IDI4OCAxNDQgMjg4SDEwNi4wMUM3NSAyODggNDYuMDkgMjY5LjI0IDM2LjAzOSAyMzkuOTA0QzIxLjk0NiAxOTguNzU2IDQ2LjI2NCAxNTcuMzEyIDg1LjI1IDE0Ni43NUw5OC42MjUgMTQzLjI1TDk2LjYyNSAxMjZDOTYuMjUgMTI0IDk2IDEyMiA5NiAxMjBDOTYgNzEuNSAxMzUuNSAzMiAxODQgMzJDMjE2LjI1IDMyIDI0NS43NSA0OS44NzUgMjYxLjI1IDc4Ljc1TDI3MS43NSA5OC42MjVMMjg3IDgyLjEyNUMzMDEuNzc5IDY2LjE1NiAzMjMuMjUyIDYwLjExNSAzNDUuMTQ1IDY2LjUxQzM2Ni40MDggNzIuNzIxIDM4MC44ODMgOTIuNTkgMzgzLjUxNCAxMTQuNTg0QzM4NC4yNCAxMjAuNjY4IDM4NC4xNTMgMTIwLjEwNCAzODMuMjUgMTI2Ljg3NUwzODAuNzUgMTQ2Ljg3NUw0MDQuMjUgMTQ0LjVDNDA1LjM3NSAxNDQuMjUgNDA2Ljc1IDE0NC4xMjUgNDA4IDE0NC4xMjVDNDQ3Ljc1IDE0NC4xMjUgNDgwIDE3Ni4zNzUgNDgwIDIxNi4xMjVDNDgwIDI1NC4xMjUgNDUwLjI1IDI4NSA0MTMgMjg3LjYyNUwzMzUuOTAzIDI4Ny45MDJDMzI3LjI2IDI4Ny45NTUgMzIwIDI5NC45MSAzMjAgMzA0QzMyMCAzMTIuODM2IDMyNy4xNjQgMzIwIDMzNiAzMjBINDAzLjc5N0M0NTkuNTYzIDMyMCA1MDguNTM3IDI3Ny45MTQgNTExLjgxNyAyMjIuMjQ0QzUxNS4yMDUgMTY0LjcwNyA0NzEuNDAxIDExNi40IDQxNS43NSAxMTIuMjVaTTMyMCAzNTJIMjI3LjI1TDMxNi4wMzEgMjUwLjUzMUMzMjEuODc1IDI0My44NzUgMzIxLjE4OCAyMzMuNzgxIDMxNC41MzEgMjI3Ljk2OUMzMDcuOTA2IDIyMi4xODggMjk3LjgxMyAyMjIuNzgxIDI5MS45NjkgMjI5LjQ2OUwxNzkuOTY5IDM1Ny40NjlDMTc1LjgxMyAzNjIuMTg4IDE3NC44NDQgMzY4LjkwNiAxNzcuNDM4IDM3NC42MjVTMTg1LjcxOSAzODQgMTkyIDM4NEgyODQuNzVMMTk1Ljk2OSA0ODUuNDY5QzE5MC4xMjUgNDkyLjEyNSAxOTAuODEzIDUwMi4yMTkgMTk3LjQ2OSA1MDguMDMxQzIwMC41IDUxMC42ODggMjA0LjI1IDUxMiAyMDggNTEyQzIxMi40MzggNTEyIDIxNi44NzUgNTEwLjE1NiAyMjAuMDMxIDUwNi41MzFMMzMyLjAzMSAzNzguNTMxQzMzNi4xODggMzczLjgxMyAzMzcuMTU2IDM2Ny4wOTQgMzM0LjU2MyAzNjEuMzc1UzMyNi4yODEgMzUyIDMyMCAzNTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CloudBolt(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M415.75 112.25C411.75 67.375 373.875 32 328 32C310.25 32 293.25 37.25 278.75 47.25C245.154 3.201 184.248 -14.65 127.654 13.67C87.903 33.561 64 75.547 64 120V120.375C20.268 138.668 -7.123 185.064 1.625 234.346C10.584 284.799 57.067 320 108.309 320H144C152.836 320 160 312.836 160 304C160 295.174 152.848 288 144 288H106.01C75 288 46.09 269.24 36.039 239.904C21.946 198.756 46.264 157.312 85.25 146.75L98.625 143.25L96.625 126C96.25 124 96 122 96 120C96 71.5 135.5 32 184 32C216.25 32 245.75 49.875 261.25 78.75L271.75 98.625L287 82.125C301.779 66.156 323.252 60.115 345.145 66.51C366.408 72.721 380.883 92.59 383.514 114.584C384.24 120.668 384.153 120.104 383.25 126.875L380.75 146.875L404.25 144.5C405.375 144.25 406.75 144.125 408 144.125C447.75 144.125 480 176.375 480 216.125C480 254.125 450.25 285 413 287.625L335.903 287.902C327.26 287.955 320 294.91 320 304C320 312.836 327.164 320 336 320H403.797C459.563 320 508.537 277.914 511.817 222.244C515.205 164.707 471.401 116.4 415.75 112.25ZM320 352H227.25L316.031 250.531C321.875 243.875 321.188 233.781 314.531 227.969C307.906 222.188 297.813 222.781 291.969 229.469L179.969 357.469C175.813 362.188 174.844 368.906 177.438 374.625S185.719 384 192 384H284.75L195.969 485.469C190.125 492.125 190.813 502.219 197.469 508.031C200.5 510.688 204.25 512 208 512C212.438 512 216.875 510.156 220.031 506.531L332.031 378.531C336.188 373.813 337.156 367.094 334.563 361.375S326.281 352 320 352Z" />
        </Icon>
    </>
}