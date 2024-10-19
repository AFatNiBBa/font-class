
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `hands-holding-dollar` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hands-holding-dollar?s=light hands-holding-dollar}
 * @preview ![hands-holding-dollar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjAuNDA4IDI0OC42OTlDMjA2LjQyNiAyMjkuNTggMTcxLjM0NiAyMTcuMzM0IDE0Ni4wMDIgMjQ0LjgyNkMxMzAuMzk2IDI2MS42OTUgMTMwLjE0NiAyODcuNjg5IDE0My41MDYgMzA2LjE4NEwxNzIuMDk0IDM0NS40MjJDMTc4LjU4NiAzNTQuMjk1IDE2NS42MDIgMzY0LjU0MSAxNTguNDg2IDM1Ni4xN0w5Ni41NjQgMjgyLjgxNEw5NS44NzkgMTEzLjc0Qzk1Ljg3OSA4Ny43NDggNzQuNjU2IDY0LjUwNCA0OC42ODggNjQuMTI5QzIxLjg0OCA2My42MjkgMCA4NS4yNDggMCAxMTEuOTlMMC42ODggMzE0LjMwN0MwLjY4OCAzMjUuMTc4IDQuNDMyIDMzNS44MDEgMTEuMTc0IDM0NC4yOTdMMTE4LjAzNyA0NzguMDFDMTIyLjQyNCA0ODMuNTIxIDEyNS41NTkgNDkxLjcwNSAxMjcuMjQgNDk5LjY5M0MxMjguNzYgNTA2LjkxIDEzNS40MiA1MTEuODc1IDE0Mi43ODkgNTExLjg3NUgxNDIuODMyQzE1My4wMDggNTExLjg3NSAxNjAuNTU5IDUwMi40NTEgMTU4LjQzNCA0OTIuNDlDMTU1LjczMiA0NzkuODI0IDE1MC41MSA0NjcuMjgzIDE0My4wMDYgNDU4LjAxNkwzNi4xNDMgMzI0LjMwM0MzMy44OTUgMzIxLjU1NSAzMi42NDYgMzE3LjkzIDMyLjY0NiAzMTQuMzA3TDMxLjk1OSAxMTEuOTlDMzEuOTU5IDkwLjk5NiA2My45MiA5MC4zNzEgNjMuOTIgMTEyLjc0TDY0LjYwNSAyOTQuMzEyTDEyOS4xNDggMzcxLjc4OUMxNjUuOTc3IDQxNi4wMjcgMjI1Ljc3NSAzNjkuMTY2IDE5OS44MDkgMzI5LjQyOEMxOTkuNjg0IDMyOS4xNzggMTk5LjQzNCAzMjguOTI4IDE5OS4zMDkgMzI4LjY3OEwxNjguNzIzIDI4Ni40MzlDMTY0LjEwNCAyNzkuOTQxIDE2NC42MDQgMjY5LjY5MyAxNzIuMjE5IDI2NC4xOTVDMTc5LjIxMSAyNTkuMDcyIDE4OS4zMjIgMjYwLjMyMiAxOTQuNjg5IDI2Ny42OTVMMjM3LjAxMiAzMjYuMDUzQzI0OS42MjEgMzQyLjkyNCAyNTYuNDg2IDM2My40MTggMjU2LjQ4NiAzODQuMDM3VjQ5Ni4wODJDMjU2LjQ4NiA1MDQuODM4IDI2My42NDMgNTEyIDI3Mi4zODkgNTEySDI3Mi41NDVDMjgxLjI5MSA1MTIgMjg4LjQ0NyA1MDQuODM4IDI4OC40NDcgNDk2LjA4MlYzODQuMDM3QzI4OC40NDcgMzU2LjI5NSAyNzkuNDU3IDMyOS40MjggMjYyLjg1NCAzMDcuMTg0TDIyMC40MDggMjQ4LjY5OVpNNjM5LjE4OCAxMTEuOTlDNjM5LjE4OCA4NS4yNDggNjE3LjM0IDYzLjYyOSA1OTAuNSA2NC4wMDRDNTY0LjUzMyA2NC4zNzkgNTQzLjMxMSA4Ny43NDggNTQzLjMxMSAxMTMuNzRMNTQzLjk5NiAyODIuNjg5TDQ4Mi4wNzQgMzU2LjA0NUM0NzQuOTU5IDM2NC40MTYgNDYxLjk3NyAzNTQuMjk1IDQ2OC40NjcgMzQ1LjI5N0w0OTcuMDU3IDMwNi4wNTlDNTEwLjQxNCAyODcuNTY0IDUxMC4xNjQgMjYxLjQ0NSA0OTQuNTU5IDI0NC43MDFDNDY5LjA5MiAyMTcuMzM0IDQzNC4wMTIgMjI5LjQ1NSA0MjAuMTU0IDI0OC42OTlMMzc3LjgzMiAzMDcuMDU5QzM2MS4yMjkgMzI5LjE3OCAzNTIuMjQgMzU2LjE3IDM1Mi4yNCAzODMuOTEyVjQ5NS45NTdDMzUyLjI0IDUwNC43MTMgMzU5LjM5NiA1MTEuODc1IDM2OC4xNDEgNTExLjg3NUgzNjguMjk5QzM3Ny4wNDUgNTExLjg3NSAzODQuMTk5IDUwNC43MTMgMzg0LjE5OSA0OTUuOTU3VjM4My45MTJDMzg0LjE5OSAzNjMuMjkzIDM5MC45NDEgMzQyLjc5OSA0MDMuNjc2IDMyNS45MjhMNDQ1Ljk5NiAyNjcuNTdDNDUxLjM2NSAyNjAuMTk3IDQ2MS4zNTIgMjU4LjgyMiA0NjguMzQ0IDI2NC4wN0M0NzYuMjA3IDI2OS42OTMgNDc2LjcwNyAyNzkuODE2IDQ3MS44MzggMjg2LjMxNEw0NDEuMzc3IDMyOC41NTNDNDQxLjEyNyAzMjguODAzIDQ0MC44NzcgMzI5LjA1MyA0NDAuODc3IDMyOS4zMDNDNDE0Ljc4NSAzNjkuMDQxIDQ3NC43MDkgNDE2LjAyNyA1MTEuNTM3IDM3MS42NjRMNTc2LjA4IDI5NC4xODhMNTc1LjM5NSAxMTIuNjE1QzU3NS4zOTUgOTAuMjQ2IDYwNy4zNTQgOTAuODcxIDYwNy4zNTQgMTExLjg2NUw2MDguMDQxIDMxNC4xODJDNjA4LjA0MSAzMTcuODA1IDYwNi43OTMgMzIxLjQzIDYwNC41NDUgMzI0LjE3OEw0OTcuNjggNDU3Ljg5MUM0OTAuMjk5IDQ2Ny4xMjUgNDg1LjAzMyA0NzkuNjg5IDQ4Mi4yOTUgNDkyLjM0NEM0ODAuMTM5IDUwMi4zMDcgNDg3LjY5MyA1MTEuNzUgNDk3Ljg3NyA1MTEuNzVDNTA1LjI2IDUxMS43NSA1MTEuOTQzIDUwNi43NjYgNTEzLjQzNCA0OTkuNTI3QzUxNS4wODggNDkxLjUgNTE4LjE2IDQ4My4zOTggNTIyLjY0OCA0NzcuODg1TDYyOS41MTQgMzQ0LjE3MkM2MzYuMjU0IDMzNS42NzYgNjQwIDMyNS4xNzggNjQwIDMxNC4xODJMNjM5LjE4OCAxMTEuOTlaTTM5MS43ODEgMTc5LjM1OUMzOTkuODEzIDEzMy4xNzIgMzU2LjQzOCAxMjAuNzgxIDMyNy43MTkgMTEyLjU3OEwzMjAuODEzIDExMC41OTRDMjg3LjE1NiAxMDAuNjg4IDI4NC40MzggOTQgMjg2LjQ2OSA4Mi4xMDlDMjg5LjMxMiA2NS42NzIgMzEyLjYyNSA2MS42ODggMzM0LjUgNjUuMTcyQzM0MC42NTYgNjYuMTI1IDM0OC4zNzUgNjguMjM0IDM1OC4xMjUgNzEuNjI1QzM2Ni41IDc0LjQ2OSAzNzUuNTYyIDcwLjEwOSAzNzguNSA2MS43MzRDMzgxLjM3NSA1My4zOTEgMzc2Ljk2OSA0NC4yODEgMzY4LjYyNSA0MS4zNzVDMzU2Ljg3NSAzNy4zMTMgMzQ3LjU5NCAzNC44MjggMzM5LjQzNyAzMy41NDdDMzM4LjI1NCAzMy4zNjEgMzM3LjE2OCAzMy4zNzkgMzM2IDMzLjIyN1YxNkMzMzYgNy4xNTYgMzI4Ljg0NCAwIDMyMCAwUzMwNCA3LjE1NiAzMDQgMTZWMzMuNTQ3QzI3Ny42MjMgMzguMDIgMjU5LjAwNiA1My4zMDUgMjU0LjkzOCA3Ni42NTZDMjQ3LjA5NCAxMjIuMjY2IDI5MC44MTIgMTM1LjEwOSAzMTEuODEyIDE0MS4yOTdMMzE4LjkzNyAxNDMuMzQ0QzM1NS40NjkgMTUzLjc4MSAzNjIuODEyIDE1OS4yMDMgMzYwLjI1IDE3My45MDZDMzU3LjQwNiAxOTAuMzU5IDMzNC4wOTQgMTk0LjE4NyAzMTIuMTU2IDE5MC44MTJDMzAyLjYyNSAxODkuMzkxIDI5MS4xMjUgMTg1LjIzNCAyODAuOTY5IDE4MS41NzhMMjc1LjQwNiAxNzkuNTk0QzI2Ny4wNjIgMTc2LjY1NiAyNTcuOTY5IDE4MC45ODQgMjU0Ljk2OSAxODkuMzQ0QzI1Mi4wMzEgMTk3LjY3MiAyNTYuNDA2IDIwNi44MTIgMjY0LjcxOSAyMDkuNzVMMjcwLjEyNSAyMTEuNjg4QzI4MC42NSAyMTUuNDggMjkyLjQ2MyAyMTkuNTA4IDMwNCAyMjEuNjYyVjI0MEMzMDQgMjQ4Ljg0NCAzMTEuMTU2IDI1NiAzMjAgMjU2UzMzNiAyNDguODQ0IDMzNiAyNDBWMjIzLjQyMkMzNjYuMDk2IDIyMC42MzEgMzg3LjQyIDIwNC42NyAzOTEuNzgxIDE3OS4zNTlaIi8+PC9zdmc+|width=32|height=32)
 */
export default function HandsHoldingDollar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M220.408 248.699C206.426 229.58 171.346 217.334 146.002 244.826C130.396 261.695 130.146 287.689 143.506 306.184L172.094 345.422C178.586 354.295 165.602 364.541 158.486 356.17L96.564 282.814L95.879 113.74C95.879 87.748 74.656 64.504 48.688 64.129C21.848 63.629 0 85.248 0 111.99L0.688 314.307C0.688 325.178 4.432 335.801 11.174 344.297L118.037 478.01C122.424 483.521 125.559 491.705 127.24 499.693C128.76 506.91 135.42 511.875 142.789 511.875H142.832C153.008 511.875 160.559 502.451 158.434 492.49C155.732 479.824 150.51 467.283 143.006 458.016L36.143 324.303C33.895 321.555 32.646 317.93 32.646 314.307L31.959 111.99C31.959 90.996 63.92 90.371 63.92 112.74L64.605 294.312L129.148 371.789C165.977 416.027 225.775 369.166 199.809 329.428C199.684 329.178 199.434 328.928 199.309 328.678L168.723 286.439C164.104 279.941 164.604 269.693 172.219 264.195C179.211 259.072 189.322 260.322 194.689 267.695L237.012 326.053C249.621 342.924 256.486 363.418 256.486 384.037V496.082C256.486 504.838 263.643 512 272.389 512H272.545C281.291 512 288.447 504.838 288.447 496.082V384.037C288.447 356.295 279.457 329.428 262.854 307.184L220.408 248.699ZM639.188 111.99C639.188 85.248 617.34 63.629 590.5 64.004C564.533 64.379 543.311 87.748 543.311 113.74L543.996 282.689L482.074 356.045C474.959 364.416 461.977 354.295 468.467 345.297L497.057 306.059C510.414 287.564 510.164 261.445 494.559 244.701C469.092 217.334 434.012 229.455 420.154 248.699L377.832 307.059C361.229 329.178 352.24 356.17 352.24 383.912V495.957C352.24 504.713 359.396 511.875 368.141 511.875H368.299C377.045 511.875 384.199 504.713 384.199 495.957V383.912C384.199 363.293 390.941 342.799 403.676 325.928L445.996 267.57C451.365 260.197 461.352 258.822 468.344 264.07C476.207 269.693 476.707 279.816 471.838 286.314L441.377 328.553C441.127 328.803 440.877 329.053 440.877 329.303C414.785 369.041 474.709 416.027 511.537 371.664L576.08 294.188L575.395 112.615C575.395 90.246 607.354 90.871 607.354 111.865L608.041 314.182C608.041 317.805 606.793 321.43 604.545 324.178L497.68 457.891C490.299 467.125 485.033 479.689 482.295 492.344C480.139 502.307 487.693 511.75 497.877 511.75C505.26 511.75 511.943 506.766 513.434 499.527C515.088 491.5 518.16 483.398 522.648 477.885L629.514 344.172C636.254 335.676 640 325.178 640 314.182L639.188 111.99ZM391.781 179.359C399.813 133.172 356.438 120.781 327.719 112.578L320.813 110.594C287.156 100.688 284.438 94 286.469 82.109C289.312 65.672 312.625 61.688 334.5 65.172C340.656 66.125 348.375 68.234 358.125 71.625C366.5 74.469 375.562 70.109 378.5 61.734C381.375 53.391 376.969 44.281 368.625 41.375C356.875 37.313 347.594 34.828 339.437 33.547C338.254 33.361 337.168 33.379 336 33.227V16C336 7.156 328.844 0 320 0S304 7.156 304 16V33.547C277.623 38.02 259.006 53.305 254.938 76.656C247.094 122.266 290.812 135.109 311.812 141.297L318.937 143.344C355.469 153.781 362.812 159.203 360.25 173.906C357.406 190.359 334.094 194.187 312.156 190.812C302.625 189.391 291.125 185.234 280.969 181.578L275.406 179.594C267.062 176.656 257.969 180.984 254.969 189.344C252.031 197.672 256.406 206.812 264.719 209.75L270.125 211.688C280.65 215.48 292.463 219.508 304 221.662V240C304 248.844 311.156 256 320 256S336 248.844 336 240V223.422C366.096 220.631 387.42 204.67 391.781 179.359Z" />
        </Icon>
    </>
}