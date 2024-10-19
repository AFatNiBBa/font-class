
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `folder-blank` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/folder-blank?s=regular folder-blank}
 * @preview ![folder-blank](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggOTZIMjc1Ljg4M0wyMjYuNzQ2IDUwLjc0NkMyMTQuNzQyIDM4Ljc0MiAxOTguNDY1IDMyIDE4MS40OSAzMkg2NEMyOC42NTQgMzIgMCA2MC42NTYgMCA5NlY0MTZDMCA0NTEuMzQ0IDI4LjY1NCA0ODAgNjQgNDgwSDQ0OEM0ODMuMzQ2IDQ4MCA1MTIgNDUxLjM0NCA1MTIgNDE2VjE2MEM1MTIgMTI0LjY1NiA0ODMuMzQ2IDk2IDQ0OCA5NlpNNDY0IDQxNkM0NjQgNDI0LjgyNCA0NTYuODIyIDQzMiA0NDggNDMySDY0QzU1LjE3OCA0MzIgNDggNDI0LjgyNCA0OCA0MTZWOTZDNDggODcuMTc2IDU1LjE3OCA4MCA2NCA4MEgxODEuNDlDMTg1Ljc2NCA4MCAxODkuNzgzIDgxLjY2NCAxOTIuODA1IDg0LjY4OEwyNTYgMTQ0SDQ0OEM0NTYuODIyIDE0NCA0NjQgMTUxLjE3NiA0NjQgMTYwVjQxNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FolderBlank(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 96H275.883L226.746 50.746C214.742 38.742 198.465 32 181.49 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H448C483.346 480 512 451.344 512 416V160C512 124.656 483.346 96 448 96ZM464 416C464 424.824 456.822 432 448 432H64C55.178 432 48 424.824 48 416V96C48 87.176 55.178 80 64 80H181.49C185.764 80 189.783 81.664 192.805 84.688L256 144H448C456.822 144 464 151.176 464 160V416Z" />
        </Icon>
    </>
}