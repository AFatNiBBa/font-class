
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ruble-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruble-sign?s=duotone ruble-sign}
 * @preview ![ruble-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM4NGMwIDE3LjcgMTQuMyAzMiAzMiAzMmwzMiAwIDAtNjQtMzIgMGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ6bTEyOC0zMmwwIDY0IDE2MCAwYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMybC0xNjAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTY0IDY0YzAtMTcuNyAxNC4zLTMyIDMyLTMybDE0NCAwYzc5LjUgMCAxNDQgNjQuNSAxNDQgMTQ0cy02NC41IDE0NC0xNDQgMTQ0bC0xMTIgMCAwIDEyOGMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMmwwLTEyOC0zMiAwYy0xNy43IDAtMzItMTQuMy0zMi0zMnMxNC4zLTMyIDMyLTMybDMyIDBMNjQgNjR6bTY0IDE5MmwxMTIgMGM0NC4yIDAgODAtMzUuOCA4MC04MHMtMzUuOC04MC04MC04MEwxMjggOTZsMCAxNjB6Ii8+PC9zdmc+|width=32|height=32)
 */
const RubleSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 384c0 17.7 14.3 32 32 32l32 0 0-64-32 0c-17.7 0-32 14.3-32 32zm128-32l0 64 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0z" />
            <path d="M64 64c0-17.7 14.3-32 32-32l144 0c79.5 0 144 64.5 144 144s-64.5 144-144 144l-112 0 0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0L64 64zm64 192l112 0c44.2 0 80-35.8 80-80s-35.8-80-80-80L128 96l0 160z" />
    </Icon>
);

export default RubleSign;