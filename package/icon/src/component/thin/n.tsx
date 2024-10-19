
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `n` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/n?s=thin n}
 * @preview ![n](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzYgNDgwQzM3My42ODggNDgwIDM3MS40NjkgNDc5IDM2OS45MDYgNDc3LjE4OEwxNiA2MS43MTlWNDcyQzE2IDQ3Ni40MDYgMTIuNDA2IDQ4MCA4IDQ4MFMwIDQ3Ni40MDYgMCA0NzJWNDBDMCAzNi42NTYgMi4wOTQgMzMuNjU2IDUuMjUgMzIuNUM4LjM0NCAzMS4zNDQgMTEuOTA2IDMyLjI4MSAxNC4wOTQgMzQuODEyTDM2OCA0NTAuMjgxVjQwQzM2OCAzNS41OTQgMzcxLjU5NCAzMiAzNzYgMzJTMzg0IDM1LjU5NCAzODQgNDBWNDcyQzM4NCA0NzUuMzQ0IDM4MS45MDYgNDc4LjM0NCAzNzguNzUgNDc5LjVDMzc3Ljg3NSA0NzkuODQ0IDM3Ni45MzggNDgwIDM3NiA0ODBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function N(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M376 480C373.688 480 371.469 479 369.906 477.188L16 61.719V472C16 476.406 12.406 480 8 480S0 476.406 0 472V40C0 36.656 2.094 33.656 5.25 32.5C8.344 31.344 11.906 32.281 14.094 34.812L368 450.281V40C368 35.594 371.594 32 376 32S384 35.594 384 40V472C384 475.344 381.906 478.344 378.75 479.5C377.875 479.844 376.938 480 376 480Z" />
        </Icon>
    </>
}