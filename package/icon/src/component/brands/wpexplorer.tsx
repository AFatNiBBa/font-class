
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `wpexplorer` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wpexplorer?s=brands wpexplorer}
 * @preview ![wpexplorer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMjU2YzAgMTQxLjItMTE0LjcgMjU2LTI1NiAyNTZDMTE0LjggNTEyIDAgMzk3LjMgMCAyNTZTMTE0LjcgMCAyNTYgMHMyNTYgMTE0LjcgMjU2IDI1NnptLTMyIDBjMC0xMjMuMi0xMDAuMy0yMjQtMjI0LTIyNEMxMzIuNSAzMiAzMiAxMzIuNSAzMiAyNTZzMTAwLjUgMjI0IDIyNCAyMjQgMjI0LTEwMC41IDIyNC0yMjR6TTE2MC45IDEyNC42bDg2LjkgMzcuMS0zNy4xIDg2LjktODYuOS0zNy4xIDM3LjEtODYuOXptMTEwIDE2OS4xbDQ2LjYgOTRoLTE0LjZsLTUwLTEwMC00OC45IDEwMGgtMTRsNTEuMS0xMDYuOS0yMi4zLTkuNCA2LTE0IDY4LjYgMjkuMS02IDE0LjMtMTYuNS03LjF6bS0xMS44LTExNi4zbDY4LjYgMjkuNC0yOS40IDY4LjNMMjMwIDI0NmwyOS4xLTY4LjZ6bTgwLjMgNDIuOWw1NC42IDIzLjEtMjMuNCA1NC4zLTU0LjMtMjMuMSAyMy4xLTU0LjN6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Wpexplorer(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M512 256c0 141.2-114.7 256-256 256C114.8 512 0 397.3 0 256S114.7 0 256 0s256 114.7 256 256zm-32 0c0-123.2-100.3-224-224-224C132.5 32 32 132.5 32 256s100.5 224 224 224 224-100.5 224-224zM160.9 124.6l86.9 37.1-37.1 86.9-86.9-37.1 37.1-86.9zm110 169.1l46.6 94h-14.6l-50-100-48.9 100h-14l51.1-106.9-22.3-9.4 6-14 68.6 29.1-6 14.3-16.5-7.1zm-11.8-116.3l68.6 29.4-29.4 68.3L230 246l29.1-68.6zm80.3 42.9l54.6 23.1-23.4 54.3-54.3-23.1 23.1-54.3z" />
        </Icon>
    </>
}