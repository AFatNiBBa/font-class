
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shish-kebab` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shish-kebab?s=sharp-duotone-solid shish-kebab}
 * @preview ![shish-kebab](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xLjQgNDY1LjRsNDUuMyA0NS4zIDgwLTgwYy0xNS4xLTE1LjEtMzAuMi0zMC4yLTQ1LjMtNDUuM2wtODAgODB6bTE2OC0xNjhsNDUuMyA0NS4zIDI0LTI0Yy0xNS4xLTE1LjEtMzAuMi0zMC4yLTQ1LjMtNDUuM2wtMjQgMjR6bTExMi0xMTJsNDUuMyA0NS4zIDY2LjctNjYuN0w0MTYgMTQxLjNsLTIyLjYtMjIuNmMtMTIuNS0xMi41LTEyLjUtMzIuOCAwLTQ1LjNzMzIuOC0xMi41IDQ1LjMgMGMxMC40IDEwLjQgMTIuMiAyNi40IDUuMSAzOC42bDU1LjQgMzJjOC42LTE0LjggMTIuOC0zMS40IDEyLjgtNDhjMC0yNC42LTkuNC00OS4xLTI4LjEtNjcuOWMtMzcuNS0zNy41LTk4LjMtMzcuNS0xMzUuOCAwYy0yOS42IDI5LjYtMzUuOCA3My42LTE4LjggMTA5LjNsLTQ4IDQ4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjE2IDEyMGwtODggODhMMzA0IDM4NGw4OC04OEwyMTYgMTIwek0xMDQgMjMyTDE2IDMyMCAxOTIgNDk2bDg4LTg4TDEwNCAyMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const ShishKebab: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M1.4 465.4l45.3 45.3 80-80c-15.1-15.1-30.2-30.2-45.3-45.3l-80 80zm168-168l45.3 45.3 24-24c-15.1-15.1-30.2-30.2-45.3-45.3l-24 24zm112-112l45.3 45.3 66.7-66.7L416 141.3l-22.6-22.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c10.4 10.4 12.2 26.4 5.1 38.6l55.4 32c8.6-14.8 12.8-31.4 12.8-48c0-24.6-9.4-49.1-28.1-67.9c-37.5-37.5-98.3-37.5-135.8 0c-29.6 29.6-35.8 73.6-18.8 109.3l-48 48z" />
            <path d="M216 120l-88 88L304 384l88-88L216 120zM104 232L16 320 192 496l88-88L104 232z" />
    </Icon>
);

export default ShishKebab;