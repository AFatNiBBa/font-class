
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `house-person-leave` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/house-person-leave?s=duotone house-person-leave}
 * @preview ![house-person-leave](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMzNy4yMzkgMjg0LjYxN0MzMDUuOTg3IDI2OC44NjcgMjkzLjIzNSAyMzAuNDg0IDMwOC43MzcgMTk4Ljk3N0wzMTUuNDg3IDE4NS4zNDhDMzI5LjM2NCAxNTcuMzQ0IDM1Mi45ODkgMTM1LjMzNiAzODEuODY4IDEyMy41ODZMMzg5LjM2OCAxMjAuNTg2TDI2My40ODMgOC45MzhDMjUwLjEwOCAtMi45MzcgMjI5Ljk4MSAtMi45MzcgMjE2LjYwNCA4LjkzOEw0LjcxNSAxOTYuNDc3Qy0xLjAzNyAyMDEuNzI3IC0xLjY2MiAyMTAuNjAyIDMuNTg4IDIxNi40OEwyMi4zNCAyMzcuODU5QzI3LjQ2NSAyNDMuNjA5IDM2LjQ2NyAyNDQuMjM0IDQyLjM0MiAyMzkuMTA5TDYzLjk2OSAyMTkuOThWMzg0LjEzN0M2My45NjkgNDAxLjc2NiA3OC4zNDQgNDE2LjE0NSA5NS45NzEgNDE2LjE0NUgzMjUuNDg3TDM1Ni44NjYgMzg0LjYzN0MzNTkuODY2IDM4MS42MzcgMzYyLjI0MSAzNzguMDEyIDM2My44NjYgMzc0LjAwOEwzODQuNDkzIDMyMi41TDM5Ni4yNDMgMjkzLjI0MkMzOTUuNzQzIDI5MC4yNDIgMzk1LjQ5MyAyODcuMjQyIDM5NS4yNDMgMjg0LjI0MkMzNzcuMTE2IDI5My43NDIgMzU1LjQ5MSAyOTMuODY3IDMzNy4yMzkgMjg0LjYxN1pNMjIzLjk4MSAyNzIuMTE3QzIyMy45ODEgMjgwLjk5MiAyMTYuODU0IDI4OC4xMTcgMjA3Ljk3OSAyODguMTE3SDE0My45NzVDMTM1LjA5OCAyODguMTE3IDEyNy45NzMgMjgwLjk5MiAxMjcuOTczIDI3Mi4xMTdWMjA4LjEwMkMxMjcuOTczIDE5OS4yMjcgMTM1LjA5OCAxOTIuMTAyIDE0My45NzUgMTkyLjEwMkgyMDcuOTc5QzIxNi44NTQgMTkyLjEwMiAyMjMuOTgxIDE5OS4yMjcgMjIzLjk4MSAyMDguMTAyVjI3Mi4xMTdaTTUyOC4wMDIgOTYuMDc4QzU1NC41MDQgOTYuMDc4IDU3Ni4wMDYgNzQuNTc4IDU3Ni4wMDYgNDguMDdDNTc2LjAwNiAyMS41NjYgNTU0LjUwNCAwLjA2MyA1MjguMDAyIDAuMDYzUzQ3OS45OTkgMjEuNTY2IDQ3OS45OTkgNDguMDdDNDc5Ljk5OSA3NC41NzggNTAxLjUgOTYuMDc4IDUyOC4wMDIgOTYuMDc4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zOTMuODY4IDM4NS44NTlDMzkwLjc0MyAzOTMuOTg0IDM4NS44NjggNDAxLjIzNCAzNzkuNzQxIDQwNy4zNTlMMzI5LjczOSA0NTcuNDk2QzMxNy44NjIgNDcwIDMxOC4xMTIgNDg5Ljc1IDMzMC4zNjQgNTAyLjAwNEMzNDIuNjE0IDUxNC4yNTggMzYyLjM2NiA1MTQuNjMzIDM3NC44NjYgNTAyLjc1NEw0MzQuMzcgNDQzLjM2N0M0NDAuNDk3IDQzNy4yNDIgNDQ1LjI0NyA0MjkuODY3IDQ0OC40OTcgNDIxLjg2M0w0NjEuOTk5IDM4OC4xMDlDNDA2Ljc0MyAzMjcuNzE5IDQyMy4zNyAzNDYuMjI3IDQxNC42MiAzMzQuMzQ0TDM5My44NjggMzg1Ljg1OVpNNjIyLjc1OCAyNDUuMDc4TDU5OS41MDggMjMzLjMyOEw1ODkuNzU2IDIwMy45NDVDNTc1LjEzMSAxNTkuMzEyIDUzNC4xMjcgMTI4LjE4IDQ4Ny42MjQgMTI4LjA1NUM0NTEuNjIyIDEyNy45MyA0MzEuNzQ1IDEzOC4xODQgMzk0LjM2OCAxNTMuMTg4QzM3Mi42MTYgMTYyLjA2MyAzNTQuOTkxIDE3OC40NDEgMzQ0LjYxNCAxOTkuNDQ1TDMzNy44NjQgMjEzLjA3QzMzMC4xMTQgMjI4LjgyOCAzMzYuNDg5IDI0Ny45NTMgMzUyLjExNCAyNTUuOTU3QzM1OS42MTYgMjU5LjcwNyAzNjguMzY2IDI2MC4zMzIgMzc2LjM2NiAyNTcuNzA3QzM4NC4zNjggMjU0Ljk1MyAzOTAuODY4IDI0OS4yMDMgMzk0LjYxOCAyNDEuNzAzTDQwMS4zNjggMjI4LjA3OEM0MDQuNzQzIDIyMS4wNzQgNDEwLjYyIDIxNS41NyA0MTcuODcgMjEyLjY5NUw0NDQuNjIyIDIwMS44Mkw0MjkuNDk1IDI2Mi41ODJDNDI0LjI0NSAyODMuNDYxIDQyOS44NyAzMDUuNDY5IDQ0NC4zNzIgMzIxLjM0NEw1MDQuMjUxIDM4Ni43MzRDNTExLjUwMSAzOTQuNjA5IDUxNi42MjcgNDA0LjEwOSA1MTkuMTI3IDQxNC40ODRMNTM3LjM3NyA0ODcuNzVDNTQxLjYyNyA1MDQuODgzIDU1OS4wMDQgNTE1LjM4MyA1NzYuMTMxIDUxMS4wMDhDNTkzLjM4MSA1MDYuNzU4IDYwMy43NTggNDg5LjM3NSA1OTkuNTA4IDQ3Mi4yNUw1NzcuMjU2IDM4My4yM0M1NzQuNzU2IDM3Mi44NTIgNTY5LjYzMSAzNjMuMzUyIDU2Mi4zNzkgMzU1LjQ3N0w1MTYuODc3IDMwNS44NDRMNTM0LjEyNyAyMzcuMDc4TDUzOS42MjcgMjUzLjU3OEM1NDQuODc5IDI2OS43MTEgNTU2LjI1NCAyODIuOTYxIDU3MS4yNTYgMjkwLjU4Nkw1OTQuNjMxIDMwMi40NjVDNjAyLjEzMyAzMDYuMjE5IDYxMC44ODMgMzA2Ljg0NCA2MTguNzU4IDMwNC4wOUM2MjYuNzYgMzAxLjQ2NSA2MzMuMzg1IDI5NS43MTUgNjM3LjEzNSAyODguMDg2QzY0NC43NiAyNzIuMzM2IDYzOC41MSAyNTMuMjAzIDYyMi43NTggMjQ1LjA3OFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function HousePersonLeave(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M337.239 284.617C305.987 268.867 293.235 230.484 308.737 198.977L315.487 185.348C329.364 157.344 352.989 135.336 381.868 123.586L389.368 120.586L263.483 8.938C250.108 -2.937 229.981 -2.937 216.604 8.938L4.715 196.477C-1.037 201.727 -1.662 210.602 3.588 216.48L22.34 237.859C27.465 243.609 36.467 244.234 42.342 239.109L63.969 219.98V384.137C63.969 401.766 78.344 416.145 95.971 416.145H325.487L356.866 384.637C359.866 381.637 362.241 378.012 363.866 374.008L384.493 322.5L396.243 293.242C395.743 290.242 395.493 287.242 395.243 284.242C377.116 293.742 355.491 293.867 337.239 284.617ZM223.981 272.117C223.981 280.992 216.854 288.117 207.979 288.117H143.975C135.098 288.117 127.973 280.992 127.973 272.117V208.102C127.973 199.227 135.098 192.102 143.975 192.102H207.979C216.854 192.102 223.981 199.227 223.981 208.102V272.117ZM528.002 96.078C554.504 96.078 576.006 74.578 576.006 48.07C576.006 21.566 554.504 0.063 528.002 0.063S479.999 21.566 479.999 48.07C479.999 74.578 501.5 96.078 528.002 96.078Z" />
            <path d="M393.868 385.859C390.743 393.984 385.868 401.234 379.741 407.359L329.739 457.496C317.862 470 318.112 489.75 330.364 502.004C342.614 514.258 362.366 514.633 374.866 502.754L434.37 443.367C440.497 437.242 445.247 429.867 448.497 421.863L461.999 388.109C406.743 327.719 423.37 346.227 414.62 334.344L393.868 385.859ZM622.758 245.078L599.508 233.328L589.756 203.945C575.131 159.312 534.127 128.18 487.624 128.055C451.622 127.93 431.745 138.184 394.368 153.188C372.616 162.063 354.991 178.441 344.614 199.445L337.864 213.07C330.114 228.828 336.489 247.953 352.114 255.957C359.616 259.707 368.366 260.332 376.366 257.707C384.368 254.953 390.868 249.203 394.618 241.703L401.368 228.078C404.743 221.074 410.62 215.57 417.87 212.695L444.622 201.82L429.495 262.582C424.245 283.461 429.87 305.469 444.372 321.344L504.251 386.734C511.501 394.609 516.627 404.109 519.127 414.484L537.377 487.75C541.627 504.883 559.004 515.383 576.131 511.008C593.381 506.758 603.758 489.375 599.508 472.25L577.256 383.23C574.756 372.852 569.631 363.352 562.379 355.477L516.877 305.844L534.127 237.078L539.627 253.578C544.879 269.711 556.254 282.961 571.256 290.586L594.631 302.465C602.133 306.219 610.883 306.844 618.758 304.09C626.76 301.465 633.385 295.715 637.135 288.086C644.76 272.336 638.51 253.203 622.758 245.078Z" />
        </Icon>
    </>
}