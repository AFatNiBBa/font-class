
import { Icon } from "../../index";

/**
 * A component that renders the `heart-half` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-half?s=sharp-solid heart-half}
 * @preview ![heart-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzkuOCAyNjMuOEwyNTYgNDgwVjk2TDIzMS44IDcxLjhjLTI1LjUtMjUuNS02MC0zOS44LTk2LTM5LjhDNjAuOCAzMiAwIDkyLjggMCAxNjcuOGMwIDM2IDE0LjMgNzAuNSAzOS44IDk2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HeartHalf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M39.8 263.8L256 480V96L231.8 71.8c-25.5-25.5-60-39.8-96-39.8C60.8 32 0 92.8 0 167.8c0 36 14.3 70.5 39.8 96z" />
    </Icon>
);

export default HeartHalf;