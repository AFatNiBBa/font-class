
import { Icon, generic } from "../../index";

/**
 * A component that renders the `glass-half` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glass-half?s=sharp-duotone-solid glass-half}
 * @preview ![glass-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMNSA2NCA0MCA1MTJsMzA0IDBMMzc5IDY0bDUtNjRMMzE5LjggMCA2NC4yIDAgMCAwek02OS4yIDY0bDI0NS42IDBjLTQuMiA1My4zLTguMyAxMDYuNy0xMi41IDE2MEwyODQuOCA0NDggOTkuMiA0NDggODEuNyAyMjRjLTQuMi01My4zLTguMy0xMDYuNy0xMi41LTE2MHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTgxLjcgMjI0TDk5LjIgNDQ4bDE4NS42IDAgMTcuNS0yMjRMODEuNyAyMjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const GlassHalf: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L5 64 40 512l304 0L379 64l5-64L319.8 0 64.2 0 0 0zM69.2 64l245.6 0c-4.2 53.3-8.3 106.7-12.5 160L284.8 448 99.2 448 81.7 224c-4.2-53.3-8.3-106.7-12.5-160z" />
            <path d="M81.7 224L99.2 448l185.6 0 17.5-224L81.7 224z" />
    </Icon>
);

export default GlassHalf;