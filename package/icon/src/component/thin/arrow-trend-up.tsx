
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-trend-up` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-trend-up?s=thin arrow-trend-up}
 * @preview ![arrow-trend-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzYgMTA0VjI4OEM1NzYgMjkyLjQyMiA1NzIuNDA2IDI5NiA1NjggMjk2UzU2MCAyOTIuNDIyIDU2MCAyODhWMTIzLjMxMkwzMjUuNjU2IDM1Ny42NTZDMzIyLjUzMSAzNjAuNzgxIDMxNy40NjkgMzYwLjc4MSAzMTQuMzQ0IDM1Ny42NTZMMTkyIDIzNS4zMTJMMTMuNjU2IDQxMy42NTZDMTIuMDk0IDQxNS4yMTkgMTAuMDYyIDQxNiA4IDQxNlMzLjkwNiA0MTUuMjE5IDIuMzQ0IDQxMy42NTZDLTAuNzgxIDQxMC41MzEgLTAuNzgxIDQwNS40NjkgMi4zNDQgNDAyLjM0NEwxODYuMzQ0IDIxOC4zNDRDMTg5LjQ2OSAyMTUuMjE5IDE5NC41MzEgMjE1LjIxOSAxOTcuNjU2IDIxOC4zNDRMMzIwIDM0MC42ODhMNTQ4LjY4NyAxMTJIMzg0QzM3OS41OTQgMTEyIDM3NiAxMDguNDIyIDM3NiAxMDRTMzc5LjU5NCA5NiAzODQgOTZINTY4QzU3Mi40MDYgOTYgNTc2IDk5LjU3OCA1NzYgMTA0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowTrendUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M576 104V288C576 292.422 572.406 296 568 296S560 292.422 560 288V123.312L325.656 357.656C322.531 360.781 317.469 360.781 314.344 357.656L192 235.312L13.656 413.656C12.094 415.219 10.062 416 8 416S3.906 415.219 2.344 413.656C-0.781 410.531 -0.781 405.469 2.344 402.344L186.344 218.344C189.469 215.219 194.531 215.219 197.656 218.344L320 340.688L548.687 112H384C379.594 112 376 108.422 376 104S379.594 96 384 96H568C572.406 96 576 99.578 576 104Z" />
        </Icon>
    </>
}