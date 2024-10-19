
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-middle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-middle?s=sharp-duotone-solid comment-middle}
 * @preview ![comment-middle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMjAuMSA0MDkuNEM0MzAuNSAzODYuMyA1MTIgMzA0LjkgNTEyIDIwOEM1MTIgOTMuMSAzOTcuNCAwIDI1NiAwUzAgOTMuMSAwIDIwOGMwIDk2LjkgODEuNSAxNzguMyAxOTEuOSAyMDEuNEwyNTYgNTEybDY0LjEtMTAyLjZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CommentMiddle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M320.1 409.4C430.5 386.3 512 304.9 512 208C512 93.1 397.4 0 256 0S0 93.1 0 208c0 96.9 81.5 178.3 191.9 201.4L256 512l64.1-102.6z" />
    </Icon>
);

export default CommentMiddle;