
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comet?s=sharp-duotone-solid comet}
 * @preview ![comet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMwOUMwIDQyMS4xIDkwLjkgNTEyIDIwMyA1MTJjNzIuNCAwIDEzOS40LTM4LjYgMTc1LjctMTAxLjNMNDk2IDIwOGwtNTkuOSA0LjZMNTEyIDAgMjk5LjQgNzUuOSAzMDQgMTYgMTAxLjMgMTMzLjRDMzguNiAxNjkuNyAwIDIzNi42IDAgMzA5em02NC0yMC42bDg4LjQtMTIuNyAzOS42LTc5IDM5LjYgNzlMMzIwIDI4OC41IDI1NiAzNTBsMTUuMSA4Ni44LTc5LjEtNDEtNzkuMSA0MUwxMjggMzUwIDY0IDI4OC41eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTkyIDE5Ni44bDM5LjYgNzlMMzIwIDI4OC41IDI1NiAzNTBsMTUuMSA4Ni44LTc5LjEtNDEtNzkuMSA0MUwxMjggMzUwIDY0IDI4OC41bDg4LjQtMTIuNyAzOS42LTc5eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Comet: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 309C0 421.1 90.9 512 203 512c72.4 0 139.4-38.6 175.7-101.3L496 208l-59.9 4.6L512 0 299.4 75.9 304 16 101.3 133.4C38.6 169.7 0 236.6 0 309zm64-20.6l88.4-12.7 39.6-79 39.6 79L320 288.5 256 350l15.1 86.8-79.1-41-79.1 41L128 350 64 288.5z" />
            <path d="M192 196.8l39.6 79L320 288.5 256 350l15.1 86.8-79.1-41-79.1 41L128 350 64 288.5l88.4-12.7 39.6-79z" />
    </Icon>
);

export default Comet;