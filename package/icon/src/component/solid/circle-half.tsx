
import { Icon } from "../../index";

/**
 * A component that renders the `circle-half` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-half?s=solid circle-half}
 * @preview ![circle-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDMyYzAtMTcuNy0xNC40LTMyLjItMzEuOS0zMEM5Ny44IDE3LjcgMCAxMjUuNCAwIDI1NlM5Ny44IDQ5NC4zIDIyNC4xIDUxMGMxNy41IDIuMiAzMS45LTEyLjQgMzEuOS0zMGwwLTQ0OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleHalf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32c0-17.7-14.4-32.2-31.9-30C97.8 17.7 0 125.4 0 256S97.8 494.3 224.1 510c17.5 2.2 31.9-12.4 31.9-30l0-448z" />
    </Icon>
);

export default CircleHalf;