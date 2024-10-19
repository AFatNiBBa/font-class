
import { Icon } from "../../index";

/**
 * A component that renders the `pager` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pager?s=sharp-solid pager}
 * @preview ![pager](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA2NGw1MTIgMCAwIDM4NEwwIDQ0OCAwIDY0em02NCA2NGwwIDEyOCAzODQgMCAwLTEyOEw2NCAxMjh6TTgwIDMyMGwtMjQgMCAwIDQ4IDI0IDAgNTYgMCAyNCAwIDAtNDgtMjQgMC01NiAwem0xMzYgMGwtMjQgMCAwIDQ4IDI0IDAgNDggMCAyNCAwIDAtNDgtMjQgMC00OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Pager: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 64l512 0 0 384L0 448 0 64zm64 64l0 128 384 0 0-128L64 128zM80 320l-24 0 0 48 24 0 56 0 24 0 0-48-24 0-56 0zm136 0l-24 0 0 48 24 0 48 0 24 0 0-48-24 0-48 0z" />
    </Icon>
);

export default Pager;