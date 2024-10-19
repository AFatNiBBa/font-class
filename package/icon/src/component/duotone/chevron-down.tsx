
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chevron-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-down?s=duotone chevron-down}
 * @preview ![chevron-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNzguNiA0MDYuNmMtMTIuNSAxMi41LTMyLjggMTIuNS00NS4zIDBsLTE5Mi0xOTJjLTEyLjUtMTIuNS0xMi41LTMyLjggMC00NS4zczMyLjgtMTIuNSA0NS4zIDBMMjU2IDMzOC43IDQyNS40IDE2OS40YzEyLjUtMTIuNSAzMi44LTEyLjUgNDUuMyAwczEyLjUgMzIuOCAwIDQ1LjNsLTE5MiAxOTJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ChevronDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M278.6 406.6c-12.5 12.5-32.8 12.5-45.3 0l-192-192c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L256 338.7 425.4 169.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-192 192z" />
    </Icon>
);

export default ChevronDown;