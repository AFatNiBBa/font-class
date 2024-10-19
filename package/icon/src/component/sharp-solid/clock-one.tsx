
import { Icon } from "../../index";

/**
 * A component that renders the `clock-one` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-one?s=sharp-solid clock-one}
 * @preview ![clock-one](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDUxMkEyNTYgMjU2IDAgMSAwIDI1NiAwYTI1NiAyNTYgMCAxIDAgMCA1MTJ6bTI0LTM5MmwwIDU2LjcgMjAtMzAgMTMuMy0yMCAzOS45IDI2LjYtMTMuMyAyMC02NCA5NkwyMzIgMjU2bDAtMTM2IDAtMjQgNDggMCAwIDI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ClockOne: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm24-392l0 56.7 20-30 13.3-20 39.9 26.6-13.3 20-64 96L232 256l0-136 0-24 48 0 0 24z" />
    </Icon>
);

export default ClockOne;