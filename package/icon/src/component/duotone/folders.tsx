
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folders` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folders?s=duotone folders}
 * @preview ![folders](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDEyMEwwIDM0NGMwIDc1LjEgNjAuOSAxMzYgMTM2IDEzNmwzMjAgMGMxMy4zIDAgMjQtMTAuNyAyNC0yNHMtMTAuNy0yNC0yNC0yNGwtMzIwIDBjLTQ4LjYgMC04OC0zOS40LTg4LTg4bDAtMjI0YzAtMTMuMy0xMC43LTI0LTI0LTI0UzAgMTA2LjcgMCAxMjB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNjAgMzg0SDUxMmMzNS4zIDAgNjQtMjguNyA2NC02NFYxNjBjMC0zNS4zLTI4LjctNjQtNjQtNjRIMzk0LjVjLTE3IDAtMzMuMy02LjctNDUuMy0xOC43TDMyMi43IDUwLjdjLTEyLTEyLTI4LjMtMTguNy00NS4zLTE4LjdIMTYwYy0zNS4zIDAtNjQgMjguNy02NCA2NFYzMjBjMCAzNS4zIDI4LjcgNjQgNjQgNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Folders: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 120L0 344c0 75.1 60.9 136 136 136l320 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-320 0c-48.6 0-88-39.4-88-88l0-224c0-13.3-10.7-24-24-24S0 106.7 0 120z" />
            <path d="M160 384H512c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H394.5c-17 0-33.3-6.7-45.3-18.7L322.7 50.7c-12-12-28.3-18.7-45.3-18.7H160c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default Folders;