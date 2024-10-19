
import { Icon } from "../../index";

/**
 * A component that renders the `clock-five` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-five?s=light clock-five}
 * @preview ![clock-five](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDgwIDI1NkEyMjQgMjI0IDAgMSAwIDMyIDI1NmEyMjQgMjI0IDAgMSAwIDQ0OCAwek0wIDI1NmEyNTYgMjU2IDAgMSAxIDUxMiAwQTI1NiAyNTYgMCAxIDEgMCAyNTZ6TTI3MiAxMTJsMCAxMzkuMiA2MS4zIDkyYzQuOSA3LjQgMi45IDE3LjMtNC40IDIyLjJzLTE3LjMgMi45LTIyLjItNC40bC02NC05NmMtMS44LTIuNi0yLjctNS43LTIuNy04LjlsMC0xNDRjMC04LjggNy4yLTE2IDE2LTE2czE2IDcuMiAxNiAxNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const ClockFive: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM272 112l0 139.2 61.3 92c4.9 7.4 2.9 17.3-4.4 22.2s-17.3 2.9-22.2-4.4l-64-96c-1.8-2.6-2.7-5.7-2.7-8.9l0-144c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </Icon>
);

export default ClockFive;