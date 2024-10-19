
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `horse` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/horse?s=solid horse}
 * @preview ![horse](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzUuODQyIDc2LjYyNUM1NzUuODQyIDY4LjUgNTcyLjg0MiA2MC43NSA1NjcuMzQyIDU0Ljc1QzU2My40NjggNTAuNzUgNTU4LjcxOCA0NS42MjUgNTUzLjU5MyA0MC4yNUM1NjQuNzE4IDMzLjUgNTczLjA5MiAyMi43NSA1NzUuODQyIDkuNjI1QzU3Ni44NDIgNC42MjUgNTcyLjk2NyAwIDU2Ny44NDIgMEg0NDcuODQ5QzM3Ny4yMjggMCAzMTkuODU3IDU3LjI1IDMxOS44NTcgMTI4SDE1OS45OTFDMTMxLjExNyAxMjggMTA1LjYxOSAxNDEgODcuOTk1IDE2MS4xMjVWMTYwQzM5LjQ5OCAxNjAgMCAxOTkuNSAwIDI0OFYzMDRDMCAzMTIuODc1IDcuMTI1IDMyMCAxNS45OTkgMzIwSDMxLjk5OEM0MC44NzMgMzIwIDQ3Ljk5NyAzMTIuODc1IDQ3Ljk5NyAzMDRWMjQ4QzQ3Ljk5NyAyMzQuNzUgNTQuODcyIDIyMy42MjUgNjQuNzQ2IDIxNi4zNzVDNjQuNjIxIDIxOC44NzUgNjMuOTk2IDIyMS4zNzUgNjMuOTk2IDIyNEM2My45OTYgMjUxLjYyNSA3NS44NzEgMjc2LjM3NSA5NC40OTUgMjkzLjg3NUw2OC44NzEgMzYyLjVDNjQuMjg1IDM3NC43ODIgNjMuNTM0IDM4OC4xNjcgNjYuNzE3IDQwMC44ODVMODguNDY1IDQ4Ny43N0M5Mi4wMjkgNTAyLjAxMSAxMDQuODI2IDUxMiAxMTkuNTA1IDUxMkgxNTIuNDg3QzE3My4yOTcgNTEyIDE4OC41NyA0OTIuNDQ5IDE4My41MzQgNDcyLjI1NkwxNjIuMjQxIDM4Ni44NzVMMTg1Ljk4OSAzMjMuMjVMMzE5Ljk4MiAzNDUuNjI1VjQ4MEMzMTkuOTgyIDQ5Ny42NzMgMzM0LjMwOCA1MTIgMzUxLjk4IDUxMkgzODMuOTc4QzQwMS42NSA1MTIgNDE1Ljk3NiA0OTcuNjczIDQxNS45NzYgNDgwVjMxOC4yNUM0MzUuNzI1IDI5OCA0NDcuOTc0IDI3MC41IDQ0Ny45NzQgMjQwQzQ0Ny45NzQgMjM5Ljc1IDQ0Ny44NDkgMjM5LjYyNSA0NDcuODQ5IDIzOS4zNzVWMTM2Ljg3NUw0NjMuODQ4IDE0NEw0ODIuODQ3IDE4MS43NUM0OTAuMzI4IDE5Ni42MTUgNTA3Ljk1IDIwMy4yNjggNTIzLjM4OCAxOTcuMDU3TDU1NS45MjcgMTgzLjk2NkM1NjguMDUyIDE3OS4wODggNTc1Ljk4OCAxNjcuMzIxIDU3NS45NjcgMTU0LjI1TDU3NS44NDIgNzYuNjI1Wk01MTEuODQ2IDk2QzUwMy4wOTYgOTYgNDk1Ljg0NyA4OC44NzUgNDk1Ljg0NyA4MFM1MDMuMDk2IDY0IDUxMS44NDYgNjRDNTIwLjcyIDY0IDUyNy44NDUgNzEuMTI1IDUyNy44NDUgODBTNTIwLjcyIDk2IDUxMS44NDYgOTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Horse(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M575.842 76.625C575.842 68.5 572.842 60.75 567.342 54.75C563.468 50.75 558.718 45.625 553.593 40.25C564.718 33.5 573.092 22.75 575.842 9.625C576.842 4.625 572.967 0 567.842 0H447.849C377.228 0 319.857 57.25 319.857 128H159.991C131.117 128 105.619 141 87.995 161.125V160C39.498 160 0 199.5 0 248V304C0 312.875 7.125 320 15.999 320H31.998C40.873 320 47.997 312.875 47.997 304V248C47.997 234.75 54.872 223.625 64.746 216.375C64.621 218.875 63.996 221.375 63.996 224C63.996 251.625 75.871 276.375 94.495 293.875L68.871 362.5C64.285 374.782 63.534 388.167 66.717 400.885L88.465 487.77C92.029 502.011 104.826 512 119.505 512H152.487C173.297 512 188.57 492.449 183.534 472.256L162.241 386.875L185.989 323.25L319.982 345.625V480C319.982 497.673 334.308 512 351.98 512H383.978C401.65 512 415.976 497.673 415.976 480V318.25C435.725 298 447.974 270.5 447.974 240C447.974 239.75 447.849 239.625 447.849 239.375V136.875L463.848 144L482.847 181.75C490.328 196.615 507.95 203.268 523.388 197.057L555.927 183.966C568.052 179.088 575.988 167.321 575.967 154.25L575.842 76.625ZM511.846 96C503.096 96 495.847 88.875 495.847 80S503.096 64 511.846 64C520.72 64 527.845 71.125 527.845 80S520.72 96 511.846 96Z" />
        </Icon>
    </>
}