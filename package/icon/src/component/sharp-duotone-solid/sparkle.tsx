
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sparkle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sparkle?s=sharp-duotone-solid sparkle}
 * @preview ![sparkle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNDkuMyAxODEuM0wyMjQgMzJsNzQuNyAxNDkuM0w0NDggMjU2IDI5OC43IDMzMC43IDIyNCA0ODAgMTQ5LjMgMzMwLjcgMCAyNTZsMTQ5LjMtNzQuN3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const Sparkle: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M149.3 181.3L224 32l74.7 149.3L448 256 298.7 330.7 224 480 149.3 330.7 0 256l149.3-74.7z" />
    </Icon>
);

export default Sparkle;