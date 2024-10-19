
import { Icon, generic } from "../../index";

/**
 * A component that renders the `image-user` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-user?s=sharp-duotone-solid image-user}
 * @preview ![image-user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDUxMiAwIDAtNDQ4TDAgMzJ6TTE0NCAzODRsMzItOTYgMTYwIDAgMzIgOTYtMjI0IDB6TTMyMCAxOTJhNjQgNjQgMCAxIDEgLTEyOCAwIDY0IDY0IDAgMSAxIDEyOCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU2IDI1NmE2NCA2NCAwIDEgMCAwLTEyOCA2NCA2NCAwIDEgMCAwIDEyOHpNMzY4IDM4NGwtMzItOTYtMTYwIDAtMzIgOTYgMjI0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const ImageUser: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 480l512 0 0-448L0 32zM144 384l32-96 160 0 32 96-224 0zM320 192a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
            <path d="M256 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM368 384l-32-96-160 0-32 96 224 0z" />
    </Icon>
);

export default ImageUser;