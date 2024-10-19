
import { Icon, generic } from "../../index";

/**
 * A component that renders the `down-long` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-long?s=sharp-duotone-solid down-long}
 * @preview ![down-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAwbDAgMzIwIDEyOCAwYzAtNDIuNyAwLTg1LjMgMC0xMjhjMC02NCAwLTEyOCAwLTE5Mkw5NiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAzNTJMMTYwIDUxMiAzMjAgMzUybDAtMzJzMCAwIDAgMGwtOTYgMEw5NiAzMjAgMCAzMjBsMCAzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const DownLong: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M96 0l0 320 128 0c0-42.7 0-85.3 0-128c0-64 0-128 0-192L96 0z" />
            <path d="M0 352L160 512 320 352l0-32s0 0 0 0l-96 0L96 320 0 320l0 32z" />
    </Icon>
);

export default DownLong;