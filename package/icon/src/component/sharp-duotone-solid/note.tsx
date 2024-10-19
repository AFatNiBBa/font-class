
import { Icon, generic } from "../../index";

/**
 * A component that renders the `note` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/note?s=sharp-duotone-solid note}
 * @preview ![note](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMybDQ0OCAwIDAgMjg4LTMyIDAtMzIgMC05NiAwIDAgOTYgMCAzMiAwIDMyTDAgNDgwIDAgMzJ6bTY0IDgwbDAgNDggNDggMCAwLTQ4LTQ4IDB6bTAgMTIwbDAgNDggNDggMCAwLTQ4LTQ4IDB6bTAgMTIwbDAgNDggNDggMCAwLTQ4LTQ4IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yODggMzIwbDAgOTYgMCAzMiAwIDMyIDE2IDAgMTMuMyAwIDkuNC05LjQgMTEyLTExMiA5LjQtOS40IDAtMTMuMyAwLTE2LTMyIDAtMzIgMC05NiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Note: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l448 0 0 288-32 0-32 0-96 0 0 96 0 32 0 32L0 480 0 32zm64 80l0 48 48 0 0-48-48 0zm0 120l0 48 48 0 0-48-48 0zm0 120l0 48 48 0 0-48-48 0z" />
            <path d="M288 320l0 96 0 32 0 32 16 0 13.3 0 9.4-9.4 112-112 9.4-9.4 0-13.3 0-16-32 0-32 0-96 0z" />
    </Icon>
);

export default Note;