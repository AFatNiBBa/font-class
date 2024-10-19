
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `flower` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/flower?s=regular flower}
 * @preview ![flower](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAgMTcwLjI4MUM0ODAgOTQuMDMxIDQxNy45NjkgMzIgMzQxLjcxOSAzMkMzMTAuNSAzMiAyODAuMzQ0IDQyLjg0NCAyNTYgNjIuMzEyQzIzMS42NTYgNDIuODQ0IDIwMS41IDMyIDE3MC4yODEgMzJDOTQuMDMxIDMyIDMyIDk0LjAzMSAzMiAxNzAuMjgxQzMyIDIwMS41IDQyLjgyOCAyMzEuNjU2IDYyLjI5NyAyNTZDNDIuODI4IDI4MC4zNDQgMzIgMzEwLjUgMzIgMzQxLjcxOUMzMiA0MTcuOTY5IDk0LjAzMSA0ODAgMTcwLjI4MSA0ODBDMjAxLjUgNDgwIDIzMS42NTYgNDY5LjE1NiAyNTYgNDQ5LjY4OEMyODAuMzQ0IDQ2OS4xNTYgMzEwLjUgNDgwIDM0MS43MTkgNDgwQzQxNy45NjkgNDgwIDQ4MCA0MTcuOTY5IDQ4MCAzNDEuNzE5QzQ4MCAzMTAuNSA0NjkuMTcyIDI4MC4zNDQgNDQ5LjcwMyAyNTZDNDY5LjE3MiAyMzEuNjU2IDQ4MCAyMDEuNSA0ODAgMTcwLjI4MVpNNDAwLjgxMiAyNzQuMDYyQzQyMC45MjIgMjkxLjY1NiA0MzIgMzE1LjY4OCA0MzIgMzQxLjcxOUM0MzIgMzkxLjUgMzkxLjUgNDMyIDM0MS43MTkgNDMyQzMxNS42ODcgNDMyIDI5MS42NTYgNDIwLjkwNiAyNzQuMDYyIDQwMC43ODFMMjU2IDM4MC4xMjVMMjM3LjkzOCA0MDAuNzgxQzIyMC4zNDQgNDIwLjkwNiAxOTYuMzEyIDQzMiAxNzAuMjgxIDQzMkMxMjAuNSA0MzIgODAgMzkxLjUgODAgMzQxLjcxOUM4MCAzMTUuNjg3IDkxLjA3OCAyOTEuNjU2IDExMS4xODggMjc0LjA2MkwxMzEuODU5IDI1NkwxMTEuMTg4IDIzNy45MzhDOTEuMDc4IDIyMC4zNDQgODAgMTk2LjMxMiA4MCAxNzAuMjgxQzgwIDEyMC41IDEyMC41IDgwIDE3MC4yODEgODBDMTk2LjMxMyA4MCAyMjAuMzQ0IDkxLjA5NCAyMzcuOTM4IDExMS4yMTlMMjU2IDEzMS44NzVMMjc0LjA2MiAxMTEuMjE5QzI5MS42NTYgOTEuMDk0IDMxNS42ODggODAgMzQxLjcxOSA4MEMzOTEuNSA4MCA0MzIgMTIwLjUgNDMyIDE3MC4yODFDNDMyIDE5Ni4zMTMgNDIwLjkyMiAyMjAuMzQ0IDQwMC44MTIgMjM3LjkzOEwzODAuMTQxIDI1Nkw0MDAuODEyIDI3NC4wNjJaTTI1NiAxNzZDMjExLjg3NSAxNzYgMTc2IDIxMS44NzUgMTc2IDI1NlMyMTEuODc1IDMzNiAyNTYgMzM2UzMzNiAzMDAuMTI1IDMzNiAyNTZTMzAwLjEyNSAxNzYgMjU2IDE3NlpNMjU2IDI4OEMyMzguMzU1IDI4OCAyMjQgMjczLjY0NSAyMjQgMjU2UzIzOC4zNTUgMjI0IDI1NiAyMjRTMjg4IDIzOC4zNTUgMjg4IDI1NlMyNzMuNjQ1IDI4OCAyNTYgMjg4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Flower(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M480 170.281C480 94.031 417.969 32 341.719 32C310.5 32 280.344 42.844 256 62.312C231.656 42.844 201.5 32 170.281 32C94.031 32 32 94.031 32 170.281C32 201.5 42.828 231.656 62.297 256C42.828 280.344 32 310.5 32 341.719C32 417.969 94.031 480 170.281 480C201.5 480 231.656 469.156 256 449.688C280.344 469.156 310.5 480 341.719 480C417.969 480 480 417.969 480 341.719C480 310.5 469.172 280.344 449.703 256C469.172 231.656 480 201.5 480 170.281ZM400.812 274.062C420.922 291.656 432 315.688 432 341.719C432 391.5 391.5 432 341.719 432C315.687 432 291.656 420.906 274.062 400.781L256 380.125L237.938 400.781C220.344 420.906 196.312 432 170.281 432C120.5 432 80 391.5 80 341.719C80 315.687 91.078 291.656 111.188 274.062L131.859 256L111.188 237.938C91.078 220.344 80 196.312 80 170.281C80 120.5 120.5 80 170.281 80C196.313 80 220.344 91.094 237.938 111.219L256 131.875L274.062 111.219C291.656 91.094 315.688 80 341.719 80C391.5 80 432 120.5 432 170.281C432 196.313 420.922 220.344 400.812 237.938L380.141 256L400.812 274.062ZM256 176C211.875 176 176 211.875 176 256S211.875 336 256 336S336 300.125 336 256S300.125 176 256 176ZM256 288C238.355 288 224 273.645 224 256S238.355 224 256 224S288 238.355 288 256S273.645 288 256 288Z" />
        </Icon>
    </>
}