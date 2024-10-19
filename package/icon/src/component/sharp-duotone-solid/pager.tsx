
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pager` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pager?s=sharp-duotone-solid pager}
 * @preview ![pager](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0bDUxMiAwIDAgMzg0TDAgNDQ4IDAgNjR6TTU2IDMyMGwwIDQ4IDI0IDAgNTYgMCAyNCAwIDAtNDgtMjQgMC01NiAwLTI0IDB6bTgtMTkybDAgMTI4IDM4NCAwIDAtMTI4TDY0IDEyOHpNMTkyIDMyMGwwIDQ4IDI0IDAgNDggMCAyNCAwIDAtNDgtMjQgMC00OCAwLTI0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik02NCAxMjhINDQ4VjI1Nkg2NFYxMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const Pager: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64l512 0 0 384L0 448 0 64zM56 320l0 48 24 0 56 0 24 0 0-48-24 0-56 0-24 0zm8-192l0 128 384 0 0-128L64 128zM192 320l0 48 24 0 48 0 24 0 0-48-24 0-48 0-24 0z" />
            <path d="M64 128H448V256H64V128z" />
    </Icon>
);

export default Pager;