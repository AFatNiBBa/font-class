
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-from-bracket` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-from-bracket?s=sharp-duotone-solid up-from-bracket}
 * @preview ![up-from-bracket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyMGwwIDMyTDAgNDgwbDAgMzIgMzIgMCAzODQgMCAzMiAwIDAtMzIgMC0xMjggMC0zMi02NCAwIDAgMzIgMCA5Nkw2NCA0NDhsMC05NiAwLTMyTDAgMzIweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjI0IDBMNjQgMTYwbDAgMzIgOTYgMCAwIDE2MCAxMjggMCAwLTE2MCA5NiAwIDAtMzJMMjI0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const UpFromBracket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 320l0 32L0 480l0 32 32 0 384 0 32 0 0-32 0-128 0-32-64 0 0 32 0 96L64 448l0-96 0-32L0 320z" />
            <path d="M224 0L64 160l0 32 96 0 0 160 128 0 0-160 96 0 0-32L224 0z" />
    </Icon>
);

export default UpFromBracket;