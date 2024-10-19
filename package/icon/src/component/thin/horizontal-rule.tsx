
import { Icon } from "../../index";

/**
 * A component that renders the `horizontal-rule` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/horizontal-rule?s=thin horizontal-rule}
 * @preview ![horizontal-rule](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02NDAgMjU2QzY0MCAyNjAuNDA2IDYzNi40MDYgMjY0IDYzMiAyNjRIOEMzLjU5NCAyNjQgMCAyNjAuNDA2IDAgMjU2UzMuNTk0IDI0OCA4IDI0OEg2MzJDNjM2LjQwNiAyNDggNjQwIDI1MS41OTQgNjQwIDI1NloiLz48L3N2Zz4=|width=32|height=32)
 */
const HorizontalRule: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M640 256C640 260.406 636.406 264 632 264H8C3.594 264 0 260.406 0 256S3.594 248 8 248H632C636.406 248 640 251.594 640 256Z" />
    </Icon>
);

export default HorizontalRule;