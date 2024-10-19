
import { Icon } from "../../index";

/**
 * A component that renders the `lock` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock?s=sharp-solid lock}
 * @preview ![lock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTQ0IDE0NGwwIDQ4IDE2MCAwIDAtNDhjMC00NC4yLTM1LjgtODAtODAtODBzLTgwIDM1LjgtODAgODB6TTgwIDE5MmwwLTQ4QzgwIDY0LjUgMTQ0LjUgMCAyMjQgMHMxNDQgNjQuNSAxNDQgMTQ0bDAgNDggODAgMCAwIDMyMEwwIDUxMiAwIDE5Mmw4MCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Lock: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 80 0 0 320L0 512 0 192l80 0z" />
    </Icon>
);

export default Lock;