
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bed-empty` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bed-empty?s=thin bed-empty}
 * @preview ![bed-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MjggMTkySDE2VjQwQzE2IDM1LjU5NCAxMi40MjIgMzIgOCAzMlMwIDM1LjU5NCAwIDQwVjQ3MkMwIDQ3Ni40MDYgMy41NzggNDgwIDggNDgwUzE2IDQ3Ni40MDYgMTYgNDcyVjQxNkg2MjRWNDcyQzYyNCA0NzYuNDA2IDYyNy41NzggNDgwIDYzMiA0ODBTNjQwIDQ3Ni40MDYgNjQwIDQ3MlYzMDRDNjQwIDI0Mi4xMjUgNTg5Ljg3NSAxOTIgNTI4IDE5MlpNNjI0IDQwMEgxNlYzMzZINjI0VjQwMFpNNjI0IDMyMEgxNlYyMDhINTI4QzU4MC45MzQgMjA4IDYyNCAyNTEuMDY0IDYyNCAzMDRWMzIwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BedEmpty(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M528 192H16V40C16 35.594 12.422 32 8 32S0 35.594 0 40V472C0 476.406 3.578 480 8 480S16 476.406 16 472V416H624V472C624 476.406 627.578 480 632 480S640 476.406 640 472V304C640 242.125 589.875 192 528 192ZM624 400H16V336H624V400ZM624 320H16V208H528C580.934 208 624 251.064 624 304V320Z" />
        </Icon>
    </>
}