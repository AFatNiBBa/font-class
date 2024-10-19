
import { Icon, generic } from "../../index";

/**
 * A component that renders the `jar` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jar?s=sharp-duotone-solid jar}
 * @preview ![jar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0bDMyIDAgMjU2IDAgMzIgMCAwIDQ0OEwwIDUxMiAwIDY0ek02NCAxOTJsMCAxOTIgMTkyIDAgMC0xOTJMNjQgMTkyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjg4IDBMMzIgMGwwIDY0IDI1NiAwIDAtNjR6TTI1NiAxOTJMNjQgMTkybDAgMTkyIDE5MiAwIDAtMTkyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Jar: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 64l32 0 256 0 32 0 0 448L0 512 0 64zM64 192l0 192 192 0 0-192L64 192z" />
            <path d="M288 0L32 0l0 64 256 0 0-64zM256 192L64 192l0 192 192 0 0-192z" />
    </Icon>
);

export default Jar;