
import { Icon, generic } from "../../index";

/**
 * A component that renders the `signal-bars-weak` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-bars-weak?s=sharp-duotone-solid signal-bars-weak}
 * @preview ![signal-bars-weak](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOTIgMjU2bDAgMjU2IDk2IDAgMC0yNTYtOTYgMHpNMzUyIDEyOGwwIDM4NCA5NiAwIDAtMzg0LTk2IDB6TTUxMiAwbDAgNTEyIDk2IDBMNjA4IDAgNTEyIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMiAzODRoOTZWNTEySDMyVjM4NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const SignalBarsWeak: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M192 256l0 256 96 0 0-256-96 0zM352 128l0 384 96 0 0-384-96 0zM512 0l0 512 96 0L608 0 512 0z" />
            <path d="M32 384h96V512H32V384z" />
    </Icon>
);

export default SignalBarsWeak;