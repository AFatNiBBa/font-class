
import { Icon, generic } from "../../index";

/**
 * A component that renders the `slash-back` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slash-back?s=duotone slash-back}
 * @preview ![slash-back](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNi4xIDQuMkMuOCAxMy00LjYgMzIuNSA0LjIgNDcuOWwyNTYgNDQ4YzguOCAxNS4zIDI4LjMgMjAuNyA0My43IDExLjlzMjAuNy0yOC4zIDExLjktNDMuN2wtMjU2LTQ0OEM1MSAuOCAzMS41LTQuNiAxNi4xIDQuMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const SlashBack: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M16.1 4.2C.8 13-4.6 32.5 4.2 47.9l256 448c8.8 15.3 28.3 20.7 43.7 11.9s20.7-28.3 11.9-43.7l-256-448C51 .8 31.5-4.6 16.1 4.2z" />
    </Icon>
);

export default SlashBack;