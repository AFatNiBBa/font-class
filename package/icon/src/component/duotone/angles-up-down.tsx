
import { Icon, generic } from "../../index";

/**
 * A component that renders the `angles-up-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angles-up-down?s=duotone angles-up-down}
 * @preview ![angles-up-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zOSAzMzJjLTExIDEzLjgtOC44IDMzLjkgNSA0NUwyMDQgNTA1YzUuOCA0LjcgMTIuOSA3IDIwIDdzMTQuMS0yLjMgMjAtN0w0MDQgMzc3YzEzLjgtMTEgMTYtMzEuMiA1LTQ1cy0zMS4yLTE2LTQ1LTVMMjI0IDQzOSA4NCAzMjdjLTUuOS00LjctMTMtNy0yMC03Yy05LjQgMC0xOC43IDQuMS0yNSAxMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIwNCA3YzExLjctOS4zIDI4LjMtOS4zIDQwIDBMNDA0IDEzNWMxMy44IDExIDE2IDMxLjIgNSA0NXMtMzEuMiAxNi00NSA1TDIyNCA3MyA4NCAxODVjLTEzLjggMTEtMzMuOSA4LjgtNDUtNXMtOC44LTMzLjkgNS00NUwyMDQgN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const AnglesUpDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M39 332c-11 13.8-8.8 33.9 5 45L204 505c5.8 4.7 12.9 7 20 7s14.1-2.3 20-7L404 377c13.8-11 16-31.2 5-45s-31.2-16-45-5L224 439 84 327c-5.9-4.7-13-7-20-7c-9.4 0-18.7 4.1-25 12z" />
            <path d="M204 7c11.7-9.3 28.3-9.3 40 0L404 135c13.8 11 16 31.2 5 45s-31.2 16-45 5L224 73 84 185c-13.8 11-33.9 8.8-45-5s-8.8-33.9 5-45L204 7z" />
    </Icon>
);

export default AnglesUpDown;