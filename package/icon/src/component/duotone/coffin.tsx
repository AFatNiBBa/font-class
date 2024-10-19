
import { Icon, generic } from "../../index";

/**
 * A component that renders the `coffin` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coffin?s=duotone coffin}
 * @preview ![coffin](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMS41IDExNC45bDkxLTEwNEMxMDguNSA0IDExNy4zIDAgMTI2LjUgMGgxMzFjOS4yIDAgMTggNCAyNC4xIDEwLjlsOTEgMTA0YzcuNCA4LjUgMTEuNSAxOS4zIDExLjUgMzAuNmMwIDQuNC0uNiA4LjctMS44IDEyLjlMMjg2LjcgNDg4LjljLTQgMTMuNy0xNi41IDIzLjEtMzAuNyAyMy4xSDEyOC4xYy0xNC4zIDAtMjYuOC05LjQtMzAuNy0yMy4xTDEuOCAxNTguM0MuNiAxNTQuMSAwIDE0OS44IDAgMTQ1LjRjMC0xMS4yIDQuMS0yMi4xIDExLjUtMzAuNnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const Coffin: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M11.5 114.9l91-104C108.5 4 117.3 0 126.5 0h131c9.2 0 18 4 24.1 10.9l91 104c7.4 8.5 11.5 19.3 11.5 30.6c0 4.4-.6 8.7-1.8 12.9L286.7 488.9c-4 13.7-16.5 23.1-30.7 23.1H128.1c-14.3 0-26.8-9.4-30.7-23.1L1.8 158.3C.6 154.1 0 149.8 0 145.4c0-11.2 4.1-22.1 11.5-30.6z" />
    </Icon>
);

export default Coffin;