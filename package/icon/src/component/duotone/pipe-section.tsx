
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pipe-section` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe-section?s=duotone pipe-section}
 * @preview ![pipe-section](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAxMjhsMCAyNTYgNTEyIDAgMC0yNTZMNjQgMTI4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQgMTI4YzAtMTcuNy0xNC4zLTMyLTMyLTMyUzAgMTEwLjMgMCAxMjhMMCAzODRjMCAxNy43IDE0LjMgMzIgMzIgMzJzMzItMTQuMyAzMi0zMmwwLTI1NnptNTc2IDBjMC0xNy43LTE0LjMtMzItMzItMzJzLTMyIDE0LjMtMzIgMzJsMCAyNTZjMCAxNy43IDE0LjMgMzIgMzIgMzJzMzItMTQuMyAzMi0zMmwwLTI1NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const PipeSection: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 128l0 256 512 0 0-256L64 128z" />
            <path d="M64 128c0-17.7-14.3-32-32-32S0 110.3 0 128L0 384c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256zm576 0c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256z" />
    </Icon>
);

export default PipeSection;