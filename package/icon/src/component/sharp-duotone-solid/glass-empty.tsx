
import { Icon, generic } from "../../index";

/**
 * A component that renders the `glass-empty` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glass-empty?s=sharp-duotone-solid glass-empty}
 * @preview ![glass-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05OS4yIDQ0OGwxODUuNiAwIDMwLTM4NEw2OS4yIDY0bDMwIDM4NHpNMzQ0IDUxMkw0MCA1MTIgNSA2NCAwIDAgNjQuMiAwIDMxOS44IDAgMzg0IDBsLTUgNjRMMzQ0IDUxMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const GlassEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M99.2 448l185.6 0 30-384L69.2 64l30 384zM344 512L40 512 5 64 0 0 64.2 0 319.8 0 384 0l-5 64L344 512z" />
    </Icon>
);

export default GlassEmpty;