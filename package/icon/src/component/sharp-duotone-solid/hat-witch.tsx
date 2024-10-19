
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hat-witch` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hat-witch?s=sharp-duotone-solid hat-witch}
 * @preview ![hat-witch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQxNmw5NiAwIDEyOCAwIDMyIDAgNjQgMCAzMiAwIDEyOCAwIDk2IDAgMCAzMkw0NDggNTEybC0zMjAgMEwwIDQ0OGwwLTMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNOTYgNDE2TDIyNCAxMjggNDQwIDAgNTQ0IDg4IDUxMiAxOTJsLTMyLTY0LTY0IDAtMzIgNjQgOTYgMjI0LTEyOCAwIDAtODAgMC0xNi0xNiAwLTk2IDAtMTYgMCAwIDE2IDAgODBMOTYgNDE2em0xNjAgMGwwLTY0IDY0IDAgMCA2NC02NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HatWitch: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 416l96 0 128 0 32 0 64 0 32 0 128 0 96 0 0 32L448 512l-320 0L0 448l0-32z" />
            <path d="M96 416L224 128 440 0 544 88 512 192l-32-64-64 0-32 64 96 224-128 0 0-80 0-16-16 0-96 0-16 0 0 16 0 80L96 416zm160 0l0-64 64 0 0 64-64 0z" />
    </Icon>
);

export default HatWitch;