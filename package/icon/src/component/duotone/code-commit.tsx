
import { Icon, generic } from "../../index";

/**
 * A component that renders the `code-commit` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-commit?s=duotone code-commit}
 * @preview ![code-commit](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmMwIDE3LjcgMTQuMyAzMiAzMiAzMmwxMzEuMiAwYy0yLjEtMTAuMy0zLjItMjEtMy4yLTMyYzAtMS40IDAtMi43IC4xLTQuMXMuMS0yLjcgLjItNC4xYy4xLTIuNyAuMy01LjQgLjYtOC4xYy41LTUuMyAxLjMtMTAuNiAyLjQtMTUuOEwzMiAyMjRjLTE3LjcgMC0zMiAxNC4zLTMyIDMyem00NzYuOC0zMmMyLjEgMTAuMyAzLjIgMjEgMy4yIDMyYzAgMS40IDAgMi43LS4xIDQuMXMtLjEgMi43LS4yIDQuMWMtLjEgMi43LS4zIDUuNC0uNiA4LjFjLS41IDUuMy0xLjMgMTAuNi0yLjQgMTUuOEw2MDggMjg4YzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMybC0xMzEuMiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzIwIDE3NmE4MCA4MCAwIDEgMSAwIDE2MCA4MCA4MCAwIDEgMSAwLTE2MHptMCAyNDBhMTYwIDE2MCAwIDEgMCAwLTMyMCAxNjAgMTYwIDAgMSAwIDAgMzIweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CodeCommit: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 256c0 17.7 14.3 32 32 32l131.2 0c-2.1-10.3-3.2-21-3.2-32c0-1.4 0-2.7 .1-4.1s.1-2.7 .2-4.1c.1-2.7 .3-5.4 .6-8.1c.5-5.3 1.3-10.6 2.4-15.8L32 224c-17.7 0-32 14.3-32 32zm476.8-32c2.1 10.3 3.2 21 3.2 32c0 1.4 0 2.7-.1 4.1s-.1 2.7-.2 4.1c-.1 2.7-.3 5.4-.6 8.1c-.5 5.3-1.3 10.6-2.4 15.8L608 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-131.2 0z" />
            <path d="M320 176a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 240a160 160 0 1 0 0-320 160 160 0 1 0 0 320z" />
    </Icon>
);

export default CodeCommit;