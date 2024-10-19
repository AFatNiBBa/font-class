
import { Icon } from "../../index";

/**
 * A component that renders the `id-badge` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/id-badge?s=sharp-solid id-badge}
 * @preview ![id-badge](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzg0IDBMMCAwIDAgNTEybDM4NCAwTDM4NCAwek0yNzIgMzIwbDMyIDk2TDgwIDQxNmwzMi05NiAxNjAgMHpNMTI4IDIyNGE2NCA2NCAwIDEgMSAxMjggMCA2NCA2NCAwIDEgMSAtMTI4IDB6TTE0NCA2NGw5NiAwIDE2IDAgMCAzMi0xNiAwLTk2IDAtMTYgMCAwLTMyIDE2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const IdBadge: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 0L0 0 0 512l384 0L384 0zM272 320l32 96L80 416l32-96 160 0zM128 224a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM144 64l96 0 16 0 0 32-16 0-96 0-16 0 0-32 16 0z" />
    </Icon>
);

export default IdBadge;