
import { Icon, generic } from "../../index";

/**
 * A component that renders the `forklift` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forklift?s=sharp-duotone-solid forklift}
 * @preview ![forklift](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQzMmE4MCA4MCAwIDEgMCAxNjAgMEE4MCA4MCAwIDEgMCAwIDQzMnptMjU2IDBhODAgODAgMCAxIDAgMTYwIDAgODAgODAgMCAxIDAgLTE2MCAwek00ODAgMGwwIDMyIDAgMzg0IDAgMzIgMzIgMCA5NiAwIDMyIDAgMC02NC0zMiAwLTY0IDAgMC0zNTIgMC0zMkw0ODAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTEyOCAwTDk2IDBsMCAzMiAwIDEyOEwwIDE2MCAwIDM1My42QzIwLjMgMzMyLjkgNDguNyAzMjAgODAgMzIwYzU2LjQgMCAxMDMuMSA0MS43IDExMC45IDk2bDM0LjMgMGM3LjgtNTQuMyA1NC40LTk2IDExMC45LTk2YzMxLjMgMCA1OS43IDEyLjkgODAgMzMuNmwwLTk3LjYgMC01LjUtMS45LTUuMi04MC0yMjRMMzI2LjYgMCAzMDQgMCAxMjggMHpNMjgxLjQgNjRMMzUwIDI1NmwtOTQgMC05Ni05NiAwLTk2IDEyMS40IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Forklift: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 432a80 80 0 1 0 160 0A80 80 0 1 0 0 432zm256 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0zM480 0l0 32 0 384 0 32 32 0 96 0 32 0 0-64-32 0-64 0 0-352 0-32L480 0z" />
            <path d="M128 0L96 0l0 32 0 128L0 160 0 353.6C20.3 332.9 48.7 320 80 320c56.4 0 103.1 41.7 110.9 96l34.3 0c7.8-54.3 54.4-96 110.9-96c31.3 0 59.7 12.9 80 33.6l0-97.6 0-5.5-1.9-5.2-80-224L326.6 0 304 0 128 0zM281.4 64L350 256l-94 0-96-96 0-96 121.4 0z" />
    </Icon>
);

export default Forklift;