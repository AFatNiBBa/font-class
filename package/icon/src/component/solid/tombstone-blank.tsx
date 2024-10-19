
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tombstone-blank` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tombstone-blank?s=solid tombstone-blank}
 * @preview ![tombstone-blank](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTYgMTkyQzQxNiA4NiAzMzAgMCAyMjQgMEMxMTggMCAzMiA4NiAzMiAxOTJWNDE2SDQxNlYxOTJaTTQzMiA0NDhIMTZDNy4xMjUgNDQ4IDAgNDU1LjEyNSAwIDQ2NFY0OTZDMCA1MDQuODc1IDcuMTI1IDUxMiAxNiA1MTJINDMyQzQ0MC44NzUgNTEyIDQ0OCA1MDQuODc1IDQ0OCA0OTZWNDY0QzQ0OCA0NTUuMTI1IDQ0MC44NzUgNDQ4IDQzMiA0NDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function TombstoneBlank(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M416 192C416 86 330 0 224 0C118 0 32 86 32 192V416H416V192ZM432 448H16C7.125 448 0 455.125 0 464V496C0 504.875 7.125 512 16 512H432C440.875 512 448 504.875 448 496V464C448 455.125 440.875 448 432 448Z" />
        </Icon>
    </>
}