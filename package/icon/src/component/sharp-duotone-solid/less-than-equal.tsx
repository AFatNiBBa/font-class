
import { Icon, generic } from "../../index";

/**
 * A component that renders the `less-than-equal` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/less-than-equal?s=sharp-duotone-solid less-than-equal}
 * @preview ![less-than-equal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAxNjkuNGwwIDQ1LjIgMjEuMyA3LjYgMzYwIDEyOCAyLjcgMSAwLTY3LjlMMTU5LjUgMTkyIDQxNiAxMDAuOGwwLTY3LjktMi43IDEtMzYwIDEyOEwzMiAxNjkuNHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgNDE2bDMyIDAgMzg0IDAgMzIgMCAwIDY0LTMyIDBMMzIgNDgwIDAgNDgwbDAtNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const LessThanEqual: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 169.4l0 45.2 21.3 7.6 360 128 2.7 1 0-67.9L159.5 192 416 100.8l0-67.9-2.7 1-360 128L32 169.4z" />
            <path d="M0 416l32 0 384 0 32 0 0 64-32 0L32 480 0 480l0-64z" />
    </Icon>
);

export default LessThanEqual;