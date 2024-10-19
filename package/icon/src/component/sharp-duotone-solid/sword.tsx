
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sword` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sword?s=sharp-duotone-solid sword}
 * @preview ![sword](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNDQgMjcyTDQwMCAxNiA1MTIgMCA0OTYgMTEyIDI0MCAzNjhsLTk2LTk2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNOTYgNTEyTDAgNDE2bDMyLTMyIDMyIDE2IDU2LTU2TDY0IDI1NmwzMi0zMkwyODggNDE2bC0zMiAzMi04OC01Ni01NiA1NiAxNiAzMkw5NiA1MTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Sword: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M144 272L400 16 512 0 496 112 240 368l-96-96z" />
            <path d="M96 512L0 416l32-32 32 16 56-56L64 256l32-32L288 416l-32 32-88-56-56 56 16 32L96 512z" />
    </Icon>
);

export default Sword;