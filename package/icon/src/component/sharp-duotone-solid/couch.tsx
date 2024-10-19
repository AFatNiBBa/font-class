
import { Icon, generic } from "../../index";

/**
 * A component that renders the `couch` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/couch?s=sharp-duotone-solid couch}
 * @preview ![couch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAzMmwwIDE5MiAzMiAwIDAgMTI4IDQ0OCAwIDAtMTI4IDMyIDAgMC0xOTJMNjQgMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik05NiAyMjRMMCAyMjQgMCA0ODBsOTYgMCAwLTMyIDQ0OCAwIDAgMzIgOTYgMCAwLTI1Ni05NiAwIDAgMTI4TDk2IDM1MmwwLTEyOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Couch: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 32l0 192 32 0 0 128 448 0 0-128 32 0 0-192L64 32z" />
            <path d="M96 224L0 224 0 480l96 0 0-32 448 0 0 32 96 0 0-256-96 0 0 128L96 352l0-128z" />
    </Icon>
);

export default Couch;