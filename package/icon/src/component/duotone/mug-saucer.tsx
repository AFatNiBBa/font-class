
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mug-saucer` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mug-saucer?s=duotone mug-saucer}
 * @preview ![mug-saucer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ0OGMwLTE3LjcgMTQuMy0zMiAzMi0zMmw1MTIgMGMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMkwzMiA0ODBjLTE3LjcgMC0zMi0xNC4zLTMyLTMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTI4IDMyYy0xNy43IDAtMzIgMTQuMy0zMiAzMmwwIDIyNGMwIDUzIDQzIDk2IDk2IDk2bDE5MiAwYzUzIDAgOTYtNDMgOTYtOTZsMzIgMGM3MC43IDAgMTI4LTU3LjMgMTI4LTEyOHMtNTcuMy0xMjgtMTI4LTEyOGwtNjQgMEwxMjggMzJ6TTQ4MCA5NmwzMiAwYzM1LjMgMCA2NCAyOC43IDY0IDY0cy0yOC43IDY0LTY0IDY0bC0zMiAwIDAtMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const MugSaucer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 448c0-17.7 14.3-32 32-32l512 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32z" />
            <path d="M128 32c-17.7 0-32 14.3-32 32l0 224c0 53 43 96 96 96l192 0c53 0 96-43 96-96l32 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l-64 0L128 32zM480 96l32 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-32 0 0-128z" />
    </Icon>
);

export default MugSaucer;