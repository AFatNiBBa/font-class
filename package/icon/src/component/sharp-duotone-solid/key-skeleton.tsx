
import { Icon, generic } from "../../index";

/**
 * A component that renders the `key-skeleton` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/key-skeleton?s=sharp-duotone-solid key-skeleton}
 * @preview ![key-skeleton](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yLjcgNDAwbDIyLjYgMjIuNiA2NCA2NEwxMTIgNTA5LjMgMTU3LjMgNDY0bC0yMi42LTIyLjZMOTMuMyA0MDAgMTEyIDM4MS4zbDQxLjQgNDEuNEwxNzYgNDQ1LjMgMjIxLjMgNDAwbC0yMi42LTIyLjZMMTU3LjMgMzM2bDcwLjEtNzAuMWMtMTguMy0xMS41LTMzLjgtMjctNDUuMy00NS4zTDI1LjQgMzc3LjQgMi43IDQwMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMwNCA2NGE4MCA4MCAwIDEgMSAwIDE2MCA4MCA4MCAwIDEgMSAwLTE2MHptMCAyMjRBMTQ0IDE0NCAwIDEgMCAzMDQgMGExNDQgMTQ0IDAgMSAwIDAgMjg4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const KeySkeleton: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M2.7 400l22.6 22.6 64 64L112 509.3 157.3 464l-22.6-22.6L93.3 400 112 381.3l41.4 41.4L176 445.3 221.3 400l-22.6-22.6L157.3 336l70.1-70.1c-18.3-11.5-33.8-27-45.3-45.3L25.4 377.4 2.7 400z" />
            <path d="M304 64a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 224A144 144 0 1 0 304 0a144 144 0 1 0 0 288z" />
    </Icon>
);

export default KeySkeleton;