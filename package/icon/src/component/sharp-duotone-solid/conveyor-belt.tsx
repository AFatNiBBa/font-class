
import { Icon, generic } from "../../index";

/**
 * A component that renders the `conveyor-belt` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/conveyor-belt?s=sharp-duotone-solid conveyor-belt}
 * @preview ![conveyor-belt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQxNmMwLTUzIDQzLTk2IDk2LTk2bDQ0OCAwYzUzIDAgOTYgNDMgOTYgOTZzLTQzIDk2LTk2IDk2TDk2IDUxMmMtNTMgMC05Ni00My05Ni05NnptOTYgMGEzMiAzMiAwIDEgMCA2NCAwIDMyIDMyIDAgMSAwIC02NCAwek0yNTYgMEwzODQgMGwwIDEyOEwzMjAgODBsLTY0IDQ4TDI1NiAwem0zMiA0MTZhMzIgMzIgMCAxIDAgNjQgMCAzMiAzMiAwIDEgMCAtNjQgMHptMTkyIDBhMzIgMzIgMCAxIDAgNjQgMCAzMiAzMiAwIDEgMCAtNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiAwTDEyOCAwbDAgMjU2IDM4NCAwTDUxMiAwIDM4NCAwbDAgMTI4TDMyMCA4MGwtNjQgNDhMMjU2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const ConveyorBelt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 416c0-53 43-96 96-96l448 0c53 0 96 43 96 96s-43 96-96 96L96 512c-53 0-96-43-96-96zm96 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM256 0L384 0l0 128L320 80l-64 48L256 0zm32 416a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm192 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
            <path d="M256 0L128 0l0 256 384 0L512 0 384 0l0 128L320 80l-64 48L256 0z" />
    </Icon>
);

export default ConveyorBelt;