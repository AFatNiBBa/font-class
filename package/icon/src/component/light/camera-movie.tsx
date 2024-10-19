
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `camera-movie` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/camera-movie?s=light camera-movie}
 * @preview ![camera-movie](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgMjU1Ljk5SDEyOEMxMjcuOTY3IDI1NS45OSAxMjcuOTM2IDI1NiAxMjcuOTAyIDI1NkgxNkM3LjE2NCAyNTYgMCAyNjMuMTYyIDAgMjcyQzAgMjgwLjgzNiA3LjE2NCAyODggMTYgMjg4SDcyLjg2OUM2Ny4zNzUgMjk3LjQ0MyA2NCAzMDguMjc1IDY0IDMxOS45ODZWNDQ3Ljk3M0M2NCA0ODMuMzE2IDkyLjY1NCA1MTEuOTY5IDEyOCA1MTEuOTY5SDMyMEMzNTUuMzQ2IDUxMS45NjkgMzg0IDQ4My4zMTYgMzg0IDQ0Ny45NzNWMzE5Ljk4NkMzODQgMjg0LjY0MyAzNTUuMzQ2IDI1NS45OSAzMjAgMjU1Ljk5Wk0zNTIgNDQ3Ljk3M0MzNTIgNDY1LjYxNyAzMzcuNjQ1IDQ3OS45NzEgMzIwIDQ3OS45NzFIMTI4QzExMC4zNTUgNDc5Ljk3MSA5NiA0NjUuNjE3IDk2IDQ0Ny45NzNWMzE5Ljk4NkM5NiAzMDIuMzY1IDExMC4zMjQgMjg4LjAzNSAxMjcuOTQxIDI4OEgxNzZDMTc2LjAyMSAyODggMTc2LjAzNyAyODcuOTg4IDE3Ni4wNTkgMjg3Ljk4OEgzMjBDMzM3LjY0NSAyODcuOTg4IDM1MiAzMDIuMzQ0IDM1MiAzMTkuOTg2VjQ0Ny45NzNaTTMzNiAwQzI5NC45OTggMCAyNTkuNTE4IDIyLjI3MyAyNDAgNTUuMTQ1QzIyMC40ODIgMjIuMjczIDE4NS4wMDIgMCAxNDQgMEM4Mi4xNDUgMCAzMiA1MC4xNDUgMzIgMTEyUzgyLjE0NSAyMjQgMTQ0IDIyNEgzMzZDMzk3Ljg1NSAyMjQgNDQ4IDE3My44NTUgNDQ4IDExMlMzOTcuODU1IDAgMzM2IDBaTTMzNiAxOTJIMTQ0Qzk5Ljg4OSAxOTIgNjQgMTU2LjExMSA2NCAxMTJDNjQgNjcuODg3IDk5Ljg4OSAzMiAxNDQgMzJDMTcyLjIwNSAzMiAxOTcuODA3IDQ2Ljc2IDIxMi40ODQgNzEuNDhDMjE4LjI1IDgxLjE5MSAyMjguNzA3IDg3LjE0NSAyNDAgODcuMTQ1UzI2MS43NSA4MS4xOTEgMjY3LjUxNiA3MS40OEMyODIuMTk1IDQ2Ljc2IDMwNy43OTcgMzIgMzM2IDMyQzM4MC4xMTMgMzIgNDE2IDY3Ljg4NyA0MTYgMTEyQzQxNiAxNTYuMTExIDM4MC4xMTMgMTkyIDMzNiAxOTJaTTU1My4yNSAyNjYuOTY5QzUzOC45NjkgMjU4LjEyNSA1MjEuNTE2IDI1Ny4zMTIgNTA2LjUzMSAyNjQuODQ0TDQyNC44NDQgMzA1LjY4OEM0MTYuOTM4IDMwOS42NTYgNDEzLjczNCAzMTkuMjUgNDE3LjY4OCAzMjcuMTU2QzQyMS42NDEgMzM1LjAzMSA0MzEuMjgxIDMzOC4yODEgNDM5LjE1NiAzMzQuMzEyTDUyMC44MjggMjkzLjQ2OUM1MjguMDMxIDI4OS44NDQgNTM0LjEwOSAyOTIuNzgxIDUzNi40MjIgMjk0LjE4N0M1MzguNzAzIDI5NS41OTQgNTQ0IDI5OS43NSA1NDQgMzA3Ljc4MVY0NjAuMjE5QzU0NCA0NjguMjUgNTM4LjcwMyA0NzIuNDA2IDUzNi40MjIgNDczLjgxM0M1MzQuMTA5IDQ3NS4yMTkgNTI4LjAxNiA0NzguMTI1IDUyMC44NDQgNDc0LjUzMUw0MzkuMTU2IDQzMy42ODhDNDMxLjI4MSA0MjkuNzE5IDQyMS42NDEgNDMyLjk2OSA0MTcuNjg4IDQ0MC44NDRDNDEzLjczNCA0NDguNzUgNDE2LjkzOCA0NTguMzQ0IDQyNC44NDQgNDYyLjMxMkw1MDYuNTQ3IDUwMy4xNTZDNTEzLjM3NSA1MDYuNTYyIDUyMC43MDMgNTA4LjI1IDUyOC4wMTYgNTA4LjI1QzUzNi43NjYgNTA4LjI1IDU0NS40ODQgNTA1Ljg0NCA1NTMuMjUgNTAxLjAzMUM1NjcuNSA0OTIuMjE5IDU3NiA0NzYuOTY5IDU3NiA0NjAuMjE5VjMwNy43ODFDNTc2IDI5MS4wMzEgNTY3LjUgMjc1Ljc4MSA1NTMuMjUgMjY2Ljk2OVpNMTQ0IDg4QzEzMC43NDYgODggMTIwIDk4Ljc0NCAxMjAgMTEyQzEyMCAxMjUuMjU0IDEzMC43NDYgMTM2IDE0NCAxMzZDMTU3LjI1NiAxMzYgMTY4IDEyNS4yNTQgMTY4IDExMkMxNjggOTguNzQ0IDE1Ny4yNTYgODggMTQ0IDg4Wk0zMzYgODhDMzIyLjc0NiA4OCAzMTIgOTguNzQ0IDMxMiAxMTJDMzEyIDEyNS4yNTQgMzIyLjc0NiAxMzYgMzM2IDEzNkMzNDkuMjU2IDEzNiAzNjAgMTI1LjI1NCAzNjAgMTEyQzM2MCA5OC43NDQgMzQ5LjI1NiA4OCAzMzYgODhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CameraMovie(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M320 255.99H128C127.967 255.99 127.936 256 127.902 256H16C7.164 256 0 263.162 0 272C0 280.836 7.164 288 16 288H72.869C67.375 297.443 64 308.275 64 319.986V447.973C64 483.316 92.654 511.969 128 511.969H320C355.346 511.969 384 483.316 384 447.973V319.986C384 284.643 355.346 255.99 320 255.99ZM352 447.973C352 465.617 337.645 479.971 320 479.971H128C110.355 479.971 96 465.617 96 447.973V319.986C96 302.365 110.324 288.035 127.941 288H176C176.021 288 176.037 287.988 176.059 287.988H320C337.645 287.988 352 302.344 352 319.986V447.973ZM336 0C294.998 0 259.518 22.273 240 55.145C220.482 22.273 185.002 0 144 0C82.145 0 32 50.145 32 112S82.145 224 144 224H336C397.855 224 448 173.855 448 112S397.855 0 336 0ZM336 192H144C99.889 192 64 156.111 64 112C64 67.887 99.889 32 144 32C172.205 32 197.807 46.76 212.484 71.48C218.25 81.191 228.707 87.145 240 87.145S261.75 81.191 267.516 71.48C282.195 46.76 307.797 32 336 32C380.113 32 416 67.887 416 112C416 156.111 380.113 192 336 192ZM553.25 266.969C538.969 258.125 521.516 257.312 506.531 264.844L424.844 305.688C416.938 309.656 413.734 319.25 417.688 327.156C421.641 335.031 431.281 338.281 439.156 334.312L520.828 293.469C528.031 289.844 534.109 292.781 536.422 294.187C538.703 295.594 544 299.75 544 307.781V460.219C544 468.25 538.703 472.406 536.422 473.813C534.109 475.219 528.016 478.125 520.844 474.531L439.156 433.688C431.281 429.719 421.641 432.969 417.688 440.844C413.734 448.75 416.938 458.344 424.844 462.312L506.547 503.156C513.375 506.562 520.703 508.25 528.016 508.25C536.766 508.25 545.484 505.844 553.25 501.031C567.5 492.219 576 476.969 576 460.219V307.781C576 291.031 567.5 275.781 553.25 266.969ZM144 88C130.746 88 120 98.744 120 112C120 125.254 130.746 136 144 136C157.256 136 168 125.254 168 112C168 98.744 157.256 88 144 88ZM336 88C322.746 88 312 98.744 312 112C312 125.254 322.746 136 336 136C349.256 136 360 125.254 360 112C360 98.744 349.256 88 336 88Z" />
        </Icon>
    </>
}