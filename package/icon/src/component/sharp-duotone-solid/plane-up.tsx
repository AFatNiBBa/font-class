
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plane-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane-up?s=sharp-duotone-solid plane-up}
 * @preview ![plane-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI4OGwwIDk2IDE5Mi02NCAwLTE2MEwwIDI4OHpNMzIwIDE2MGwwIDE2MCAxOTIgNjQgMC05NkwzMjAgMTYweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTkyIDkzLjdDMTkyIDU5LjUgMjIxIDAgMjU2IDBjMzYgMCA2NCA1OS41IDY0IDkzLjdMMzIwIDQwMGw2NCA0OCAwIDY0TDI1NiA0ODAgMTI4IDUxMmwwLTY0IDY0LTQ4IDAtMzA2LjN6Ii8+PC9zdmc+|width=32|height=32)
 */
const PlaneUp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288l0 96 192-64 0-160L0 288zM320 160l0 160 192 64 0-96L320 160z" />
            <path d="M192 93.7C192 59.5 221 0 256 0c36 0 64 59.5 64 93.7L320 400l64 48 0 64L256 480 128 512l0-64 64-48 0-306.3z" />
    </Icon>
);

export default PlaneUp;