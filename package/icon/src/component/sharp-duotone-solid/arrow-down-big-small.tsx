
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-big-small` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-big-small?s=sharp-duotone-solid arrow-down-big-small}
 * @preview ![arrow-down-big-small](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMjAgMzJsMCAyMjQgMjI0IDAgMC0yMjRMMzIwIDMyem0wIDI4OGwwIDE2MCAxNjAgMCAwLTE2MC0xNjAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE2MCA0ODBsMjMuNy0yNiA4MC04OCAyMS41LTIzLjctNDcuNC00My4xLTIxLjUgMjMuN0wxOTIgMzQ5LjdsMC0yODUuMiAwLTMyLTY0IDAgMCAzMiAwIDI4NS4yLTI0LjMtMjYuOEw4Mi4yIDI5OS4yIDM0LjggMzQyLjMgNTYuMyAzNjZsODAgODhMMTYwIDQ4MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ArrowDownBigSmall: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M320 32l0 224 224 0 0-224L320 32zm0 288l0 160 160 0 0-160-160 0z" />
            <path d="M160 480l23.7-26 80-88 21.5-23.7-47.4-43.1-21.5 23.7L192 349.7l0-285.2 0-32-64 0 0 32 0 285.2-24.3-26.8L82.2 299.2 34.8 342.3 56.3 366l80 88L160 480z" />
    </Icon>
);

export default ArrowDownBigSmall;