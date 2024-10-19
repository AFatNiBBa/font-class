
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `location-minus` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/location-minus?s=solid location-minus}
 * @preview ![location-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgMEM4NS45NjkgMCAwIDg1Ljk2OSAwIDE5Mi4wMDJDMCAyNjkuNDA4IDI2Ljk2OSAyOTEuMDMzIDE3Mi4yODEgNTAxLjY3NkMxODEuODEzIDUxNS40NDEgMjAyLjE4OCA1MTUuNDQxIDIxMS43MTkgNTAxLjY3NkMzNTcuMDMxIDI5MS4wMzMgMzg0IDI2OS40MDggMzg0IDE5Mi4wMDJDMzg0IDg1Ljk2OSAyOTguMDMxIDAgMTkyIDBaTTI3Mi4wMDIgMjE1Ljk5OEgxMTEuOTk4Qzk4LjczIDIxNS45OTggODggMjA1LjI1NiA4OCAxOTJDODggMTc4Ljc0MiA5OC43MzggMTY4LjAwMiAxMTEuOTk4IDE2OC4wMDJIMjcyLjAwMkMyODUuMjYyIDE2OC4wMDIgMjk2IDE3OC43NDIgMjk2IDE5MlMyODUuMjYyIDIxNS45OTggMjcyLjAwMiAyMTUuOTk4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function LocationMinus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192 0C85.969 0 0 85.969 0 192.002C0 269.408 26.969 291.033 172.281 501.676C181.813 515.441 202.188 515.441 211.719 501.676C357.031 291.033 384 269.408 384 192.002C384 85.969 298.031 0 192 0ZM272.002 215.998H111.998C98.73 215.998 88 205.256 88 192C88 178.742 98.738 168.002 111.998 168.002H272.002C285.262 168.002 296 178.742 296 192S285.262 215.998 272.002 215.998Z" />
        </Icon>
    </>
}