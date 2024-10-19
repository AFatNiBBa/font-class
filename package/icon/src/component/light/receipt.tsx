
import { Icon } from "../../index";

/**
 * A component that renders the `receipt` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/receipt?s=light receipt}
 * @preview ![receipt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzYuMDkzIDI0MEgxMTIuMDMxQzEwMy4yMjkgMjQwIDk2LjAyNyAyNDcuMiA5Ni4wMjcgMjU2VjI1NkM5Ni4wMjcgMjY0LjggMTAzLjIyOSAyNzIgMTEyLjAzMSAyNzJIMzM2LjA5M0MzNDQuODk2IDI3MiAzNTIuMDk4IDI2NC44IDM1Mi4wOTggMjU2VjI1NkMzNTIuMDk4IDI0Ny4yIDM0NC44OTYgMjQwIDMzNi4wOTMgMjQwWk0zMzYuMDkzIDMzNkgxMTIuMDMxQzEwMy4yMjkgMzM2IDk2LjAyNyAzNDMuMiA5Ni4wMjcgMzUyVjM1MkM5Ni4wMjcgMzYwLjggMTAzLjIyOSAzNjggMTEyLjAzMSAzNjhIMzM2LjA5M0MzNDQuODk2IDM2OCAzNTIuMDk4IDM2MC44IDM1Mi4wOTggMzUyVjM1MkMzNTIuMDk4IDM0My4yIDM0NC44OTYgMzM2IDMzNi4wOTMgMzM2Wk00MTguMjQxIDBDNDEyLjM2NCAwIDQwNi4zNjMgMS43NSA0MDAuODYxIDUuNzVMMzU3LjM0OSAzN0wzMTguODM4IDkuMjVDMzEwLjMzNiAzLjI1IDMwMC41ODMgMC4xMjUgMjkwLjcwNiAwLjEyNVMyNzEuMDc1IDMuMTI1IDI2Mi42OTggOS4yNUwyMjQuMDYyIDM3TDE4NS40MjYgOS4yNUMxNzcuMDQ5IDMuMjUgMTY3LjE3MSAwLjEyNSAxNTcuMjk0IDAuMTI1QzE0Ny41NDEgMC4xMjUgMTM3Ljc4OCAzLjEyNSAxMjkuMjg2IDkuMjVMOTAuNzc1IDM3TDQ3LjI2MyA1Ljc1QzQxLjc2MiAxLjc1IDM1Ljc2IDAgMjkuODgzIDBDMTQuMzc5IDAuMTI1IDAgMTIuMjUgMCAyOS44NzVWNDgyLjI1QzAgNDk5LjUgMTQuMjU0IDUxMiAyOS44ODMgNTEyQzM1Ljc2IDUxMiA0MS43NjIgNTEwLjI1IDQ3LjI2MyA1MDYuMjVMOTAuNzc1IDQ3NUwxMjkuMjg2IDUwMi43NUMxMzcuNzg4IDUwOC43NSAxNDcuNTQxIDUxMS44NzUgMTU3LjQxOSA1MTEuODc1QzE2Ny4yOTYgNTExLjg3NSAxNzcuMDQ5IDUwOC44NzUgMTg1LjQyNiA1MDIuNzVMMjI0LjA2MiA0NzVMMjYyLjY5OCA1MDIuNzVDMjcxLjA3NSA1MDguNzUgMjgwLjk1MyA1MTEuODc1IDI5MC44MzEgNTExLjg3NUMzMDAuNTgzIDUxMS44NzUgMzEwLjMzNiA1MDguODc1IDMxOC44MzggNTAyLjc1TDM1Ny4zNDkgNDc1TDQwMC44NjEgNTA2LjI1QzQwNi4zNjMgNTEwLjI1IDQxMi4zNjQgNTEyIDQxOC4yNDEgNTEyQzQzMy43NDUgNTEyIDQ0Ny45OTkgNDk5Ljc1IDQ0Ny45OTkgNDgyLjI1VjI5Ljg3NUM0NDguMTI0IDEyLjUgNDMzLjg3IDAgNDE4LjI0MSAwWk00MTYuMTE1IDQ3Ny43NUwzNTcuMzQ5IDQzNS41TDMwMC4wODMgNDc2Ljc1QzI5Ny4zMzIgNDc4Ljc1IDI5NC4wODEgNDc5Ljc1IDI5MC44MzEgNDc5Ljc1QzI4Ny4zMyA0NzkuNzUgMjg0LjIwNCA0NzguNzUgMjgxLjMyOCA0NzYuNzVMMjI0LjA2MiA0MzUuNUwxNjYuNzk2IDQ3Ni43NUMxNjMuOTIgNDc4Ljc1IDE2MC43OTUgNDc5Ljc1IDE1Ny4yOTQgNDc5Ljc1QzE1My45MTggNDc5Ljc1IDE1MC43OTIgNDc4Ljc1IDE0Ny45MTYgNDc2Ljc1TDkwLjY1IDQzNS41TDMyLjAwOSA0NzguMzc1VjM0LjI1TDkwLjc3NSA3Ni41TDE0OC4wNDEgMzUuMjVDMTUwLjc5MiAzMy4yNSAxNTQuMDQyIDMyLjI1IDE1Ny4yOTQgMzIuMjVDMTYwLjc5NSAzMi4yNSAxNjMuOTIgMzMuMjUgMTY2Ljc5NiAzNS4yNUwyMjQuMDYyIDc2LjVMMjgxLjMyOCAzNS4yNUMyODQuMjA0IDMzLjI1IDI4Ny4zMyAzMi4yNSAyOTAuODMxIDMyLjI1QzI5NC4yMDcgMzIuMjUgMjk3LjMzMiAzMy4yNSAzMDAuMjA4IDM1LjI1TDM1Ny40NzQgNzYuNUw0MTYuMTE1IDM0LjI1VjQ3Ny43NVpNMzM2LjA5MyAxNDRIMTEyLjAzMUMxMDMuMjI5IDE0NCA5Ni4wMjcgMTUxLjIgOTYuMDI3IDE2MFYxNjBDOTYuMDI3IDE2OC44IDEwMy4yMjkgMTc2IDExMi4wMzEgMTc2SDMzNi4wOTNDMzQ0Ljg5NiAxNzYgMzUyLjA5OCAxNjguOCAzNTIuMDk4IDE2MFYxNjBDMzUyLjA5OCAxNTEuMiAzNDQuODk2IDE0NCAzMzYuMDkzIDE0NFoiLz48L3N2Zz4=|width=32|height=32)
 */
const Receipt: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M336.093 240H112.031C103.229 240 96.027 247.2 96.027 256V256C96.027 264.8 103.229 272 112.031 272H336.093C344.896 272 352.098 264.8 352.098 256V256C352.098 247.2 344.896 240 336.093 240ZM336.093 336H112.031C103.229 336 96.027 343.2 96.027 352V352C96.027 360.8 103.229 368 112.031 368H336.093C344.896 368 352.098 360.8 352.098 352V352C352.098 343.2 344.896 336 336.093 336ZM418.241 0C412.364 0 406.363 1.75 400.861 5.75L357.349 37L318.838 9.25C310.336 3.25 300.583 0.125 290.706 0.125S271.075 3.125 262.698 9.25L224.062 37L185.426 9.25C177.049 3.25 167.171 0.125 157.294 0.125C147.541 0.125 137.788 3.125 129.286 9.25L90.775 37L47.263 5.75C41.762 1.75 35.76 0 29.883 0C14.379 0.125 0 12.25 0 29.875V482.25C0 499.5 14.254 512 29.883 512C35.76 512 41.762 510.25 47.263 506.25L90.775 475L129.286 502.75C137.788 508.75 147.541 511.875 157.419 511.875C167.296 511.875 177.049 508.875 185.426 502.75L224.062 475L262.698 502.75C271.075 508.75 280.953 511.875 290.831 511.875C300.583 511.875 310.336 508.875 318.838 502.75L357.349 475L400.861 506.25C406.363 510.25 412.364 512 418.241 512C433.745 512 447.999 499.75 447.999 482.25V29.875C448.124 12.5 433.87 0 418.241 0ZM416.115 477.75L357.349 435.5L300.083 476.75C297.332 478.75 294.081 479.75 290.831 479.75C287.33 479.75 284.204 478.75 281.328 476.75L224.062 435.5L166.796 476.75C163.92 478.75 160.795 479.75 157.294 479.75C153.918 479.75 150.792 478.75 147.916 476.75L90.65 435.5L32.009 478.375V34.25L90.775 76.5L148.041 35.25C150.792 33.25 154.042 32.25 157.294 32.25C160.795 32.25 163.92 33.25 166.796 35.25L224.062 76.5L281.328 35.25C284.204 33.25 287.33 32.25 290.831 32.25C294.207 32.25 297.332 33.25 300.208 35.25L357.474 76.5L416.115 34.25V477.75ZM336.093 144H112.031C103.229 144 96.027 151.2 96.027 160V160C96.027 168.8 103.229 176 112.031 176H336.093C344.896 176 352.098 168.8 352.098 160V160C352.098 151.2 344.896 144 336.093 144Z" />
    </Icon>
);

export default Receipt;