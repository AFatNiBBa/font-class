
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `folder-tree` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/folder-tree?s=solid folder-tree}
 * @preview ![folder-tree](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NDQgMzJINDMyTDQwMCAwSDMyMEMzMDIuMzc1IDAgMjg4IDE0LjM3NSAyODggMzJWMTkyQzI4OCAyMDkuNjI1IDMwMi4zNzUgMjI0IDMyMCAyMjRINTQ0QzU2MS42MjUgMjI0IDU3NiAyMDkuNjI1IDU3NiAxOTJWNjRDNTc2IDQ2LjM3NSA1NjEuNjI1IDMyIDU0NCAzMlpNNTQ0IDMyMEg0MzJMNDAwIDI4OEgzMjBDMzAyLjM3NSAyODggMjg4IDMwMi4zNzUgMjg4IDMyMFY0ODBDMjg4IDQ5Ny42MjUgMzAyLjM3NSA1MTIgMzIwIDUxMkg1NDRDNTYxLjYyNSA1MTIgNTc2IDQ5Ny42MjUgNTc2IDQ4MFYzNTJDNTc2IDMzNC4zNzUgNTYxLjYyNSAzMjAgNTQ0IDMyMFpNNjQgMTZDNjQgNy4xMjUgNTYuODc1IDAgNDggMEgxNkM3LjEyNSAwIDAgNy4xMjUgMCAxNlY0MTZDMCA0MzMuNjI1IDE0LjM3NSA0NDggMzIgNDQ4SDI1NlYzODRINjRWMTYwSDI1NlY5Nkg2NFYxNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FolderTree(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M544 32H432L400 0H320C302.375 0 288 14.375 288 32V192C288 209.625 302.375 224 320 224H544C561.625 224 576 209.625 576 192V64C576 46.375 561.625 32 544 32ZM544 320H432L400 288H320C302.375 288 288 302.375 288 320V480C288 497.625 302.375 512 320 512H544C561.625 512 576 497.625 576 480V352C576 334.375 561.625 320 544 320ZM64 16C64 7.125 56.875 0 48 0H16C7.125 0 0 7.125 0 16V416C0 433.625 14.375 448 32 448H256V384H64V160H256V96H64V16Z" />
        </Icon>
    </>
}