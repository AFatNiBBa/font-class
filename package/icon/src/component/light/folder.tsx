
import { Icon } from "../../index";

/**
 * A component that renders the `folder` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/folder?s=light folder}
 * @preview ![folder](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggOTZIMjcyTDIyNi43NDYgNTAuNzQ2QzIxNC43NDIgMzguNzQyIDE5OC40NjUgMzIgMTgxLjQ5IDMySDY0QzI4LjY1NCAzMiAwIDYwLjY1NCAwIDk2VjQxNkMwIDQ1MS4zNDYgMjguNjU0IDQ4MCA2NCA0ODBINDQ4QzQ4My4zNDYgNDgwIDUxMiA0NTEuMzQ2IDUxMiA0MTZWMTYwQzUxMiAxMjQuNjU0IDQ4My4zNDYgOTYgNDQ4IDk2Wk00ODAgNDE2QzQ4MCA0MzMuNjQ1IDQ2NS42NDUgNDQ4IDQ0OCA0NDhINjRDNDYuMzU1IDQ0OCAzMiA0MzMuNjQ1IDMyIDQxNlY5NkMzMiA3OC4zNTUgNDYuMzU1IDY0IDY0IDY0SDE4MS40OUMxOTAuMDM5IDY0IDE5OC4wNzQgNjcuMzI4IDIwNC4xMTcgNzMuMzc1TDI0OS4zNzMgMTE4LjYyN0wyNTguNzQ2IDEyOEg0NDhDNDY1LjY0NSAxMjggNDgwIDE0Mi4zNTUgNDgwIDE2MFY0MTZaTTQxNiAxOTJIOTZDODcuMTY0IDE5MiA4MCAxOTkuMTY0IDgwIDIwOFM4Ny4xNjQgMjI0IDk2IDIyNEg0MTZDNDI0LjgzOCAyMjQgNDMyIDIxNi44MzYgNDMyIDIwOFM0MjQuODM4IDE5MiA0MTYgMTkyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Folder: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 96H272L226.746 50.746C214.742 38.742 198.465 32 181.49 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V160C512 124.654 483.346 96 448 96ZM480 416C480 433.645 465.645 448 448 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H181.49C190.039 64 198.074 67.328 204.117 73.375L249.373 118.627L258.746 128H448C465.645 128 480 142.355 480 160V416ZM416 192H96C87.164 192 80 199.164 80 208S87.164 224 96 224H416C424.838 224 432 216.836 432 208S424.838 192 416 192Z" />
    </Icon>
);

export default Folder;