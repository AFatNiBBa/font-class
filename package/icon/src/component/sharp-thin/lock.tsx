
import { Icon } from "../../index";

/**
 * A component that renders the `lock` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock?s=sharp-thin lock}
 * @preview ![lock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTEyIDEyOGwwIDY0IDIyNCAwIDAtNjRjMC02MS45LTUwLjEtMTEyLTExMi0xMTJzLTExMiA1MC4xLTExMiAxMTJ6TTk2IDE5MmwwLTY0Qzk2IDU3LjMgMTUzLjMgMCAyMjQgMHMxMjggNTcuMyAxMjggMTI4bDAgNjQgODAgMCAxNiAwIDAgMTYgMCAyODggMCAxNi0xNiAwTDE2IDUxMiAwIDUxMmwwLTE2TDAgMjA4bDAtMTYgMTYgMCA4MCAwem0wIDE2bC04MCAwIDAgMjg4IDQxNiAwIDAtMjg4LTgwIDAtMTYgMC0yMjQgMC0xNiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Lock: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M112 128l0 64 224 0 0-64c0-61.9-50.1-112-112-112s-112 50.1-112 112zM96 192l0-64C96 57.3 153.3 0 224 0s128 57.3 128 128l0 64 80 0 16 0 0 16 0 288 0 16-16 0L16 512 0 512l0-16L0 208l0-16 16 0 80 0zm0 16l-80 0 0 288 416 0 0-288-80 0-16 0-224 0-16 0z" />
    </Icon>
);

export default Lock;