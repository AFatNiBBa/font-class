
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-quarter` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-quarter?s=sharp-duotone-solid circle-quarter}
 * @preview ![circle-quarter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NkMwIDM5Ny40IDExNC42IDUxMiAyNTYgNTEyczI1Ni0xMTQuNiAyNTYtMjU2UzM5Ny40IDAgMjU2IDBsMCAyNTZMMCAyNTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDI1NkMwIDExNC42IDExNC42IDAgMjU2IDBWMjU2SDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleQuarter: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0l0 256L0 256z" />
            <path d="M0 256C0 114.6 114.6 0 256 0V256H0z" />
    </Icon>
);

export default CircleQuarter;