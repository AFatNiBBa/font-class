
import { Icon } from "../../index";

/**
 * A component that renders the `ruler` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler?s=sharp-solid ruler}
 * @preview ![ruler](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYwIDUxMkw1MTIgMTYwIDM1MiAwIDI4My4zIDY4LjdsNDggNDhMMzQyLjYgMTI4IDMyMCAxNTAuNmwtMTEuMy0xMS4zLTQ4LTQ4LTQxLjQgNDEuNCA0OCA0OEwyNzguNiAxOTIgMjU2IDIxNC42bC0xMS4zLTExLjMtNDgtNDgtNDEuNCA0MS40IDQ4IDQ4TDIxNC42IDI1NiAxOTIgMjc4LjZsLTExLjMtMTEuMy00OC00OEw5MS4zIDI2MC43bDQ4IDQ4TDE1MC42IDMyMCAxMjggMzQyLjZsLTExLjMtMTEuMy00OC00OEwwIDM1MiAxNjAgNTEyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Ruler: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 512L512 160 352 0 283.3 68.7l48 48L342.6 128 320 150.6l-11.3-11.3-48-48-41.4 41.4 48 48L278.6 192 256 214.6l-11.3-11.3-48-48-41.4 41.4 48 48L214.6 256 192 278.6l-11.3-11.3-48-48L91.3 260.7l48 48L150.6 320 128 342.6l-11.3-11.3-48-48L0 352 160 512z" />
    </Icon>
);

export default Ruler;