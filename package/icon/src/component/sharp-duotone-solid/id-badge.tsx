
import { Icon, generic } from "../../index";

/**
 * A component that renders the `id-badge` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/id-badge?s=sharp-duotone-solid id-badge}
 * @preview ![id-badge](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMCA1MTJsMzg0IDBMMzg0IDAgMCAwek04MCA0MTZsMzItOTYgMTYwIDAgMzIgOTZMODAgNDE2ek0xMjggNjRsMTYgMCA5NiAwIDE2IDAgMCAzMi0xNiAwLTk2IDAtMTYgMCAwLTMyek0yNTYgMjI0YTY0IDY0IDAgMSAxIC0xMjggMCA2NCA2NCAwIDEgMSAxMjggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE5MiAxNjBhNjQgNjQgMCAxIDEgMCAxMjggNjQgNjQgMCAxIDEgMC0xMjh6TTgwIDQxNmwzMi05NiAxNjAgMCAzMiA5Nkw4MCA0MTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const IdBadge: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 512l384 0L384 0 0 0zM80 416l32-96 160 0 32 96L80 416zM128 64l16 0 96 0 16 0 0 32-16 0-96 0-16 0 0-32zM256 224a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
            <path d="M192 160a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM80 416l32-96 160 0 32 96L80 416z" />
    </Icon>
);

export default IdBadge;