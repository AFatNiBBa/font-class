
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lines-leaning` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lines-leaning?s=sharp-duotone-solid lines-leaning}
 * @preview ![lines-leaning](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0tLjEgNDY5TDYxIDQ4OC4xbDkuNS0zMC41IDEyMC0zODRMMjAwLjEgNDMgMTM5IDIzLjlsLTkuNSAzMC41LTEyMCAzODRMLS4xIDQ2OXpNMzIwIDMybDAgMzIgMCAzODQgMCAzMiA2NCAwIDAtMzIgMC0zODQgMC0zMi02NCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjkyLjggMzcuN2wtNS4zIDMxLjYtNjQgMzg0LTUuMyAzMS42LTYzLjEtMTAuNSA1LjMtMzEuNiA2NC0zODQgNS4zLTMxLjYgNjMuMSAxMC41eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const LinesLeaning: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M-.1 469L61 488.1l9.5-30.5 120-384L200.1 43 139 23.9l-9.5 30.5-120 384L-.1 469zM320 32l0 32 0 384 0 32 64 0 0-32 0-384 0-32-64 0z" />
            <path d="M292.8 37.7l-5.3 31.6-64 384-5.3 31.6-63.1-10.5 5.3-31.6 64-384 5.3-31.6 63.1 10.5z" />
    </Icon>
);

export default LinesLeaning;