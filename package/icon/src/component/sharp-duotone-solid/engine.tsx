
import { Icon, generic } from "../../index";

/**
 * A component that renders the `engine` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/engine?s=sharp-duotone-solid engine}
 * @preview ![engine](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDEzNmwwIDI0TDAgMzUybDAgMjQgNDggMCAwLTI0IDAtNzIgNDggMCAwLTQ4LTQ4IDAgMC03MiAwLTI0TDAgMTM2ek0xODQgNjRsMCA0OCAyNCAwIDcyIDAgMCAzMiA0OCAwIDAtMzIgNzIgMCAyNCAwIDAtNDgtMjQgMEwyMDggNjRsLTI0IDB6TTU0NCAxOTJsMCAyNTYgOTYgMCAwLTI1Ni05NiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNOTYgMTQ0bDY0IDAgNDggMCAyMjQgMCA4MCA2NCAwIDI0MC0yODggMC01MS4yLTY0TDk2IDM4NGwwLTI0MHptMTI4IDgwbC02NCAwIDAgNjQgNjQgMCAwLTY0em05NiAwbC02NCAwIDAgNjQgNjQgMCAwLTY0em0zMiAwbDAgNjQgNjQgMCAwLTY0LTY0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Engine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 136l0 24L0 352l0 24 48 0 0-24 0-72 48 0 0-48-48 0 0-72 0-24L0 136zM184 64l0 48 24 0 72 0 0 32 48 0 0-32 72 0 24 0 0-48-24 0L208 64l-24 0zM544 192l0 256 96 0 0-256-96 0z" />
            <path d="M96 144l64 0 48 0 224 0 80 64 0 240-288 0-51.2-64L96 384l0-240zm128 80l-64 0 0 64 64 0 0-64zm96 0l-64 0 0 64 64 0 0-64zm32 0l0 64 64 0 0-64-64 0z" />
    </Icon>
);

export default Engine;