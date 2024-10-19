
import { Icon, generic } from "../../index";

/**
 * A component that renders the `whiskey-glass` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/whiskey-glass?s=sharp-duotone-solid whiskey-glass}
 * @preview ![whiskey-glass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDkuMSA5NiA2NCA0ODBsMzg0IDBMNTAyLjkgOTYgNTEyIDMybC02NC42IDBMNjQuNiAzMiAwIDMyek03My44IDk2bDM2NC40IDBjLTYuMSA0Mi43LTEyLjIgODUuMy0xOC4zIDEyOEwzOTIuNSA0MTZsLTI3MyAwYy05LjEtNjQtMTguMy0xMjgtMjcuNC0xOTJDODYgMTgxLjMgNzkuOSAxMzguNyA3My44IDk2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNOTIuMSAyMjRsMjcuNCAxOTIgMjczIDAgMjcuNC0xOTJMOTIuMSAyMjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const WhiskeyGlass: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L9.1 96 64 480l384 0L502.9 96 512 32l-64.6 0L64.6 32 0 32zM73.8 96l364.4 0c-6.1 42.7-12.2 85.3-18.3 128L392.5 416l-273 0c-9.1-64-18.3-128-27.4-192C86 181.3 79.9 138.7 73.8 96z" />
            <path d="M92.1 224l27.4 192 273 0 27.4-192L92.1 224z" />
    </Icon>
);

export default WhiskeyGlass;