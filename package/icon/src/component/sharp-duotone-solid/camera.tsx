
import { Icon, generic } from "../../index";

/**
 * A component that renders the `camera` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera?s=sharp-duotone-solid camera}
 * @preview ![camera](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMjg4YTk2IDk2IDAgMSAwIDE5MiAwIDk2IDk2IDAgMSAwIC0xOTIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE2MCAzMkwxMzguNyA5NiAwIDk2IDAgNDgwbDUxMiAwIDAtMzg0TDM3My4zIDk2IDM1MiAzMiAxNjAgMzJ6bTk2IDE2MGE5NiA5NiAwIDEgMSAwIDE5MiA5NiA5NiAwIDEgMSAwLTE5MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Camera: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 288a96 96 0 1 0 192 0 96 96 0 1 0 -192 0z" />
            <path d="M160 32L138.7 96 0 96 0 480l512 0 0-384L373.3 96 352 32 160 32zm96 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
    </Icon>
);

export default Camera;