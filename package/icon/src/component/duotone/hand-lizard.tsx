
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-lizard` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-lizard?s=duotone hand-lizard}
 * @preview ![hand-lizard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDExMkMwIDg1LjUgMjEuNSA2NCA0OCA2NGwxMTIgMCA4MCAwIDQ2LjUgMGMzNi44IDAgNzEuMiAxOCA5Mi4xIDQ4LjJsMTEzLjUgMTY0YzEzIDE4LjcgMTkuOSA0MSAxOS45IDYzLjhsMCAxMiAwIDE2IDAgNDhjMCAxNy43LTE0LjMgMzItMzIgMzJsLTk2IDBjLTE3LjcgMC0zMi0xNC4zLTMyLTMybDAtMTMuOEwyNzMuOSAzNTIgMjQwIDM1MmwtODAgMC00OCAwYy0yNi41IDAtNDgtMjEuNS00OC00OHMyMS41LTQ4IDQ4LTQ4bDQ4IDAgODAgMGMyNi41IDAgNDgtMjEuNSA0OC00OHMtMjEuNS00OC00OC00OGwtODAgMEw0OCAxNjBjLTI2LjUgMC00OC0yMS41LTQ4LTQ4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const HandLizard: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 112C0 85.5 21.5 64 48 64l112 0 80 0 46.5 0c36.8 0 71.2 18 92.1 48.2l113.5 164c13 18.7 19.9 41 19.9 63.8l0 12 0 16 0 48c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-13.8L273.9 352 240 352l-80 0-48 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l48 0 80 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-80 0L48 160c-26.5 0-48-21.5-48-48z" />
    </Icon>
);

export default HandLizard;