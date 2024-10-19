
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pipe-section` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe-section?s=sharp-duotone-solid pipe-section}
 * @preview ![pipe-section](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAxMjhsMCAyNTYgNTEyIDAgMC0yNTZMNjQgMTI4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQgMTI4bDAtMzJMMCA5NmwwIDMyTDAgMzg0bDAgMzIgNjQgMCAwLTMyIDAtMjU2em01NzYgMGwwLTMyLTY0IDAgMCAzMiAwIDI1NiAwIDMyIDY0IDAgMC0zMiAwLTI1NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const PipeSection: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 128l0 256 512 0 0-256L64 128z" />
            <path d="M64 128l0-32L0 96l0 32L0 384l0 32 64 0 0-32 0-256zm576 0l0-32-64 0 0 32 0 256 0 32 64 0 0-32 0-256z" />
    </Icon>
);

export default PipeSection;