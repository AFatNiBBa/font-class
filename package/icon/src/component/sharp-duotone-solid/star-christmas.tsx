
import { Icon, generic } from "../../index";

/**
 * A component that renders the `star-christmas` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-christmas?s=sharp-duotone-solid star-christmas}
 * @preview ![star-christmas](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik01NC4xIDg4bDE3IDE3IDQ4IDQ4IDE3IDE3TDE2OS45IDEzNmwtMTctMTdMMTA1IDcxbC0xNy0xN0w1NC4xIDg4em0wIDMzNkw4OCA0NTcuOWwxNy0xNyA0OC00OCAxNy0xN0wxMzYgMzQyLjFsLTE3IDE3TDcxIDQwN2wtMTcgMTd6bTI4OC0yODhMMzc2IDE2OS45bDE3LTE3IDQ4LTQ4IDE3LTE3TDQyNCA1NC4xIDQwNyA3MWwtNDggNDgtMTcgMTd6bTAgMjQwbDE3IDE3IDQ4IDQ4IDE3IDE3TDQ1Ny45IDQyNGwtMTctMTctNDgtNDgtMTctMTdMMzQyLjEgMzc2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTkyIDMyMEwwIDI1NmwxOTItNjRMMjU2IDBsNjQgMTkyIDE5MiA2NEwzMjAgMzIwIDI1NiA1MTIgMTkyIDMyMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const StarChristmas: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M54.1 88l17 17 48 48 17 17L169.9 136l-17-17L105 71l-17-17L54.1 88zm0 336L88 457.9l17-17 48-48 17-17L136 342.1l-17 17L71 407l-17 17zm288-288L376 169.9l17-17 48-48 17-17L424 54.1 407 71l-48 48-17 17zm0 240l17 17 48 48 17 17L457.9 424l-17-17-48-48-17-17L342.1 376z" />
            <path d="M192 320L0 256l192-64L256 0l64 192 192 64L320 320 256 512 192 320z" />
    </Icon>
);

export default StarChristmas;