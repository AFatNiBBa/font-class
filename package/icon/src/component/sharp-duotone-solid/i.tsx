
import { Icon, generic } from "../../index";

/**
 * A component that renders the `i` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/i?s=sharp-duotone-solid i}
 * @preview ![i](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAzMkwwIDMyIDAgOTZsMzIgMCA5NiAwIDAgMzIwLTk2IDBMMCA0MTZsMCA2NCAzMiAwIDk2IDAgNjQgMCA5NiAwIDMyIDAgMC02NC0zMiAwLTk2IDAgMC0zMjAgOTYgMCAzMiAwIDAtNjQtMzIgMC05NiAwLTMyIDAtMzIgMEwzMiAzMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const I: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M32 32L0 32 0 96l32 0 96 0 0 320-96 0L0 416l0 64 32 0 96 0 64 0 96 0 32 0 0-64-32 0-96 0 0-320 96 0 32 0 0-64-32 0-96 0-32 0-32 0L32 32z" />
    </Icon>
);

export default I;