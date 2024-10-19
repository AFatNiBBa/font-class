
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-up-long` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-long?s=regular arrow-up-long}
 * @preview ![arrow-up-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTIuOTY4IDE2OS45MzdDMzA4LjI4IDE3NC42MjUgMzAyLjE1NSAxNzYuOTY5IDI5NS45OTkgMTc2Ljk2OVMyODMuNzE4IDE3NC42MjUgMjc5LjAzIDE2OS45MzdMMTgzLjk5OSA3NC45MDZWNDgwLjk2OUMxODMuOTk5IDQ5NC4yMTkgMTczLjI0OSA1MDQuOTY5IDE1OS45OTkgNTA0Ljk2OVMxMzUuOTk5IDQ5NC4yMTkgMTM1Ljk5OSA0ODAuOTY5Vjc0LjkwNkw0MC45NjggMTY5LjkzN0MzMS41OTIgMTc5LjMxMiAxNi40MDUgMTc5LjMxMiA3LjAzIDE2OS45MzdTLTIuMzQ1IDE0NS4zNzUgNy4wMyAxMzZMMTQzLjAzIDBDMTUyLjQwNSAtOS4zNzUgMTY3LjU5MiAtOS4zNzUgMTc2Ljk2OCAwTDMxMi45NjggMTM2QzMyMi4zNDMgMTQ1LjM3NSAzMjIuMzQzIDE2MC41NjIgMzEyLjk2OCAxNjkuOTM3WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowUpLong(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M312.968 169.937C308.28 174.625 302.155 176.969 295.999 176.969S283.718 174.625 279.03 169.937L183.999 74.906V480.969C183.999 494.219 173.249 504.969 159.999 504.969S135.999 494.219 135.999 480.969V74.906L40.968 169.937C31.592 179.312 16.405 179.312 7.03 169.937S-2.345 145.375 7.03 136L143.03 0C152.405 -9.375 167.592 -9.375 176.968 0L312.968 136C322.343 145.375 322.343 160.562 312.968 169.937Z" />
        </Icon>
    </>
}