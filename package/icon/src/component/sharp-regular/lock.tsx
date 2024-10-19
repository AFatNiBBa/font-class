
import { Icon } from "../../index";

/**
 * A component that renders the `lock` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock?s=sharp-regular lock}
 * @preview ![lock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTQ0IDEyOGwwIDY0IDE2MCAwIDAtNjRjMC00NC4yLTM1LjgtODAtODAtODBzLTgwIDM1LjgtODAgODB6TTk2IDE5MmwwLTY0Qzk2IDU3LjMgMTUzLjMgMCAyMjQgMHMxMjggNTcuMyAxMjggMTI4bDAgNjQgNDggMCA0OCAwIDAgNDggMCAyMjQgMCA0OC00OCAwTDQ4IDUxMiAwIDUxMmwwLTQ4TDAgMjQwbDAtNDggNDggMCA0OCAwek00OCA0NjRsMzUyIDAgMC0yMjRMNDggMjQwbDAgMjI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Lock: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 128l0 64 160 0 0-64c0-44.2-35.8-80-80-80s-80 35.8-80 80zM96 192l0-64C96 57.3 153.3 0 224 0s128 57.3 128 128l0 64 48 0 48 0 0 48 0 224 0 48-48 0L48 512 0 512l0-48L0 240l0-48 48 0 48 0zM48 464l352 0 0-224L48 240l0 224z" />
    </Icon>
);

export default Lock;