
import { Icon, generic } from "../../index";

/**
 * A component that renders the `forward` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forward?s=duotone forward}
 * @preview ![forward](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2TDAgNDE2YzAgMTIuNCA3LjIgMjMuNyAxOC40IDI5czI0LjUgMy42IDM0LjEtNC40TDI1NiAyNzFsMC0zMEw1Mi41IDcxLjRDNDYuNiA2Ni41IDM5LjMgNjQgMzIgNjRjLTQuNiAwLTkuMiAxLTEzLjYgM0M3LjIgNzIuMyAwIDgzLjYgMCA5NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMwOC41IDQ0MC42Yy05LjUgNy45LTIyLjggOS43LTM0LjEgNC40cy0xOC40LTE2LjYtMTguNC0yOWwwLTMyMGMwLTEyLjQgNy4yLTIzLjcgMTguNC0yOXMyNC41LTMuNiAzNC4xIDQuNGwxOTIgMTYwYzcuMyA2LjEgMTEuNSAxNS4xIDExLjUgMjQuNnMtNC4yIDE4LjUtMTEuNSAyNC42bC0xOTIgMTYweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Forward: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 12.4 7.2 23.7 18.4 29s24.5 3.6 34.1-4.4L256 271l0-30L52.5 71.4C46.6 66.5 39.3 64 32 64c-4.6 0-9.2 1-13.6 3C7.2 72.3 0 83.6 0 96z" />
            <path d="M308.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29l0-320c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160z" />
    </Icon>
);

export default Forward;