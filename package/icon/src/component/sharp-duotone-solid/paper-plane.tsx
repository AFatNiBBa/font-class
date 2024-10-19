
import { Icon, generic } from "../../index";

/**
 * A component that renders the `paper-plane` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paper-plane?s=sharp-duotone-solid paper-plane}
 * @preview ![paper-plane](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI4OGwxNjAgNjRMMzg0IDE2MCAyMjUuOSAzODEuM2w2MS42IDI3LjRMNDQ4IDQ4MCA1MTIgMCAwIDI4OHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NCAxNjBMMTYwIDM1MmwwIDMyIDAgMzIgMCA4MCA0OCAxNiA3OS41LTEwMy4zLTYxLjYtMjcuNEwzODQgMTYweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const PaperPlane: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288l160 64L384 160 225.9 381.3l61.6 27.4L448 480 512 0 0 288z" />
            <path d="M384 160L160 352l0 32 0 32 0 80 48 16 79.5-103.3-61.6-27.4L384 160z" />
    </Icon>
);

export default PaperPlane;