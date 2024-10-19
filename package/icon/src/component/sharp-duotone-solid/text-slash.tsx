
import { Icon, generic } from "../../index";

/**
 * A component that renders the `text-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text-slash?s=sharp-duotone-solid text-slash}
 * @preview ![text-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNTEuMyA5NC43YzE4LjQgMTQuMyAzNi44IDI4LjYgNTUuMiA0Mi45bC41LTEuOUwyMTcgOTZsMTE2LjcgMEwzMDEuMiAyMTEuMWMxOC4yIDE0LjEgMzYuNCAyOC4yIDU0LjUgNDIuM0w0MDAuMiA5NiA1MDMgOTYgNDk3IDEyMC4yIDQ4NyAxNjBsNjYgMCA2LjEtMjQuMiAxNi02NEw1ODUgMzJsLTQxIDBMMTkyIDMybC0yNSAwTDE2MSA1Ni4ybC05LjYgMzguNXpNMTYwIDQxNmwwIDY0IDMyIDAgMTYwIDAgMzIgMCAwLTY0LTMyIDAtNDIuMiAwIDE3LjYtNjIuMUwyNzIuOSAzMTEgMjQzLjMgNDE2IDE5MiA0MTZsLTMyIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yOS40IC4xbDE5IDE0LjdMNjIwLjkgNDU5LjNsMTkgMTQuNy0yOS40IDM3LjktMTktMTQuN0wxOSA1Mi43IDAgMzggMjkuNCAuMXoiLz48L3N2Zz4=|width=32|height=32)
 */
const TextSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M151.3 94.7c18.4 14.3 36.8 28.6 55.2 42.9l.5-1.9L217 96l116.7 0L301.2 211.1c18.2 14.1 36.4 28.2 54.5 42.3L400.2 96 503 96 497 120.2 487 160l66 0 6.1-24.2 16-64L585 32l-41 0L192 32l-25 0L161 56.2l-9.6 38.5zM160 416l0 64 32 0 160 0 32 0 0-64-32 0-42.2 0 17.6-62.1L272.9 311 243.3 416 192 416l-32 0z" />
            <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default TextSlash;