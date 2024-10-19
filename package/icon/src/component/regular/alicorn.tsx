
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `alicorn` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/alicorn?s=regular alicorn}
 * @preview ![alicorn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAuMDg4IDk2QzQ4MC4wODggODcuMTI1IDQ3Mi45NjIgODAgNDY0LjA4NSA4MFM0NDguMDgzIDg3LjEyNSA0NDguMDgzIDk2UzQ1NS4yMDcgMTEyIDQ2NC4wODUgMTEyUzQ4MC4wODggMTA0Ljg3NSA0ODAuMDg4IDk2Wk02MzIuMDIgNDhINTQ1LjYwOEw1NDMuMzUgNDUuMjVDNTU5LjM0MiAzOS44NzkgNTcyLjQ2MiAyNi41MTggNTc1Ljk3MyA5LjY1OEM1NzcuMDA4IDQuNjg4IDU3My4wNTYgMCA1NjcuOTc5IDBINDMyLjA3OUMzNjMuNjkxIDAgMzA2LjE4MSA0OCAyOTEuNjc4IDExMkgyNjUuNzk4QzIyNi43NzUgMTEyIDE4Ny43MzUgOTguNDY1IDE2MC45OTQgNzAuMDUxQzE1Ny4wNTUgNjUuODY3IDE1Mi4xMDMgNjQgMTQ3LjE1MyA2NEMxMzcuNCA2NCAxMjguMDIzIDcxLjYyNSAxMjguMDIzIDgzQzEyOC4wMjMgMTY5LjEyNSAxODcuNzg0IDI0NS43NSAyNjguMDQ5IDI2Ni4yNUMyNzguMTc2IDI2OC44NzUgMjg4LjA1MiAyNjEuMTI1IDI4OC4wNTIgMjUwLjYyNVYyMzQuMjVDMjg4LjA1MiAyMjcuMzQgMjgzLjY0OCAyMjEuMDA4IDI3Ni45OTUgMjE5LjE0M0MyMzkuNTgzIDIwOC42NTggMjA3LjkyMyAxODEuMzk2IDE5MC41MzQgMTQ1Ljc1QzIxMy45MTUgMTU1LjEyNSAyMzkuNDE5IDE2MCAyNjUuNzk4IDE2MEgzMzYuMDYxVjE0NEMzMzYuMDYxIDkwLjk4IDM3OS4wNSA0OCA0MzIuMDc5IDQ4SDQ4My40NjRMNTI4LjA5NiAxMDIuMjVWMTY3LjYyNUM1MjguMDk2IDE3Mi4zNjkgNTI1LjA4MiAxNzYuNTg2IDUyMC41OTQgMTc4LjEyNUw0ODkuNTg5IDE4OC43NUM0ODguMDg4IDE4OS4yNSA0NzkuODM4IDE5MS43NSA0NzMuMDg3IDE4NUw0NDguMDgzIDE2MEg0MTYuMDc3VjI0MEM0MTYuMDc3IDI2Ni4xMjUgNDAzLjQ0OSAyODkgMzg0LjA2OSAzMDMuNjI1VjQ2NEgzMzYuMDYxVjMyMEwxOTYuMTYxIDI4OC44NzVMMTY3LjUzMSAzNjlMMTkxLjUzNCA0NjRIMTUwLjAyNkwxMjguODk4IDM3Ni4xMjVDMTI3LjY0OCAzNzAuNzUgMTI3Ljc3MyAzNjUuMjUgMTI5LjI3MyAzNjBMMTUyLjAyNyAyODMuMjVDMTI4LjUyMyAyNzMuNzUgMTEyLjAyMSAyNTAuODc1IDExMi4wMjEgMjI0QzExMi4wMjEgMjA5IDExNy4xNDUgMTk1LjM3NSAxMjUuNzczIDE4NC41QzExNi44OTUgMTcwLjI1IDExMC4xNDYgMTU0Ljc1IDEwNS4xNDQgMTM4LjM3NUM5Ny4yNjggMTQ0Ljg3NSA4OS44OTEgMTUyIDg0LjAxNCAxNjAuMzc1QzM3LjM4MiAxNjIuNSAwIDIwMC44NzUgMCAyNDhWMjk2QzAgMzA5LjI1NCAxMC43NDcgMzIwIDI0LjAwNCAzMjBTNDguMDA4IDMwOS4yNTQgNDguMDA4IDI5NlYyNDhDNDguMDA4IDIzNC43NSA1NC44ODQgMjIzLjYyNSA2NC43NjIgMjE2LjM3NUM2NC42MzcgMjE4Ljg3NSA2NC4wMTIgMjIxLjM3NSA2NC4wMTIgMjI0QzY0LjAxMiAyNTQuMTI1IDc1Ljg4OSAyODIuMTI1IDk2LjE0MiAzMDIuNjI1TDgzLjI2NCAzNDYuMzc1Qzc5LjI2NSAzNTkuNjI1IDc4Ljg5IDM3My43NSA4Mi4xMzkgMzg3LjI1TDEwNi4yNyA0ODcuNUMxMDkuNzcxIDUwMS44NzUgMTIyLjY0NyA1MTIgMTM3LjQgNTEySDIxMi4xNjRDMjMzLjAxNyA1MTIgMjQ4LjI5NiA0OTIuMzc1IDI0My4xOCA0NzIuMTY0TDIxNy42NjQgMzcxLjM3NUwyMjcuMDQxIDM0NUwyODguMDUyIDM1OC41VjQ4MEMyODguMDUyIDQ5Ny42IDMwMi40NTYgNTEyIDMyMC4wNTggNTEySDQwMC4wNzNDNDE3LjY3NyA1MTIgNDMyLjA3OSA0OTcuNiA0MzIuMDc5IDQ4MFYzMjQuMzc1QzQ1Mi4wODIgMzAxLjg3NSA0NjMuMzM0IDI3My4yNSA0NjQuMDg1IDI0Mi43NUM0NjQuMDg1IDI0MS44NzUgNDY0LjA4NSAyMzQuMzc1IDQ2NC4wODUgMjM0LjM3NUM0ODUuMDg4IDI0MS4zNzUgNTAyLjQ2NyAyMzUuMTI1IDUwNS4wOTIgMjM0LjI1TDUzNi4wOTIgMjIzLjYyN0M1NjAuMDI4IDIxNS40MjQgNTc2LjEwNiAxOTIuOTIyIDU3Ni4xMDYgMTY3LjYyNVYxMDIuNDlDNTc2LjEwNiA5Ny4zODcgNTc1LjA3NiA5Mi40MTQgNTczLjUyNyA4Ny42MjlMNjM2LjM5NiA2Mi42MjVDNjQzLjAyMiA1OC4yNSA2MzkuODk2IDQ4IDYzMi4wMiA0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Alicorn(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M480.088 96C480.088 87.125 472.962 80 464.085 80S448.083 87.125 448.083 96S455.207 112 464.085 112S480.088 104.875 480.088 96ZM632.02 48H545.608L543.35 45.25C559.342 39.879 572.462 26.518 575.973 9.658C577.008 4.688 573.056 0 567.979 0H432.079C363.691 0 306.181 48 291.678 112H265.798C226.775 112 187.735 98.465 160.994 70.051C157.055 65.867 152.103 64 147.153 64C137.4 64 128.023 71.625 128.023 83C128.023 169.125 187.784 245.75 268.049 266.25C278.176 268.875 288.052 261.125 288.052 250.625V234.25C288.052 227.34 283.648 221.008 276.995 219.143C239.583 208.658 207.923 181.396 190.534 145.75C213.915 155.125 239.419 160 265.798 160H336.061V144C336.061 90.98 379.05 48 432.079 48H483.464L528.096 102.25V167.625C528.096 172.369 525.082 176.586 520.594 178.125L489.589 188.75C488.088 189.25 479.838 191.75 473.087 185L448.083 160H416.077V240C416.077 266.125 403.449 289 384.069 303.625V464H336.061V320L196.161 288.875L167.531 369L191.534 464H150.026L128.898 376.125C127.648 370.75 127.773 365.25 129.273 360L152.027 283.25C128.523 273.75 112.021 250.875 112.021 224C112.021 209 117.145 195.375 125.773 184.5C116.895 170.25 110.146 154.75 105.144 138.375C97.268 144.875 89.891 152 84.014 160.375C37.382 162.5 0 200.875 0 248V296C0 309.254 10.747 320 24.004 320S48.008 309.254 48.008 296V248C48.008 234.75 54.884 223.625 64.762 216.375C64.637 218.875 64.012 221.375 64.012 224C64.012 254.125 75.889 282.125 96.142 302.625L83.264 346.375C79.265 359.625 78.89 373.75 82.139 387.25L106.27 487.5C109.771 501.875 122.647 512 137.4 512H212.164C233.017 512 248.296 492.375 243.18 472.164L217.664 371.375L227.041 345L288.052 358.5V480C288.052 497.6 302.456 512 320.058 512H400.073C417.677 512 432.079 497.6 432.079 480V324.375C452.082 301.875 463.334 273.25 464.085 242.75C464.085 241.875 464.085 234.375 464.085 234.375C485.088 241.375 502.467 235.125 505.092 234.25L536.092 223.627C560.028 215.424 576.106 192.922 576.106 167.625V102.49C576.106 97.387 575.076 92.414 573.527 87.629L636.396 62.625C643.022 58.25 639.896 48 632.02 48Z" />
        </Icon>
    </>
}