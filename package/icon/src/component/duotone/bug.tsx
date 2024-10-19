
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bug` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bug?s=duotone bug}
 * @preview ![bug](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM1MiA5NkMzNTIgNDIuOTggMzA5LjAyIDAgMjU2IDBTMTYwIDQyLjk4IDE2MCA5NlYxNjBIMzUyVjk2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik01MTIgMjg4QzUxMiAzMDUuNjcyIDQ5Ny42ODggMzIwIDQ4MCAzMjBINDE2VjM1MkM0MTYgMzY3LjEwOSA0MTIuOTEyIDM4MS4zOTYgNDA4LjEwNSAzOTQuODU1TDQ3MC42MjUgNDU3LjM3NUM0ODMuMTI1IDQ2OS44NzUgNDgzLjEyNSA0OTAuMTI1IDQ3MC42MjUgNTAyLjYyNUM0NjQuMzc1IDUwOC44NzUgNDU2LjE4OCA1MTIgNDQ4IDUxMlM0MzEuNjI1IDUwOC44NzUgNDI1LjM3NSA1MDIuNjI1TDM3MS4yNSA0NDguNUMzNDguODIgNDY3Ljg2NyAzMTkuOTYxIDQ4MCAyODggNDgwSDI3MlYyMzkuOTI0QzI3MiAyMzEuMTI5IDI2NC44NzEgMjI0IDI1Ni4wNzYgMjI0UzI0MC4xNTIgMjMxLjEyOSAyNDAuMTUyIDIzOS45MjRWNDgwSDIyNEMxOTIuMDQxIDQ4MCAxNjMuMTggNDY3Ljg2NyAxNDAuNzUgNDQ4LjVMODYuNjI1IDUwMi42MjVDODAuMzc1IDUwOC44NzUgNzIuMTg4IDUxMiA2NCA1MTJTNDcuNjI1IDUwOC44NzUgNDEuMzc1IDUwMi42MjVDMjguODc1IDQ5MC4xMjUgMjguODc1IDQ2OS44NzUgNDEuMzc1IDQ1Ny4zNzVMMTAzLjg5NSAzOTQuODU1Qzk5LjA4OCAzODEuMzk2IDk2IDM2Ny4xMDkgOTYgMzUyVjMyMEgzMkMxNC4zMTIgMzIwIDAgMzA1LjY3MiAwIDI4OFMxNC4zMTIgMjU2IDMyIDI1Nkg5NlYyMDUuMjVMNDEuMzc1IDE1MC42MjVDMjguODc1IDEzOC4xMjUgMjguODc1IDExNy44NzUgNDEuMzc1IDEwNS4zNzVDNDcuNjI1IDk5LjEyNSA1NS44MTIgOTYgNjQgOTZDNzIuMTg3IDk2IDgwLjM3NSA5OS4xMjUgODYuNjI1IDEwNS4zNzVMMTQxLjI1IDE2MEgzNzAuNzVMNDI1LjM3NSAxMDUuMzc1QzQzMS42MjUgOTkuMTI1IDQzOS44MTIgOTYgNDQ4IDk2QzQ1Ni4xODcgOTYgNDY0LjM3NSA5OS4xMjUgNDcwLjYyNSAxMDUuMzc1QzQ4My4xMjUgMTE3Ljg3NSA0ODMuMTI1IDEzOC4xMjUgNDcwLjYyNSAxNTAuNjI1TDQxNiAyMDUuMjVWMjU2SDQ4MEM0OTcuNjg4IDI1NiA1MTIgMjcwLjMyOCA1MTIgMjg4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Bug(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M352 96C352 42.98 309.02 0 256 0S160 42.98 160 96V160H352V96Z" />
            <path d="M512 288C512 305.672 497.688 320 480 320H416V352C416 367.109 412.912 381.396 408.105 394.855L470.625 457.375C483.125 469.875 483.125 490.125 470.625 502.625C464.375 508.875 456.188 512 448 512S431.625 508.875 425.375 502.625L371.25 448.5C348.82 467.867 319.961 480 288 480H272V239.924C272 231.129 264.871 224 256.076 224S240.152 231.129 240.152 239.924V480H224C192.041 480 163.18 467.867 140.75 448.5L86.625 502.625C80.375 508.875 72.188 512 64 512S47.625 508.875 41.375 502.625C28.875 490.125 28.875 469.875 41.375 457.375L103.895 394.855C99.088 381.396 96 367.109 96 352V320H32C14.312 320 0 305.672 0 288S14.312 256 32 256H96V205.25L41.375 150.625C28.875 138.125 28.875 117.875 41.375 105.375C47.625 99.125 55.812 96 64 96C72.187 96 80.375 99.125 86.625 105.375L141.25 160H370.75L425.375 105.375C431.625 99.125 439.812 96 448 96C456.187 96 464.375 99.125 470.625 105.375C483.125 117.875 483.125 138.125 470.625 150.625L416 205.25V256H480C497.688 256 512 270.328 512 288Z" />
        </Icon>
    </>
}