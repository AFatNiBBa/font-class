
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `genderless` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/genderless?s=light genderless}
 * @preview ![genderless](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgMTEyQzI3MS40MDIgMTEyIDMzNiAxNzYuNTk4IDMzNiAyNTZTMjcxLjQwMiA0MDAgMTkyIDQwMFM0OCAzMzUuNDAyIDQ4IDI1NlMxMTIuNTk4IDExMiAxOTIgMTEyTTE5MiA4MEM5NC43OTkgODAgMTYgMTU4Ljc5OSAxNiAyNTZTOTQuNzk5IDQzMiAxOTIgNDMyUzM2OCAzNTMuMjAxIDM2OCAyNTZTMjg5LjIwMSA4MCAxOTIgODBMMTkyIDgwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Genderless(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192 112C271.402 112 336 176.598 336 256S271.402 400 192 400S48 335.402 48 256S112.598 112 192 112M192 80C94.799 80 16 158.799 16 256S94.799 432 192 432S368 353.201 368 256S289.201 80 192 80L192 80Z" />
        </Icon>
    </>
}