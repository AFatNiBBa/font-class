
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-1` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-1?s=solid square-1}
 * @preview ![square-1](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0OCA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjU0IDQxOS4zNDggMzIgMzg0IDMyWk0yODggMzg0SDE2MEMxNDYuNzUgMzg0IDEzNiAzNzMuMjUgMTM2IDM2MFMxNDYuNzUgMzM2IDE2MCAzMzZIMjAwVjE5Ni44NDRMMTg1LjMxMiAyMDYuNjI1QzE3NC4yNjYgMjEzLjkzOCAxNTkuMzU5IDIxMC45NjkgMTUyLjAzMSAxOTkuOTY5QzE0NC42NzIgMTg4LjkzOCAxNDcuNjU2IDE3NC4wMzEgMTU4LjY4OCAxNjYuNjg4TDIxMC42ODggMTMyLjAzMUMyMTguMDc4IDEyNy4wOTQgMjI3LjU0NyAxMjYuNjU2IDIzNS4zMjggMTMwLjg0NEMyNDMuMTI1IDEzNS4wMzEgMjQ4IDE0My4xNTYgMjQ4IDE1MlYzMzZIMjg4QzMwMS4yNSAzMzYgMzEyIDM0Ni43NSAzMTIgMzYwUzMwMS4yNSAzODQgMjg4IDM4NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Square_1(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM288 384H160C146.75 384 136 373.25 136 360S146.75 336 160 336H200V196.844L185.312 206.625C174.266 213.938 159.359 210.969 152.031 199.969C144.672 188.938 147.656 174.031 158.688 166.688L210.688 132.031C218.078 127.094 227.547 126.656 235.328 130.844C243.125 135.031 248 143.156 248 152V336H288C301.25 336 312 346.75 312 360S301.25 384 288 384Z" />
        </Icon>
    </>
}