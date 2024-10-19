
import { Icon } from "../../index";

/**
 * A component that renders the `alicorn` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/alicorn?s=light alicorn}
 * @preview ![alicorn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzIuMDIxIDY0SDUzNS4wMThMNTM0Ljg5MyA2My43NUM1NDAuNjE0IDUzLjY0MSA1NDMuNjQzIDQxLjk3MyA1NDMuMjMgMjkuODA1QzU0Mi42NiAxMy4wMzQgNTI4LjA0OSAwIDUxMS4yNjggMEw0MDAuMDE0IDBDMzMwLjg4NyAwIDI3NC42MzUgNTUuMjUgMjcyLjM4NSAxMjMuODc1QzIzNi43NTggMTE0Ljc1IDIwOS4yNTggODkuMjUgMTkwLjg4MSA0Ny4yNUMxODYuODgxIDM4LjEyNSAxNzcuODgxIDMyLjEyNSAxNjcuODgxIDMyQzE1Ny4zODEgMzIuMjUgMTQ5LjAwNiAzNy4zNzUgMTQ0Ljc1NCA0Ni4zNzVDMTMzLjYyOSA3MC4wMDEgMTI4LjAwNCA5NS4xMjUgMTI4LjAwNCAxMjEuMTI1QzEyOC4wMDQgMTk2LjUgMTg0LjUwNiAyNjQuNzUgMjYwLjg4MyAyODNDMjY1LjI2IDI4NCAyNjkuNzYgMjgxIDI3MC42MzUgMjc2LjVMMjczLjUxIDI2MC44NzVDMjc0LjM4NSAyNTYuNjI1IDI3MS42MzUgMjUyLjc1IDI2Ny41MSAyNTEuNjI1QzIwNS43NTggMjM2LjUgMTYwLjAwNiAxODEuNjI1IDE2MC4wMDYgMTIxLjEyNUMxNjAuMDA2IDEwNC43NSAxNjIuNzU2IDg4Ljg3NSAxNjguMDA2IDczLjc1QzE5Ny4zODEgMTMwLjI1IDI0NC4xMzMgMTYwIDMwNC4wMSAxNjBWMTI4QzMwNC4wMSA3NC45ODEgMzQ2Ljk5IDMyIDQwMC4wMSAzMkg1MTEuMjY4QzUxMS4yNjggNDUuMjUgNTAzLjE0MyA1Ni42MjUgNDkxLjY0MSA2MS41TDUxMi4wMTggODYuMjVWMTgwLjEyNUM1MTIuMDE4IDE4NyA1MDcuNjQzIDE5My4xMjUgNTAxLjE0MyAxOTUuMjVMNDc1LjY0MSAyMDRDNDY2LjM5MSAyMDcuMjUgNDU5LjUxNiAyMDEuMjUgNDU3LjE0MSAxOTcuNzVMNDMyLjAxNCAxNjBMMzg0LjAxNCAxNDRWMjQ0LjI1QzM4NC4wMTQgMjcwLjg3NSAzNzEuMzg3IDI5NC4zNzUgMzUyLjAxMiAzMDkuNzVWNDY0QzM1Mi4wMTIgNDcyLjgzNyAzNDQuODQ4IDQ4MCAzMzYuMDEyIDQ4MEgzMDQuMDFDMjk1LjE3MyA0ODAgMjg4LjAxIDQ3Mi44MzcgMjg4LjAxIDQ2NFYzMTguNzVMMTgzLjYzMSAyOTUuNUwxNTEuNTA2IDM4NUwxNzAuNDc0IDQ2MC4wODFDMTczLjAyNyA0NzAuMTg5IDE2NS4zODcgNDgwIDE1NC45NjEgNDgwSDEzMC42MTNDMTIzLjIxNyA0ODAgMTE2Ljc4NSA0NzQuOTMxIDExNS4wNTcgNDY3Ljc0TDk2Ljg3OSAzOTIuMTI1Qzk1LjU4OSAzODYuNzU5IDk1LjczMyAzODEuMTQ4IDk3LjI5NyAzNzUuODU1TDEyNC44NzkgMjgyLjVDMTA3LjUwNCAyNzAuMzc1IDk2LjAwNCAyNTAuMjUgOTYuMDA0IDIyNy4zNzVDOTYuMDA0IDIxMS41IDEwMS42MjkgMTk3LjI1IDExMC44NzkgMTg1Ljc1QzEwNS44NzkgMTc0Ljg3NSAxMDEuODc5IDE2My42MjUgOTkuMzc5IDE1MkM5MS4zNzkgMTU4Ljg3NSA4NC4yNTIgMTY3IDc4LjYyNyAxNzYuMTI1QzM1LjEyNyAxNzYuODc1IDAgMjEyLjI1IDAgMjU2VjMwNEMwIDMxMi44MDEgNy4xOTkgMzIwIDE2IDMyMFMzMi4wMDIgMzEyLjc5OSAzMi4wMDIgMzA0VjI1NkMzMi4wMDIgMjM0LjUgNDYuMjUyIDIxNi41IDY1Ljc1MiAyMTAuMzc1QzY0Ljc1MiAyMTYgNjQuMDAyIDIyMS41IDY0LjAwMiAyMjcuMzc1QzY0LjAwMiAyNTEuNjI1IDcyLjg3NyAyNzQuNzUgODguNTA0IDI5Mi42MjVMNjYuNTc3IDM2Ny4wNDZDNjMuNDUzIDM3Ny42NDYgNjMuMTY5IDM4OC44ODEgNjUuNzUyIDM5OS42MjVMODMuOTI1IDQ3NS4yMkM4OS4xMTEgNDk2Ljc5MyAxMDguNDA3IDUxMiAxMzAuNTk1IDUxMkgxNTQuOTQxQzE4Ni4yMjMgNTEyIDIwOS4xNDYgNDgyLjU1NyAyMDEuNDc1IDQ1Mi4yM0wxODQuODgxIDM4Ni42MjVMMjA0LjEzMSAzMzIuODc1TDI1Ni4wMDggMzQ0LjM3NVY0NjRDMjU2LjAwOCA0OTAuNCAyNzcuNjA4IDUxMiAzMDQuMDA4IDUxMkgzMzYuMDE0QzM2Mi40MTQgNTEyIDM4NC4wMTQgNDkwLjQgMzg0LjAxNCA0NjRWMzIzLjc1QzQwNC41MTQgMzAyLjI1IDQxNi4wMTQgMjc0LjAwMSA0MTYuMDE0IDI0NC4yNVYxOTMuNzVMNDMwLjUxNCAyMTUuNUM0NDkuNjQxIDI0NC4xMjUgNDgwLjUxNiAyMzYuMTI1IDQ4Ni4wMTYgMjM0LjI1TDUxMS41MTggMjI1LjYyNUM1MzAuOTQzIDIxOS4wNTUgNTQ0LjAxOCAyMDAuODMyIDU0NC4wMTggMTgwLjMyNVYxMTUuMzc1TDYzNi4zOTYgNzguNjI1QzY0My4wMjEgNzQuMjUgNjM5Ljg5NiA2NCA2MzIuMDIxIDY0Wk00NjQuMDE2IDk2QzQ2NC4wMTYgODcuMTI1IDQ1Ni44OTEgODAgNDQ4LjAxNiA4MFM0MzIuMDE0IDg3LjEyNSA0MzIuMDE0IDk2UzQzOS4xNDEgMTEyIDQ0OC4wMTYgMTEyUzQ2NC4wMTYgMTA0Ljg3NSA0NjQuMDE2IDk2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Alicorn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M632.021 64H535.018L534.893 63.75C540.614 53.641 543.643 41.973 543.23 29.805C542.66 13.034 528.049 0 511.268 0L400.014 0C330.887 0 274.635 55.25 272.385 123.875C236.758 114.75 209.258 89.25 190.881 47.25C186.881 38.125 177.881 32.125 167.881 32C157.381 32.25 149.006 37.375 144.754 46.375C133.629 70.001 128.004 95.125 128.004 121.125C128.004 196.5 184.506 264.75 260.883 283C265.26 284 269.76 281 270.635 276.5L273.51 260.875C274.385 256.625 271.635 252.75 267.51 251.625C205.758 236.5 160.006 181.625 160.006 121.125C160.006 104.75 162.756 88.875 168.006 73.75C197.381 130.25 244.133 160 304.01 160V128C304.01 74.981 346.99 32 400.01 32H511.268C511.268 45.25 503.143 56.625 491.641 61.5L512.018 86.25V180.125C512.018 187 507.643 193.125 501.143 195.25L475.641 204C466.391 207.25 459.516 201.25 457.141 197.75L432.014 160L384.014 144V244.25C384.014 270.875 371.387 294.375 352.012 309.75V464C352.012 472.837 344.848 480 336.012 480H304.01C295.173 480 288.01 472.837 288.01 464V318.75L183.631 295.5L151.506 385L170.474 460.081C173.027 470.189 165.387 480 154.961 480H130.613C123.217 480 116.785 474.931 115.057 467.74L96.879 392.125C95.589 386.759 95.733 381.148 97.297 375.855L124.879 282.5C107.504 270.375 96.004 250.25 96.004 227.375C96.004 211.5 101.629 197.25 110.879 185.75C105.879 174.875 101.879 163.625 99.379 152C91.379 158.875 84.252 167 78.627 176.125C35.127 176.875 0 212.25 0 256V304C0 312.801 7.199 320 16 320S32.002 312.799 32.002 304V256C32.002 234.5 46.252 216.5 65.752 210.375C64.752 216 64.002 221.5 64.002 227.375C64.002 251.625 72.877 274.75 88.504 292.625L66.577 367.046C63.453 377.646 63.169 388.881 65.752 399.625L83.925 475.22C89.111 496.793 108.407 512 130.595 512H154.941C186.223 512 209.146 482.557 201.475 452.23L184.881 386.625L204.131 332.875L256.008 344.375V464C256.008 490.4 277.608 512 304.008 512H336.014C362.414 512 384.014 490.4 384.014 464V323.75C404.514 302.25 416.014 274.001 416.014 244.25V193.75L430.514 215.5C449.641 244.125 480.516 236.125 486.016 234.25L511.518 225.625C530.943 219.055 544.018 200.832 544.018 180.325V115.375L636.396 78.625C643.021 74.25 639.896 64 632.021 64ZM464.016 96C464.016 87.125 456.891 80 448.016 80S432.014 87.125 432.014 96S439.141 112 448.016 112S464.016 104.875 464.016 96Z" />
    </Icon>
);

export default Alicorn;