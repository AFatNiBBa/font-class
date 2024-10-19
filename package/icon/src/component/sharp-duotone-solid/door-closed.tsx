
import { Icon, generic } from "../../index";

/**
 * A component that renders the `door-closed` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/door-closed?s=sharp-duotone-solid door-closed}
 * @preview ![door-closed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAwbDAgNDQ4IDAgNjQgMzg0IDAgMC02NEw0ODAgMCA5NiAwek00MTYgMjU2YTMyIDMyIDAgMSAxIC02NCAwIDMyIDMyIDAgMSAxIDY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zODQgMjI0YTMyIDMyIDAgMSAxIDAgNjQgMzIgMzIgMCAxIDEgMC02NHpNMCA0NDhsMzIgMCA2NCAwIDAgNjQtNjQgMEwwIDUxMmwwLTY0em01NzYgNjRsLTMyIDAtNjQgMCAwLTY0IDY0IDAgMzIgMCAwIDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const DoorClosed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 0l0 448 0 64 384 0 0-64L480 0 96 0zM416 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
            <path d="M384 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM0 448l32 0 64 0 0 64-64 0L0 512l0-64zm576 64l-32 0-64 0 0-64 64 0 32 0 0 64z" />
    </Icon>
);

export default DoorClosed;