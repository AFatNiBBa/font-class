
import { Icon, generic } from "../../index";

/**
 * A component that renders the `engine-warning` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/engine-warning?s=sharp-duotone-solid engine-warning}
 * @preview ![engine-warning](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDEzNmwwIDI0TDAgMzUybDAgMjQgNDggMCAwLTI0IDAtNzIgNDggMCAwLTQ4LTQ4IDAgMC03MiAwLTI0TDAgMTM2ek0xODQgNjRsMCA0OCAyNCAwIDcyIDAgMCAzMiA0OCAwIDAtMzIgNzIgMCAyNCAwIDAtNDgtMjQgMEwyMDggNjRsLTI0IDB6TTU0NCAxOTJsMCAyNTYgOTYgMCAwLTI1Ni05NiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTYwIDE0NGwtNjQgMCAwIDI0MCA3Ni44IDBMMjI0IDQ0OGwyODggMCAwLTI0MC04MC02NC0yMjQgMC00OCAwem0xNjQgNjRsMCA4OCAwIDIwLTQwIDAgMC0yMCAwLTg4IDAtMjAgNDAgMCAwIDIwem00IDE0NGwwIDQ4LTQ4IDAgMC00OCA0OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const EngineWarning: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 136l0 24L0 352l0 24 48 0 0-24 0-72 48 0 0-48-48 0 0-72 0-24L0 136zM184 64l0 48 24 0 72 0 0 32 48 0 0-32 72 0 24 0 0-48-24 0L208 64l-24 0zM544 192l0 256 96 0 0-256-96 0z" />
            <path d="M160 144l-64 0 0 240 76.8 0L224 448l288 0 0-240-80-64-224 0-48 0zm164 64l0 88 0 20-40 0 0-20 0-88 0-20 40 0 0 20zm4 144l0 48-48 0 0-48 48 0z" />
    </Icon>
);

export default EngineWarning;