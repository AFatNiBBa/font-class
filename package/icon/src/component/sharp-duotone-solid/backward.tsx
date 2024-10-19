
import { Icon, generic } from "../../index";

/**
 * A component that renders the `backward` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backward?s=sharp-duotone-solid backward}
 * @preview ![backward](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgMjU2TDUxMiA0NDhsMC0zODRMMjU2IDI1NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiA2NFY0NDhMMCAyNTYgMjU2IDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Backward: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 256L512 448l0-384L256 256z" />
            <path d="M256 64V448L0 256 256 64z" />
    </Icon>
);

export default Backward;