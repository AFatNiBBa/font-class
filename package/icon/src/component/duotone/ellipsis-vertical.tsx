
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ellipsis-vertical` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis-vertical?s=duotone ellipsis-vertical}
 * @preview ![ellipsis-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik04IDI1NmE1NiA1NiAwIDEgMCAxMTIgMEE1NiA1NiAwIDEgMCA4IDI1NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTEyMCA5NkE1NiA1NiAwIDEgMCA4IDk2YTU2IDU2IDAgMSAwIDExMiAwem0wIDMyMEE1NiA1NiAwIDEgMCA4IDQxNmE1NiA1NiAwIDEgMCAxMTIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const EllipsisVertical: typeof Icon = x => (
    <Icon viewBox="0 0 128 512" {...x}>
        <path class={generic.secondary} d="M8 256a56 56 0 1 0 112 0A56 56 0 1 0 8 256z" />
            <path d="M120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0zm0 320A56 56 0 1 0 8 416a56 56 0 1 0 112 0z" />
    </Icon>
);

export default EllipsisVertical;