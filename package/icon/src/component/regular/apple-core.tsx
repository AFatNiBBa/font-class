
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `apple-core` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/apple-core?s=regular apple-core}
 * @preview ![apple-core](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTAuMjgzIDExMkMyMDkuMDM2IDExMiAyNDIuNDE1IDEwOC43NSAyNjMuNTQ0IDg3LjYyNUMyOTQuMDUgNTcgMjg3LjI5OCAwLjYyNSAyODcuMjk4IDAuNjI1UzI4MS43OTggMCAyNzMuNTQ2IDBDMjU0Ljc5MiAwIDIyMS40MTMgMy4yNSAyMDAuMjg1IDI0LjM3NUMxNjkuNzgxIDU1IDE3Ni41MzEgMTExLjM3NSAxNzYuNTMxIDExMS4zNzVTMTgxLjkwOCAxMTIgMTkwLjI4MyAxMTJaTTI4Ny45MDcgMzA0QzI4Ny45MDcgMjQzLjEwNSAzMTguODQ1IDE4OS40NTEgMzY1Ljg0NiAxNTcuODUyQzM0OS44ODQgMTQyLjg5NSAzMzAuODQzIDEzMy4wNTkgMzA5LjU1MiAxMjkuMzc1QzMwNC4yMzEgMTI4LjQ0OSAyOTguNTA1IDEyOC4wMjcgMjkyLjUwNyAxMjguMDI3QzI1OS42MDUgMTI4LjAyNyAyMTguNTU2IDE0MC43NTQgMTkxLjkwOCAxNTMuMTI1QzE2NS4yNjMgMTQwLjc1NiAxMjQuMzAyIDEyOC4wMjkgOTEuMzUxIDEyOC4wMjdDODUuMzQ0IDEyOC4wMjUgNzkuNjA3IDEyOC40NDkgNzQuMjY1IDEyOS4zNzVDNTIuOTY1IDEzMy4wNTkgMzMuOTc4IDE0Mi45IDE4IDE1Ny44NjlDNjQuOTg2IDE4OS40NzEgOTUuOTA4IDI0My4xMTcgOTUuOTA4IDMwNEM5NS45MDggMzY0Ljg2NSA2NS4wMDQgNDE4LjUwMiAxOC4wMzcgNDUwLjEwN0M0NS4xNjQgNDg2LjUzNSA4My42MDEgNTEyIDEzNS4xNSA1MTJDMTQ4LjUyNyA1MTIgMTYyLjc3OSA1MDggMTc3LjQwNiA1MDBDMTgxLjkwOCA0OTcuNTYyIDE4Ni45MDggNDk2LjM0NCAxOTEuOTEgNDk2LjM0NEMxOTYuOTEgNDk2LjM0NCAyMDEuOTExIDQ5Ny41NjIgMjA2LjQxMSA1MDBDMjIxLjAzOCA1MDggMjM1LjI5IDUxMiAyNDguNjY3IDUxMkMzMDAuMjE2IDUxMiAzMzguNjUzIDQ4Ni41MzUgMzY1Ljc4IDQ1MC4xMDdDMzE4LjgxMyA0MTguNTAyIDI4Ny45MDcgMzY0Ljg2NSAyODcuOTA3IDMwNFpNMjQ4LjY2NyA0NjRDMjQ0Ljk5NyA0NjQgMjM4LjY4MyA0NjIuOTM5IDIyOS4yNzMgNDU3Ljc5M0MyMTcuODU5IDQ1MS42MTEgMjA0LjkzOSA0NDguMzQ0IDE5MS45MSA0NDguMzQ0UzE2NS45NiA0NTEuNjExIDE1NC4zNzQgNDU3Ljg4N0MxNDUuMTM2IDQ2Mi45MzkgMTM4LjgyMiA0NjQgMTM1LjE1IDQ2NEMxMTcuOTQ3IDQ2NCAxMDIuNDg2IDQ1OS44NjkgODguNTIzIDQ1MS40NzNDMTIzLjg0NyA0MTEuMTE5IDE0My45MDggMzU4Ljk1OSAxNDMuOTA4IDMwNEMxNDMuOTA4IDI1Ny44NzMgMTI5Ljc3NSAyMTMuNzE5IDEwNC4zNTMgMTc2Ljg2M0MxMjcuMDYyIDE3OS41NjYgMTUzLjg1MSAxODguMzc3IDE3MS42OTcgMTk2LjY2MkwxOTEuOTA4IDIwNi4wNDVMMjEyLjExOCAxOTYuNjYyQzIyOS45NTggMTg4LjM4MSAyNTYuNzQzIDE3OS41NzIgMjc5LjQ2MiAxNzYuODY1QzI1NC4wNCAyMTMuNzIxIDIzOS45MDcgMjU3Ljg3MyAyMzkuOTA3IDMwNEMyMzkuOTA3IDM1OC45NTkgMjU5Ljk3IDQxMS4xMTkgMjk1LjI5NCA0NTEuNDczQzI4MS4zMzMgNDU5Ljg2NyAyNjUuODY4IDQ2NCAyNDguNjY3IDQ2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function AppleCore(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M190.283 112C209.036 112 242.415 108.75 263.544 87.625C294.05 57 287.298 0.625 287.298 0.625S281.798 0 273.546 0C254.792 0 221.413 3.25 200.285 24.375C169.781 55 176.531 111.375 176.531 111.375S181.908 112 190.283 112ZM287.907 304C287.907 243.105 318.845 189.451 365.846 157.852C349.884 142.895 330.843 133.059 309.552 129.375C304.231 128.449 298.505 128.027 292.507 128.027C259.605 128.027 218.556 140.754 191.908 153.125C165.263 140.756 124.302 128.029 91.351 128.027C85.344 128.025 79.607 128.449 74.265 129.375C52.965 133.059 33.978 142.9 18 157.869C64.986 189.471 95.908 243.117 95.908 304C95.908 364.865 65.004 418.502 18.037 450.107C45.164 486.535 83.601 512 135.15 512C148.527 512 162.779 508 177.406 500C181.908 497.562 186.908 496.344 191.91 496.344C196.91 496.344 201.911 497.562 206.411 500C221.038 508 235.29 512 248.667 512C300.216 512 338.653 486.535 365.78 450.107C318.813 418.502 287.907 364.865 287.907 304ZM248.667 464C244.997 464 238.683 462.939 229.273 457.793C217.859 451.611 204.939 448.344 191.91 448.344S165.96 451.611 154.374 457.887C145.136 462.939 138.822 464 135.15 464C117.947 464 102.486 459.869 88.523 451.473C123.847 411.119 143.908 358.959 143.908 304C143.908 257.873 129.775 213.719 104.353 176.863C127.062 179.566 153.851 188.377 171.697 196.662L191.908 206.045L212.118 196.662C229.958 188.381 256.743 179.572 279.462 176.865C254.04 213.721 239.907 257.873 239.907 304C239.907 358.959 259.97 411.119 295.294 451.473C281.333 459.867 265.868 464 248.667 464Z" />
        </Icon>
    </>
}