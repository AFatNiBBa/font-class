
import { Icon, generic } from "../../index";

/**
 * A component that renders the `salt-shaker` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/salt-shaker?s=sharp-duotone-solid salt-shaker}
 * @preview ![salt-shaker](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDUxMmw2NC41IDAgMjU1IDAgNjQuNSAwLTgtNjRMMzQ0IDE5MmwtNjQuNSAwIDMyIDI1Ni0yMzkgMCAzMi0yNTZMNDAgMTkyIDggNDQ4IDAgNTEyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzM1LjkgMTI3bDguMSA2NS02NC41IDAtMTc1IDBMNDAgMTkybDguMS02NUM1Ny4yIDU0LjUgMTE4LjkgMCAxOTIgMHMxMzQuOCA1NC41IDE0My45IDEyN3pNMTkyIDgwYTE2IDE2IDAgMSAwIDAtMzIgMTYgMTYgMCAxIDAgMCAzMnpNMTYwIDk2YTE2IDE2IDAgMSAwIC0zMiAwIDE2IDE2IDAgMSAwIDMyIDB6bTgwIDE2YTE2IDE2IDAgMSAwIDAtMzIgMTYgMTYgMCAxIDAgMCAzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const SaltShaker: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 512l64.5 0 255 0 64.5 0-8-64L344 192l-64.5 0 32 256-239 0 32-256L40 192 8 448 0 512z" />
            <path d="M335.9 127l8.1 65-64.5 0-175 0L40 192l8.1-65C57.2 54.5 118.9 0 192 0s134.8 54.5 143.9 127zM192 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM160 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm80 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default SaltShaker;