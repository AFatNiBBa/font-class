
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `gavel` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gavel?s=regular gavel}
 * @preview ![gavel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMjE2QzUxMiAyMDYuOTIxIDUwNC45OTEgMTkyLjExNiA0ODguMjgyIDE5Mi4xMTZDNDgyLjU0MyAxOTIuMTE2IDQ3Ni43ODkgMTk0LjE4IDQ3Mi4xOTUgMTk4LjI1OEwzMTMuNzQyIDM5LjgwNUMzMTcuODIgMzUuMjEyIDMxOS44ODUgMjkuNDU3IDMxOS44ODUgMjMuNzE5QzMxOS44ODUgNy4wMjggMzA1LjIxOCAwIDI5NiAwQzI4OS44NTkgMCAyODMuNzE5IDIuMzQ0IDI3OS4wMzEgNy4wMzFMMTUxLjAzMSAxMzUuMDMxQzE0Ni4zNDQgMTM5LjcxOSAxNDQgMTQ1Ljg1OSAxNDQgMTUyQzE0NCAxNjQuNzkgMTU0LjI5OCAxNzYgMTY4IDE3NkMxNzMuNjg5IDE3NiAxNzkuMjcgMTczLjc2NiAxODMuODA1IDE2OS43NDJMMjQ2LjA2MiAyMzJMMTc1LjAyIDMwMy4wNDNMMTY5LjM2MyAyOTcuMzg3QzE2My4xMTMgMjkxLjEzOSAxNTQuOTI3IDI4OC4wMTUgMTQ2Ljc0IDI4OC4wMTVTMTMwLjM2NyAyOTEuMTM5IDEyNC4xMTcgMjk3LjM4N0w5LjM3NSA0MTIuMTMzQzMuMTI1IDQxOC4zODEgMCA0MjYuNTY3IDAgNDM0Ljc1NFMzLjEyNSA0NTEuMTI3IDkuMzc1IDQ1Ny4zNzVMNTQuNjIxIDUwMi42MjVDNjAuODcxIDUwOC44NzUgNjkuMDU4IDUxMiA3Ny4yNDUgNTEyUzkzLjYxOSA1MDguODc1IDk5Ljg2OSA1MDIuNjI1TDIxNC42MTEgMzg3Ljg4M0MyMjAuODYyIDM4MS42MzIgMjIzLjk4NyAzNzMuNDQ2IDIyMy45ODcgMzY1LjI1OUMyMjMuOTg3IDM1Ny4wNzQgMjIwLjg2MyAzNDguODg4IDIxNC42MTMgMzQyLjYzN0wyMDguOTU3IDMzNi45OEwyODAgMjY1LjkzOEwzNDIuMjU4IDMyOC4xOTVDMzM4LjE4IDMzMi43ODggMzM2LjExNSAzMzguNTQzIDMzNi4xMTUgMzQ0LjI4MUMzMzYuMTE1IDM2MC45NzIgMzUwLjc4MiAzNjggMzYwIDM2OEMzNjYuMTQxIDM2OCAzNzIuMjgxIDM2NS42NTYgMzc2Ljk2OSAzNjAuOTY5TDUwNC45NjkgMjMyLjk2OUM1MDkuNjU2IDIyOC4yODEgNTEyIDIyMi4xNDEgNTEyIDIxNlpNMzc2IDI5NC4wNjJMMjE3LjkzOCAxMzZMMjgwIDczLjkzOEw0MzguMDYyIDIzMkwzNzYgMjk0LjA2MlogIj48L3BhdGg+PC9zdmc+|width=32|height=32)
 */
export default function Gavel(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M512 216C512 206.921 504.991 192.116 488.282 192.116C482.543 192.116 476.789 194.18 472.195 198.258L313.742 39.805C317.82 35.212 319.885 29.457 319.885 23.719C319.885 7.028 305.218 0 296 0C289.859 0 283.719 2.344 279.031 7.031L151.031 135.031C146.344 139.719 144 145.859 144 152C144 164.79 154.298 176 168 176C173.689 176 179.27 173.766 183.805 169.742L246.062 232L175.02 303.043L169.363 297.387C163.113 291.139 154.927 288.015 146.74 288.015S130.367 291.139 124.117 297.387L9.375 412.133C3.125 418.381 0 426.567 0 434.754S3.125 451.127 9.375 457.375L54.621 502.625C60.871 508.875 69.058 512 77.245 512S93.619 508.875 99.869 502.625L214.611 387.883C220.862 381.632 223.987 373.446 223.987 365.259C223.987 357.074 220.863 348.888 214.613 342.637L208.957 336.98L280 265.938L342.258 328.195C338.18 332.788 336.115 338.543 336.115 344.281C336.115 360.972 350.782 368 360 368C366.141 368 372.281 365.656 376.969 360.969L504.969 232.969C509.656 228.281 512 222.141 512 216ZM376 294.062L217.938 136L280 73.938L438.062 232L376 294.062Z " />
        </Icon>
    </>
}