
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tire-rugged` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tire-rugged?s=thin tire-rugged}
 * @preview ![tire-rugged](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDUuNDQxIDI5OC4zNjFDMjAwLjI0NiAzMDUuNTEyIDIwMS44MzIgMzE1LjUxOCAyMDguOTggMzIwLjcxMVMyMjYuMTM1IDMyNC4zMiAyMzEuMzMgMzE3LjE3QzIzNi41MjMgMzEwLjAyMSAyMzQuOTM3IDMwMC4wMTYgMjI3Ljc4OSAyOTQuODIyUzIxMC42MzUgMjkxLjIxMyAyMDUuNDQxIDI5OC4zNjFaTTQ4MCAxOTJINDcwLjYyNUM0NjYuMTI1IDE3Ny4xMjUgNDYwLjM3NSAxNjIuODc1IDQ1My4xMjUgMTQ5LjVMNDU5LjYyNSAxNDIuODc1QzQ3Mi4xMjUgMTMwLjM3NSA0NzIuMTI1IDExMC4xMjUgNDU5LjYyNSA5Ny42MjVMNDE0LjM3NSA1Mi4zNzVDNDA4LjEyNSA0Ni4xMjUgMzk5LjkzOCA0MyAzOTEuNzUgNDNTMzc1LjM3NSA0Ni4xMjUgMzY5LjEyNSA1Mi4zNzVMMzYyLjUgNTguODc1QzM0OS4xMjUgNTEuNjI1IDMzNC44NzUgNDUuODc1IDMyMCA0MS4zNzVWMzJDMzIwIDE0LjM3NSAzMDUuNjI1IDAgMjg4IDBIMjI0QzIwNi4zNzUgMCAxOTIgMTQuMzc1IDE5MiAzMlY0MS4zNzVDMTc3LjEyNSA0NS44NzUgMTYyLjg3NSA1MS42MjUgMTQ5LjUgNTguODc1TDE0Mi44NzUgNTIuMzc1QzEzNi42MjUgNDYuMTI1IDEyOC40MzggNDMgMTIwLjI1IDQzUzEwMy44NzUgNDYuMTI1IDk3LjYyNSA1Mi4zNzVMNTIuMzc1IDk3LjYyNUMzOS44NzUgMTEwLjEyNSAzOS44NzUgMTMwLjM3NSA1Mi4zNzUgMTQyLjg3NUw1OC44NzUgMTQ5LjVDNTEuNjI1IDE2Mi44NzUgNDUuODc1IDE3Ny4xMjUgNDEuMzc1IDE5MkgzMkMxNC4zNzUgMTkyIDAgMjA2LjM3NSAwIDIyNFYyODhDMCAzMDUuNjI1IDE0LjM3NSAzMjAgMzIgMzIwSDQxLjM3NUM0NS44NzUgMzM0Ljg3NSA1MS42MjUgMzQ5LjEyNSA1OC44NzUgMzYyLjYyNUw1Mi4zNzUgMzY5LjEyNUMzOS44NzUgMzgxLjYyNSAzOS44NzUgNDAxLjg3NSA1Mi4zNzUgNDE0LjM3NUw5Ny42MjUgNDU5LjYyNUMxMDMuODc1IDQ2NS44NzUgMTEyLjA2MiA0NjkgMTIwLjI1IDQ2OVMxMzYuNjI1IDQ2NS44NzUgMTQyLjg3NSA0NTkuNjI1TDE0OS41IDQ1My4xMjVDMTYyLjg3NSA0NjAuMzc1IDE3Ny4xMjUgNDY2LjEyNSAxOTIgNDcwLjYyNVY0ODBDMTkyIDQ5Ny42MjUgMjA2LjM3NSA1MTIgMjI0IDUxMkgyODhDMzA1LjYyNSA1MTIgMzIwIDQ5Ny42MjUgMzIwIDQ4MFY0NzAuNjI1QzMzNC44NzUgNDY2LjEyNSAzNDkuMTI1IDQ2MC4zNzUgMzYyLjUgNDUzLjEyNUwzNjkuMTI1IDQ1OS42MjVDMzc1LjM3NSA0NjUuODc1IDM4My41NjIgNDY5IDM5MS43NSA0NjlTNDA4LjEyNSA0NjUuODc1IDQxNC4zNzUgNDU5LjYyNUw0NTkuNjI1IDQxNC4zNzVDNDcyLjEyNSA0MDEuODc1IDQ3Mi4xMjUgMzgxLjYyNSA0NTkuNjI1IDM2OS4xMjVMNDUzLjEyNSAzNjIuNjI1QzQ2MC4zNzUgMzQ5LjEyNSA0NjYuMTI1IDMzNC44NzUgNDcwLjYyNSAzMjBINDgwQzQ5Ny42MjUgMzIwIDUxMiAzMDUuNjI1IDUxMiAyODhWMjI0QzUxMiAyMDYuMzc1IDQ5Ny42MjUgMTkyIDQ4MCAxOTJaTTQ5NiAyODhDNDk2IDI5Ni44MjIgNDg4LjgyMiAzMDQgNDgwIDMwNEg0NzAuNjI1QzQ2My41NzIgMzA0IDQ1Ny4zNTIgMzA4LjYxNyA0NTUuMzExIDMxNS4zNjdDNDUxLjAwMiAzMjkuNjA1IDQ0NS41MjUgMzQyLjk1OSA0MzkuMDI5IDM1NS4wNTVDNDM1LjY4OSAzNjEuMjczIDQzNi44MiAzNjguOTQ3IDQ0MS44MTEgMzczLjkzOEw0NDguMzExIDM4MC40MzlDNDUxLjMzNiAzODMuNDYzIDQ1MyAzODcuNDc5IDQ1MyAzOTEuNzVDNDUzIDM5Ni4wMiA0NTEuMzM2IDQwMC4wMzcgNDQ4LjMxMSA0MDMuMDYxTDQwMy4wNjEgNDQ4LjMxMUM0MDAuMDM3IDQ1MS4zMzQgMzk2LjAyMSA0NTMgMzkxLjc1IDQ1M1MzODMuNDYzIDQ1MS4zMzQgMzgwLjMzIDQ0OC4yMDNMMzczLjcwNSA0NDEuNzAzQzM3MC42MzkgNDM4LjY5NSAzNjYuNTkgNDM3LjEyNSAzNjIuNDk2IDQzNy4xMjVDMzU5Ljg5NSA0MzcuMTI1IDM1Ny4yNzUgNDM3Ljc1OCAzNTQuODc1IDQzOS4wNTlDMzQyLjk2NSA0NDUuNTE2IDMyOS42NzIgNDUwLjk4MiAzMTUuMzY3IDQ1NS4zMTFDMzA4LjYxNyA0NTcuMzUyIDMwNCA0NjMuNTcyIDMwNCA0NzAuNjI1VjQ4MEMzMDQgNDg4LjgyMiAyOTYuODIyIDQ5NiAyODggNDk2SDIyNEMyMTUuMTc4IDQ5NiAyMDggNDg4LjgyMiAyMDggNDgwVjQ3MC42MjVDMjA4IDQ2My41NzIgMjAzLjM4MyA0NTcuMzUyIDE5Ni42MzMgNDU1LjMxMUMxODIuMzI4IDQ1MC45ODIgMTY5LjAzNSA0NDUuNTE2IDE1Ny4xMjUgNDM5LjA1OUMxNTQuNzI1IDQzNy43NTggMTUyLjEwNSA0MzcuMTI1IDE0OS41MDYgNDM3LjEyNUMxNDUuNDEgNDM3LjEyNSAxNDEuMzYxIDQzOC42OTUgMTM4LjI5NSA0NDEuNzAzTDEzMS41NjEgNDQ4LjMxMUMxMjguNTM3IDQ1MS4zMzQgMTI0LjUyMSA0NTMgMTIwLjI1IDQ1M0MxMTUuOTggNDUzIDExMS45NjMgNDUxLjMzNCAxMDguOTM5IDQ0OC4zMTFMNjMuNjg5IDQwMy4wNjFDNjAuNjY0IDQwMC4wMzcgNTkgMzk2LjAyIDU5IDM5MS43NUM1OSAzODcuNDc5IDYwLjY2NCAzODMuNDYzIDYzLjY4OSAzODAuNDM4TDcwLjE4OSAzNzMuOTM4Qzc1LjE4IDM2OC45NDcgNzYuMzExIDM2MS4yNzMgNzIuOTcxIDM1NS4wNTVDNjYuNDc1IDM0Mi45NTkgNjAuOTk4IDMyOS42MDUgNTYuNjg5IDMxNS4zNjdDNTQuNjQ4IDMwOC42MTcgNDguNDI4IDMwNCA0MS4zNzUgMzA0SDMyQzIzLjE3OCAzMDQgMTYgMjk2LjgyMiAxNiAyODhWMjI0QzE2IDIxNS4xNzggMjMuMTc4IDIwOCAzMiAyMDhINDEuMzc1QzQ4LjQyOCAyMDggNTQuNjQ4IDIwMy4zODMgNTYuNjg5IDE5Ni42MzNDNjEuMDE4IDE4Mi4zMjggNjYuNDg0IDE2OS4wMzUgNzIuOTQxIDE1Ny4xMjVDNzYuMjg5IDE1MC45NDcgNzUuMjE3IDE0My4zMDkgNzAuMjk3IDEzOC4yOTVMNjMuNjg5IDEzMS41NjFDNjAuNjY0IDEyOC41MzcgNTkgMTI0LjUyIDU5IDEyMC4yNUM1OSAxMTUuOTc5IDYwLjY2NCAxMTEuOTYzIDYzLjY4OSAxMDguOTM4TDEwOC45MzkgNjMuNjg4QzExMS45NjMgNjAuNjY0IDExNS45NzkgNTkgMTIwLjI1IDU5UzEyOC41MzcgNjAuNjY0IDEzMS42NyA2My43OTdMMTM4LjI5NSA3MC4yOTdDMTQxLjM2MSA3My4zMDUgMTQ1LjQxIDc0Ljg3NSAxNDkuNTA2IDc0Ljg3NUMxNTIuMTA1IDc0Ljg3NSAxNTQuNzI3IDc0LjI0MiAxNTcuMTI1IDcyLjk0MUMxNjkuMDM1IDY2LjQ4NCAxODIuMzI4IDYxLjAxOCAxOTYuNjMzIDU2LjY4OUMyMDMuMzgzIDU0LjY0NiAyMDggNDguNDI4IDIwOCA0MS4zNzVWMzJDMjA4IDIzLjE3OCAyMTUuMTc4IDE2IDIyNCAxNkgyODhDMjk2LjgyMiAxNiAzMDQgMjMuMTc4IDMwNCAzMlY0MS4zNzVDMzA0IDQ4LjQyOCAzMDguNjE3IDU0LjY0NiAzMTUuMzY3IDU2LjY4OUMzMjkuNjcyIDYxLjAxOCAzNDIuOTY1IDY2LjQ4NCAzNTQuODc1IDcyLjk0MUMzNTcuMjc1IDc0LjI0MiAzNTkuODk1IDc0Ljg3NSAzNjIuNDk2IDc0Ljg3NUMzNjYuNTkgNzQuODc1IDM3MC42MzkgNzMuMzA1IDM3My43MDUgNzAuMjk1TDM4MC40MzkgNjMuNjg4QzM4My40NjMgNjAuNjY0IDM4Ny40NzkgNTkgMzkxLjc1IDU5UzQwMC4wMzcgNjAuNjY0IDQwMy4wNjEgNjMuNjg4TDQ0OC4zMTEgMTA4LjkzOEM0NTEuMzM2IDExMS45NjMgNDUzIDExNS45NzkgNDUzIDEyMC4yNUM0NTMgMTI0LjUyIDQ1MS4zMzYgMTI4LjUzNyA0NDguMjAzIDEzMS42N0w0NDEuNzAzIDEzOC4yOTVDNDM2Ljc4MyAxNDMuMzA5IDQzNS43MTEgMTUwLjk0NyA0MzkuMDU5IDE1Ny4xMjVDNDQ1LjUxNiAxNjkuMDM1IDQ1MC45ODIgMTgyLjMyOCA0NTUuMzExIDE5Ni42MzNDNDU3LjM1MiAyMDMuMzgzIDQ2My41NzIgMjA4IDQ3MC42MjUgMjA4SDQ4MEM0ODguODIyIDIwOCA0OTYgMjE1LjE3OCA0OTYgMjI0VjI4OFpNMjEwLjM1IDI0MS4xNjZDMjEzLjA4IDIzMi43NjQgMjA4LjQ4IDIyMy43MzYgMjAwLjA3NiAyMjEuMDA2UzE4Mi42NDYgMjIyLjg3NSAxNzkuOTE2IDIzMS4yNzdDMTc3LjE4NiAyMzkuNjgyIDE4MS43ODMgMjQ4LjcwOSAxOTAuMTg4IDI1MS40MzlTMjA3LjYxOSAyNDkuNTcgMjEwLjM1IDI0MS4xNjZaTTI1NiAxNzZDMjQ3LjE2NCAxNzYgMjQwIDE4My4xNjIgMjQwIDE5MkMyNDAgMjAwLjgzNiAyNDcuMTY0IDIwOCAyNTYgMjA4UzI3MiAyMDAuODM2IDI3MiAxOTJDMjcyIDE4My4xNjIgMjY0LjgzNiAxNzYgMjU2IDE3NlpNMjU2IDEyOEMxODUuMjUgMTI4IDEyOCAxODUuMjUgMTI4IDI1NkMxMjggMzI2LjYyNSAxODUuMjUgMzg0IDI1NiAzODRTMzg0IDMyNi42MjUgMzg0IDI1NkMzODQgMTg1LjI1IDMyNi43NSAxMjggMjU2IDEyOFpNMjU2IDM2OEMxOTQuMjQyIDM2OCAxNDQgMzE3Ljc1OCAxNDQgMjU2UzE5NC4yNDIgMTQ0IDI1NiAxNDRTMzY4IDE5NC4yNDIgMzY4IDI1NlMzMTcuNzU4IDM2OCAyNTYgMzY4Wk0yODQuMTkxIDI5NC44MTZDMjc3LjA0MyAzMDAuMDEgMjc1LjQ1OSAzMTAuMDE4IDI4MC42NTIgMzE3LjE2NkMyODUuODQ4IDMyNC4zMTQgMjk1Ljg1NCAzMjUuODk4IDMwMy4wMDIgMzIwLjcwNVMzMTEuNzM2IDMwNS41MDYgMzA2LjU0MSAyOTguMzU3QzMwMS4zNDggMjkxLjIwOSAyOTEuMzQgMjg5LjYyMyAyODQuMTkxIDI5NC44MTZaTTMxMS44OTggMjIxLjAxNkMzMDMuNDk2IDIyMy43NDYgMjk4Ljg5NiAyMzIuNzczIDMwMS42MjcgMjQxLjE3NkMzMDQuMzU3IDI0OS41OCAzMTMuMzg1IDI1NC4xOCAzMjEuNzg3IDI1MS40NDlDMzMwLjE5MSAyNDguNzE5IDMzNC43OTEgMjM5LjY5MSAzMzIuMDYxIDIzMS4yODdDMzI5LjMzIDIyMi44ODUgMzIwLjMwNSAyMTguMjg1IDMxMS44OTggMjIxLjAxNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function TireRugged(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M205.441 298.361C200.246 305.512 201.832 315.518 208.98 320.711S226.135 324.32 231.33 317.17C236.523 310.021 234.937 300.016 227.789 294.822S210.635 291.213 205.441 298.361ZM480 192H470.625C466.125 177.125 460.375 162.875 453.125 149.5L459.625 142.875C472.125 130.375 472.125 110.125 459.625 97.625L414.375 52.375C408.125 46.125 399.938 43 391.75 43S375.375 46.125 369.125 52.375L362.5 58.875C349.125 51.625 334.875 45.875 320 41.375V32C320 14.375 305.625 0 288 0H224C206.375 0 192 14.375 192 32V41.375C177.125 45.875 162.875 51.625 149.5 58.875L142.875 52.375C136.625 46.125 128.438 43 120.25 43S103.875 46.125 97.625 52.375L52.375 97.625C39.875 110.125 39.875 130.375 52.375 142.875L58.875 149.5C51.625 162.875 45.875 177.125 41.375 192H32C14.375 192 0 206.375 0 224V288C0 305.625 14.375 320 32 320H41.375C45.875 334.875 51.625 349.125 58.875 362.625L52.375 369.125C39.875 381.625 39.875 401.875 52.375 414.375L97.625 459.625C103.875 465.875 112.062 469 120.25 469S136.625 465.875 142.875 459.625L149.5 453.125C162.875 460.375 177.125 466.125 192 470.625V480C192 497.625 206.375 512 224 512H288C305.625 512 320 497.625 320 480V470.625C334.875 466.125 349.125 460.375 362.5 453.125L369.125 459.625C375.375 465.875 383.562 469 391.75 469S408.125 465.875 414.375 459.625L459.625 414.375C472.125 401.875 472.125 381.625 459.625 369.125L453.125 362.625C460.375 349.125 466.125 334.875 470.625 320H480C497.625 320 512 305.625 512 288V224C512 206.375 497.625 192 480 192ZM496 288C496 296.822 488.822 304 480 304H470.625C463.572 304 457.352 308.617 455.311 315.367C451.002 329.605 445.525 342.959 439.029 355.055C435.689 361.273 436.82 368.947 441.811 373.938L448.311 380.439C451.336 383.463 453 387.479 453 391.75C453 396.02 451.336 400.037 448.311 403.061L403.061 448.311C400.037 451.334 396.021 453 391.75 453S383.463 451.334 380.33 448.203L373.705 441.703C370.639 438.695 366.59 437.125 362.496 437.125C359.895 437.125 357.275 437.758 354.875 439.059C342.965 445.516 329.672 450.982 315.367 455.311C308.617 457.352 304 463.572 304 470.625V480C304 488.822 296.822 496 288 496H224C215.178 496 208 488.822 208 480V470.625C208 463.572 203.383 457.352 196.633 455.311C182.328 450.982 169.035 445.516 157.125 439.059C154.725 437.758 152.105 437.125 149.506 437.125C145.41 437.125 141.361 438.695 138.295 441.703L131.561 448.311C128.537 451.334 124.521 453 120.25 453C115.98 453 111.963 451.334 108.939 448.311L63.689 403.061C60.664 400.037 59 396.02 59 391.75C59 387.479 60.664 383.463 63.689 380.438L70.189 373.938C75.18 368.947 76.311 361.273 72.971 355.055C66.475 342.959 60.998 329.605 56.689 315.367C54.648 308.617 48.428 304 41.375 304H32C23.178 304 16 296.822 16 288V224C16 215.178 23.178 208 32 208H41.375C48.428 208 54.648 203.383 56.689 196.633C61.018 182.328 66.484 169.035 72.941 157.125C76.289 150.947 75.217 143.309 70.297 138.295L63.689 131.561C60.664 128.537 59 124.52 59 120.25C59 115.979 60.664 111.963 63.689 108.938L108.939 63.688C111.963 60.664 115.979 59 120.25 59S128.537 60.664 131.67 63.797L138.295 70.297C141.361 73.305 145.41 74.875 149.506 74.875C152.105 74.875 154.727 74.242 157.125 72.941C169.035 66.484 182.328 61.018 196.633 56.689C203.383 54.646 208 48.428 208 41.375V32C208 23.178 215.178 16 224 16H288C296.822 16 304 23.178 304 32V41.375C304 48.428 308.617 54.646 315.367 56.689C329.672 61.018 342.965 66.484 354.875 72.941C357.275 74.242 359.895 74.875 362.496 74.875C366.59 74.875 370.639 73.305 373.705 70.295L380.439 63.688C383.463 60.664 387.479 59 391.75 59S400.037 60.664 403.061 63.688L448.311 108.938C451.336 111.963 453 115.979 453 120.25C453 124.52 451.336 128.537 448.203 131.67L441.703 138.295C436.783 143.309 435.711 150.947 439.059 157.125C445.516 169.035 450.982 182.328 455.311 196.633C457.352 203.383 463.572 208 470.625 208H480C488.822 208 496 215.178 496 224V288ZM210.35 241.166C213.08 232.764 208.48 223.736 200.076 221.006S182.646 222.875 179.916 231.277C177.186 239.682 181.783 248.709 190.188 251.439S207.619 249.57 210.35 241.166ZM256 176C247.164 176 240 183.162 240 192C240 200.836 247.164 208 256 208S272 200.836 272 192C272 183.162 264.836 176 256 176ZM256 128C185.25 128 128 185.25 128 256C128 326.625 185.25 384 256 384S384 326.625 384 256C384 185.25 326.75 128 256 128ZM256 368C194.242 368 144 317.758 144 256S194.242 144 256 144S368 194.242 368 256S317.758 368 256 368ZM284.191 294.816C277.043 300.01 275.459 310.018 280.652 317.166C285.848 324.314 295.854 325.898 303.002 320.705S311.736 305.506 306.541 298.357C301.348 291.209 291.34 289.623 284.191 294.816ZM311.898 221.016C303.496 223.746 298.896 232.773 301.627 241.176C304.357 249.58 313.385 254.18 321.787 251.449C330.191 248.719 334.791 239.691 332.061 231.287C329.33 222.885 320.305 218.285 311.898 221.016Z" />
        </Icon>
    </>
}