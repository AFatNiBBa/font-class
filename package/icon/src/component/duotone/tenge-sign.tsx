
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tenge-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tenge-sign?s=duotone tenge-sign}
 * @preview ![tenge-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MmMwIDE3LjcgMTQuMyAzMiAzMiAzMmwxMjggMCAwIDIyNGMwIDE3LjcgMTQuMyAzMiAzMiAzMnMzMi0xNC4zIDMyLTMybDAtMjI0IDEyOCAwYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMybC0xNjAgMEwzMiAxNjBjLTE3LjcgMC0zMiAxNC4zLTMyIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCA2NEMwIDQ2LjMgMTQuMyAzMiAzMiAzMkgzNTJjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJIMzJDMTQuMyA5NiAwIDgxLjcgMCA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const TengeSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 192c0 17.7 14.3 32 32 32l128 0 0 224c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224 128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0L32 160c-17.7 0-32 14.3-32 32z" />
            <path d="M0 64C0 46.3 14.3 32 32 32H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64z" />
    </Icon>
);

export default TengeSign;