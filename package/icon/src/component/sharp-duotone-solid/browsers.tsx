
import { Icon, generic } from "../../index";

/**
 * A component that renders the `browsers` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/browsers?s=sharp-duotone-solid browsers}
 * @preview ![browsers](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAxOTJsMCAyMjQgNDgwIDAgMC0yMjRMOTYgMTkyek0xNjAgNjRsMCA2NCA2NCAwIDAtNjQtNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTU3NiAwTDk2IDBsMCAxOTIgNDgwIDBMNTc2IDB6TTIyNCA2NGwwIDY0LTY0IDAgMC02NCA2NCAwem0zMiA4bDI1NiAwIDAgNDgtMjU2IDAgMC00OHpNNDggMTIwbDAtMjRMMCA5NmwwIDI0TDAgNDg4bDAgMjQgMjQgMCA0MzIgMCAyNCAwIDAtNDgtMjQgMEw0OCA0NjRsMC0zNDR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Browsers: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 192l0 224 480 0 0-224L96 192zM160 64l0 64 64 0 0-64-64 0z" />
            <path d="M576 0L96 0l0 192 480 0L576 0zM224 64l0 64-64 0 0-64 64 0zm32 8l256 0 0 48-256 0 0-48zM48 120l0-24L0 96l0 24L0 488l0 24 24 0 432 0 24 0 0-48-24 0L48 464l0-344z" />
    </Icon>
);

export default Browsers;