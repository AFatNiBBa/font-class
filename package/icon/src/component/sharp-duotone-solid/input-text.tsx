
import { Icon, generic } from "../../index";

/**
 * A component that renders the `input-text` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/input-text?s=sharp-duotone-solid input-text}
 * @preview ![input-text](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0bDAgNjRMMCAzODRsMCA2NCA2NCAwIDUxMiAwIDY0IDAgMC02NCAwLTI1NiAwLTY0LTY0IDBMNjQgNjQgMCA2NHptNjQgNjRsNTEyIDAgMCAyNTZMNjQgMzg0bDAtMjU2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTk1LjQgMTYwbC0zOC45IDAtMi44IDcuMS03MiAxODAtMiA0LjkgNTEuNyAwIDkuNi0yNCA2OS45IDAgOS42IDI0IDUxLjcgMC0yLTQuOS03Mi0xODAtMi44LTcuMXptLTMuNyAxMjBsLTMxLjUgMEwxNzYgMjQwLjYgMTkxLjggMjgwek0yODggMTYwbDAgMjQgMCA4IDAgNjQgMCA2NCAwIDggMCAyNCAyNCAwIDY4IDBjMzMuMSAwIDYwLTI2LjkgNjAtNjBjMC0xOC42LTguNS0zNS4zLTIxLjgtNDYuM2MzLjctNy44IDUuOC0xNi41IDUuOC0yNS43YzAtMzMuMS0yNi45LTYwLTYwLTYwbC01MiAwLTI0IDB6bTg4IDYwYzAgNi42LTUuNCAxMi0xMiAxMmwtMjggMCAwLTI0IDI4IDBjNi42IDAgMTIgNS40IDEyIDEyem00IDg0bC00NCAwIDAtMjQgMjggMCAxNiAwYzYuNiAwIDEyIDUuNCAxMiAxMnMtNS40IDEyLTEyIDEyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const InputText: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64l0 64L0 384l0 64 64 0 512 0 64 0 0-64 0-256 0-64-64 0L64 64 0 64zm64 64l512 0 0 256L64 384l0-256z" />
            <path d="M195.4 160l-38.9 0-2.8 7.1-72 180-2 4.9 51.7 0 9.6-24 69.9 0 9.6 24 51.7 0-2-4.9-72-180-2.8-7.1zm-3.7 120l-31.5 0L176 240.6 191.8 280zM288 160l0 24 0 8 0 64 0 64 0 8 0 24 24 0 68 0c33.1 0 60-26.9 60-60c0-18.6-8.5-35.3-21.8-46.3c3.7-7.8 5.8-16.5 5.8-25.7c0-33.1-26.9-60-60-60l-52 0-24 0zm88 60c0 6.6-5.4 12-12 12l-28 0 0-24 28 0c6.6 0 12 5.4 12 12zm4 84l-44 0 0-24 28 0 16 0c6.6 0 12 5.4 12 12s-5.4 12-12 12z" />
    </Icon>
);

export default InputText;