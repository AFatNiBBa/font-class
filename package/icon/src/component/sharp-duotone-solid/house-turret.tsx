
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-turret` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-turret?s=sharp-duotone-solid house-turret}
 * @preview ![house-turret](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMOTYgMGwwIDk2IDMyIDAgMC05NiA5NiAwIDAgOTYgMzIgMCAwLTk2IDk2IDAgMCA5NiAwIDMyIDAgNi4zTDIzNS41IDIzMS40IDIyNCAyNDFsMCAxNSAwIDI1Nkw2NCA1MTJsMC0yMjRMMCAyMjRsMC05NkwwIDk2IDAgMHpNMTM2IDE2OGwwIDQwIDgwIDAgMC00MGMwLTIyLjEtMTcuOS00MC00MC00MHMtNDAgMTcuOS00MCA0MHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiA1MTJsMC0yNTZMNDQ4IDk2IDY0MCAyNTZsMCAyNTYtMzg0IDB6TTQ5NiAzNjhsMC05Ni05NiAwIDAgOTYgOTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const HouseTurret: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L96 0l0 96 32 0 0-96 96 0 0 96 32 0 0-96 96 0 0 96 0 32 0 6.3L235.5 231.4 224 241l0 15 0 256L64 512l0-224L0 224l0-96L0 96 0 0zM136 168l0 40 80 0 0-40c0-22.1-17.9-40-40-40s-40 17.9-40 40z" />
            <path d="M256 512l0-256L448 96 640 256l0 256-384 0zM496 368l0-96-96 0 0 96 96 0z" />
    </Icon>
);

export default HouseTurret;