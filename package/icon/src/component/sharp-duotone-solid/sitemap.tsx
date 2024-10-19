
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sitemap` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sitemap?s=sharp-duotone-solid sitemap}
 * @preview ![sitemap](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik01NiAyMzJsMCAyNCAwIDY0IDQ4IDAgMC00MCAxNjAgMCAwIDQwIDQ4IDAgMC00MCAxNjAgMCAwIDQwIDQ4IDAgMC02NCAwLTI0LTI0IDAtMTg0IDAgMC00MC00OCAwIDAgNDBMODAgMjMybC0yNCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjA4IDMybDE2MCAwIDAgMTYwLTE2MCAwIDAtMTYwek0xNjAgMzIwbDAgMTYwTDAgNDgwIDAgMzIwbDE2MCAwem0yMDggMGwwIDE2MC0xNjAgMCAwLTE2MCAxNjAgMHptMjA4IDBsMCAxNjAtMTYwIDAgMC0xNjAgMTYwIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Sitemap: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M56 232l0 24 0 64 48 0 0-40 160 0 0 40 48 0 0-40 160 0 0 40 48 0 0-64 0-24-24 0-184 0 0-40-48 0 0 40L80 232l-24 0z" />
            <path d="M208 32l160 0 0 160-160 0 0-160zM160 320l0 160L0 480 0 320l160 0zm208 0l0 160-160 0 0-160 160 0zm208 0l0 160-160 0 0-160 160 0z" />
    </Icon>
);

export default Sitemap;