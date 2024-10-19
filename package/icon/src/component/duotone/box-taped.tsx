
import { Icon, generic } from "../../index";

/**
 * A component that renders the `box-taped` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-taped?s=duotone box-taped}
 * @preview ![box-taped](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MGwxNjAgMEwxOTIgMzIgOTMuNyAzMkM3NS41IDMyIDU4LjkgNDIuMyA1MC43IDU4LjVMMCAxNjB6bTE2MCAwbDEyOCAwIDAgOTZjMCAxNy43LTE0LjMgMzItMzIgMzJsLTY0IDBjLTE3LjcgMC0zMi0xNC4zLTMyLTMybDAtOTZ6TTI1NiAzMmwzMiAxMjggMTYwIDBMMzk3LjMgNTguNUMzODkuMSA0Mi4zIDM3Mi41IDMyIDM1NC4zIDMyTDI1NiAzMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE2MCAxNjBMMCAxNjAgMCA0MTZjMCAzNS4zIDI4LjcgNjQgNjQgNjRsMzIwIDBjMzUuMyAwIDY0LTI4LjcgNjQtNjRsMC0yNTYtMTYwIDAgMCA5NmMwIDE3LjctMTQuMyAzMi0zMiAzMmwtNjQgMGMtMTcuNyAwLTMyLTE0LjMtMzItMzJsMC05NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const BoxTaped: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 160l160 0L192 32 93.7 32C75.5 32 58.9 42.3 50.7 58.5L0 160zm160 0l128 0 0 96c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-96zM256 32l32 128 160 0L397.3 58.5C389.1 42.3 372.5 32 354.3 32L256 32z" />
            <path d="M160 160L0 160 0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256-160 0 0 96c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-96z" />
    </Icon>
);

export default BoxTaped;