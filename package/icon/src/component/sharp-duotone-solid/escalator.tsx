
import { Icon, generic } from "../../index";

/**
 * A component that renders the `escalator` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/escalator?s=sharp-duotone-solid escalator}
 * @preview ![escalator](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAzODRsMCAxMjggNjQgMCA5NiAwIDI0IDAgMTguMS0xNS44TDQ3MiAyODhsNzIgMCA2NCAwIDAtMTI4LTY0IDAtOTYgMC0yNCAwLTE4LjEgMTUuOEwxNjggMzg0bC03MiAwLTY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNTYgMGE0OCA0OCAwIDEgMSAwIDk2IDQ4IDQ4IDAgMSAxIDAtOTZ6bTY0IDEyOGwwIDgwLjQtMTI4IDExMkwxOTIgMTI4bDEyOCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Escalator: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 384l0 128 64 0 96 0 24 0 18.1-15.8L472 288l72 0 64 0 0-128-64 0-96 0-24 0-18.1 15.8L168 384l-72 0-64 0z" />
            <path d="M256 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm64 128l0 80.4-128 112L192 128l128 0z" />
    </Icon>
);

export default Escalator;