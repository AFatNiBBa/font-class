
import { Icon, generic } from "../../index";

/**
 * A component that renders the `turtle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turtle?s=sharp-duotone-solid turtle}
 * @preview ![turtle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyMGwwIDY0IDMyIDAgMzIgMCAwIDk2IDEyOCAwIDAtOTYgMzIgMCAwIDk2IDEyOCAwIDAtOTYgOTYgMCAzMiAwIDAtMzIgMC02NCA5NiAwIDAtODBjMC01My00My05Ni05Ni05NmwtNjQgMCAwIDgwIDAgMzIgMCA5Ni02NCAwLTEyOCAwLTMyIDBMNjQgMzIwbC0zMiAwTDAgMzIwek01MTIgMjA4YTE2IDE2IDAgMSAxIC0zMiAwIDE2IDE2IDAgMSAxIDMyIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zODQgMjg4VjIwOGMwLTk3LjItNzguOC0xNzYtMTc2LTE3NlMzMiAxMTAuOCAzMiAyMDh2ODBIMzg0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Turtle: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 320l0 64 32 0 32 0 0 96 128 0 0-96 32 0 0 96 128 0 0-96 96 0 32 0 0-32 0-64 96 0 0-80c0-53-43-96-96-96l-64 0 0 80 0 32 0 96-64 0-128 0-32 0L64 320l-32 0L0 320zM512 208a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
            <path d="M384 288V208c0-97.2-78.8-176-176-176S32 110.8 32 208v80H384z" />
    </Icon>
);

export default Turtle;