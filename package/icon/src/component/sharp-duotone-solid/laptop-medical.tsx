
import { Icon, generic } from "../../index";

/**
 * A component that renders the `laptop-medical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-medical?s=sharp-duotone-solid laptop-medical}
 * @preview ![laptop-medical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM4NGwwIDQ4IDQ4IDQ4IDU0NCAwIDQ4LTQ4IDAtNDhMMCAzODR6TTY0IDMybDAgMzIgMCAyODggNjQgMCAwLTI1NiAzODQgMCAwIDI1NiA2NCAwIDAtMjg4IDAtMzItMzIgMEw5NiAzMiA2NCAzMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTUxMiA5NkwxMjggOTZsMCAyNTYgMzg0IDAgMC0yNTZ6TTI4OCAxMjhsNjQgMCAwIDY0IDY0IDAgMCA2NC02NCAwIDAgNjQtNjQgMCAwLTY0LTY0IDAgMC02NCA2NCAwIDAtNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const LaptopMedical: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 384l0 48 48 48 544 0 48-48 0-48L0 384zM64 32l0 32 0 288 64 0 0-256 384 0 0 256 64 0 0-288 0-32-32 0L96 32 64 32z" />
            <path d="M512 96L128 96l0 256 384 0 0-256zM288 128l64 0 0 64 64 0 0 64-64 0 0 64-64 0 0-64-64 0 0-64 64 0 0-64z" />
    </Icon>
);

export default LaptopMedical;