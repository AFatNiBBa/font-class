
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-up` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-up?s=regular chevron-up}
 * @preview ![chevron-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNS40MDggMzAyLjY2N0wyMDcuNDA2IDExOC42ODZDMjEyLjAzMSAxMTQuMjE3IDIxOC4wMzEgMTExLjk5OSAyMjMuOTk5IDExMS45OTlTMjM1Ljk2OCAxMTQuMjE3IDI0MC41OTMgMTE4LjY4Nkw0MzIuNTkxIDMwMi42NjdDNDQyLjE4NSAzMTEuODE5IDQ0Mi40OTcgMzI3LjAwNiA0MzMuMzEgMzM2LjU2OUM0MjQuMTg1IDM0Ni4xOTQgNDA4LjkzNSAzNDYuNTA2IDM5OS40MDQgMzM3LjI4OEwyMjMuOTk5IDE2OS4yNDFMNDguNTk1IDMzNy4yODhDMzkuMDk1IDM0Ni41MDYgMjMuODE0IDM0Ni4xOTQgMTQuNjg5IDMzNi41NjlDNS41MDEgMzI3LjAwNiA1LjgxNCAzMTEuODE5IDE1LjQwOCAzMDIuNjY3WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ChevronUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M15.408 302.667L207.406 118.686C212.031 114.217 218.031 111.999 223.999 111.999S235.968 114.217 240.593 118.686L432.591 302.667C442.185 311.819 442.497 327.006 433.31 336.569C424.185 346.194 408.935 346.506 399.404 337.288L223.999 169.241L48.595 337.288C39.095 346.506 23.814 346.194 14.689 336.569C5.501 327.006 5.814 311.819 15.408 302.667Z" />
        </Icon>
    </>
}