
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lightbulb` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lightbulb?s=duotone lightbulb}
 * @preview ![lightbulb](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNiAxNzZjMCAzNy4zIDExLjYgNzEuOSAzMS40IDEwMC4zYzUgNy4yIDEwLjIgMTQuMyAxNS40IDIxLjRjMTkuOCAyNy4xIDM5LjcgNTQuNCA0OS4yIDg2LjJsMTYwIDBjOS42LTMxLjkgMjkuNS01OS4xIDQ5LjItODYuMmM1LjItNy4xIDEwLjQtMTQuMiAxNS40LTIxLjRjMTkuOC0yOC41IDMxLjQtNjMgMzEuNC0xMDAuM0MzNjggNzguOCAyODkuMiAwIDE5MiAwUzE2IDc4LjggMTYgMTc2em02NCAwYzAtNjEuOSA1MC4xLTExMiAxMTItMTEyYzguOCAwIDE2IDcuMiAxNiAxNnMtNy4yIDE2LTE2IDE2Yy00NC4yIDAtODAgMzUuOC04MCA4MGMwIDguOC03LjIgMTYtMTYgMTZzLTE2LTcuMi0xNi0xNnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE5MiA1MTJjNDQuMiAwIDgwLTM1LjggODAtODBWMzg0SDExMnY0OGMwIDQ0LjIgMzUuOCA4MCA4MCA4MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Lightbulb: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c19.8 27.1 39.7 54.4 49.2 86.2l160 0c9.6-31.9 29.5-59.1 49.2-86.2c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176zm64 0c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80c0 8.8-7.2 16-16 16s-16-7.2-16-16z" />
            <path d="M192 512c44.2 0 80-35.8 80-80V384H112v48c0 44.2 35.8 80 80 80z" />
    </Icon>
);

export default Lightbulb;