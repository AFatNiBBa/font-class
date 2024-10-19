
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-parking` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-parking?s=sharp-duotone-solid circle-parking}
 * @preview ![circle-parking](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTQ0OCAwQTE5MiAxOTIgMCAxIDEgNjQgMjU2YTE5MiAxOTIgMCAxIDEgMzg0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNzYgMTI4bDMyIDAgODAgMGM1MyAwIDk2IDQzIDk2IDk2cy00MyA5Ni05NiA5NmwtNDggMCAwIDMyIDAgMzItNjQgMCAwLTMyIDAtNjQgMC0xMjggMC0zMnptNjQgMTI4bDQ4IDBjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJsLTQ4IDAgMCA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleParking: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm448 0A192 192 0 1 1 64 256a192 192 0 1 1 384 0z" />
            <path d="M176 128l32 0 80 0c53 0 96 43 96 96s-43 96-96 96l-48 0 0 32 0 32-64 0 0-32 0-64 0-128 0-32zm64 128l48 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-48 0 0 64z" />
    </Icon>
);

export default CircleParking;