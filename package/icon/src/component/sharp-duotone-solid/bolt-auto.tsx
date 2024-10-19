
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bolt-auto` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bolt-auto?s=sharp-duotone-solid bolt-auto}
 * @preview ![bolt-auto](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI4OEwzMDQgMCAyNTMuOCAyMDAuOCA0MTYgMjI0IDExMiA1MTJsNTAuMi0yMDAuOEwwIDI4OHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ5Mi43IDQ4MGwxMy43IDMyIDY5LjYgMEw0ODAgMjg4bC02NCAwTDMyMCA1MTJsNjkuNiAwIDEzLjctMzIgODkuMyAwem0tMjcuNC02NGwtMzQuNSAwTDQ0OCAzNzUuOCA0NjUuMiA0MTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const BoltAuto: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 288L304 0 253.8 200.8 416 224 112 512l50.2-200.8L0 288z" />
            <path d="M492.7 480l13.7 32 69.6 0L480 288l-64 0L320 512l69.6 0 13.7-32 89.3 0zm-27.4-64l-34.5 0L448 375.8 465.2 416z" />
    </Icon>
);

export default BoltAuto;