
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bolt-lightning` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bolt-lightning?s=duotone bolt-lightning}
 * @preview ![bolt-lightning](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NkwyOC41IDI4YzItMTYgMTUuNi0yOCAzMS44LTI4SDIyOC45YzE1IDAgMjcuMSAxMi4xIDI3LjEgMjcuMWMwIDMuMi0uNiA2LjUtMS43IDkuNUwyMDggMTYwSDM0Ny4zYzIwLjIgMCAzNi43IDE2LjQgMzYuNyAzNi43YzAgNy40LTIuMiAxNC42LTYuNCAyMC43bC0xOTIuMiAyODFjLTUuOSA4LjYtMTUuNiAxMy43LTI1LjkgMTMuN2gtMi45Yy0xNS43IDAtMjguNS0xMi44LTI4LjUtMjguNWMwLTIuMyAuMy00LjYgLjktNi45TDE3NiAyODhIMzJjLTE3LjcgMC0zMi0xNC4zLTMyLTMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const BoltLightning: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 256L28.5 28c2-16 15.6-28 31.8-28H228.9c15 0 27.1 12.1 27.1 27.1c0 3.2-.6 6.5-1.7 9.5L208 160H347.3c20.2 0 36.7 16.4 36.7 36.7c0 7.4-2.2 14.6-6.4 20.7l-192.2 281c-5.9 8.6-15.6 13.7-25.9 13.7h-2.9c-15.7 0-28.5-12.8-28.5-28.5c0-2.3 .3-4.6 .9-6.9L176 288H32c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default BoltLightning;