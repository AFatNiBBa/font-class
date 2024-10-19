
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-chimney` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-chimney?s=sharp-duotone-solid house-chimney}
 * @preview ![house-chimney](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAyNzJsLjEgMjQwTDIyNCA1MTJsMC0xNjAuMyAxMjggMEwzNTIgNTEybDE2MC42IDAtLjUtMjI0Yy0uMS01LjMtLjEtMTAuNy0uMS0xNkM0MzcuMyAyMTAuNyAzNjIuNyAxNDkuMyAyODggODhDMjEzLjMgMTQ5LjMgMTM4LjcgMjEwLjYgNjQgMjcyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjg4IDBMMCAyNDBsMCAzMiA2NCAwTDI4OCA4OCA1MTIgMjcybDY0IDAgMC0zMi02NC01My4zTDUxMiAzMmwtOTYgMCAwIDc0LjdMMjg4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const HouseChimney: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 272l.1 240L224 512l0-160.3 128 0L352 512l160.6 0-.5-224c-.1-5.3-.1-10.7-.1-16C437.3 210.7 362.7 149.3 288 88C213.3 149.3 138.7 210.6 64 272z" />
            <path d="M288 0L0 240l0 32 64 0L288 88 512 272l64 0 0-32-64-53.3L512 32l-96 0 0 74.7L288 0z" />
    </Icon>
);

export default HouseChimney;