
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `traffic-light-slow` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/traffic-light-slow?s=regular traffic-light-slow}
 * @preview ![traffic-light-slow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzUuOTgyIDMxOS45OUwzMzUuOTc3IDI3NC43MzZDMzY0LjU5OCAyNTcuOTgyIDM4My45NjcgMjI3LjQ3OSAzODMuOTYzIDE5MS45NzdMMzM1Ljk3MSAxOTEuOThMMzM1Ljk2NSAxNDYuNzI5QzM2NC41ODYgMTI5Ljk3NSAzODMuOTU1IDk5LjQ3MSAzODMuOTUxIDYzLjk2N0wzMzUuOTU3IDYzLjk3M1Y2My45NjdDMzM1Ljk1NSAyOC43NjggMzA3LjE1MiAtMC4wMjkgMjcxLjk1MSAtMC4wMjVMMTExLjk4OCAtMC4wMTJDNzYuNzg3IC0wLjAwOCA0Ny45OSAyOC43OTUgNDcuOTk0IDYzLjk5NFY2NEwwIDY0LjAwNEMwLjAwNCA5OS41MDYgMTkuMzc5IDEzMC4wMDYgNDguMDAyIDE0Ni43NTZMNDguMDA2IDE5Mi4wMDhMMC4wMTIgMTkyLjAxNEMwLjAxNiAyMjcuNTE2IDE5LjM5MSAyNTguMDE2IDQ4LjAxNCAyNzQuNzY0TDQ4LjAxOCAzMjAuMDE4TDAuMDIzIDMyMC4wMjFDMC4wMjcgMzU3Ljc3NSAyMi4wMjcgMzkwLjAyNSA1My42NSA0MDUuNzczQzcwLjI3OSA0NjYuOSAxMjUuNjUgNTEyLjAyMyAxOTIuMDE4IDUxMi4wMThTMzEzLjc0OCA0NjYuODc3IDMzMC4zNjUgNDA1Ljc0NkMzNjEuOTg0IDM4OS45OTIgMzgzLjk3OSAzNTcuNzM4IDM4My45NzcgMzE5Ljk4NkwzMzUuOTgyIDMxOS45OVpNMTczLjAzMSA0NjIuMTg2QzEyNy4zOTggNDUzLjQwOCA5Ni4wMiA0MTAuNzU2IDk2LjAxNiAzNjQuMjg3TDk1Ljk4OCA2My45OTRDOTUuOTg2IDU1LjE1NiAxMDMuMTUgNDcuOTkyIDExMS45ODYgNDcuOTkyTDI3MS45NjMgNDcuOTc3QzI4MC43OTkgNDcuOTc3IDI4Ny45NjMgNTUuMTM5IDI4Ny45NjMgNjMuOTc1TDI4Ny45OTIgMzY3Ljk5OEMyODcuOTk4IDQyNy4wNzIgMjM0LjM0NCA0NzMuOTggMTczLjAzMSA0NjIuMTg2Wk0xOTEuOTk4IDMwNC4wMDJDMjE4LjQ5NCAzMDQgMjM5Ljk5IDI4Mi40OTYgMjM5Ljk4OCAyNTUuOTk0QzIzOS45ODQgMjI5LjQ5MiAyMTguNDg2IDIwNy45OTQgMTkxLjk5IDIwNy45OTZDMTY1LjQ5MiAyMDcuOTk4IDE0My45OTggMjI5LjUwMiAxNDQgMjU2LjAwNFMxNjUuNTAyIDMwNC4wMDYgMTkxLjk5OCAzMDQuMDAyWk0xOTEuOTgyIDE3NS45OTRDMTkxLjk4NCAxNzUuOTk0IDE5MS45ODQgMTc1Ljk5NCAxOTEuOTg2IDE3NS45OTRDMjE4LjQ4MiAxNzUuOTkyIDIzOS45NzkgMTU0LjQ4OCAyMzkuOTc3IDEyNy45ODZDMjM5Ljk3MyAxMDEuNDg2IDIxOC40NzcgNzkuOTg2IDE5MS45OCA3OS45ODZDMTkxLjk3OSA3OS45ODYgMTkxLjk3OSA3OS45ODYgMTkxLjk3NyA3OS45ODZDMTY1LjQ4IDc5Ljk5IDE0My45ODQgMTAxLjQ5NCAxNDMuOTg4IDEyNy45OTZDMTQzLjk5IDE1NC40OTQgMTY1LjQ4OCAxNzUuOTk0IDE5MS45ODIgMTc1Ljk5NFpNMTkxLjk4MiAxMTEuOTg2QzIwMC44MDEgMTExLjk4NiAyMDcuOTc1IDExOS4xNjYgMjA3Ljk3NyAxMjcuOTg4QzIwNy45NzcgMTM2LjgxNCAyMDAuODAxIDE0My45OTQgMTkxLjk4MiAxNDMuOTk0UzE3NS45ODggMTM2LjgxNiAxNzUuOTg4IDEyNy45OTJDMTc1Ljk4NiAxMTkuMTY4IDE4My4xNjIgMTExLjk4OCAxOTEuOTgyIDExMS45ODZaTTE5Mi4wMSAzMzYuMDA2QzE5Mi4wMDYgMzM2LjAwNiAxOTIuMDA2IDMzNi4wMDYgMTkyLjAwMiAzMzYuMDA2QzE2NS41MDQgMzM2LjAwOCAxNDQuMDEgMzU3LjUxMiAxNDQuMDEyIDM4NC4wMTRDMTQ0LjAxNCA0MTAuNTE0IDE2NS41MTIgNDMyLjAxMiAxOTIuMDA2IDQzMi4wMTJDMTkyLjAwOCA0MzIuMDEyIDE5Mi4wMDggNDMyLjAxMiAxOTIuMDEgNDMyLjAxMkMyMTguNTA4IDQzMi4wMSAyNDAuMDAyIDQxMC41MDYgMjQwIDM4NC4wMDRDMjM5Ljk5OCAzNTcuNTA2IDIxOC41IDMzNi4wMDYgMTkyLjAxIDMzNi4wMDZaTTIwMy4zMTEgMzk1LjMyMkMyMDEuNTYxIDM5Ny4wNzIgMTk3Ljc2NCA0MDAuMDEyIDE5Mi4wMDYgNDAwLjAxMkMxODMuMTg4IDQwMC4wMTIgMTc2LjAxMiAzOTIuODM0IDE3Ni4wMTIgMzg0LjAxMkMxNzYuMDEyIDM3OC4yNDggMTc4Ljk0OSAzNzQuNDQ5IDE4MC43MDEgMzcyLjY5N0MxODIuNDUxIDM3MC45NDUgMTg2LjI1IDM2OC4wMDYgMTkyLjAxIDM2OC4wMDZDMjAwLjgyNiAzNjguMDA2IDIwOCAzNzUuMTg0IDIwOCAzODQuMDA2QzIwOCAzODkuNzcgMjA1LjA2MiAzOTMuNTcgMjAzLjMxMSAzOTUuMzIyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TrafficLightSlow(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M335.982 319.99L335.977 274.736C364.598 257.982 383.967 227.479 383.963 191.977L335.971 191.98L335.965 146.729C364.586 129.975 383.955 99.471 383.951 63.967L335.957 63.973V63.967C335.955 28.768 307.152 -0.029 271.951 -0.025L111.988 -0.012C76.787 -0.008 47.99 28.795 47.994 63.994V64L0 64.004C0.004 99.506 19.379 130.006 48.002 146.756L48.006 192.008L0.012 192.014C0.016 227.516 19.391 258.016 48.014 274.764L48.018 320.018L0.023 320.021C0.027 357.775 22.027 390.025 53.65 405.773C70.279 466.9 125.65 512.023 192.018 512.018S313.748 466.877 330.365 405.746C361.984 389.992 383.979 357.738 383.977 319.986L335.982 319.99ZM173.031 462.186C127.398 453.408 96.02 410.756 96.016 364.287L95.988 63.994C95.986 55.156 103.15 47.992 111.986 47.992L271.963 47.977C280.799 47.977 287.963 55.139 287.963 63.975L287.992 367.998C287.998 427.072 234.344 473.98 173.031 462.186ZM191.998 304.002C218.494 304 239.99 282.496 239.988 255.994C239.984 229.492 218.486 207.994 191.99 207.996C165.492 207.998 143.998 229.502 144 256.004S165.502 304.006 191.998 304.002ZM191.982 175.994C191.984 175.994 191.984 175.994 191.986 175.994C218.482 175.992 239.979 154.488 239.977 127.986C239.973 101.486 218.477 79.986 191.98 79.986C191.979 79.986 191.979 79.986 191.977 79.986C165.48 79.99 143.984 101.494 143.988 127.996C143.99 154.494 165.488 175.994 191.982 175.994ZM191.982 111.986C200.801 111.986 207.975 119.166 207.977 127.988C207.977 136.814 200.801 143.994 191.982 143.994S175.988 136.816 175.988 127.992C175.986 119.168 183.162 111.988 191.982 111.986ZM192.01 336.006C192.006 336.006 192.006 336.006 192.002 336.006C165.504 336.008 144.01 357.512 144.012 384.014C144.014 410.514 165.512 432.012 192.006 432.012C192.008 432.012 192.008 432.012 192.01 432.012C218.508 432.01 240.002 410.506 240 384.004C239.998 357.506 218.5 336.006 192.01 336.006ZM203.311 395.322C201.561 397.072 197.764 400.012 192.006 400.012C183.188 400.012 176.012 392.834 176.012 384.012C176.012 378.248 178.949 374.449 180.701 372.697C182.451 370.945 186.25 368.006 192.01 368.006C200.826 368.006 208 375.184 208 384.006C208 389.77 205.062 393.57 203.311 395.322Z" />
        </Icon>
    </>
}