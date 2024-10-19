
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-circle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-circle?s=sharp-duotone-solid pen-circle}
 * @preview ![pen-circle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTEyOCAzODRsMTYtOTZMMjUyLjcgMTc5LjNsODAgODBMMjI0IDM2OGwtOTYgMTZ6TTI3NS4zIDE1Ni43TDMyMCAxMTJsODAgODAtNDQuNyA0NC43LTgwLTgweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTI4IDM4NGwxNi05NkwyNTIuNyAxNzkuM2w4MCA4MEwyMjQgMzY4bC05NiAxNnpNMzU1LjMgMjM2LjdsLTgwLTgwTDMyMCAxMTJsODAgODAtNDQuNyA0NC43eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const PenCircle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM128 384l16-96L252.7 179.3l80 80L224 368l-96 16zM275.3 156.7L320 112l80 80-44.7 44.7-80-80z" />
            <path d="M128 384l16-96L252.7 179.3l80 80L224 368l-96 16zM355.3 236.7l-80-80L320 112l80 80-44.7 44.7z" />
    </Icon>
);

export default PenCircle;