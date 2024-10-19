
import { Icon, generic } from "../../index";

/**
 * A component that renders the `compress` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compress?s=sharp-duotone-solid compress}
 * @preview ![compress](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyMGwwIDY0IDMyIDAgNjQgMCAwIDY0IDAgMzIgNjQgMCAwLTMyIDAtOTYgMC0zMi0zMiAwLTk2IDBMMCAzMjB6TTI4OCAzMmwwIDMyIDAgOTYgMCAzMiAzMiAwIDk2IDAgMzIgMCAwLTY0LTMyIDAtNjQgMCAwLTY0IDAtMzItNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE2MCA2NGwwLTMyTDk2IDMybDAgMzIgMCA2NC02NCAwTDAgMTI4bDAgNjQgMzIgMCA5NiAwIDMyIDAgMC0zMiAwLTk2ek0zMjAgMzIwbC0zMiAwIDAgMzIgMCA5NiAwIDMyIDY0IDAgMC0zMiAwLTY0IDY0IDAgMzIgMCAwLTY0LTMyIDAtOTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Compress: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 320l0 64 32 0 64 0 0 64 0 32 64 0 0-32 0-96 0-32-32 0-96 0L0 320zM288 32l0 32 0 96 0 32 32 0 96 0 32 0 0-64-32 0-64 0 0-64 0-32-64 0z" />
            <path d="M160 64l0-32L96 32l0 32 0 64-64 0L0 128l0 64 32 0 96 0 32 0 0-32 0-96zM320 320l-32 0 0 32 0 96 0 32 64 0 0-32 0-64 64 0 32 0 0-64-32 0-96 0z" />
    </Icon>
);

export default Compress;