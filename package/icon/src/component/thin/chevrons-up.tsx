
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-up` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-up?s=thin chevrons-up}
 * @preview ![chevrons-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMy45MzQgMjg1LjIyNkwyMjQgNTEuODJMNDM0LjA2NiAyODUuMjI2QzQzNS42MjkgMjg2Ljk3NiA0MzcuODE2IDI4Ny44NjcgNDQwLjAwNCAyODcuODY3QzQ0MS45MSAyODcuODY3IDQ0My44MTcgMjg3LjE5NSA0NDUuMzQ4IDI4NS44MkM0NDguNjI5IDI4Mi44NTEgNDQ4LjkxIDI3Ny44MDUgNDQ1Ljk0MiAyNzQuNTA4TDIyOS45MzggMzQuNTA4QzIyNi45MzggMzEuMTY0IDIyMS4wNjIgMzEuMTY0IDIxOC4wNjIgMzQuNTA4TDIuMDU4IDI3NC41MDhDLTAuOTEgMjc3LjgwNSAtMC42MjkgMjgyLjg1MSAyLjY1MiAyODUuODJDNS45MzMgMjg4LjgwNSAxMS4wMjcgMjg4LjUwOCAxMy45MzQgMjg1LjIyNlpNMjI5LjkzOCAyMjYuNjIzQzIyNi45MzggMjIzLjI3OSAyMjEuMDYyIDIyMy4yNzkgMjE4LjA2MiAyMjYuNjIzTDIuMDU4IDQ2Ni42MjNDLTAuOTEgNDY5LjkyIC0wLjYyOSA0NzQuOTY3IDIuNjUyIDQ3Ny45MzVDNS45MzMgNDgwLjkyIDExLjAyNyA0ODAuNjIzIDEzLjkzNCA0NzcuMzQyTDIyNCAyNDMuOTM1TDQzNC4wNjYgNDc3LjM0MkM0MzUuNjI5IDQ3OS4wOTIgNDM3LjgxNiA0NzkuOTgyIDQ0MC4wMDQgNDc5Ljk4MkM0NDEuOTEgNDc5Ljk4MiA0NDMuODE3IDQ3OS4zMSA0NDUuMzQ4IDQ3Ny45MzVDNDQ4LjYyOSA0NzQuOTY3IDQ0OC45MSA0NjkuOTIgNDQ1Ljk0MiA0NjYuNjIzTDIyOS45MzggMjI2LjYyM1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ChevronsUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M13.934 285.226L224 51.82L434.066 285.226C435.629 286.976 437.816 287.867 440.004 287.867C441.91 287.867 443.817 287.195 445.348 285.82C448.629 282.851 448.91 277.805 445.942 274.508L229.938 34.508C226.938 31.164 221.062 31.164 218.062 34.508L2.058 274.508C-0.91 277.805 -0.629 282.851 2.652 285.82C5.933 288.805 11.027 288.508 13.934 285.226ZM229.938 226.623C226.938 223.279 221.062 223.279 218.062 226.623L2.058 466.623C-0.91 469.92 -0.629 474.967 2.652 477.935C5.933 480.92 11.027 480.623 13.934 477.342L224 243.935L434.066 477.342C435.629 479.092 437.816 479.982 440.004 479.982C441.91 479.982 443.817 479.31 445.348 477.935C448.629 474.967 448.91 469.92 445.942 466.623L229.938 226.623Z" />
        </Icon>
    </>
}