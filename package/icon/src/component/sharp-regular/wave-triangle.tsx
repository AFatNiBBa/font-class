
import { Icon } from "../../index";

/**
 * A component that renders the `wave-triangle` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wave-triangle?s=sharp-regular wave-triangle}
 * @preview ![wave-triangle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTc2LjEgMTUuMUwxOTUuNSA0MiA0NjQuMSA0MTUuMSA1OTYuNiAyMzMuOGwzOC44IDI4LjMtMTUyIDIwOC0xOS41IDI2LjdMNDQ0LjUgNDcwIDE3NS45IDk2LjkgNDMuNCAyNzguMiA0LjYgMjQ5LjhsMTUyLTIwOCAxOS41LTI2Ljd6Ii8+PC9zdmc+|width=32|height=32)
 */
const WaveTriangle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M176.1 15.1L195.5 42 464.1 415.1 596.6 233.8l38.8 28.3-152 208-19.5 26.7L444.5 470 175.9 96.9 43.4 278.2 4.6 249.8l152-208 19.5-26.7z" />
    </Icon>
);

export default WaveTriangle;