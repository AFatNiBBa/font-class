
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `ear-muffs` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ear-muffs?s=solid ear-muffs}
 * @preview ![ear-muffs](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNTEuOTY1IDIyNEMxNDAuMDg5IDIyNCAxMjkuNzE0IDIyOS4zNzUgMTIyLjMzOSAyMzcuNzVDMTExLjcxNCAyMzAuNzUgOTguNTg5IDIyOC4zNzUgODUuOTY0IDIzMy4yNUM3NC4yMTMgMjM4LjEyNSA2NS43MTMgMjQ4IDYyLjIxMyAyNTkuNUM1MC40NjMgMjU5LjI1IDM4LjgzOCAyNjQuMjUgMzAuNTg4IDI3My44NzVDMjIuNTg3IDI4My43NSAxOS45NjIgMjk2IDIyLjIxMiAzMDcuNUMxMi4wODcgMzEyLjYyNSAzLjcxMiAzMjIuMjUgMS4yMTIgMzM0LjM3NUMtMS43ODggMzQ2LjYyNSAxLjQ2MiAzNTguMzc1IDguNTg3IDM2Ny43NUMxLjU4NyAzNzYuNzUgLTEuNjYzIDM4OC43NSAwLjgzNyA0MDFDMy43MTIgNDEzLjI1IDExLjcxMiA0MjIuNzUgMjIuMjEyIDQyOC4yNUMxOS43MTIgNDM5LjM3NSAyMi4yMTIgNDUxLjg3NSAzMC4yMTMgNDYxLjVDMzguMjEzIDQ3MS4zNzUgNTAuMDg4IDQ3Ni4yNSA2MS45NjMgNDc2LjI1QzY1LjIxMyA0ODcuNzUgNzMuNDYzIDQ5Ny4yNSA4NS4zMzkgNTAyLjM3NUM5MC40NjQgNTA0LjI1IDk1LjIxNCA1MDUuMjUgMTAwLjMzOSA1MDUuMjVDMTA4LjIxNCA1MDUuMjUgMTE1Ljk2NCA1MDIuODc1IDEyMi40NjQgNDk4LjVDMTI5LjcxNCA1MDYuNzUgMTQwLjIxNCA1MTIgMTUxLjk2NSA1MTJDMTc0LjA5IDUxMiAxOTEuOTY1IDQ5NC4xMjUgMTkxLjk2NSA0NzJDMTkxLjk2NSA0NjIuMDAxIDE4Ny45NjUgNDUzLjEyNSAxODEuODQgNDQ2LjEyNUMxODcuOTY1IDQzOS4xMjUgMTkxLjk2NSA0MzAuMjUgMTkxLjk2NSA0MjAuMjVTMTg4LjQ2NSA0MDEgMTgyLjM0IDM5NC4wMDFDMTg4LjQ2NSAzODcgMTkxLjk2NSAzNzguMDAxIDE5MS45NjUgMzY4LjEyNUMxOTEuOTY1IDM1OC4yNSAxODguNDY1IDM0OS4yNSAxODIuMzQgMzQyLjI1QzE4OC40NjUgMzM1LjI1IDE5MS45NjUgMzI2LjI1IDE5MS45NjUgMzE2LjI1QzE5MS45NjUgMzA2LjEyNSAxODcuODQgMjk3LjI1IDE4MS43MTUgMjkwLjI1QzE4Ny44NCAyODMuMjUgMTkxLjk2NSAyNzQuMjUgMTkxLjk2NSAyNjQuMjVDMTkxLjk2NSAyNDEuODc1IDE3NC4wOSAyMjQgMTUxLjk2NSAyMjRaTTYzOS4wOTggMzM1QzYzNi4yMjMgMzIyLjc1IDYyOC4yMjMgMzEzLjI1IDYxNy43MjMgMzA4LjEyNUM2MjAuMjIzIDI5Ni42MjUgNjE3LjcyMyAyODQuMTI1IDYwOS43MjMgMjc0LjVDNjAxLjcyMyAyNjQuNjI1IDU4OS44NDcgMjU5Ljc1IDU3Ny45NzIgMjU5Ljc1QzU3NC43MjIgMjQ4LjI1IDU2Ni40NzIgMjM4LjM3NSA1NTQuNTk3IDIzMy42MjVDNTQxLjg0NiAyMjguNjI1IDUyOC40NzEgMjMxLjEyNSA1MTcuNzIxIDIzOC4xMjVDNTEwLjQ3MSAyMjkuNzUgNDk5Ljk3MSAyMjQgNDg3Ljg0NiAyMjRDNDY1LjcyIDIyNCA0NDcuODQ1IDI0MS44NzUgNDQ3Ljg0NSAyNjRDNDQ3Ljg0NSAyNzQuMTI1IDQ1MS45NyAyODMgNDU4LjA5NSAyOTAuMDAxQzQ1MS45NyAyOTcgNDQ3Ljg0NSAzMDUuODc1IDQ0Ny44NDUgMzE2LjEyNUM0NDcuODQ1IDMyNi4wMDEgNDUxLjM0NSAzMzUgNDU3LjQ3IDM0Mi4wMDFDNDUxLjM0NSAzNDkgNDQ3Ljg0NSAzNTguMDAxIDQ0Ny44NDUgMzY3Ljg3NUM0NDcuODQ1IDM3Ny43NSA0NTEuMzQ1IDM4Ni43NSA0NTcuNDcgMzkzLjc1QzQ1MS4zNDUgNDAwLjc1IDQ0Ny44NDUgNDA5Ljc1IDQ0Ny44NDUgNDE5Ljc1QzQ0Ny44NDUgNDI5Ljg3NSA0NTEuOTcgNDM4Ljc1IDQ1OC4wOTUgNDQ1Ljc1QzQ1MS45NyA0NTIuNzUgNDQ3Ljg0NSA0NjEuNzUgNDQ3Ljg0NSA0NzEuNzVDNDQ3Ljg0NSA0OTMuODc1IDQ2NS43MiA1MTEuNzUgNDg3Ljg0NiA1MTEuNzVDNDk5LjU5NiA1MTEuNzUgNTA5Ljg0NiA1MDYuNjI1IDUxNy4yMjEgNDk4LjYyNUM1MjMuNzIxIDUwMi43NSA1MzEuMjIxIDUwNS4xMjUgNTM5LjIyMSA1MDUuMTI1QzU0My45NzIgNTA1LjEyNSA1NDkuMDk3IDUwNC41IDU1My44NDcgNTAyLjI1QzU2NS43MjIgNDk3Ljc1IDU3NC4wOTcgNDg3Ljc1IDU3Ny4yMjIgNDc2LjI1QzU4OS4wOTcgNDc2LjYyNSA2MDAuOTczIDQ3MS41IDYwOS4yMjMgNDYxLjg3NUM2MTcuMjIzIDQ1MiA2MTkuODQ4IDQzOS43NSA2MTcuNTk4IDQyOC4yNUM2MjcuNzIzIDQyMy4yNSA2MzUuNzIzIDQxMy42MjUgNjM4LjcyMyA0MDEuMzc1QzY0MS41OTggMzg5LjI1IDYzOC4zNDggMzc3LjEyNSA2MzEuMjIzIDM2OC4xMjVDNjM4LjQ3MyAzNTkuMzc1IDY0MS43MjMgMzQ3LjI1IDYzOS4wOTggMzM1Wk00ODcuODQ2IDE5MkM1MDAuMTA2IDE5MiA1MTIuMDc2IDE5NS4yNzkgNTIyLjY4NCAyMDEuMzM2QzUyOC42MDggMTk5Ljc5MSA1MzQuNjc2IDE5OSA1NDAuNzY4IDE5OUM1NDEuMzcgMTk5IDU0MS45NTYgMTk5LjE1MiA1NDIuNTU3IDE5OS4xNjhDNTMwLjE4OCA4Ny4xNTQgNDM1LjMxNyAwIDMyMC4wMDUgMEMyMDQuNzk0IDAgMTA5Ljk5NSA4Ny4wMDYgOTcuNDk1IDE5OC44NzlDOTguMjE0IDE5OC44NTcgOTguOTE3IDE5OC42ODIgOTkuNjM4IDE5OC42ODJDMTA1LjY2MSAxOTguNjgyIDExMS42NTEgMTk5LjQ1OSAxMTcuNDk1IDIwMC45NzlDMTI3LjkyOSAxOTUuMTA3IDEzOS42NjggMTkyIDE1MS45NjUgMTkyQzE1NS43ODUgMTkyIDE1OS40NjEgMTkyLjU1NSAxNjMuMTIzIDE5My4xMzNDMTc3LjU2MyAxMTkuNjQ2IDI0Mi4zNDkgNjQgMzIwLjAwNSA2NEMzOTcuNjUzIDY0IDQ2Mi40MzcgMTE5LjYzMyA0NzYuODg0IDE5My4xMDdDNDgwLjQ4NCAxOTIuNTUxIDQ4NC4wOTIgMTkyIDQ4Ny44NDYgMTkyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function EarMuffs(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M151.965 224C140.089 224 129.714 229.375 122.339 237.75C111.714 230.75 98.589 228.375 85.964 233.25C74.213 238.125 65.713 248 62.213 259.5C50.463 259.25 38.838 264.25 30.588 273.875C22.587 283.75 19.962 296 22.212 307.5C12.087 312.625 3.712 322.25 1.212 334.375C-1.788 346.625 1.462 358.375 8.587 367.75C1.587 376.75 -1.663 388.75 0.837 401C3.712 413.25 11.712 422.75 22.212 428.25C19.712 439.375 22.212 451.875 30.213 461.5C38.213 471.375 50.088 476.25 61.963 476.25C65.213 487.75 73.463 497.25 85.339 502.375C90.464 504.25 95.214 505.25 100.339 505.25C108.214 505.25 115.964 502.875 122.464 498.5C129.714 506.75 140.214 512 151.965 512C174.09 512 191.965 494.125 191.965 472C191.965 462.001 187.965 453.125 181.84 446.125C187.965 439.125 191.965 430.25 191.965 420.25S188.465 401 182.34 394.001C188.465 387 191.965 378.001 191.965 368.125C191.965 358.25 188.465 349.25 182.34 342.25C188.465 335.25 191.965 326.25 191.965 316.25C191.965 306.125 187.84 297.25 181.715 290.25C187.84 283.25 191.965 274.25 191.965 264.25C191.965 241.875 174.09 224 151.965 224ZM639.098 335C636.223 322.75 628.223 313.25 617.723 308.125C620.223 296.625 617.723 284.125 609.723 274.5C601.723 264.625 589.847 259.75 577.972 259.75C574.722 248.25 566.472 238.375 554.597 233.625C541.846 228.625 528.471 231.125 517.721 238.125C510.471 229.75 499.971 224 487.846 224C465.72 224 447.845 241.875 447.845 264C447.845 274.125 451.97 283 458.095 290.001C451.97 297 447.845 305.875 447.845 316.125C447.845 326.001 451.345 335 457.47 342.001C451.345 349 447.845 358.001 447.845 367.875C447.845 377.75 451.345 386.75 457.47 393.75C451.345 400.75 447.845 409.75 447.845 419.75C447.845 429.875 451.97 438.75 458.095 445.75C451.97 452.75 447.845 461.75 447.845 471.75C447.845 493.875 465.72 511.75 487.846 511.75C499.596 511.75 509.846 506.625 517.221 498.625C523.721 502.75 531.221 505.125 539.221 505.125C543.972 505.125 549.097 504.5 553.847 502.25C565.722 497.75 574.097 487.75 577.222 476.25C589.097 476.625 600.973 471.5 609.223 461.875C617.223 452 619.848 439.75 617.598 428.25C627.723 423.25 635.723 413.625 638.723 401.375C641.598 389.25 638.348 377.125 631.223 368.125C638.473 359.375 641.723 347.25 639.098 335ZM487.846 192C500.106 192 512.076 195.279 522.684 201.336C528.608 199.791 534.676 199 540.768 199C541.37 199 541.956 199.152 542.557 199.168C530.188 87.154 435.317 0 320.005 0C204.794 0 109.995 87.006 97.495 198.879C98.214 198.857 98.917 198.682 99.638 198.682C105.661 198.682 111.651 199.459 117.495 200.979C127.929 195.107 139.668 192 151.965 192C155.785 192 159.461 192.555 163.123 193.133C177.563 119.646 242.349 64 320.005 64C397.653 64 462.437 119.633 476.884 193.107C480.484 192.551 484.092 192 487.846 192Z" />
        </Icon>
    </>
}