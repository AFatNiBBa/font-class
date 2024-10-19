
import { Icon, generic } from "../../index";

/**
 * A component that renders the `address-book` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/address-book?s=sharp-duotone-solid address-book}
 * @preview ![address-book](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAwTDQ0OCAwbDAgNTEyTDMyIDUxMiAzMiAwem05NiAzODRsMjI0IDAtMzItOTYtMTYwIDAtMzIgOTZ6bTQ4LTE5MmE2NCA2NCAwIDEgMCAxMjggMCA2NCA2NCAwIDEgMCAtMTI4IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik01MTIgNjRsLTMyIDAgMCAxNiAwIDY0IDAgMTYgMzIgMCAwLTE2IDAtNjQgMC0xNnptMCAxMjhsLTMyIDAgMCAxNiAwIDY0IDAgMTYgMzIgMCAwLTE2IDAtNjQgMC0xNnptMCAxNDRsMC0xNi0zMiAwIDAgMTYgMCA2NCAwIDE2IDMyIDAgMC0xNiAwLTY0ek0zMjAgMjg4bC0xNjAgMC0zMiA5NiAyMjQgMC0zMi05NnptLTgwLTMyYTY0IDY0IDAgMSAwIDAtMTI4IDY0IDY0IDAgMSAwIDAgMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const AddressBook: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 0L448 0l0 512L32 512 32 0zm96 384l224 0-32-96-160 0-32 96zm48-192a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
            <path d="M512 64l-32 0 0 16 0 64 0 16 32 0 0-16 0-64 0-16zm0 128l-32 0 0 16 0 64 0 16 32 0 0-16 0-64 0-16zm0 144l0-16-32 0 0 16 0 64 0 16 32 0 0-16 0-64zM320 288l-160 0-32 96 224 0-32-96zm-80-32a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default AddressBook;