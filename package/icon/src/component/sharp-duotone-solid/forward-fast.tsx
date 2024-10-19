
import { Icon, generic } from "../../index";

/**
 * A component that renders the `forward-fast` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forward-fast?s=sharp-duotone-solid forward-fast}
 * @preview ![forward-fast](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00NDggNjRsNjQgMCAwIDMyIDAgMzIwIDAgMzItNjQgMCAwLTMyIDAtMTM2IDAtNDggMC0xMzYgMC0zMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ0OCAyODBMMjI0IDQ0OGwwLTE2OEwwIDQ0OCAwIDY0IDIyNCAyMzJsMC0xNjhMNDQ4IDIzMmwwIDQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ForwardFast: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M448 64l64 0 0 32 0 320 0 32-64 0 0-32 0-136 0-48 0-136 0-32z" />
            <path d="M448 280L224 448l0-168L0 448 0 64 224 232l0-168L448 232l0 48z" />
    </Icon>
);

export default ForwardFast;