
import { Icon, generic } from "../../index";

/**
 * A component that renders the `monument` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/monument?s=duotone monument}
 * @preview ![monument](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ4MGMwLTE3LjcgMTQuMy0zMiAzMi0zMmwxOS45IDAgMjgwLjIgMCAxOS45IDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJMMzIgNTEyYy0xNy43IDAtMzItMTQuMy0zMi0zMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIwMy4zIDQuN2MtNi4yLTYuMi0xNi40LTYuMi0yMi42IDBsLTgwIDgwYy0yLjUgMi41LTQuMSA1LjgtNC42IDkuM0w1MS45IDQ0OGwyODAuMiAwTDI4Ny45IDk0Yy0uNC0zLjUtMi02LjgtNC42LTkuM2wtODAtODB6TTEyOCAyOTZjMC0xMy4zIDEwLjctMjQgMjQtMjRsODAgMGMxMy4zIDAgMjQgMTAuNyAyNCAyNHMtMTAuNyAyNC0yNCAyNGwtODAgMGMtMTMuMyAwLTI0LTEwLjctMjQtMjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Monument: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 480c0-17.7 14.3-32 32-32l19.9 0 280.2 0 19.9 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32z" />
            <path d="M203.3 4.7c-6.2-6.2-16.4-6.2-22.6 0l-80 80c-2.5 2.5-4.1 5.8-4.6 9.3L51.9 448l280.2 0L287.9 94c-.4-3.5-2-6.8-4.6-9.3l-80-80zM128 296c0-13.3 10.7-24 24-24l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default Monument;