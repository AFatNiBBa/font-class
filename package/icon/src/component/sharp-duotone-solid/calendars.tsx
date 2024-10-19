
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendars` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendars?s=sharp-duotone-solid calendars}
 * @preview ![calendars](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAxOTJsNDE2IDAgMCAyMjRMOTYgNDE2bDAtMjI0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU2IDBMMTkyIDBsMCA2NEw5NiA2NGwwIDEyOCA0MTYgMCAwLTEyOC05NiAwIDAtNjRMMzUyIDBsMCA2NC05NiAwIDAtNjR6TTQ4IDE4NGwwLTI0TDAgMTYwbDAgMjRMMCA0ODhsMCAyNCAyNCAwIDM2OCAwIDI0IDAgMC00OC0yNCAwTDQ4IDQ2NGwwLTI4MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Calendars: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 192l416 0 0 224L96 416l0-224z" />
            <path d="M256 0L192 0l0 64L96 64l0 128 416 0 0-128-96 0 0-64L352 0l0 64-96 0 0-64zM48 184l0-24L0 160l0 24L0 488l0 24 24 0 368 0 24 0 0-48-24 0L48 464l0-280z" />
    </Icon>
);

export default Calendars;