
import { Icon, generic } from "../../index";

/**
 * A component that renders the `helicopter` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/helicopter?s=sharp-duotone-solid helicopter}
 * @preview ![helicopter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMGwwIDY0IDE5MiAwIDAgNjQgNjQgMCAwLTY0IDE5MiAwIDAtNjRMMTI4IDB6bTk2IDQ0OGwwIDY0IDM4NCAwIDMyIDAgMC0zMiAwLTY0LTY0IDAgMCAzMi0zNTIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NCAzODRsLTk2IDBMMTkyIDI1NiAzMiAxOTIgMCA2NGw2NCAwIDQ4IDY0IDI3MiAwIDMyIDBjODguNCAwIDE2MCA3MS42IDE2MCAxNjBsMCA2NCAwIDMyLTMyIDAtMTYwIDB6bTAtNjRsMTI4IDAgMC0zMmMwLTUzLTQzLTk2LTk2LTk2bC0zMiAwIDAgMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Helicopter: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 0l0 64 192 0 0 64 64 0 0-64 192 0 0-64L128 0zm96 448l0 64 384 0 32 0 0-32 0-64-64 0 0 32-352 0z" />
            <path d="M384 384l-96 0L192 256 32 192 0 64l64 0 48 64 272 0 32 0c88.4 0 160 71.6 160 160l0 64 0 32-32 0-160 0zm0-64l128 0 0-32c0-53-43-96-96-96l-32 0 0 128z" />
    </Icon>
);

export default Helicopter;