
import { Icon, generic } from "../../index";

/**
 * A component that renders the `i-cursor` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/i-cursor?s=sharp-duotone-solid i-cursor}
 * @preview ![i-cursor](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAyMjRsMCA2NCAzMiAwIDMyIDAgMC02NC0zMiAwLTMyIDB6bTEyOCAwbDAgNjQgMzIgMCAzMiAwIDAtNjQtMzIgMC0zMiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzIgMEwwIDAgMCA2NGwzMiAwYzM1LjMgMCA2NCAyOC43IDY0IDY0bDAgMjU2YzAgMzUuMy0yOC43IDY0LTY0IDY0TDAgNDQ4bDAgNjQgMzIgMGMzOC4yIDAgNzIuNS0xNi44IDk2LTQzLjNjMjMuNSAyNi42IDU3LjggNDMuMyA5NiA0My4zbDMyIDAgMC02NC0zMiAwYy0zNS4zIDAtNjQtMjguNy02NC02NGwwLTI1NmMwLTM1LjMgMjguNy02NCA2NC02NGwzMiAwIDAtNjRMMjI0IDBjLTM4LjIgMC03Mi41IDE2LjgtOTYgNDMuM0MxMDQuNSAxNi44IDcwLjIgMCAzMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ICursor: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M32 224l0 64 32 0 32 0 0-64-32 0-32 0zm128 0l0 64 32 0 32 0 0-64-32 0-32 0z" />
            <path d="M32 0L0 0 0 64l32 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L0 448l0 64 32 0c38.2 0 72.5-16.8 96-43.3c23.5 26.6 57.8 43.3 96 43.3l32 0 0-64-32 0c-35.3 0-64-28.7-64-64l0-256c0-35.3 28.7-64 64-64l32 0 0-64L224 0c-38.2 0-72.5 16.8-96 43.3C104.5 16.8 70.2 0 32 0z" />
    </Icon>
);

export default ICursor;