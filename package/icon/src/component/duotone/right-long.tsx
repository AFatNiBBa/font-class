
import { Icon, generic } from "../../index";

/**
 * A component that renders the `right-long` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-long?s=duotone right-long}
 * @preview ![right-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIyNGwwIDY0YzAgMTcuNyAxNC4zIDMyIDMyIDMybDE2MCAwIDEyOCAwIDAtMTI4Yy05NiAwLTE5MiAwLTI4OCAwYy0xNy43IDAtMzIgMTQuMy0zMiAzMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM2MC41IDQwOS40Yy03IDYuNi0xNy4yIDguNC0yNiA0LjZzLTE0LjUtMTIuNS0xNC41LTIybDAtNzIgMC0xMjggMC03MmMwLTkuNiA1LjctMTguMiAxNC41LTIyczE5LTIgMjYgNC42bDE0NCAxMzZjNC44IDQuNSA3LjUgMTAuOCA3LjUgMTcuNHMtMi43IDEyLjktNy41IDE3LjRsLTE0NCAxMzZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const RightLong: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224l0 64c0 17.7 14.3 32 32 32l160 0 128 0 0-128c-96 0-192 0-288 0c-17.7 0-32 14.3-32 32z" />
            <path d="M360.5 409.4c-7 6.6-17.2 8.4-26 4.6s-14.5-12.5-14.5-22l0-72 0-128 0-72c0-9.6 5.7-18.2 14.5-22s19-2 26 4.6l144 136c4.8 4.5 7.5 10.8 7.5 17.4s-2.7 12.9-7.5 17.4l-144 136z" />
    </Icon>
);

export default RightLong;