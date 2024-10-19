
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-phone` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-phone?s=sharp-duotone-solid circle-phone}
 * @preview ![circle-phone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTEyOCAxNDRsNzItMTYgNDAgNzItNDEuOSAzMy41YzE4LjEgMzQuMiA0Ni4yIDYyLjMgODAuNCA4MC40TDMxMiAyNzJsNzIgNDAtMTYgNzItMTYgMGMtMTIzLjcgMC0yMjQtMTAwLjMtMjI0LTIyNGwwLTE2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTI4IDE0NGw3Mi0xNiA0MCA3Mi00MS45IDMzLjVjMTguMSAzNC4yIDQ2LjIgNjIuMyA4MC40IDgwLjRMMzEyIDI3Mmw3MiA0MC0xNiA3MkgzNTJjLTEyMy43IDAtMjI0LTEwMC4zLTIyNC0yMjRsMC0xNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const CirclePhone: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM128 144l72-16 40 72-41.9 33.5c18.1 34.2 46.2 62.3 80.4 80.4L312 272l72 40-16 72-16 0c-123.7 0-224-100.3-224-224l0-16z" />
            <path d="M128 144l72-16 40 72-41.9 33.5c18.1 34.2 46.2 62.3 80.4 80.4L312 272l72 40-16 72H352c-123.7 0-224-100.3-224-224l0-16z" />
    </Icon>
);

export default CirclePhone;