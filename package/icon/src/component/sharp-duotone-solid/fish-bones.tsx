
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fish-bones` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fish-bones?s=sharp-duotone-solid fish-bones}
 * @preview ![fish-bones](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDEyOEw2NCAyNTYgMCAzODRsMzIgMzIgNjQtNjQgMC00OCAwLTI0IDAtNDggMC0yNCAwLTQ4TDMyIDk2IDAgMTI4em00MTYtMTZsMCAxMjAgNjQgMCAwIDQ4LTY0IDAgMCAxMjAgMzIgMEw1NzYgMjU2IDQ0OCAxMTJsLTMyIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xODQgMTYwbDAtMjQtNDggMCAwIDI0IDAgNzItNDAgMCAwIDQ4IDQwIDAgMCA3MiAwIDI0IDQ4IDAgMC0yNCAwLTcyIDQ4IDAgMCA3MiAwIDI0IDQ4IDAgMC0yNCAwLTcyIDQ4IDAgMCA3MiAwIDI0IDQ4IDAgMC0yNCAwLTcyIDEwNCAwIDAtNDgtMTA0IDAgMC03MiAwLTI0LTQ4IDAgMCAyNCAwIDcyLTQ4IDAgMC03MiAwLTI0LTQ4IDAgMCAyNCAwIDcyLTQ4IDAgMC03MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const FishBones: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 128L64 256 0 384l32 32 64-64 0-48 0-24 0-48 0-24 0-48L32 96 0 128zm416-16l0 120 64 0 0 48-64 0 0 120 32 0L576 256 448 112l-32 0z" />
            <path d="M184 160l0-24-48 0 0 24 0 72-40 0 0 48 40 0 0 72 0 24 48 0 0-24 0-72 48 0 0 72 0 24 48 0 0-24 0-72 48 0 0 72 0 24 48 0 0-24 0-72 104 0 0-48-104 0 0-72 0-24-48 0 0 24 0 72-48 0 0-72 0-24-48 0 0 24 0 72-48 0 0-72z" />
    </Icon>
);

export default FishBones;