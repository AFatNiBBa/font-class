
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-up-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-up-left?s=sharp-duotone-solid circle-up-left}
 * @preview ![circle-up-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTE2MC05NmwxNjAgMCAyNCAyNC01MiA1MiA3NiA3Ni01NiA1Ni03Ni03Ni01MiA1Mi0yNC0yNCAwLTE2MHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE4NCAzNDRsLTI0LTI0IDAtMTYwIDE2MCAwIDI0IDI0LTUyIDUyIDc2IDc2LTU2IDU2LTc2LTc2LTUyIDUyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleUpLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm160-96l160 0 24 24-52 52 76 76-56 56-76-76-52 52-24-24 0-160z" />
            <path d="M184 344l-24-24 0-160 160 0 24 24-52 52 76 76-56 56-76-76-52 52z" />
    </Icon>
);

export default CircleUpLeft;