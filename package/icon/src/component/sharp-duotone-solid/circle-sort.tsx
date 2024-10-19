
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-sort` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-sort?s=sharp-duotone-solid circle-sort}
 * @preview ![circle-sort](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTE0NC02NEwyNTYgOTZsMTEyIDk2IDAgMzItMjI0IDAgMC0zMnptMCA5NmwyMjQgMCAwIDMyTDI1NiA0MTYgMTQ0IDMyMGwwLTMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU2IDk2TDE0NCAxOTJsMCAzMiAyMjQgMCAwLTMyTDI1NiA5NnptMCAzMjBsMTEyLTk2IDAtMzItMjI0IDAgMCAzMiAxMTIgOTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleSort: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm144-64L256 96l112 96 0 32-224 0 0-32zm0 96l224 0 0 32L256 416 144 320l0-32z" />
            <path d="M256 96L144 192l0 32 224 0 0-32L256 96zm0 320l112-96 0-32-224 0 0 32 112 96z" />
    </Icon>
);

export default CircleSort;