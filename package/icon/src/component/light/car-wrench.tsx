
import { Icon } from "../../index";

/**
 * A component that renders the `car-wrench` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/car-wrench?s=light car-wrench}
 * @preview ![car-wrench](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTkuMzc1IDI5NC41TDQwMy41IDIyNS42MjVDMzk2Ljg3NSAxOTYuNSAzNzEgMTc1Ljg3NSAzNDEuMTI1IDE3NkgxNjguMTI1QzEzOC4yNSAxNzUuODc1IDExMi4yNSAxOTYuNSAxMDUuNzUgMjI1LjYyNUw4OS4zNzUgMjk2LjEyNUM2NSAzMDguNSA0OCAzMzMuNSA0OCAzNjIuNjI1VjQxNy43NUM0OC4xMjUgNDM3Ljc1IDYxIDQ1NS4zNzUgODAgNDYxLjVWNDk2QzgwIDUwNC44NzUgODcuMTI1IDUxMiA5NiA1MTJTMTEyIDUwNC44NzUgMTEyIDQ5NlY0NjRINDAwVjQ5NkM0MDAgNTA0Ljg3NSA0MDcuMTI1IDUxMiA0MTYgNTEyUzQzMiA1MDQuODc1IDQzMiA0OTZWNDYxLjVDNDUxIDQ1NS4zNzUgNDYzLjg3NSA0MzcuNzUgNDY0IDQxNy43NVYzNjIuNjI1QzQ2NCAzMzMuMTI1IDQ0Ni41IDMwNi4zNzUgNDE5LjM3NSAyOTQuNVpNMTM2Ljg3NSAyMzIuNzVDMTQwLjI1IDIxOC4yNSAxNTMuMTI1IDIwOCAxNjguMTI1IDIwOEgzNDEuMTI1QzM1NiAyMDggMzY5IDIxOC4yNSAzNzIuMzc1IDIzMi43NUwzODUuMTI1IDI4OEgxMjQuMTI1TDEzNi44NzUgMjMyLjc1Wk00MzIgNDE3Ljc1QzQzMiA0MjUuNjI1IDQyNS42MjUgNDMyIDQxNy43NSA0MzJIOTQuMjVDODYuMzc1IDQzMiA4MCA0MjUuNjI1IDgwIDQxNy43NVYzNjIuNjI1QzgwIDMzOS4xMjUgOTkuMTI1IDMyMCAxMjIuNjI1IDMyMEgzODkuMzc1QzQxMi44NzUgMzIwIDQzMiAzMzkuMTI1IDQzMiAzNjIuNjI1VjQxNy43NVpNMzY4IDM1MkMzNTQuODAxIDM1MiAzNDQgMzYyLjc5OSAzNDQgMzc2QzM0NCAzODkuMTk5IDM1NC44MDEgNDAwIDM2OCA0MDBTMzkyIDM4OS4xOTkgMzkyIDM3NkMzOTIgMzYyLjc5OSAzODEuMTk5IDM1MiAzNjggMzUyWk0xNDQgMzUyQzEzMC44MDEgMzUyIDEyMCAzNjIuNzk5IDEyMCAzNzZDMTIwIDM4OS4xOTkgMTMwLjgwMSA0MDAgMTQ0IDQwMFMxNjggMzg5LjE5OSAxNjggMzc2QzE2OCAzNjIuNzk5IDE1Ny4xOTkgMzUyIDE0NCAzNTJaTTExMiAxNjBDMTM4LjA4MiAxNjAgMTYxLjAyMSAxNDcuMzMgMTc1LjYyNSAxMjguMDE2SDMzNi4zNzVDMzUwLjk3OSAxNDcuMzMgMzczLjkxOCAxNjAgNDAwIDE2MEM0NDQuMTg0IDE2MCA0ODAgMTI0LjE4MiA0ODAgODBDNDgwIDM1LjgxNiA0NDQuMTg0IDAgNDAwIDBDMzczLjkwNCAwIDM1MC45NTMgMTIuNjg0IDMzNi4zNSAzMi4wMTZIMTc1LjY1QzE2MS4wNDcgMTIuNjg0IDEzOC4wOTYgMCAxMTIgMEM2Ny44MTYgMCAzMiAzNS44MTYgMzIgODBDMzIgMTI0LjE4MiA2Ny44MTYgMTYwIDExMiAxNjBaTTY2Ljk0NyA2NEM3My41NzQgNDUuNDE4IDkxLjE3IDMyIDExMiAzMkMxMjYuOTU3IDMyIDE0MC44NSAzOS4wMzUgMTUwLjExNyA1MS4zMDNDMTU2LjE2NCA1OS4zMDkgMTY1LjYxNyA2NC4wMTYgMTc1LjY1IDY0LjAxNkgzMzYuMzVDMzQ2LjM4MyA2NC4wMTYgMzU1LjgzNiA1OS4zMDkgMzYxLjg4MyA1MS4zMDNDMzcxLjE1IDM5LjAzNSAzODUuMDQzIDMyIDQwMCAzMkM0MjAuODMgMzIgNDM4LjQyNiA0NS40MTggNDQ1LjA1MyA2NEg0MDBWOTZINDQ1LjA1M0M0MzguNDI2IDExNC41ODIgNDIwLjgzIDEyOCA0MDAgMTI4QzM4NS4wNTMgMTI4IDM3MS4xNjYgMTIwLjk3MSAzNjEuOSAxMDguNzE1QzM1NS44NTIgMTAwLjcxNyAzNDYuNDA0IDk2LjAxNiAzMzYuMzc1IDk2LjAxNkgxNzUuNjI1QzE2NS41OTYgOTYuMDE2IDE1Ni4xNDggMTAwLjcxNyAxNTAuMSAxMDguNzE1QzE0MC44MzQgMTIwLjk3MSAxMjYuOTQ3IDEyOCAxMTIgMTI4QzkxLjE3IDEyOCA3My41NzQgMTE0LjU4MiA2Ni45NDcgOTZIMTEyVjY0SDY2Ljk0N1oiLz48L3N2Zz4=|width=32|height=32)
 */
const CarWrench: typeof Icon = x => (
    <Icon {...x}>
        <path d="M419.375 294.5L403.5 225.625C396.875 196.5 371 175.875 341.125 176H168.125C138.25 175.875 112.25 196.5 105.75 225.625L89.375 296.125C65 308.5 48 333.5 48 362.625V417.75C48.125 437.75 61 455.375 80 461.5V496C80 504.875 87.125 512 96 512S112 504.875 112 496V464H400V496C400 504.875 407.125 512 416 512S432 504.875 432 496V461.5C451 455.375 463.875 437.75 464 417.75V362.625C464 333.125 446.5 306.375 419.375 294.5ZM136.875 232.75C140.25 218.25 153.125 208 168.125 208H341.125C356 208 369 218.25 372.375 232.75L385.125 288H124.125L136.875 232.75ZM432 417.75C432 425.625 425.625 432 417.75 432H94.25C86.375 432 80 425.625 80 417.75V362.625C80 339.125 99.125 320 122.625 320H389.375C412.875 320 432 339.125 432 362.625V417.75ZM368 352C354.801 352 344 362.799 344 376C344 389.199 354.801 400 368 400S392 389.199 392 376C392 362.799 381.199 352 368 352ZM144 352C130.801 352 120 362.799 120 376C120 389.199 130.801 400 144 400S168 389.199 168 376C168 362.799 157.199 352 144 352ZM112 160C138.082 160 161.021 147.33 175.625 128.016H336.375C350.979 147.33 373.918 160 400 160C444.184 160 480 124.182 480 80C480 35.816 444.184 0 400 0C373.904 0 350.953 12.684 336.35 32.016H175.65C161.047 12.684 138.096 0 112 0C67.816 0 32 35.816 32 80C32 124.182 67.816 160 112 160ZM66.947 64C73.574 45.418 91.17 32 112 32C126.957 32 140.85 39.035 150.117 51.303C156.164 59.309 165.617 64.016 175.65 64.016H336.35C346.383 64.016 355.836 59.309 361.883 51.303C371.15 39.035 385.043 32 400 32C420.83 32 438.426 45.418 445.053 64H400V96H445.053C438.426 114.582 420.83 128 400 128C385.053 128 371.166 120.971 361.9 108.715C355.852 100.717 346.404 96.016 336.375 96.016H175.625C165.596 96.016 156.148 100.717 150.1 108.715C140.834 120.971 126.947 128 112 128C91.17 128 73.574 114.582 66.947 96H112V64H66.947Z" />
    </Icon>
);

export default CarWrench;