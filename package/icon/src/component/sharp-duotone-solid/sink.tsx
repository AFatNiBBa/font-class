
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sink` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sink?s=sharp-duotone-solid sink}
 * @preview ![sink](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI4OGwwIDY0IDMyIDAgNDQ4IDAgMzIgMCAwLTY0LTMyIDAtODAgMC00OCAwLTY0IDAtNjQgMC02NCAwLTQ4IDAtODAgMEwwIDI4OHptMzIgOTZsMCAzMmMwIDUzIDQzIDk2IDk2IDk2bDI1NiAwYzUzIDAgOTYtNDMgOTYtOTZsMC0zMkwzMiAzODR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yODggOTZjMC0xNy43IDE0LjMtMzIgMzItMzJzMzIgMTQuMyAzMiAzMmwwIDMyIDY0IDAgMC0zMmMwLTUzLTQzLTk2LTk2LTk2cy05NiA0My05NiA5NmwwIDE5MiA2NCAwIDAtMTkyek01NiAyMDhsLTI0IDAgMCA0OCAyNCAwIDU2IDAgMCAzMiA0OCAwIDAtNTYgMC0yNC0yNCAwLTgwIDB6bTMyMCAwbC0yNCAwIDAgMjQgMCA1NiA0OCAwIDAtMzIgNjQgMCAyNCAwIDAtNDgtMjQgMC04OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Sink: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288l0 64 32 0 448 0 32 0 0-64-32 0-80 0-48 0-64 0-64 0-64 0-48 0-80 0L0 288zm32 96l0 32c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-32L32 384z" />
            <path d="M288 96c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 64 0 0-32c0-53-43-96-96-96s-96 43-96 96l0 192 64 0 0-192zM56 208l-24 0 0 48 24 0 56 0 0 32 48 0 0-56 0-24-24 0-80 0zm320 0l-24 0 0 24 0 56 48 0 0-32 64 0 24 0 0-48-24 0-88 0z" />
    </Icon>
);

export default Sink;