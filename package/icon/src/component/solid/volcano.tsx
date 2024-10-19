
import { Icon } from "../../index";

/**
 * A component that renders the `volcano` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/volcano?s=solid volcano}
 * @preview ![volcano](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMDQuMzc3IDIyNEgyMDcuNjE5QzE5Ny43NDMgMjI0IDE4OC40OTIgMjI4LjUgMTgyLjM2NyAyMzYuMjVMMTI2LjczNyAzMDcuMjVMMTM5Ljk4OCAzMjMuNzVDMTQ5LjczOSAzMzYgMTcwLjI0MSAzMzYgMTgwLjExNyAzMjMuNzVDMTkwLjg2OCAzMTAuMjUgMjA2Ljg2OSAzMDIuNSAyMjQuMjQ2IDMwMi4yNUMyNDEuMzcyIDMwMC43NSAyNTcuNzQ4IDMwOS4yNSAyNjguOTk5IDMyMi4yNUwzMDAuNjI3IDM1OS4xMjVDMzEwLjM3OCAzNzAuNSAzMjkuNzU0IDM3MC41IDMzOS42MyAzNTkuMTI1TDM4NC43NTkgMzA2LjVMMzI5Ljc1NCAyMzYuMjVDMzIzLjUwNCAyMjguNSAzMTQuMjUzIDIyNCAzMDQuMzc3IDIyNFpNMTU5Ljk5IDE0NEMxNzIuODY2IDE0NCAxODQuNzQyIDE0MC4xMjUgMTk0Ljc0MyAxMzMuNjI1TDIyMy45OTUgMTkySDI4OC4wMDFMMzE3LjI1MyAxMzMuNjI1QzMyNy4yNTQgMTQwLjEyNSAzMzkuMTMgMTQ0IDM1Mi4wMDYgMTQ0QzM4Ny4yNTkgMTQ0IDQxNi4wMTIgMTE1LjI1IDQxNi4wMTIgODBTMzg3LjI1OSAxNiAzNTIuMDA2IDE2QzMzNi4yNTUgMTYgMzIyLjAwNCAyMS44NzUgMzEwLjc1MyAzMS4zNzVDMjk5LjYyNyAxMi43NSAyNzkuMzc1IDAgMjU1Ljk5OCAwQzIzMi42MjEgMCAyMTIuMzcgMTIuNzUgMjAxLjI0NCAzMS4zNzVDMTg5Ljk5MyAyMS44NzUgMTc1Ljc0MSAxNiAxNTkuOTkgMTZDMTI0LjczNyAxNiA5NS45ODUgNDQuNzUgOTUuOTg1IDgwUzEyNC43MzcgMTQ0IDE1OS45OSAxNDRaTTUwNS41MTkgNDYwLjc1TDQwNC43NjEgMzMyLjEyNUwzNjMuNzU3IDM3OS43NUMzNTIuNzU2IDM5Mi42MjUgMzM2Ljc1NSA0MDAgMzIwLjAwNCA0MDBTMjg3LjI1MSAzOTIuNzUgMjc2LjI1IDM3OS43NUwyNDQuNjIyIDM0M0MyMzkuNzQ3IDMzNy4yNSAyMzIuNjIxIDMzNCAyMjUuMTIxIDMzNEgyMjQuNzQ2QzIxNi45OTUgMzM0LjI1IDIwOS44NjkgMzM3Ljc1IDIwNS4xMTkgMzQzLjc1QzE4Mi45OTIgMzcxLjI1IDEzNi45ODggMzcxLjI1IDExNC45ODYgMzQzLjc1TDEwNi42MTEgMzMzLjEyNUw2LjQ3NyA0NjAuNzVDLTkuMzk3IDQ4MS44NzUgNS43MjcgNTEyIDMyLjEwNCA1MTJINDgwLjAxN0M1MDYuMjY5IDUxMiA1MjEuMzk2IDQ4MS44NzUgNTA1LjUxOSA0NjAuNzVaIi8+PC9zdmc+|width=32|height=32)
 */
const Volcano: typeof Icon = x => (
    <Icon {...x}>
        <path d="M304.377 224H207.619C197.743 224 188.492 228.5 182.367 236.25L126.737 307.25L139.988 323.75C149.739 336 170.241 336 180.117 323.75C190.868 310.25 206.869 302.5 224.246 302.25C241.372 300.75 257.748 309.25 268.999 322.25L300.627 359.125C310.378 370.5 329.754 370.5 339.63 359.125L384.759 306.5L329.754 236.25C323.504 228.5 314.253 224 304.377 224ZM159.99 144C172.866 144 184.742 140.125 194.743 133.625L223.995 192H288.001L317.253 133.625C327.254 140.125 339.13 144 352.006 144C387.259 144 416.012 115.25 416.012 80S387.259 16 352.006 16C336.255 16 322.004 21.875 310.753 31.375C299.627 12.75 279.375 0 255.998 0C232.621 0 212.37 12.75 201.244 31.375C189.993 21.875 175.741 16 159.99 16C124.737 16 95.985 44.75 95.985 80S124.737 144 159.99 144ZM505.519 460.75L404.761 332.125L363.757 379.75C352.756 392.625 336.755 400 320.004 400S287.251 392.75 276.25 379.75L244.622 343C239.747 337.25 232.621 334 225.121 334H224.746C216.995 334.25 209.869 337.75 205.119 343.75C182.992 371.25 136.988 371.25 114.986 343.75L106.611 333.125L6.477 460.75C-9.397 481.875 5.727 512 32.104 512H480.017C506.269 512 521.396 481.875 505.519 460.75Z" />
    </Icon>
);

export default Volcano;