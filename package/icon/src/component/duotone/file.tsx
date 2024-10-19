
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file?s=duotone file}
 * @preview ![file](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0TDAgNDQ4YzAgMzUuMyAyOC43IDY0IDY0IDY0bDI1NiAwYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtMjg4LTEyOCAwYy0xNy43IDAtMzItMTQuMy0zMi0zMkwyMjQgMCA2NCAwQzI4LjcgMCAwIDI4LjcgMCA2NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIyNCAwTDM4NCAxNjBIMjU2Yy0xNy43IDAtMzItMTQuMy0zMi0zMlYweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const File: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0C28.7 0 0 28.7 0 64z" />
            <path d="M224 0L384 160H256c-17.7 0-32-14.3-32-32V0z" />
    </Icon>
);

export default File;