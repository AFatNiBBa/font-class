
import { Icon, generic } from "../../index";

/**
 * A component that renders the `underline` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/underline?s=sharp-duotone-solid underline}
 * @preview ![underline](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNiAzMmwwIDY0IDMyIDAgMTYgMCAwIDEyOGMwIDg4LjQgNzEuNiAxNjAgMTYwIDE2MHMxNjAtNzEuNiAxNjAtMTYwbDAtMTI4IDE2IDAgMzIgMCAwLTY0LTMyIDAtOTYgMC0zMiAwIDAgNjQgMzIgMCAxNiAwIDAgMTI4YzAgNTMtNDMgOTYtOTYgOTZzLTk2LTQzLTk2LTk2bDAtMTI4IDE2IDAgMzIgMCAwLTY0LTMyIDBMNDggMzIgMTYgMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDQxNmwzMiAwIDM4NCAwIDMyIDAgMCA2NC0zMiAwTDMyIDQ4MCAwIDQ4MGwwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Underline: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M16 32l0 64 32 0 16 0 0 128c0 88.4 71.6 160 160 160s160-71.6 160-160l0-128 16 0 32 0 0-64-32 0-96 0-32 0 0 64 32 0 16 0 0 128c0 53-43 96-96 96s-96-43-96-96l0-128 16 0 32 0 0-64-32 0L48 32 16 32z" />
            <path d="M0 416l32 0 384 0 32 0 0 64-32 0L32 480 0 480l0-64z" />
    </Icon>
);

export default Underline;