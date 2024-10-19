
import { Icon, generic } from "../../index";

/**
 * A component that renders the `butter` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/butter?s=duotone butter}
 * @preview ![butter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAxMjhsMCAxOTIgMzg0IDAgMC0yNTZMMTI4IDY0Yy0zNS4zIDAtNjQgMjguNy02NCA2NHpNNDgwIDY0bDAgMjU2IDk2IDAgMC0xOTJjMC0zNS4zLTI4LjctNjQtNjQtNjRsLTMyIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMiAzMjBjLTE3LjcgMC0zMiAxNC4zLTMyIDMyczE0LjMgMzIgMzIgMzJsMCAzMmMwIDE3LjcgMTQuMyAzMiAzMiAzMmw1MTIgMGMxNy43IDAgMzItMTQuMyAzMi0zMmwwLTMyYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMyTDMyIDMyMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Butter: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 128l0 192 384 0 0-256L128 64c-35.3 0-64 28.7-64 64zM480 64l0 256 96 0 0-192c0-35.3-28.7-64-64-64l-32 0z" />
            <path d="M32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l0 32c0 17.7 14.3 32 32 32l512 0c17.7 0 32-14.3 32-32l0-32c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 320z" />
    </Icon>
);

export default Butter;