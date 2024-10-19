
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `signal-fair` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/signal-fair?s=thin signal-fair}
 * @preview ![signal-fair](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMiAzODRDMjcuNTk0IDM4NCAyNCAzODcuNTk0IDI0IDM5MlY1MDRDMjQgNTA4LjQwNiAyNy41OTQgNTEyIDMyIDUxMlM0MCA1MDguNDA2IDQwIDUwNFYzOTJDNDAgMzg3LjU5NCAzNi40MDYgMzg0IDMyIDM4NFpNMTYwIDI4OEMxNTUuNTk0IDI4OCAxNTIgMjkxLjU5NCAxNTIgMjk2VjUwNEMxNTIgNTA4LjQwNiAxNTUuNTk0IDUxMiAxNjAgNTEyUzE2OCA1MDguNDA2IDE2OCA1MDRWMjk2QzE2OCAyOTEuNTk0IDE2NC40MDYgMjg4IDE2MCAyODhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SignalFair(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M32 384C27.594 384 24 387.594 24 392V504C24 508.406 27.594 512 32 512S40 508.406 40 504V392C40 387.594 36.406 384 32 384ZM160 288C155.594 288 152 291.594 152 296V504C152 508.406 155.594 512 160 512S168 508.406 168 504V296C168 291.594 164.406 288 160 288Z" />
        </Icon>
    </>
}