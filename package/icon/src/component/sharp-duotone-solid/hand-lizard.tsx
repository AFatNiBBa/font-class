
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-lizard` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-lizard?s=sharp-duotone-solid hand-lizard}
 * @preview ![hand-lizard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0bDQ4IDAgMTEyIDAgODAgMCA4MCAwIDI1LjEgMCAxNC4zIDIwLjcgMTQ0IDIwOEw1MTIgMzA1bDAgMTUgMCAzMiAwIDE2IDAgODAtMTYwIDAgMC00NS44TDI3My45IDM1MiAyNDAgMzUybC04MCAwLTQ4IDAtNDggMCAwLTk2IDQ4IDAgNDggMCA4MCAwYzI2LjUgMCA0OC0yMS41IDQ4LTQ4cy0yMS41LTQ4LTQ4LTQ4bC04MCAwTDQ4IDE2MCAwIDE2MCAwIDY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const HandLizard: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64l48 0 112 0 80 0 80 0 25.1 0 14.3 20.7 144 208L512 305l0 15 0 32 0 16 0 80-160 0 0-45.8L273.9 352 240 352l-80 0-48 0-48 0 0-96 48 0 48 0 80 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-80 0L48 160 0 160 0 64z" />
    </Icon>
);

export default HandLizard;