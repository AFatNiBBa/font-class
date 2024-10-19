
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-right-to-line` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-to-line?s=duotone arrow-right-to-line}
 * @preview ![arrow-right-to-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zODQgOTZsMCAzMjBjMCAxNy43IDE0LjMgMzIgMzIgMzJzMzItMTQuMyAzMi0zMmwwLTMyMGMwLTE3LjctMTQuMy0zMi0zMi0zMnMtMzIgMTQuMy0zMiAzMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMxMC42IDIzMy40YzEyLjUgMTIuNSAxMi41IDMyLjggMCA0NS4zbC0xMjggMTI4Yy0xMi41IDEyLjUtMzIuOCAxMi41LTQ1LjMgMHMtMTIuNS0zMi44IDAtNDUuM0wyMTAuNyAyODggMzIgMjg4Yy0xNy43IDAtMzItMTQuMy0zMi0zMnMxNC4zLTMyIDMyLTMybDE3OC43IDAtNzMuNC03My40Yy0xMi41LTEyLjUtMTIuNS0zMi44IDAtNDUuM3MzMi44LTEyLjUgNDUuMyAwbDEyOCAxMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const ArrowRightToLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M384 96l0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 288 32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l178.7 0-73.4-73.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l128 128z" />
    </Icon>
);

export default ArrowRightToLine;