
import { Icon, generic } from "../../index";

/**
 * A component that renders the `t` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/t?s=sharp-duotone-solid t}
 * @preview ![t](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAzMkwwIDMyIDAgOTZsMzIgMCAxMjggMCAwIDM1MiAwIDMyIDY0IDAgMC0zMiAwLTM1MiAxMjggMCAzMiAwIDAtNjQtMzIgMEwyMjQgMzJsLTMyIDAtMzIgMEwzMiAzMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const T: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 32L0 32 0 96l32 0 128 0 0 352 0 32 64 0 0-32 0-352 128 0 32 0 0-64-32 0L224 32l-32 0-32 0L32 32z" />
    </Icon>
);

export default T;