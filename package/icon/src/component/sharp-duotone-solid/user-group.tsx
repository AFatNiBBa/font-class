
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-group` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-group?s=sharp-duotone-solid user-group}
 * @preview ![user-group](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zNTIuNyAyMjMuMUMzNzIuNCAxOTYuNSAzODQgMTYzLjYgMzg0IDEyOGMwLTI2LjgtNi42LTUyLjEtMTguMy03NC4zQzM4NC4zIDQwLjEgNDA3LjIgMzIgNDMyIDMyYzYxLjkgMCAxMTIgNTAuMSAxMTIgMTEycy01MC4xIDExMi0xMTIgMTEyYy0zMSAwLTU5LTEyLjYtNzkuMy0zMi45ek00MjIuNCAzMjBMNTc2IDMyMGw2NCAxOTItMTU4LjUgMC0yLjktOS40TDQyMi40IDMyMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIyNCAyNTZBMTI4IDEyOCAwIDEgMCAyMjQgMGExMjggMTI4IDAgMSAwIDAgMjU2ek00NDggNTEyTDM4NCAzMDQgNjQgMzA0IDAgNTEybDQ0OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const UserGroup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M352.7 223.1C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112c-31 0-59-12.6-79.3-32.9zM422.4 320L576 320l64 192-158.5 0-2.9-9.4L422.4 320z" />
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zM448 512L384 304 64 304 0 512l448 0z" />
    </Icon>
);

export default UserGroup;