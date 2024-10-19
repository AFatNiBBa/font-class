
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-left?s=duotone arrow-up-left}
 * @preview ![arrow-up-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAxNjBsNDUuMyAwTDM0Mi42IDM2MS40YzYuMiA2LjIgOS40IDE0LjQgOS40IDIyLjZzLTMuMSAxNi40LTkuNCAyMi42cy0xNC40IDkuNC0yMi42IDkuNHMtMTYuNC0zLjEtMjIuNi05LjRMOTYgMjA1LjMgOTYgMTYweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzIgMTI4YzAtMTcuNyAxNC4zLTMyIDMyLTMybDIyNCAwYzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMyTDk2IDE2MGwwIDE5MmMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMmwwLTIyNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ArrowUpLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M96 160l45.3 0L342.6 361.4c6.2 6.2 9.4 14.4 9.4 22.6s-3.1 16.4-9.4 22.6s-14.4 9.4-22.6 9.4s-16.4-3.1-22.6-9.4L96 205.3 96 160z" />
            <path d="M32 128c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 160l0 192c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-224z" />
    </Icon>
);

export default ArrowUpLeft;