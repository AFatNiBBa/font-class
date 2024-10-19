
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-small-big` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-small-big?s=sharp-duotone-solid arrow-up-small-big}
 * @preview ![arrow-up-small-big](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMjAgMzJsMCAxNjAgMTYwIDAgMC0xNjBMMzIwIDMyem0wIDIyNGwwIDIyNCAyMjQgMCAwLTIyNC0yMjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE2MCAzMi40bDIzLjcgMjYgODAgODggMjEuNSAyMy43LTQ3LjQgNDMuMS0yMS41LTIzLjdMMTkyIDE2Mi44IDE5MiA0NDhsMCAzMi02NCAwIDAtMzIgMC0yODUuMi0yNC4zIDI2LjhMODIuMiAyMTMuMiAzNC44IDE3MC4ybDIxLjUtMjMuNyA4MC04OCAyMy43LTI2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ArrowUpSmallBig: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M320 32l0 160 160 0 0-160L320 32zm0 224l0 224 224 0 0-224-224 0z" />
            <path d="M160 32.4l23.7 26 80 88 21.5 23.7-47.4 43.1-21.5-23.7L192 162.8 192 448l0 32-64 0 0-32 0-285.2-24.3 26.8L82.2 213.2 34.8 170.2l21.5-23.7 80-88 23.7-26z" />
    </Icon>
);

export default ArrowUpSmallBig;