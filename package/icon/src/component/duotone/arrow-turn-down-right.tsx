
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-turn-down-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-down-right?s=duotone arrow-turn-down-right}
 * @preview ![arrow-turn-down-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0TDAgMjI0YzAgNTMgNDMgOTYgOTYgOTZsMzA2LjcgMCAzMi0zMi0zMi0zMkw5NiAyNTZjLTE3LjcgMC0zMi0xNC4zLTMyLTMyTDY0IDY0YzAtMTcuNy0xNC4zLTMyLTMyLTMyUzAgNDYuMyAwIDY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzI5LjQgMTM3LjRjMTIuNS0xMi41IDMyLjgtMTIuNSA0NS4zIDBsMTI4IDEyOGMxMi41IDEyLjUgMTIuNSAzMi44IDAgNDUuM2wtMTI4IDEyOGMtMTIuNSAxMi41LTMyLjggMTIuNS00NS4zIDBzLTEyLjUtMzIuOCAwLTQ1LjNMNDM0LjcgMjg4IDMyOS40IDE4Mi42Yy0xMi41LTEyLjUtMTIuNS0zMi44IDAtNDUuM3oiLz48L3N2Zz4=|width=32|height=32)
 */
const ArrowTurnDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64L0 224c0 53 43 96 96 96l306.7 0 32-32-32-32L96 256c-17.7 0-32-14.3-32-32L64 64c0-17.7-14.3-32-32-32S0 46.3 0 64z" />
            <path d="M329.4 137.4c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 288 329.4 182.6c-12.5-12.5-12.5-32.8 0-45.3z" />
    </Icon>
);

export default ArrowTurnDownRight;