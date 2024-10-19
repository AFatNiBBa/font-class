
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `baseball-ball` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/baseball-ball?s=regular baseball-ball}
 * @preview ![baseball-ball](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUzIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ3IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTMwMC4xMTEgNDQyLjY4NEMzMDAuNjIzIDQ0MC4xNiAzMDAuOTA0IDQzNy41OTQgMzAxLjUzMSA0MzUuMDk0QzMwNC43NSA0MjIuMjUgMjk2Ljk2OSA0MDkuMjE5IDI4NC4wOTQgNDA1Ljk2OUMyODIuMTI1IDQwNS40NjkgMjgwLjE1NiA0MDUuMjUgMjc4LjIxOSA0MDUuMjVDMjY3LjUgNDA1LjI1IDI1Ny43MTkgNDEyLjUgMjU0Ljk2OSA0MjMuNDA2QzI1Mi45NTMgNDMxLjQwMiAyNTEuNTY2IDQzOS41NDcgMjUwLjQyNiA0NDcuNzE5QzE0OC45OTQgNDQ0Ljc4NSA2Ny4xOCAzNjIuOTQ1IDY0LjI3OSAyNjEuNTA4QzcxLjk5MiAyNjAuNDMgNzkuNjggMjU5LjE4NCA4Ny4yMTkgMjU3LjM0NEMxMDAuMDk0IDI1NC4xODggMTA4IDI0MS4yMTkgMTA0Ljg0NCAyMjguMzQ0QzEwMi4xNTYgMjE3LjM1MiA5Mi4yMzggMjEwLjAzMSA4MS40OTggMjEwLjAzMUM3OS42MjcgMjEwLjAzMSA3Ny43MzIgMjEwLjI1NCA3NS44NDQgMjEwLjcxOUM3My43MDEgMjExLjI0MiA3MS40ODggMjExLjQzIDY5LjMyNCAyMTEuODU5Qzg1Ljk4OCAxNDEuNDIyIDE0MS40NDUgODUuOTY5IDIxMS44ODkgNjkuMzE2QzIxMS4zNzcgNzEuODQgMjExLjA5NiA3NC40MDYgMjEwLjQ2OSA3Ni45MDZDMjA3LjI1IDg5Ljc1IDIxNS4wMzEgMTAyLjc4MSAyMjcuOTA2IDEwNi4wMzFDMjI5Ljg3NSAxMDYuNTMxIDIzMS44NDQgMTA2Ljc1IDIzMy43ODEgMTA2Ljc1QzI0NC41IDEwNi43NSAyNTQuMjgxIDk5LjUgMjU3LjAzMSA4OC41OTRDMjU5LjA0NyA4MC41OTggMjYwLjQzMiA3Mi40NTMgMjYxLjU3MiA2NC4yODFDMzYzLjAwNCA2Ny4yMTUgNDQ0LjgyIDE0OS4wNTUgNDQ3LjcyMSAyNTAuNDkyQzQ0MC4wMDggMjUxLjU3IDQzMi4zMiAyNTIuODE2IDQyNC43ODEgMjU0LjY1NkM0MTEuOTA2IDI1Ny44MTMgNDA0IDI3MC43ODEgNDA3LjE1NiAyODMuNjU2QzQwOS44NDYgMjk0LjY0OCA0MTkuNzYyIDMwMS45NjkgNDMwLjUwMiAzMDEuOTY5QzQzMi4zNzMgMzAxLjk2OSA0MzQuMjcgMzAxLjc0NiA0MzYuMTU2IDMwMS4yODFDNDM4LjI5OSAzMDAuNzU4IDQ0MC41MTIgMzAwLjU3IDQ0Mi42NzYgMzAwLjE0MUM0MjYuMDEyIDM3MC41NzggMzcwLjU1NSA0MjYuMDMxIDMwMC4xMTEgNDQyLjY4NFpNMTk5LjY3OCAxMzEuMTI1QzE5Mi4zMTEgMTMxLjEyNSAxODUuMDUxIDEzNC41MTIgMTgwLjM3NSAxNDAuOTA2QzE3My45NjkgMTQ5LjU2MiAxNjYuNzE5IDE1Ny44MTIgMTU4Ljc4MSAxNjUuMzc1QzE1Mi44MTIgMTcxLjA2MiAxNDYuNTMxIDE3Ni4yODEgMTQwLjAzMSAxODFDMTI5LjMxMiAxODguODEyIDEyNi45MzggMjAzLjgxMiAxMzQuNzUgMjE0LjUzMUMxMzkuNDM4IDIyMC45NjkgMTQ2Ljc1IDIyNC40MDYgMTU0LjE4OCAyMjQuNDA2QzE1OS4wNjMgMjI0LjQwNiAxNjQgMjIyLjkwNiAxNjguMjgxIDIxOS44MTNDMTc2LjQ2OSAyMTMuODQ0IDE4NC4zNzUgMjA3LjMxMyAxOTEuOTA2IDIwMC4wOTRDMjAxLjg3NSAxOTAuNTk0IDIxMSAxODAuMjUgMjE5IDE2OS4zNDRDMjI2Ljg3NSAxNTguNjg4IDIyNC41OTQgMTQzLjY1NiAyMTMuOTA2IDEzNS44MTJDMjA5LjYxNSAxMzIuNjQ4IDIwNC42MjEgMTMxLjEyNSAxOTkuNjc4IDEzMS4xMjVaTTM1Ny44MTIgMjg3LjU5NEMzNTIuOTM3IDI4Ny41OTQgMzQ4IDI4OS4wOTQgMzQzLjcxOSAyOTIuMTg4QzMzNS41MzEgMjk4LjE1NiAzMjcuNjI1IDMwNC42ODggMzIwLjA5NCAzMTEuOTA2QzMxMC4xMjUgMzIxLjQwNiAzMDEgMzMxLjc1IDI5MyAzNDIuNjU2QzI4NS4xMjUgMzUzLjMxMiAyODcuNDA2IDM2OC4zNDQgMjk4LjA5NCAzNzYuMTg4QzMwMi4zODcgMzc5LjM1MiAzMDcuMzc5IDM4MC44NzUgMzEyLjMyMiAzODAuODc1QzMxOS42OTEgMzgwLjg3NSAzMjYuOTQ5IDM3Ny40ODggMzMxLjYyNSAzNzEuMDk0QzMzOC4wMzEgMzYyLjQzOCAzNDUuMjgxIDM1NC4xODggMzUzLjIxOSAzNDYuNjI1QzM1OS4xODcgMzQwLjkzOCAzNjUuNDY5IDMzNS43MTkgMzcxLjk2OSAzMzFDMzgyLjY4NyAzMjMuMTg4IDM4NS4wNjIgMzA4LjE4OCAzNzcuMjUgMjk3LjQ2OUMzNzIuNTYyIDI5MS4wMzEgMzY1LjI1IDI4Ny41OTQgMzU3LjgxMiAyODcuNTk0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BaseballBall(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16ZM300.111 442.684C300.623 440.16 300.904 437.594 301.531 435.094C304.75 422.25 296.969 409.219 284.094 405.969C282.125 405.469 280.156 405.25 278.219 405.25C267.5 405.25 257.719 412.5 254.969 423.406C252.953 431.402 251.566 439.547 250.426 447.719C148.994 444.785 67.18 362.945 64.279 261.508C71.992 260.43 79.68 259.184 87.219 257.344C100.094 254.188 108 241.219 104.844 228.344C102.156 217.352 92.238 210.031 81.498 210.031C79.627 210.031 77.732 210.254 75.844 210.719C73.701 211.242 71.488 211.43 69.324 211.859C85.988 141.422 141.445 85.969 211.889 69.316C211.377 71.84 211.096 74.406 210.469 76.906C207.25 89.75 215.031 102.781 227.906 106.031C229.875 106.531 231.844 106.75 233.781 106.75C244.5 106.75 254.281 99.5 257.031 88.594C259.047 80.598 260.432 72.453 261.572 64.281C363.004 67.215 444.82 149.055 447.721 250.492C440.008 251.57 432.32 252.816 424.781 254.656C411.906 257.813 404 270.781 407.156 283.656C409.846 294.648 419.762 301.969 430.502 301.969C432.373 301.969 434.27 301.746 436.156 301.281C438.299 300.758 440.512 300.57 442.676 300.141C426.012 370.578 370.555 426.031 300.111 442.684ZM199.678 131.125C192.311 131.125 185.051 134.512 180.375 140.906C173.969 149.562 166.719 157.812 158.781 165.375C152.812 171.062 146.531 176.281 140.031 181C129.312 188.812 126.938 203.812 134.75 214.531C139.438 220.969 146.75 224.406 154.188 224.406C159.063 224.406 164 222.906 168.281 219.813C176.469 213.844 184.375 207.313 191.906 200.094C201.875 190.594 211 180.25 219 169.344C226.875 158.688 224.594 143.656 213.906 135.812C209.615 132.648 204.621 131.125 199.678 131.125ZM357.812 287.594C352.937 287.594 348 289.094 343.719 292.188C335.531 298.156 327.625 304.688 320.094 311.906C310.125 321.406 301 331.75 293 342.656C285.125 353.312 287.406 368.344 298.094 376.188C302.387 379.352 307.379 380.875 312.322 380.875C319.691 380.875 326.949 377.488 331.625 371.094C338.031 362.438 345.281 354.188 353.219 346.625C359.187 340.938 365.469 335.719 371.969 331C382.687 323.188 385.062 308.188 377.25 297.469C372.562 291.031 365.25 287.594 357.812 287.594Z" />
        </Icon>
    </>
}