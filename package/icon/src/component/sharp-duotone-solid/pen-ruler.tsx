
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-ruler` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-ruler?s=sharp-duotone-solid pen-ruler}
 * @preview ![pen-ruler](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDEyOEwxMDUuNCAyMzMuNGwxMjgtMTI4TDE5NS4zIDY3LjNsLTU2IDU2TDEyOCAxMzQuNiAxMDUuNCAxMTJsMTEuMy0xMS4zIDU2LTU2TDEyOCAwIDAgMTI4ek0yNzguNiA0MDYuNkwzODQgNTEyIDUxMiAzODRsLTQ0LjctNDQuNy01NiA1Nkw0MDAgNDA2LjYgMzc3LjQgMzg0bDExLjMtMTEuMyA1Ni01Ni0zOC4xLTM4LjEtMTI4IDEyOHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgNTEyTDMyIDM1MiAyOTIuNyA5MS4zbDEyOCAxMjhMMTYwIDQ4MCAwIDUxMnpNNDQzLjMgMTk2LjdsLTEyOC0xMjhMMzg0IDAgNTEyIDEyOGwtNjguNyA2OC43eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const PenRuler: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 128L105.4 233.4l128-128L195.3 67.3l-56 56L128 134.6 105.4 112l11.3-11.3 56-56L128 0 0 128zM278.6 406.6L384 512 512 384l-44.7-44.7-56 56L400 406.6 377.4 384l11.3-11.3 56-56-38.1-38.1-128 128z" />
            <path d="M0 512L32 352 292.7 91.3l128 128L160 480 0 512zM443.3 196.7l-128-128L384 0 512 128l-68.7 68.7z" />
    </Icon>
);

export default PenRuler;