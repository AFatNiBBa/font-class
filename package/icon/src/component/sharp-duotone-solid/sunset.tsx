
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sunset` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sunset?s=sharp-duotone-solid sunset}
 * @preview ![sunset](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAzNzRsNjIuMSA5MCA2Ni45IDBjNy45LTYzLjEgNjEuNy0xMTIgMTI3LTExMnMxMTkuMSA0OC45IDEyNyAxMTJsNjYuOSAwTDU0NCAzNzQgNDE3LjMgMzUwLjcgMzk0IDIyNCAyODggMjk3LjEgMTgyIDIyNCAxNTguNyAzNTAuNyAzMiAzNzR6bTE2MS4zIDkwbDE4OS4zIDBjLTcuNi00NS40LTQ3LjEtODAtOTQuNy04MHMtODcuMSAzNC42LTk0LjcgODB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNTYgMjI0bDAtMS44LTc3LjUtNzAuNS0yMy43LTIxLjUgNDMuMS00Ny40IDIzLjcgMjEuNUwyNTYgMTM1LjcgMjU2IDMybDAtMzIgNjQgMCAwIDMyIDAgMTAzLjcgMzQuNS0zMS4zIDIzLjctMjEuNSA0MyA0Ny40LTIzLjcgMjEuNUwzMjAgMjIyLjJsMCAxLjgtMiAwLTguNCA3LjdMMjg4IDI1MS4ybC0yMS41LTE5LjZMMjU4IDIyNGwtMiAwek0yNCA0NjRsNTI4IDAgMjQgMCAwIDQ4LTI0IDBMMjQgNTEyIDAgNTEybDAtNDggMjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Sunset: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 374l62.1 90 66.9 0c7.9-63.1 61.7-112 127-112s119.1 48.9 127 112l66.9 0L544 374 417.3 350.7 394 224 288 297.1 182 224 158.7 350.7 32 374zm161.3 90l189.3 0c-7.6-45.4-47.1-80-94.7-80s-87.1 34.6-94.7 80z" />
            <path d="M256 224l0-1.8-77.5-70.5-23.7-21.5 43.1-47.4 23.7 21.5L256 135.7 256 32l0-32 64 0 0 32 0 103.7 34.5-31.3 23.7-21.5 43 47.4-23.7 21.5L320 222.2l0 1.8-2 0-8.4 7.7L288 251.2l-21.5-19.6L258 224l-2 0zM24 464l528 0 24 0 0 48-24 0L24 512 0 512l0-48 24 0z" />
    </Icon>
);

export default Sunset;