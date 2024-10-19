
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ramp-loading` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ramp-loading?s=sharp-duotone-solid ramp-loading}
 * @preview ![ramp-loading](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAwTDY0IDAgMzg0IDBsMzIgMCAwIDMyIDAgNDA4LjQtNjQtMTI4TDM1MiA2NCA5NiA2NGwwIDI0OC40LTY0IDEyOEwzMiAzMiAzMiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTI4IDMyMEgzMjBsOTYgMTkySDMybDk2LTE5MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const RampLoading: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 0L64 0 384 0l32 0 0 32 0 408.4-64-128L352 64 96 64l0 248.4-64 128L32 32 32 0z" />
            <path d="M128 320H320l96 192H32l96-192z" />
    </Icon>
);

export default RampLoading;