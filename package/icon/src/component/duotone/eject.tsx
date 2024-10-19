
import { Icon, generic } from "../../index";

/**
 * A component that renders the `eject` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eject?s=duotone eject}
 * @preview ![eject](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQzMmMwLTI2LjUgMjEuNS00OCA0OC00OGwzNTIgMGMyNi41IDAgNDggMjEuNSA0OCA0OHMtMjEuNSA0OC00OCA0OEw0OCA0ODBjLTI2LjUgMC00OC0yMS41LTQ4LTQ4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU5LjQgNDcuNkMyNTAuMyAzNy42IDIzNy41IDMyIDIyNCAzMnMtMjYuMyA1LjYtMzUuNCAxNS42bC0xNzYgMTkyYy0xMi45IDE0LTE2LjIgMzQuMy04LjYgNTEuOFMyOSAzMjAgNDggMzIwbDM1MiAwYzE5IDAgMzYuMy0xMS4yIDQzLjktMjguN3M0LjMtMzcuNy04LjYtNTEuOGwtMTc2LTE5MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Eject: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 432c0-26.5 21.5-48 48-48l352 0c26.5 0 48 21.5 48 48s-21.5 48-48 48L48 480c-26.5 0-48-21.5-48-48z" />
            <path d="M259.4 47.6C250.3 37.6 237.5 32 224 32s-26.3 5.6-35.4 15.6l-176 192c-12.9 14-16.2 34.3-8.6 51.8S29 320 48 320l352 0c19 0 36.3-11.2 43.9-28.7s4.3-37.7-8.6-51.8l-176-192z" />
    </Icon>
);

export default Eject;