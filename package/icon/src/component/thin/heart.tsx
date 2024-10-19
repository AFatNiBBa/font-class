
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `heart` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/heart?s=thin heart}
 * @preview ![heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjIuOTcgNjIuODU5QzQzOC43NzYgNDEuOTIyIDQwOC44NyAzMiAzNzguNzIyIDMyQzM0MS4yMzQgMzIgMzAzLjM3NiA0Ny4zNDQgMjc1LjY5MyA3NS45MjJMMjU2LjAwNSA5Ni4yNUwyMzYuMzE4IDc1LjkyMkMyMDguNjMxIDQ3LjM0IDE3MC43OCAzMiAxMzMuMjg5IDMyQzEwMy4xNDkgMzIgNzMuMjMxIDQxLjkyMiA0OS4wNCA2Mi44NTlDLTEzLjEwMyAxMTYuNjUyIC0xNi4xOTcgMjEyLjUxNiAzOS44MjIgMjcwLjQ4NEwyMzIuOTc1IDQ3MC4xOTVDMjM5LjI5NSA0NzYuNzMgMjQ3LjYyNyA0ODAgMjU1Ljk1OCA0ODBDMjY0LjI5NCA0ODAgMjcyLjYyNiA0NzYuNzMgMjc4Ljk0NiA0NzAuMTk1TDQ3Mi4wOTUgMjcwLjQ4NEM1MjguMjExIDIxMi41MTYgNTI1LjExOCAxMTYuNjQ4IDQ2Mi45NyA2Mi44NTlaTTQ2MC41OTUgMjU5LjM1OUwyNjcuNDQ3IDQ1OS4wN0MyNjQuMzcyIDQ2Mi4yNSAyNjAuMjk0IDQ2NCAyNTUuOTYyIDQ2NEMyNTEuNjI3IDQ2NCAyNDcuNTQ4IDQ2Mi4yNSAyNDQuNDc0IDQ1OS4wN0w1MS4zMjUgMjU5LjM2N0MyNy4zOTYgMjM0LjYwMiAxNC41NjggMjAwLjI5NyAxNi4xMjcgMTY1LjIzOEMxNy43MDUgMTI5Ljg3NSAzMy4xMTEgOTcuODEyIDU5LjUxMyA3NC45NjFDNzkuODg3IDU3LjMyIDEwNS40MDMgNDggMTMzLjI4OSA0OEMxNjcuNDIxIDQ4IDIwMC43ODQgNjIuMjM0IDIyNC44MjYgODcuMDU1QzI0OC45MjkgMTExLjkzOCAyMzkuMzYxIDEwMi4wNjIgMjU2LjAwNSAxMTkuMjQyQzI3MS45NTggMTAyLjc3MyAyNjMuNzg2IDExMS4yMTEgMjg3LjE4NCA4Ny4wNTVDMzExLjIyNyA2Mi4yMzQgMzQ0LjU5NCA0OCAzNzguNzI2IDQ4QzQwNi42MTIgNDggNDMyLjEyMyA1Ny4zMiA0NTIuNDk4IDc0Ljk1N0M0NzguOTA4IDk3LjgxMiA0OTQuMzE0IDEyOS44ODMgNDk1Ljg3MiAxNjUuMjQ2QzQ5Ny40MTkgMjAwLjI5NyA0ODQuNTY0IDIzNC42MDIgNDYwLjU5NSAyNTkuMzU5WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Heart(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M462.97 62.859C438.776 41.922 408.87 32 378.722 32C341.234 32 303.376 47.344 275.693 75.922L256.005 96.25L236.318 75.922C208.631 47.34 170.78 32 133.289 32C103.149 32 73.231 41.922 49.04 62.859C-13.103 116.652 -16.197 212.516 39.822 270.484L232.975 470.195C239.295 476.73 247.627 480 255.958 480C264.294 480 272.626 476.73 278.946 470.195L472.095 270.484C528.211 212.516 525.118 116.648 462.97 62.859ZM460.595 259.359L267.447 459.07C264.372 462.25 260.294 464 255.962 464C251.627 464 247.548 462.25 244.474 459.07L51.325 259.367C27.396 234.602 14.568 200.297 16.127 165.238C17.705 129.875 33.111 97.812 59.513 74.961C79.887 57.32 105.403 48 133.289 48C167.421 48 200.784 62.234 224.826 87.055C248.929 111.938 239.361 102.062 256.005 119.242C271.958 102.773 263.786 111.211 287.184 87.055C311.227 62.234 344.594 48 378.726 48C406.612 48 432.123 57.32 452.498 74.957C478.908 97.812 494.314 129.883 495.872 165.246C497.419 200.297 484.564 234.602 460.595 259.359Z" />
        </Icon>
    </>
}