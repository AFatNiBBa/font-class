
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-up-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-up-right?s=sharp-duotone-solid circle-up-right}
 * @preview ![circle-up-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTE0NCA1Nmw3Ni03Ni01Mi01MiAyNC0yNCAxNjAgMCAwIDE2MC0yNCAyNC01Mi01Mi03NiA3Ni01Ni01NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMyOCAzNDRsMjQtMjQgMC0xNjAtMTYwIDAtMjQgMjQgNTIgNTItNzYgNzYgNTYgNTYgNzYtNzYgNTIgNTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleUpRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm144 56l76-76-52-52 24-24 160 0 0 160-24 24-52-52-76 76-56-56z" />
            <path d="M328 344l24-24 0-160-160 0-24 24 52 52-76 76 56 56 76-76 52 52z" />
    </Icon>
);

export default CircleUpRight;