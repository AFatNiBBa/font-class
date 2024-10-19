
import { Icon, generic } from "../../index";

/**
 * A component that renders the `compact-disc` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compact-disc?s=duotone compact-disc}
 * @preview ![compact-disc](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTY0LTE2YzAtNDUuNCAyMi4zLTg5LjIgNTQuNS0xMjEuNVMxOTQuNiA2NCAyNDAgNjRjOC44IDAgMTYgNy4yIDE2IDE2cy03LjIgMTYtMTYgMTZjLTM1IDAtNzEuMSAxNy41LTk4LjggNDUuMlM5NiAyMDUgOTYgMjQwYzAgOC44LTcuMiAxNi0xNiAxNnMtMTYtNy4yLTE2LTE2em0yODggMTZhOTYgOTYgMCAxIDEgLTE5MiAwIDk2IDk2IDAgMSAxIDE5MiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU2IDIyNGEzMiAzMiAwIDEgMCAwIDY0IDMyIDMyIDAgMSAwIDAtNjR6bTk2IDMyYTk2IDk2IDAgMSAxIC0xOTIgMCA5NiA5NiAwIDEgMSAxOTIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CompactDisc: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm64-16c0-45.4 22.3-89.2 54.5-121.5S194.6 64 240 64c8.8 0 16 7.2 16 16s-7.2 16-16 16c-35 0-71.1 17.5-98.8 45.2S96 205 96 240c0 8.8-7.2 16-16 16s-16-7.2-16-16zm288 16a96 96 0 1 1 -192 0 96 96 0 1 1 192 0z" />
            <path d="M256 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm96 32a96 96 0 1 1 -192 0 96 96 0 1 1 192 0z" />
    </Icon>
);

export default CompactDisc;