
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wine-bottle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wine-bottle?s=sharp-duotone-solid wine-bottle}
 * @preview ![wine-bottle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik01NC43IDI3OC43Qzg5LjggMzEzLjggMTI0LjkgMzQ4LjkgMTYwIDM4NEwyODggMjU2Yy0zNS4xLTM1LjEtNzAuMS03MC4xLTEwNS4yLTEwNS4yYy0uOSAuOC0xLjcgMS42LTIuNSAyLjVMNTQuNyAyNzguN3ptMzAxLTE3OWw1Ni42IDU2LjYgMzItMzIgOS40LTkuNCAxMS45IDExLjkgNDUuMy00NS4zTDQ4OC4yIDU5IDQ1MyAyMy44IDQzMC40IDEuMSAzODUuMSA0Ni40bDExLjkgMTEuOS05LjQgOS40LTMyIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDEyLjMgMTU2LjNMMzU1LjcgOTkuN2wtMjkuOCAyOS44Yy00Ni4zLTIzLjEtMTAzLjctMTYtMTQzLjEgMjEuMkwyODggMjU2IDE2MCAzODQgNTQuNyAyNzguNyAwIDMzMy41IDE3OC41IDUxMiAzNTguNyAzMzEuOGMzOS40LTM5LjQgNDcuMy05OC40IDIzLjctMTQ1LjdsMjkuOC0yOS44eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const WineBottle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M54.7 278.7C89.8 313.8 124.9 348.9 160 384L288 256c-35.1-35.1-70.1-70.1-105.2-105.2c-.9 .8-1.7 1.6-2.5 2.5L54.7 278.7zm301-179l56.6 56.6 32-32 9.4-9.4 11.9 11.9 45.3-45.3L488.2 59 453 23.8 430.4 1.1 385.1 46.4l11.9 11.9-9.4 9.4-32 32z" />
            <path d="M412.3 156.3L355.7 99.7l-29.8 29.8c-46.3-23.1-103.7-16-143.1 21.2L288 256 160 384 54.7 278.7 0 333.5 178.5 512 358.7 331.8c39.4-39.4 47.3-98.4 23.7-145.7l29.8-29.8z" />
    </Icon>
);

export default WineBottle;