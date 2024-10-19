
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ice-cream` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ice-cream?s=sharp-duotone-solid ice-cream}
 * @preview ![ice-cream](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAyMDhsMCA0OCA0OCAwIDUzLjUgMCAxODEgMCA1My41IDAgNDggMCAwLTQ4YzAtMjYuNS0yMS41LTQ4LTQ4LTQ4bC0uOSAwYy42LTUuMyAuOS0xMC42IC45LTE2QzM2OCA2NC41IDMwMy41IDAgMjI0IDBTODAgNjQuNSA4MCAxNDRjMCA1LjQgLjMgMTAuNyAuOSAxNmwtLjkgMGMtMjYuNSAwLTQ4IDIxLjUtNDggNDh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMjQgNTEyTDgwIDI1NkgzNjhMMjI0IDUxMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const IceCream: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 208l0 48 48 0 53.5 0 181 0 53.5 0 48 0 0-48c0-26.5-21.5-48-48-48l-.9 0c.6-5.3 .9-10.6 .9-16C368 64.5 303.5 0 224 0S80 64.5 80 144c0 5.4 .3 10.7 .9 16l-.9 0c-26.5 0-48 21.5-48 48z" />
            <path d="M224 512L80 256H368L224 512z" />
    </Icon>
);

export default IceCream;