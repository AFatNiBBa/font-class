
import { Icon, generic } from "../../index";

/**
 * A component that renders the `turn-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-down?s=duotone turn-down}
 * @preview ![turn-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNjRDMCA4MS43IDE0LjMgOTYgMzIgOTZsOTYgMGM4LjggMCAxNiA3LjIgMTYgMTZsMCAyMDggOTYgMCAwLTIwOEMyNDAgNTAuMSAxODkuOSAwIDEyOCAwTDMyIDBDMTQuMyAwIDAgMTQuMyAwIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDAuMyAzNjguM0wxNzguMyA1MDYuM2MzLjYgMy42IDguNSA1LjcgMTMuNyA1LjdzMTAtMiAxMy43LTUuN0wzNDMuNyAzNjguM2M1LjMtNS4zIDguMy0xMi41IDguMy0yMGMwLTE1LjYtMTIuNy0yOC4zLTI4LjMtMjguM0w2MC4zIDMyMEM0NC43IDMyMCAzMiAzMzIuNyAzMiAzNDguM2MwIDcuNSAzIDE0LjcgOC4zIDIweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const TurnDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 64C0 81.7 14.3 96 32 96l96 0c8.8 0 16 7.2 16 16l0 208 96 0 0-208C240 50.1 189.9 0 128 0L32 0C14.3 0 0 14.3 0 32z" />
            <path d="M40.3 368.3L178.3 506.3c3.6 3.6 8.5 5.7 13.7 5.7s10-2 13.7-5.7L343.7 368.3c5.3-5.3 8.3-12.5 8.3-20c0-15.6-12.7-28.3-28.3-28.3L60.3 320C44.7 320 32 332.7 32 348.3c0 7.5 3 14.7 8.3 20z" />
    </Icon>
);

export default TurnDown;