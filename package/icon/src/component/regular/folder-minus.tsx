
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `folder-minus` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/folder-minus?s=regular folder-minus}
 * @preview ![folder-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggOTZIMjc1Ljg4M0wyMjYuNzQ2IDUwLjc0NkMyMTQuNzQyIDM4Ljc0MiAxOTguNDY1IDMyIDE4MS40OTIgMzJINjRDMjguNjU2IDMyIDAgNjAuNjU2IDAgOTZWNDE2QzAgNDUxLjM0NCAyOC42NTYgNDgwIDY0IDQ4MEg0NDhDNDgzLjM0NCA0ODAgNTEyIDQ1MS4zNDQgNTEyIDQxNlYxNjBDNTEyIDEyNC42NTYgNDgzLjM0NCA5NiA0NDggOTZaTTQ2NCA0MTZDNDY0IDQyNC44MjQgNDU2LjgyIDQzMiA0NDggNDMySDY0QzU1LjE4IDQzMiA0OCA0MjQuODI0IDQ4IDQxNlY5NkM0OCA4Ny4xNzYgNTUuMTggODAgNjQgODBIMTgxLjQ5MkMxODUuNzY2IDgwIDE4OS43ODEgODEuNjY0IDE5Mi44MDUgODQuNjg4TDI1NiAxNDRINDQ4QzQ1Ni44MiAxNDQgNDY0IDE1MS4xNzYgNDY0IDE2MFY0MTZaTTMzNiAyNjQuMDAySDE3NkMxNjIuNzM4IDI2NC4wMDIgMTUyIDI3NC43NDIgMTUyIDI4OEMxNTIgMzAxLjI1NiAxNjIuNzMgMzExLjk5OCAxNzYgMzExLjk5OEgzMzZDMzQ5LjI2MiAzMTEuOTk4IDM2MCAzMDEuMjU4IDM2MCAyODhTMzQ5LjI2MiAyNjQuMDAyIDMzNiAyNjQuMDAyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FolderMinus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 96H275.883L226.746 50.746C214.742 38.742 198.465 32 181.492 32H64C28.656 32 0 60.656 0 96V416C0 451.344 28.656 480 64 480H448C483.344 480 512 451.344 512 416V160C512 124.656 483.344 96 448 96ZM464 416C464 424.824 456.82 432 448 432H64C55.18 432 48 424.824 48 416V96C48 87.176 55.18 80 64 80H181.492C185.766 80 189.781 81.664 192.805 84.688L256 144H448C456.82 144 464 151.176 464 160V416ZM336 264.002H176C162.738 264.002 152 274.742 152 288C152 301.256 162.73 311.998 176 311.998H336C349.262 311.998 360 301.258 360 288S349.262 264.002 336 264.002Z" />
        </Icon>
    </>
}