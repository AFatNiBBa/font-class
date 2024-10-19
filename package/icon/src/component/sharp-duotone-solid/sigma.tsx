
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sigma` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sigma?s=sharp-duotone-solid sigma}
 * @preview ![sigma](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ4MGwzMiAwIDMyMCAwIDMyIDAgMC0zMiAwLTY0IDAtMzItNjQgMCAwIDMyIDAgMzItMjEwLjcgMEwyNDYuNiAyNzguNiAyNjkuMyAyNTZsLTIyLjYtMjIuNkwxMDkuMyA5NiAzMjAgOTZsMCAzMiAwIDMyIDY0IDAgMC0zMiAwLTY0IDAtMzItMzIgMEwzMiAzMiAwIDMyIDAgNzcuM2w5LjQgOS40TDE3OC43IDI1NiA5LjQgNDI1LjQgMCA0MzQuNyAwIDQ4MHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const Sigma: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 480l32 0 320 0 32 0 0-32 0-64 0-32-64 0 0 32 0 32-210.7 0L246.6 278.6 269.3 256l-22.6-22.6L109.3 96 320 96l0 32 0 32 64 0 0-32 0-64 0-32-32 0L32 32 0 32 0 77.3l9.4 9.4L178.7 256 9.4 425.4 0 434.7 0 480z" />
    </Icon>
);

export default Sigma;