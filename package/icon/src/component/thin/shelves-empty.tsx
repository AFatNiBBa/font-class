
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `shelves-empty` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/shelves-empty?s=thin shelves-empty}
 * @preview ![shelves-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MDAgMEM1OTUuNTc4IDAgNTkyIDMuNTk0IDU5MiA4VjE3Nkg0OFY4QzQ4IDMuNTk0IDQ0LjQyMiAwIDQwIDBTMzIgMy41OTQgMzIgOFY1MDRDMzIgNTA4LjQwNiAzNS41NzggNTEyIDQwIDUxMlM0OCA1MDguNDA2IDQ4IDUwNFY0NDhINTkyVjUwNEM1OTIgNTA4LjQwNiA1OTUuNTc4IDUxMiA2MDAgNTEyUzYwOCA1MDguNDA2IDYwOCA1MDRWOEM2MDggMy41OTQgNjA0LjQyMiAwIDYwMCAwWk01OTIgNDMySDQ4VjE5Mkg1OTJWNDMyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ShelvesEmpty(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M600 0C595.578 0 592 3.594 592 8V176H48V8C48 3.594 44.422 0 40 0S32 3.594 32 8V504C32 508.406 35.578 512 40 512S48 508.406 48 504V448H592V504C592 508.406 595.578 512 600 512S608 508.406 608 504V8C608 3.594 604.422 0 600 0ZM592 432H48V192H592V432Z" />
        </Icon>
    </>
}