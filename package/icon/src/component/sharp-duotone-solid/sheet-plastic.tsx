
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sheet-plastic` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sheet-plastic?s=sharp-duotone-solid sheet-plastic}
 * @preview ![sheet-plastic](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMCA1MTJsMjI0IDAgMC0xNjAgMTYwIDBMMzg0IDAgMCAwek00MS40IDE2MGwxMS4zLTExLjMgOTYtOTZMMTYwIDQxLjQgMTgyLjYgNjQgMTcxLjMgNzUuM2wtOTYgOTZMNjQgMTgyLjYgNDEuNCAxNjB6bTMyIDk2bDExLjMtMTEuMyAxNjAtMTYwTDI1NiA3My40IDI3OC42IDk2bC0xMS4zIDExLjMtMTYwIDE2MEw5NiAyNzguNiA3My40IDI1NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIyNCA1MTJMMzg0IDM1MkgyMjRWNTEyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SheetPlastic: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 512l224 0 0-160 160 0L384 0 0 0zM41.4 160l11.3-11.3 96-96L160 41.4 182.6 64 171.3 75.3l-96 96L64 182.6 41.4 160zm32 96l11.3-11.3 160-160L256 73.4 278.6 96l-11.3 11.3-160 160L96 278.6 73.4 256z" />
            <path d="M224 512L384 352H224V512z" />
    </Icon>
);

export default SheetPlastic;