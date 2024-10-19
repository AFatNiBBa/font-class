
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `f` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/f?s=thin f}
 * @preview ![f](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgNDBDMzIwIDQ0LjQwNiAzMTYuNDIyIDQ4IDMxMiA0OEgxNlYyNTYuNjI1SDI0OEMyNTIuNDIyIDI1Ni42MjUgMjU2IDI2MC4yMTkgMjU2IDI2NC42MjVTMjUyLjQyMiAyNzIuNjI1IDI0OCAyNzIuNjI1SDE2VjQ3MkMxNiA0NzYuNDA2IDEyLjQyMiA0ODAgOCA0ODBTMCA0NzYuNDA2IDAgNDcyVjQwQzAgMzUuNTk0IDMuNTc4IDMyIDggMzJIMzEyQzMxNi40MjIgMzIgMzIwIDM1LjU5NCAzMjAgNDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function F(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M320 40C320 44.406 316.422 48 312 48H16V256.625H248C252.422 256.625 256 260.219 256 264.625S252.422 272.625 248 272.625H16V472C16 476.406 12.422 480 8 480S0 476.406 0 472V40C0 35.594 3.578 32 8 32H312C316.422 32 320 35.594 320 40Z" />
        </Icon>
    </>
}