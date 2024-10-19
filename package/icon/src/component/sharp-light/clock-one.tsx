
import { Icon } from "../../index";

/**
 * A component that renders the `clock-one` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-one?s=sharp-light clock-one}
 * @preview ![clock-one](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDgwIDI1NkEyMjQgMjI0IDAgMSAwIDMyIDI1NmEyMjQgMjI0IDAgMSAwIDQ0OCAwek0wIDI1NmEyNTYgMjU2IDAgMSAxIDUxMiAwQTI1NiAyNTYgMCAxIDEgMCAyNTZ6TTI3MiAxMTJsMCA5MS4yIDM0LjctNTIgOC45LTEzLjMgMjYuNiAxNy44LTguOSAxMy4zLTY0IDk2TDI0MCAyNTZsMC0xNDQgMC0xNiAzMiAwIDAgMTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const ClockOne: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM272 112l0 91.2 34.7-52 8.9-13.3 26.6 17.8-8.9 13.3-64 96L240 256l0-144 0-16 32 0 0 16z" />
    </Icon>
);

export default ClockOne;