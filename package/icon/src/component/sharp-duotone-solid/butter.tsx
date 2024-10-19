
import { Icon, generic } from "../../index";

/**
 * A component that renders the `butter` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/butter?s=sharp-duotone-solid butter}
 * @preview ![butter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA2NGwwIDI1NiAzODQgMCAwLTI1Nkw2NCA2NHptNDE2IDBsMCAyNTYgOTYgMCAwLTI1Ni05NiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzIgMzIwTDAgMzIwbDAgNjQgMzIgMCAwIDY0IDU3NiAwIDAtNjQgMzIgMCAwLTY0LTMyIDBMMzIgMzIweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Butter: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 64l0 256 384 0 0-256L64 64zm416 0l0 256 96 0 0-256-96 0z" />
            <path d="M32 320L0 320l0 64 32 0 0 64 576 0 0-64 32 0 0-64-32 0L32 320z" />
    </Icon>
);

export default Butter;