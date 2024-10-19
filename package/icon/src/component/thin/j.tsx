
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `j` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/j?s=thin j}
 * @preview ![j](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjAgNDgwQzcxLjc4MSA0ODAgMCA0MDguMjE5IDAgMzIwVjI2NEMwIDI1OS41OTQgMy41OTQgMjU2IDggMjU2UzE2IDI1OS41OTQgMTYgMjY0VjMyMEMxNiAzOTkuNDA2IDgwLjU5NCA0NjQgMTYwIDQ2NFMzMDQgMzk5LjQwNiAzMDQgMzIwVjQwQzMwNCAzNS41OTQgMzA3LjU5NCAzMiAzMTIgMzJTMzIwIDM1LjU5NCAzMjAgNDBWMzIwQzMyMCA0MDguMjE5IDI0OC4yMTkgNDgwIDE2MCA0ODBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function J(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M160 480C71.781 480 0 408.219 0 320V264C0 259.594 3.594 256 8 256S16 259.594 16 264V320C16 399.406 80.594 464 160 464S304 399.406 304 320V40C304 35.594 307.594 32 312 32S320 35.594 320 40V320C320 408.219 248.219 480 160 480Z" />
        </Icon>
    </>
}