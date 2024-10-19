
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cup-straw` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cup-straw?s=sharp-duotone-solid cup-straw}
 * @preview ![cup-straw](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAxOTJsMzIwIDBMMzIwIDUxMiA2NCA1MTIgMzIgMTkyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjI0IDBMMjA1IDBsLTQuNCAxOC41TDE3NC45IDEyOCAzMiAxMjggMCAxMjhsMCA2NCAzMiAwIDMyMCAwIDMyIDAgMC02NC0zMiAwLTEyNy44IDBMMjQzIDQ4bDM3IDAgMjQgMCAwLTQ4TDI4MCAwIDIyNCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CupStraw: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 192l320 0L320 512 64 512 32 192z" />
            <path d="M224 0L205 0l-4.4 18.5L174.9 128 32 128 0 128l0 64 32 0 320 0 32 0 0-64-32 0-127.8 0L243 48l37 0 24 0 0-48L280 0 224 0z" />
    </Icon>
);

export default CupStraw;