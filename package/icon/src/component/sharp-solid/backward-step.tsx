
import { Icon } from "../../index";

/**
 * A component that renders the `backward-step` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backward-step?s=sharp-solid backward-step}
 * @preview ![backward-step](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgOTZsMC0zMkwwIDY0IDAgOTYgMCA0MTZsMCAzMiA2NCAwIDAtMzIgMC0xNjBMMzIwIDQ0OGwwLTM4NEw2NCAyNTYgNjQgOTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const BackwardStep: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M64 96l0-32L0 64 0 96 0 416l0 32 64 0 0-32 0-160L320 448l0-384L64 256 64 96z" />
    </Icon>
);

export default BackwardStep;