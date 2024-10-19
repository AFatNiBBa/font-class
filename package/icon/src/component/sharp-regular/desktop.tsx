
import { Icon } from "../../index";

/**
 * A component that renders the `desktop` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/desktop?s=sharp-regular desktop}
 * @preview ![desktop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTI4IDQ4TDQ4IDQ4bDAgMjA4IDQ4MCAwIDAtMjA4em00OCAyMDhsMCA0OCAwIDY0IDAgNDgtNDggMC0xNjMuNyAwIDggNDggNTEuNyAwIDI0IDAgMCA0OC0yNCAwLTcyIDAtMTI4IDAtNzIgMC0yNCAwIDAtNDggMjQgMCA1MS43IDAgOC00OEw0OCA0MTYgMCA0MTZsMC00OCAwLTY0IDAtNDhMMCA0OCAwIDAgNDggMCA1MjggMGw0OCAwIDAgNDggMCAyMDh6TTQ4IDMwNGwwIDY0IDQ4MCAwIDAtNjRMNDggMzA0ek0yNjAuMyA0MTZsLTggNDggNzEuMyAwLTgtNDgtNTUuMyAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Desktop: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M528 48L48 48l0 208 480 0 0-208zm48 208l0 48 0 64 0 48-48 0-163.7 0 8 48 51.7 0 24 0 0 48-24 0-72 0-128 0-72 0-24 0 0-48 24 0 51.7 0 8-48L48 416 0 416l0-48 0-64 0-48L0 48 0 0 48 0 528 0l48 0 0 48 0 208zM48 304l0 64 480 0 0-64L48 304zM260.3 416l-8 48 71.3 0-8-48-55.3 0z" />
    </Icon>
);

export default Desktop;