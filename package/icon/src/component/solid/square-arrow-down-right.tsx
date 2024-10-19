
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-arrow-down-right` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-down-right?s=solid square-arrow-down-right}
 * @preview ![square-arrow-down-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU2IDAgOTZWNDE2QzAgNDUxLjM0NCAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDQgNDQ4IDQxNlY5NkM0NDggNjAuNjU2IDQxOS4zNDYgMzIgMzg0IDMyWk0zNDQgMzQ0QzM0NCAzNjEuNjg4IDMyOS42ODggMzc2IDMxMiAzNzZIMTY4QzE1MC4zMTIgMzc2IDEzNiAzNjEuNjg4IDEzNiAzNDRTMTUwLjMxMiAzMTIgMTY4IDMxMkgyMzQuNzVMMTEzLjM3NSAxOTAuNjI1QzEwMC44NzUgMTc4LjEyNSAxMDAuODc1IDE1Ny44NzUgMTEzLjM3NSAxNDUuMzc1UzE0Ni4xMjUgMTMyLjg3NSAxNTguNjI1IDE0NS4zNzVMMjgwIDI2Ni43NVYyMDBDMjgwIDE4Mi4zMTIgMjk0LjMxMiAxNjggMzEyIDE2OFMzNDQgMTgyLjMxMiAzNDQgMjAwVjM0NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SquareArrowDownRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.656 419.346 32 384 32ZM344 344C344 361.688 329.688 376 312 376H168C150.312 376 136 361.688 136 344S150.312 312 168 312H234.75L113.375 190.625C100.875 178.125 100.875 157.875 113.375 145.375S146.125 132.875 158.625 145.375L280 266.75V200C280 182.312 294.312 168 312 168S344 182.312 344 200V344Z" />
        </Icon>
    </>
}