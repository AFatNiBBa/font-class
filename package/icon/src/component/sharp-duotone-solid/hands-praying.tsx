
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hands-praying` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hands-praying?s=sharp-duotone-solid hands-praying}
 * @preview ![hands-praying](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMzYgMjA4bDAgMTEyIDAgMTEyIDI1NiA4MCA0OCAwIDAtMTQ0TDUyOCAzMjZsMC0xMDIgMC05LjQtNS03LjlMMzk1IDYuOGwtNTUgMzIuNkw0MzIgMjA4LjIgNDMyIDMyMGwtMzIgMCAwLTExMi02NCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjQ1IDYuOGwtMTI4IDIwMC01IDcuOSAwIDkuNCAwIDEwMkwwIDM2OCAwIDUxMmw0OCAwIDI1Ni04MCAwLTExMiAwLTExMi02NCAwIDAgMTEyLTMyIDAgMC0xMTEuOEwzMDAuMSAzOS4zIDI0NSA2Ljh6Ii8+PC9zdmc+|width=32|height=32)
 */
const HandsPraying: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M336 208l0 112 0 112 256 80 48 0 0-144L528 326l0-102 0-9.4-5-7.9L395 6.8l-55 32.6L432 208.2 432 320l-32 0 0-112-64 0z" />
            <path d="M245 6.8l-128 200-5 7.9 0 9.4 0 102L0 368 0 512l48 0 256-80 0-112 0-112-64 0 0 112-32 0 0-111.8L300.1 39.3 245 6.8z" />
    </Icon>
);

export default HandsPraying;