
import { Icon, generic } from "../../index";

/**
 * A component that renders the `download` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/download?s=sharp-duotone-solid download}
 * @preview ![download](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM1MkwwIDUxMmw1MTIgMCAwLTE2MC0xNzguNyAwLTU0LjYgNTQuNkwyNTYgNDI5LjNsLTIyLjYtMjIuNmMtMTguMi0xOC4yLTM2LjQtMzYuNC01NC42LTU0LjZMMCAzNTJ6bTQ1NiA4MGEyNCAyNCAwIDEgMSAtNDggMCAyNCAyNCAwIDEgMSA0OCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjg4IDBsMCAzMiAwIDI3NC43IDczLjQtNzMuNEwzODQgMjEwLjcgNDI5LjMgMjU2bC0yMi42IDIyLjYtMTI4IDEyOEwyNTYgNDI5LjNsLTIyLjYtMjIuNi0xMjgtMTI4TDgyLjcgMjU2IDEyOCAyMTAuN2wyMi42IDIyLjZMMjI0IDMwNi43IDIyNCAzMmwwLTMyIDY0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Download: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 352L0 512l512 0 0-160-178.7 0-54.6 54.6L256 429.3l-22.6-22.6c-18.2-18.2-36.4-36.4-54.6-54.6L0 352zm456 80a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
            <path d="M288 0l0 32 0 274.7 73.4-73.4L384 210.7 429.3 256l-22.6 22.6-128 128L256 429.3l-22.6-22.6-128-128L82.7 256 128 210.7l22.6 22.6L224 306.7 224 32l0-32 64 0z" />
    </Icon>
);

export default Download;