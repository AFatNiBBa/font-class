
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-burst` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-burst?s=sharp-duotone-solid person-burst}
 * @preview ![person-burst](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00LjQgMjE1LjJMMTAwIDIzNi42bC0uNCA5OEwxNzYgMjczLjJsNzYuNCA2MS40LS40LTk4IDk1LjYtMjEuNC03Ni45LTYwLjggNDIuOS04OC4xTDIxOC4yIDg4LjUgMTc2IDAgMTMzLjggODguNSAzOC40IDY2LjNsNDIuOSA4OC4xTDQuNCAyMTUuMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQzMiA0OGE0OCA0OCAwIDEgMSA5NiAwIDQ4IDQ4IDAgMSAxIC05NiAwem0tMjAuNiA4MGwxNy41IDAgMTAyLjIgMCAxNy41IDAgOS40IDE0LjggODEuNyAxMjgtNTMuOSAzNC40LTMzLjgtNTNMNTUyIDQ4MGwwIDMyLTY0IDAgMC0zMiAwLTEyOC0xNiAwIDAgMTI4IDAgMzItNjQgMCAwLTMyIDAtMjI3LjgtMzMuOCA1My01My45LTM0LjQgODEuNy0xMjggOS40LTE0Ljh6Ii8+PC9zdmc+|width=32|height=32)
 */
const PersonBurst: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M4.4 215.2L100 236.6l-.4 98L176 273.2l76.4 61.4-.4-98 95.6-21.4-76.9-60.8 42.9-88.1L218.2 88.5 176 0 133.8 88.5 38.4 66.3l42.9 88.1L4.4 215.2z" />
            <path d="M432 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm-20.6 80l17.5 0 102.2 0 17.5 0 9.4 14.8 81.7 128-53.9 34.4-33.8-53L552 480l0 32-64 0 0-32 0-128-16 0 0 128 0 32-64 0 0-32 0-227.8-33.8 53-53.9-34.4 81.7-128 9.4-14.8z" />
    </Icon>
);

export default PersonBurst;