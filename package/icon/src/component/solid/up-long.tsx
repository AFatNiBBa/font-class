
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `up-long` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/up-long?s=solid up-long}
 * @preview ![up-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zOC40MDYgMTE5Ljc0OUwxNDIuNDA4IDcuNjc5QzE1MS45MDYgLTIuNTYgMTY4LjA5NSAtMi41NiAxNzcuNTk1IDcuNjc5TDI4MS41OTUgMTE5Ljc0OUMyODguMDggMTI2Ljc0MSAyODkuODE0IDEzNi45MzMgMjg1Ljk5OSAxNDUuNjg2QzI4Mi4xODkgMTU0LjQ0NCAyNzMuNTQ4IDE2MC4xMDQgMjY0LjAwMSAxNjAuMTA0SDE5OS45OTlWNDcxLjk5OUMxOTkuOTk5IDQ5NC4wOTMgMTgyLjA5MyA1MTEuOTk5IDE1OS45OTkgNTExLjk5OVMxMTkuOTk5IDQ5NC4wOTMgMTE5Ljk5OSA0NzEuOTk5VjE2MC4xMDRINTUuOTk5QzQ2LjQ1MyAxNjAuMTA0IDM3LjgxMiAxNTQuNDQ0IDMzLjk5OCAxNDUuNjg2QzMwLjE4NyAxMzYuOTMzIDMxLjkyMSAxMjYuNzQxIDM4LjQwNiAxMTkuNzQ5WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function UpLong(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M38.406 119.749L142.408 7.679C151.906 -2.56 168.095 -2.56 177.595 7.679L281.595 119.749C288.08 126.741 289.814 136.933 285.999 145.686C282.189 154.444 273.548 160.104 264.001 160.104H199.999V471.999C199.999 494.093 182.093 511.999 159.999 511.999S119.999 494.093 119.999 471.999V160.104H55.999C46.453 160.104 37.812 154.444 33.998 145.686C30.187 136.933 31.921 126.741 38.406 119.749Z" />
        </Icon>
    </>
}