
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `folder` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/folder?s=solid folder}
 * @preview ![folder](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQgOTZIMjcyTDIwOCAzMkg0OEMyMS41IDMyIDAgNTMuNSAwIDgwVjE2MEg1MTJWMTQ0QzUxMiAxMTcuNSA0OTAuNSA5NiA0NjQgOTZaTTAgNDMyQzAgNDU4LjUgMjEuNSA0ODAgNDggNDgwSDQ2NEM0OTAuNSA0ODAgNTEyIDQ1OC41IDUxMiA0MzJWMTkySDBWNDMyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Folder(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M464 96H272L208 32H48C21.5 32 0 53.5 0 80V160H512V144C512 117.5 490.5 96 464 96ZM0 432C0 458.5 21.5 480 48 480H464C490.5 480 512 458.5 512 432V192H0V432Z" />
        </Icon>
    </>
}