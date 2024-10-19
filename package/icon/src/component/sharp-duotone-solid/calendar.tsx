
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar?s=sharp-duotone-solid calendar}
 * @preview ![calendar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5Mmw0NDggMCAwIDMyMEwwIDUxMiAwIDE5MnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE2MCAzMmwwLTMyTDk2IDBsMCAzMiAwIDMyTDAgNjQgMCAxOTJsNDQ4IDAgMC0xMjgtOTYgMCAwLTMyIDAtMzJMMjg4IDBsMCAzMiAwIDMyTDE2MCA2NGwwLTMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Calendar: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192l448 0 0 320L0 512 0 192z" />
            <path d="M160 32l0-32L96 0l0 32 0 32L0 64 0 192l448 0 0-128-96 0 0-32 0-32L288 0l0 32 0 32L160 64l0-32z" />
    </Icon>
);

export default Calendar;