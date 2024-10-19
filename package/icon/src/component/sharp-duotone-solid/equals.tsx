
import { Icon, generic } from "../../index";

/**
 * A component that renders the `equals` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/equals?s=sharp-duotone-solid equals}
 * @preview ![equals](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00OCAxMjhsLTMyIDAgMCA2NCAzMiAwIDM1MiAwIDMyIDAgMC02NC0zMiAwTDQ4IDEyOHptMCAxOTJsLTMyIDAgMCA2NCAzMiAwIDM1MiAwIDMyIDAgMC02NC0zMiAwTDQ4IDMyMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const Equals: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M48 128l-32 0 0 64 32 0 352 0 32 0 0-64-32 0L48 128zm0 192l-32 0 0 64 32 0 352 0 32 0 0-64-32 0L48 320z" />
    </Icon>
);

export default Equals;