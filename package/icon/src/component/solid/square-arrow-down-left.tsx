
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-down-left` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-down-left?s=solid square-arrow-down-left}
 * @preview ![square-arrow-down-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU2IDMyIDAgNjAuNjU2IDAgOTZWNDE2QzAgNDUxLjM0NCAyOC42NTYgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NCA0ODAgNDQ4IDQ1MS4zNDQgNDQ4IDQxNlY5NkM0NDggNjAuNjU2IDQxOS4zNDQgMzIgMzg0IDMyWk0zMzQuNjI1IDE5MC42MjVMMjEzLjI1IDMxMkgyODBDMjk3LjY4OCAzMTIgMzEyIDMyNi4zMTIgMzEyIDM0NFMyOTcuNjg4IDM3NiAyODAgMzc2SDEzNkMxMTguMzEyIDM3NiAxMDQgMzYxLjY4OCAxMDQgMzQ0VjIwMEMxMDQgMTgyLjMxMiAxMTguMzEyIDE2OCAxMzYgMTY4UzE2OCAxODIuMzEyIDE2OCAyMDBWMjY2Ljc1TDI4OS4zNzUgMTQ1LjM3NUMzMDEuODc1IDEzMi44NzUgMzIyLjEyNSAxMzIuODc1IDMzNC42MjUgMTQ1LjM3NVMzNDcuMTI1IDE3OC4xMjUgMzM0LjYyNSAxOTAuNjI1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareArrowDownLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.656 32 0 60.656 0 96V416C0 451.344 28.656 480 64 480H384C419.344 480 448 451.344 448 416V96C448 60.656 419.344 32 384 32ZM334.625 190.625L213.25 312H280C297.688 312 312 326.312 312 344S297.688 376 280 376H136C118.312 376 104 361.688 104 344V200C104 182.312 118.312 168 136 168S168 182.312 168 200V266.75L289.375 145.375C301.875 132.875 322.125 132.875 334.625 145.375S347.125 178.125 334.625 190.625Z" />
        </Icon>
    </>
}