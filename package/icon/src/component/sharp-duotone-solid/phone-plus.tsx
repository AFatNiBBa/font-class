
import { Icon, generic } from "../../index";

/**
 * A component that renders the `phone-plus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-plus?s=sharp-duotone-solid phone-plus}
 * @preview ![phone-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAzMkwxNzYgMGw4MCAxNDQtODMuOCA2N2MzNi4xIDY4LjQgOTIuMyAxMjQuNiAxNjAuOCAxNjAuOEw0MDAgMjg4bDE0NCA4MEw1MTIgNTEybC0zMiAwQzIzMi42IDUxMiAzMiAzMTEuNCAzMiA2NGwwLTMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDI0IDIwMGwwIDI0IDQ4IDAgMC0yNCAwLTY0IDY0IDAgMjQgMCAwLTQ4LTI0IDAtNjQgMCAwLTY0IDAtMjRMNDI0IDBsMCAyNCAwIDY0LTY0IDAtMjQgMCAwIDQ4IDI0IDAgNjQgMCAwIDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const PhonePlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 32L176 0l80 144-83.8 67c36.1 68.4 92.3 124.6 160.8 160.8L400 288l144 80L512 512l-32 0C232.6 512 32 311.4 32 64l0-32z" />
            <path d="M424 200l0 24 48 0 0-24 0-64 64 0 24 0 0-48-24 0-64 0 0-64 0-24L424 0l0 24 0 64-64 0-24 0 0 48 24 0 64 0 0 64z" />
    </Icon>
);

export default PhonePlus;