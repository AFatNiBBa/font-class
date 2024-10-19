
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cloud-music` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-music?s=light cloud-music}
 * @preview ![cloud-music](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDIuMjUgMTg4LjgxMkMzOTMuNjI1IDE4Mi44MTIgMzgyLjYyNSAxODEuMzc1IDM3Mi43NSAxODUuMTI1TDI3Ni43NSAyMjEuMTI1QzI2NC4zNDQgMjI1Ljc4MSAyNTYgMjM3LjgxMiAyNTYgMjUxLjA5NFYzMjQuODE0QzI0OC42OTcgMzIxLjgxOCAyNDAuNjIxIDMyMCAyMzIgMzIwQzIwMS4xMjUgMzIwIDE3NiAzNDEuNTMxIDE3NiAzNjhTMjAxLjEyNSA0MTYgMjMyIDQxNlMyODggMzk0LjQ2OSAyODggMzY4VjI1MS4wNjJMMzg0IDIxNS4wOTRWMjkyLjgxNEMzNzYuNjk3IDI4OS44MTggMzY4LjYyMSAyODggMzYwIDI4OEMzMjkuMTI1IDI4OCAzMDQgMzA5LjUzMSAzMDQgMzM2UzMyOS4xMjUgMzg0IDM2MCAzODRTNDE2IDM2Mi40NjkgNDE2IDMzNlYyMTUuMDk0QzQxNiAyMDQuNTk0IDQxMC44NDQgMTk0Ljc4MSA0MDIuMjUgMTg4LjgxMlpNMjMyIDM4NEMyMTkuMjE5IDM4NCAyMDggMzc2LjUzMSAyMDggMzY4UzIxOS4yMTkgMzUyIDIzMiAzNTJTMjU2IDM1OS40NjkgMjU2IDM2OFMyNDQuNzgxIDM4NCAyMzIgMzg0Wk0zNjAgMzUyQzM0Ny4yMTkgMzUyIDMzNiAzNDQuNTMxIDMzNiAzMzZTMzQ3LjIxOSAzMjAgMzYwIDMyMFMzODQgMzI3LjQ2OSAzODQgMzM2UzM3Mi43ODEgMzUyIDM2MCAzNTJaTTU3MS43NSAyMzguNzVDNTc0LjUgMjI4Ljg3NSA1NzYgMjE4LjYyNSA1NzYgMjA4QzU3NiAxNDYuMTI1IDUyNS44NzUgOTYgNDY0IDk2QzQ0Ny4yNSA5NiA0MzEuMTI1IDk5LjYyNSA0MTYgMTA2Ljc1QzM4NC4zNzUgNjEuNzUgMzMxLjc1IDMyIDI3MiAzMkMxNzcuNjI1IDMyIDEwMC4yNSAxMDYuNSA5Ni4yNSAyMDAuMjVDMzkuMjUgMjIwLjI1IDAgMjc0LjI1IDAgMzM2QzAgNDE1LjYyNSA2NC4zNzUgNDgwIDE0NCA0ODBINTEyQzU4Mi43NSA0ODAgNjQwIDQyMi43NSA2NDAgMzUyQzY0MCAzMDUgNjE0LjI1IDI2MS4yNSA1NzEuNzUgMjM4Ljc1Wk01MDcuNTQxIDQ0OEgxNDkuNDczQzkxLjE2NCA0NDggMzguNTY0IDQwNS44MzYgMzIuNjA5IDM0Ny44MzJDMjYuNzk1IDI5MS4yMTUgNjMuMjY2IDI0MS45MzggMTE0LjI3MSAyMjcuOTc1QzEyMi42MzkgMjI1LjY4NCAxMjguMDUxIDIxNy43MTUgMTI4LjAwMiAyMDkuMDM5QzEyOCAyMDguNzA1IDEyOCAyMDguMzY5IDEyOCAyMDguMDMzQzEyNy45OSAxNDcuMzQgMTY1LjEyOSA5MS4zNzUgMjIyLjcwOSA3Mi4xODZDMjk0LjE4IDQ4LjM2NSAzNjEuOTE2IDc4LjkxMiAzOTQuOTg4IDEzMy4wNzhDNDAwLjk3MyAxNDIuODgxIDQxMy4zNDIgMTQ1LjA3IDQyMy4yMDcgMTM5LjE4OUM0NDAuMDkyIDEyOS4xMjUgNDYwLjk4NiAxMjUuMTIxIDQ4My4xNSAxMzAuMjAxQzUwOS45OTggMTM2LjM1NSA1MzIuNTk2IDE1Ny4yMDEgNTQwLjQwNiAxODMuNjE1QzU0Ni4yMDUgMjAzLjIyNyA1NDQuNzEzIDIyMi4zNTcgNTM3Ljg5OCAyMzguNzc1QzUzMy43NjIgMjQ4Ljc0NCA1MzkuOTU5IDI1OS41MjUgNTQ5Ljg4MyAyNjMuNzcxQzU4Ny4yMjMgMjc5Ljc0NiA2MTIuMzAxIDMxOC44MyA2MDcuMzg3IDM2My4wMThDNjAxLjkwMiA0MTIuMzE4IDU1Ny4xNDYgNDQ4IDUwNy41NDEgNDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CloudMusic(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M402.25 188.812C393.625 182.812 382.625 181.375 372.75 185.125L276.75 221.125C264.344 225.781 256 237.812 256 251.094V324.814C248.697 321.818 240.621 320 232 320C201.125 320 176 341.531 176 368S201.125 416 232 416S288 394.469 288 368V251.062L384 215.094V292.814C376.697 289.818 368.621 288 360 288C329.125 288 304 309.531 304 336S329.125 384 360 384S416 362.469 416 336V215.094C416 204.594 410.844 194.781 402.25 188.812ZM232 384C219.219 384 208 376.531 208 368S219.219 352 232 352S256 359.469 256 368S244.781 384 232 384ZM360 352C347.219 352 336 344.531 336 336S347.219 320 360 320S384 327.469 384 336S372.781 352 360 352ZM571.75 238.75C574.5 228.875 576 218.625 576 208C576 146.125 525.875 96 464 96C447.25 96 431.125 99.625 416 106.75C384.375 61.75 331.75 32 272 32C177.625 32 100.25 106.5 96.25 200.25C39.25 220.25 0 274.25 0 336C0 415.625 64.375 480 144 480H512C582.75 480 640 422.75 640 352C640 305 614.25 261.25 571.75 238.75ZM507.541 448H149.473C91.164 448 38.564 405.836 32.609 347.832C26.795 291.215 63.266 241.938 114.271 227.975C122.639 225.684 128.051 217.715 128.002 209.039C128 208.705 128 208.369 128 208.033C127.99 147.34 165.129 91.375 222.709 72.186C294.18 48.365 361.916 78.912 394.988 133.078C400.973 142.881 413.342 145.07 423.207 139.189C440.092 129.125 460.986 125.121 483.15 130.201C509.998 136.355 532.596 157.201 540.406 183.615C546.205 203.227 544.713 222.357 537.898 238.775C533.762 248.744 539.959 259.525 549.883 263.771C587.223 279.746 612.301 318.83 607.387 363.018C601.902 412.318 557.146 448 507.541 448Z" />
        </Icon>
    </>
}