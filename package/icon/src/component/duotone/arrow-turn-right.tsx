
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-turn-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-right?s=duotone arrow-turn-right}
 * @preview ![arrow-turn-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI4OEwwIDQ0OGMwIDE3LjcgMTQuMyAzMiAzMiAzMnMzMi0xNC4zIDMyLTMybDAtMTYwYzAtMTcuNyAxNC4zLTMyIDMyLTMybDMwNi43IDAgMzItMzItMzItMzJMOTYgMTkyYy01MyAwLTk2IDQzLTk2IDk2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzI5LjQgMzc0LjZjMTIuNSAxMi41IDMyLjggMTIuNSA0NS4zIDBsMTI4LTEyOGMxMi41LTEyLjUgMTIuNS0zMi44IDAtNDUuM2wtMTI4LTEyOGMtMTIuNS0xMi41LTMyLjgtMTIuNS00NS4zIDBzLTEyLjUgMzIuOCAwIDQ1LjNMNDM0LjcgMjI0IDMyOS40IDMyOS40Yy0xMi41IDEyLjUtMTIuNSAzMi44IDAgNDUuM3oiLz48L3N2Zz4=|width=32|height=32)
 */
const ArrowTurnRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288L0 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7 14.3-32 32-32l306.7 0 32-32-32-32L96 192c-53 0-96 43-96 96z" />
            <path d="M329.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L434.7 224 329.4 329.4c-12.5 12.5-12.5 32.8 0 45.3z" />
    </Icon>
);

export default ArrowTurnRight;