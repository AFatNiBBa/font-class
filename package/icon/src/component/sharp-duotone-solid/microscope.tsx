
import { Icon, generic } from "../../index";

/**
 * A component that renders the `microscope` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microscope?s=sharp-duotone-solid microscope}
 * @preview ![microscope](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAzODRsMCAzMiAxNiAwIDE5MiAwIDE2IDAgMC0zMi0xNiAwLTE5MiAwLTE2IDB6TTE2MCAwbDAgMzIgOTYgMCAwLTMyTDE2MCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTI4IDMybDE2MCAwIDAgMjg4LTMyIDAgMCAzMi05NiAwIDAtMzItMzIgMCAwLTI4OHpNNTEyIDMyMGMwIDQ5LjItMTguNSA5NC00OC45IDEyOGwxNi45IDAgMzIgMCAwIDY0LTMyIDAtMTYwIDBMMzIgNTEyIDAgNTEybDAtNjQgMzIgMCAyODggMGM3MC43IDAgMTI4LTU3LjMgMTI4LTEyOHMtNTcuMy0xMjgtMTI4LTEyOGwwLTY0YzEwNiAwIDE5MiA4NiAxOTIgMTkyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Microscope: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 384l0 32 16 0 192 0 16 0 0-32-16 0-192 0-16 0zM160 0l0 32 96 0 0-32L160 0z" />
            <path d="M128 32l160 0 0 288-32 0 0 32-96 0 0-32-32 0 0-288zM512 320c0 49.2-18.5 94-48.9 128l16.9 0 32 0 0 64-32 0-160 0L32 512 0 512l0-64 32 0 288 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l0-64c106 0 192 86 192 192z" />
    </Icon>
);

export default Microscope;