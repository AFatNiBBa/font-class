
import { Icon, generic } from "../../index";

/**
 * A component that renders the `umbrella-simple` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/umbrella-simple?s=duotone umbrella-simple}
 * @preview ![umbrella-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMzEuNCA0NjIuM2wyLjMgNC43YzEzLjggMjcuNiA0MiA0NSA3Mi44IDQ1YzQ1IDAgODEuNC0zNi41IDgxLjQtODEuNEwyODggMjg4bC02NCAwIDAgMTQyLjZjMCA5LjYtNy44IDE3LjQtMTcuNCAxNy40Yy02LjYgMC0xMi42LTMuNy0xNS42LTkuNmwtMi4zLTQuN2MtNy45LTE1LjgtMjcuMS0yMi4yLTQyLjktMTQuM3MtMjIuMiAyNy4xLTE0LjMgNDIuOXoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI4OCAzMmMwLTE3LjctMTQuMy0zMi0zMi0zMnMtMzIgMTQuMy0zMiAzMmwwIDJDMTA4LjIgNDguNCAxNi40IDE0MC4yIDIgMjU2LjFDLS4yIDI3My42IDE0LjMgMjg4IDMyIDI4OGw0NDggMGMxNy43IDAgMzIuMi0xNC40IDMwLTMxLjlDNDk1LjYgMTQwLjIgNDAzLjggNDguNCAyODggMzRsMC0yeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const UmbrellaSimple: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M131.4 462.3l2.3 4.7c13.8 27.6 42 45 72.8 45c45 0 81.4-36.5 81.4-81.4L288 288l-64 0 0 142.6c0 9.6-7.8 17.4-17.4 17.4c-6.6 0-12.6-3.7-15.6-9.6l-2.3-4.7c-7.9-15.8-27.1-22.2-42.9-14.3s-22.2 27.1-14.3 42.9z" />
            <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 2C108.2 48.4 16.4 140.2 2 256.1C-.2 273.6 14.3 288 32 288l448 0c17.7 0 32.2-14.4 30-31.9C495.6 140.2 403.8 48.4 288 34l0-2z" />
    </Icon>
);

export default UmbrellaSimple;