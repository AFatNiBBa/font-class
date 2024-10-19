
import { Icon, generic } from "../../index";

/**
 * A component that renders the `screwdriver` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/screwdriver?s=duotone screwdriver}
 * @preview ![screwdriver](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMTEgMjY3LjFjNy4xIDMuNiAxMy43IDguNCAxOS43IDE0LjNjMS41IDEuNSAyLjkgMyA0LjIgNC42czIuNiAzLjIgMy44IDQuOGMyLjQgMy4zIDQuNSA2LjcgNi4zIDEwLjNsMTA5LTEwOSA1NC4xIDBjNy40IDAgMTQuNS0zLjUgMTktOS40bDgwLTEwNGM3LjQtOS42IDYuNS0yMy4xLTIuMS0zMS42TDQ2NSA3Yy04LjUtOC41LTIyLTkuNC0zMS42LTIuMWwtMTA0IDgwYy01LjkgNC41LTkuNCAxMS42LTkuNCAxOWwwIDU0LjEtMTA5IDEwOXoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIzMC42IDI4MS40Yy0zMC4yLTMwLjItNzkuMS0zMC4yLTEwOS4zIDBsLTExMiAxMTJjLTEyLjUgMTIuNS0xMi41IDMyLjggMCA0NS4zbDY0IDY0YzEyLjUgMTIuNSAzMi44IDEyLjUgNDUuMyAwbDExMi0xMTJjMzAuMi0zMC4yIDMwLjItNzkuMSAwLTEwOS4zeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Screwdriver: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M211 267.1c7.1 3.6 13.7 8.4 19.7 14.3c1.5 1.5 2.9 3 4.2 4.6s2.6 3.2 3.8 4.8c2.4 3.3 4.5 6.7 6.3 10.3l109-109 54.1 0c7.4 0 14.5-3.5 19-9.4l80-104c7.4-9.6 6.5-23.1-2.1-31.6L465 7c-8.5-8.5-22-9.4-31.6-2.1l-104 80c-5.9 4.5-9.4 11.6-9.4 19l0 54.1-109 109z" />
            <path d="M230.6 281.4c-30.2-30.2-79.1-30.2-109.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0l112-112c30.2-30.2 30.2-79.1 0-109.3z" />
    </Icon>
);

export default Screwdriver;