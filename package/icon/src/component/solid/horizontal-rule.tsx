
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `horizontal-rule` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/horizontal-rule?s=solid horizontal-rule}
 * @preview ![horizontal-rule](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02NDAgMjU1Ljg0MUM2NDAgMjc3LjkyOSA2MjEuOTI5IDI5NiA1OTkuODQ0IDI5NkgzOS44NDFDMTcuOTMgMjk2IDAgMjc4LjA3IDAgMjU2LjE1NkMwIDIzNC4wNzEgMTguMDcxIDIxNiA0MC4xNTYgMjE2SDYwMC4xNTlDNjIyLjE2MyAyMTYgNjQwIDIzMy44MzcgNjQwIDI1NS44NDFaIi8+PC9zdmc+|width=32|height=32)
 */
export default function HorizontalRule(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M640 255.841C640 277.929 621.929 296 599.844 296H39.841C17.93 296 0 278.07 0 256.156C0 234.071 18.071 216 40.156 216H600.159C622.163 216 640 233.837 640 255.841Z" />
        </Icon>
    </>
}