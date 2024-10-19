
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-turn-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-left?s=sharp-duotone-solid arrow-turn-left}
 * @preview ![arrow-turn-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05MC41IDIyNGwzMi0zMiAzNTQuNyAwIDMyIDAgMCAzMiAwIDIyNCAwIDMyLTY0IDAgMC0zMiAwLTE5Mi0zMjIuNyAwYy0xMC43LTEwLjctMjEuMy0yMS4zLTMyLTMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTczLjMgMzk3LjNsLTIyLjYtMjIuNi0xMjgtMTI4TDAgMjI0bDIyLjYtMjIuNiAxMjgtMTI4IDIyLjYtMjIuNkwyMTguNSA5NmwtMjIuNiAyMi42TDkwLjUgMjI0IDE5NS45IDMyOS40IDIxOC41IDM1MmwtNDUuMyA0NS4zeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ArrowTurnLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M90.5 224l32-32 354.7 0 32 0 0 32 0 224 0 32-64 0 0-32 0-192-322.7 0c-10.7-10.7-21.3-21.3-32-32z" />
            <path d="M173.3 397.3l-22.6-22.6-128-128L0 224l22.6-22.6 128-128 22.6-22.6L218.5 96l-22.6 22.6L90.5 224 195.9 329.4 218.5 352l-45.3 45.3z" />
    </Icon>
);

export default ArrowTurnLeft;