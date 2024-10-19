
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `left-long` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/left-long?s=solid left-long}
 * @preview ![left-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMTkuNzQ5IDM3Ny41OTRMNy42NzkgMjczLjU5MkMtMi41NiAyNjQuMDk0IC0yLjU2IDI0Ny45MDQgNy42NzkgMjM4LjQwNEwxMTkuNzQ5IDEzNC40MDRDMTI2Ljc0MSAxMjcuOTIgMTM2LjkzMyAxMjYuMTg2IDE0NS42ODcgMTMwQzE1NC40NDQgMTMzLjgxIDE2MC4xMDQgMTQyLjQ1MSAxNjAuMTA0IDE1MS45OThWMjE2SDQ3MS45OTlDNDk0LjA5MyAyMTYgNTExLjk5OSAyMzMuOTA2IDUxMS45OTkgMjU2UzQ5NC4wOTMgMjk2IDQ3MS45OTkgMjk2SDE2MC4xMDRWMzYwQzE2MC4xMDQgMzY5LjU0NyAxNTQuNDQ0IDM3OC4xODcgMTQ1LjY4NyAzODIuMDAyQzEzNi45MzMgMzg1LjgxMiAxMjYuNzQxIDM4NC4wNzggMTE5Ljc0OSAzNzcuNTk0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function LeftLong(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M119.749 377.594L7.679 273.592C-2.56 264.094 -2.56 247.904 7.679 238.404L119.749 134.404C126.741 127.92 136.933 126.186 145.687 130C154.444 133.81 160.104 142.451 160.104 151.998V216H471.999C494.093 216 511.999 233.906 511.999 256S494.093 296 471.999 296H160.104V360C160.104 369.547 154.444 378.187 145.687 382.002C136.933 385.812 126.741 384.078 119.749 377.594Z" />
        </Icon>
    </>
}