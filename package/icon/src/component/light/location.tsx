
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `location` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/location?s=light location}
 * @preview ![location](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgMEM4NS45NjkgMCAwIDg1Ljk2OSAwIDE5MkMwIDI2OS40MSAyNi45NjkgMjkxLjAzNSAxNzIuMjgxIDUwMS42NzZDMTc3LjA0NyA1MDguNTU5IDE4NC41MjMgNTEyIDE5MiA1MTJTMjA2Ljk1MyA1MDguNTU5IDIxMS43MTkgNTAxLjY3NkMzNTcuMDMxIDI5MS4wMzUgMzg0IDI2OS40MSAzODQgMTkyQzM4NCA4NS45NjkgMjk4LjAzMSAwIDE5MiAwWk0xOTIgNDczLjkxOEM1MS45MzIgMjcxLjM3OSAzMiAyNTUuOTY5IDMyIDE5MkMzMiAxMDMuNzc3IDEwMy43NzUgMzIgMTkyIDMyUzM1MiAxMDMuNzc3IDM1MiAxOTJDMzUyIDI1NS44NzkgMzMyLjU2NiAyNzAuNjc0IDE5MiA0NzMuOTE4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Location(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192 0C85.969 0 0 85.969 0 192C0 269.41 26.969 291.035 172.281 501.676C177.047 508.559 184.523 512 192 512S206.953 508.559 211.719 501.676C357.031 291.035 384 269.41 384 192C384 85.969 298.031 0 192 0ZM192 473.918C51.932 271.379 32 255.969 32 192C32 103.777 103.775 32 192 32S352 103.777 352 192C352 255.879 332.566 270.674 192 473.918Z" />
        </Icon>
    </>
}