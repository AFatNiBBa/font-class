
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-k` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-k?s=sharp-duotone-solid circle-k}
 * @preview ![circle-k](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTE2MCAxMjhsNDggMCAwIDI0IDAgODMuOEwyMjIuMSAyMjBsODIuNS05MiA2NC41IDAtMSAxLjFMMjcwLjMgMjM4LjMgMzYyIDM3Ni43bDQuOCA3LjMtNTcuNiAwTDIzNy4xIDI3NS4yIDIwOCAzMDcuN2wwIDUyLjMgMCAyNC00OCAwIDAtMjQgMC02MS41TDE2MCAxNTJsMC0yNHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMwNC42IDEyOGw2NC41IDAtMSAxLjFMMjcwLjMgMjM4LjMgMzYyIDM3Ni43bDQuOCA3LjMtNTcuNiAwTDIzNy4xIDI3NS4yIDIwOCAzMDcuN2wwIDUyLjMgMCAyNC00OCAwIDAtMjQgMC02MS41TDE2MCAxNTJsMC0yNCA0OCAwIDAgMjQgMCA4My44TDIyMi4xIDIyMGw4Mi41LTkyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleK: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM160 128l48 0 0 24 0 83.8L222.1 220l82.5-92 64.5 0-1 1.1L270.3 238.3 362 376.7l4.8 7.3-57.6 0L237.1 275.2 208 307.7l0 52.3 0 24-48 0 0-24 0-61.5L160 152l0-24z" />
            <path d="M304.6 128l64.5 0-1 1.1L270.3 238.3 362 376.7l4.8 7.3-57.6 0L237.1 275.2 208 307.7l0 52.3 0 24-48 0 0-24 0-61.5L160 152l0-24 48 0 0 24 0 83.8L222.1 220l82.5-92z" />
    </Icon>
);

export default CircleK;