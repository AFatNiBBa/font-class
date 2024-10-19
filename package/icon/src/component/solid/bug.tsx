
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bug` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bug?s=solid bug}
 * @preview ![bug](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAgMjU2SDQxNlYyMDUuMjVMNDcwLjYyNSAxNTAuNjI1QzQ4My4xMjUgMTM4LjEyNSA0ODMuMTI1IDExNy44NzUgNDcwLjYyNSAxMDUuMzc1UzQzNy44NzUgOTIuODc1IDQyNS4zNzUgMTA1LjM3NUwzNzAuNzUgMTYwSDE0MS4yNUw4Ni42MjUgMTA1LjM3NUM3NC4xMjUgOTIuODc1IDUzLjg3NSA5Mi44NzUgNDEuMzc1IDEwNS4zNzVTMjguODc1IDEzOC4xMjUgNDEuMzc1IDE1MC42MjVMOTYgMjA1LjI1VjI1NkgzMkMxNC4zMTIgMjU2IDAgMjcwLjMyOCAwIDI4OFMxNC4zMTIgMzIwIDMyIDMyMEg5NlYzNTJDOTYgMzY3LjEwOSA5OS4wODggMzgxLjM5NiAxMDMuODk1IDM5NC44NTVMNDEuMzc1IDQ1Ny4zNzVDMjguODc1IDQ2OS44NzUgMjguODc1IDQ5MC4xMjUgNDEuMzc1IDUwMi42MjVDNDcuNjI1IDUwOC44NzUgNTUuODEyIDUxMiA2NCA1MTJTODAuMzc1IDUwOC44NzUgODYuNjI1IDUwMi42MjVMMTQwLjc1IDQ0OC41QzE2My4xOCA0NjcuODY3IDE5Mi4wNDEgNDgwIDIyNCA0ODBIMjQwLjE1MlYyMzkuOTI0QzI0MC4xNTIgMjMxLjEyOSAyNDcuMjgxIDIyNCAyNTYuMDc2IDIyNFMyNzIgMjMxLjEyOSAyNzIgMjM5LjkyNFY0ODBIMjg4QzMxOS45NjEgNDgwIDM0OC44MiA0NjcuODY3IDM3MS4yNSA0NDguNUw0MjUuMzc1IDUwMi42MjVDNDMxLjYyNSA1MDguODc1IDQzOS44MTIgNTEyIDQ0OCA1MTJTNDY0LjM3NSA1MDguODc1IDQ3MC42MjUgNTAyLjYyNUM0ODMuMTI1IDQ5MC4xMjUgNDgzLjEyNSA0NjkuODc1IDQ3MC42MjUgNDU3LjM3NUw0MDguMTA1IDM5NC44NTVDNDEyLjkxMiAzODEuMzk2IDQxNiAzNjcuMTA5IDQxNiAzNTJWMzIwSDQ4MEM0OTcuNjg4IDMyMCA1MTIgMzA1LjY3MiA1MTIgMjg4UzQ5Ny42ODggMjU2IDQ4MCAyNTZaTTM1MiA5NkMzNTIgNDIuOTggMzA5LjAyIDAgMjU2IDBTMTYwIDQyLjk4IDE2MCA5NlYxMjhIMzUyVjk2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Bug(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M480 256H416V205.25L470.625 150.625C483.125 138.125 483.125 117.875 470.625 105.375S437.875 92.875 425.375 105.375L370.75 160H141.25L86.625 105.375C74.125 92.875 53.875 92.875 41.375 105.375S28.875 138.125 41.375 150.625L96 205.25V256H32C14.312 256 0 270.328 0 288S14.312 320 32 320H96V352C96 367.109 99.088 381.396 103.895 394.855L41.375 457.375C28.875 469.875 28.875 490.125 41.375 502.625C47.625 508.875 55.812 512 64 512S80.375 508.875 86.625 502.625L140.75 448.5C163.18 467.867 192.041 480 224 480H240.152V239.924C240.152 231.129 247.281 224 256.076 224S272 231.129 272 239.924V480H288C319.961 480 348.82 467.867 371.25 448.5L425.375 502.625C431.625 508.875 439.812 512 448 512S464.375 508.875 470.625 502.625C483.125 490.125 483.125 469.875 470.625 457.375L408.105 394.855C412.912 381.396 416 367.109 416 352V320H480C497.688 320 512 305.672 512 288S497.688 256 480 256ZM352 96C352 42.98 309.02 0 256 0S160 42.98 160 96V128H352V96Z" />
        </Icon>
    </>
}