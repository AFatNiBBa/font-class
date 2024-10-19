
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `coffin` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/coffin?s=light coffin}
 * @preview ![coffin](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDIuNjUgMTEyLjc1TDMwMy44ODYgMTMuNUMyOTUuMTM0IDQuNzUgMjgzLjYzNCAwIDI3MS4zODIgMEgxNzYuNjE4QzE2NC4zNjYgMCAxNTIuODY0IDQuNzUgMTQ0LjExMiAxMy41TDQ1LjM0OSAxMTIuNzVDMzQuMDk5IDEyNC4xMjUgMjkuNDcyIDE0MC43NSAzMy4zNDkgMTU2LjM3NUwxMTMuMjM0IDQ3Ny4xMjVDMTE4LjIzNiA0OTcuNjI1IDEzNi42MTIgNTEyIDE1Ny43MzkgNTEySDI5MC4yNTlDMzExLjM4OCA1MTIgMzI5Ljc2NSA0OTcuNjI1IDMzNC43NjUgNDc3LjEyNUw0MTQuNjUyIDE1Ni4zNzVDNDE4LjUyNyAxNDAuNzUgNDEzLjkwMiAxMjQuMTI1IDQwMi42NSAxMTIuNzVaTTMwMy43NjEgNDY5LjM3NUMzMDIuMjYxIDQ3NS42MjUgMjk2LjYzNCA0ODAgMjkwLjI1OSA0ODBIMTU3LjczOUMxNTEuMzY0IDQ4MCAxNDUuNzM5IDQ3NS42MjUgMTQ0LjIzNyA0NjkuMzc1TDY0LjM1MyAxNDguNjI1QzYzLjIyOCAxNDMuODc1IDY0LjYwMyAxMzguNzUgNjguMTAzIDEzNS4yNUwxNjYuNzQxIDM2LjEyNUMxNjkuNDkxIDMzLjUgMTcyLjk5MyAzMiAxNzYuNjE4IDMySDI3MS4zODJDMjc1LjEzMiAzMiAyNzguNTA3IDMzLjUgMjgxLjEzMiAzNkwzNzkuODk2IDEzNS4yNUMzODMuMzk4IDEzOC43NSAzODQuNzczIDE0My44NzUgMzgzLjY0OCAxNDguNjI1TDMwMy43NjEgNDY5LjM3NVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Coffin(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M402.65 112.75L303.886 13.5C295.134 4.75 283.634 0 271.382 0H176.618C164.366 0 152.864 4.75 144.112 13.5L45.349 112.75C34.099 124.125 29.472 140.75 33.349 156.375L113.234 477.125C118.236 497.625 136.612 512 157.739 512H290.259C311.388 512 329.765 497.625 334.765 477.125L414.652 156.375C418.527 140.75 413.902 124.125 402.65 112.75ZM303.761 469.375C302.261 475.625 296.634 480 290.259 480H157.739C151.364 480 145.739 475.625 144.237 469.375L64.353 148.625C63.228 143.875 64.603 138.75 68.103 135.25L166.741 36.125C169.491 33.5 172.993 32 176.618 32H271.382C275.132 32 278.507 33.5 281.132 36L379.896 135.25C383.398 138.75 384.773 143.875 383.648 148.625L303.761 469.375Z" />
        </Icon>
    </>
}