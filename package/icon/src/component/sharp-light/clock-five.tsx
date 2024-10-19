
import { Icon } from "../../index";

/**
 * A component that renders the `clock-five` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-five?s=sharp-light clock-five}
 * @preview ![clock-five](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDgwIDI1NkEyMjQgMjI0IDAgMSAwIDMyIDI1NmEyMjQgMjI0IDAgMSAwIDQ0OCAwek0wIDI1NmEyNTYgMjU2IDAgMSAxIDUxMiAwQTI1NiAyNTYgMCAxIDEgMCAyNTZ6TTI3MiAxMTJsMCAxMzkuMiA2MS4zIDkyIDguOSAxMy4zLTI2LjYgMTcuOC04LjktMTMuMy02NC05Ni0yLjctNCAwLTQuOCAwLTE0NCAwLTE2IDMyIDAgMCAxNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const ClockFive: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM272 112l0 139.2 61.3 92 8.9 13.3-26.6 17.8-8.9-13.3-64-96-2.7-4 0-4.8 0-144 0-16 32 0 0 16z" />
    </Icon>
);

export default ClockFive;