
import { Icon, generic } from "../../index";

/**
 * A component that renders the `floppy-disk` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/floppy-disk?s=sharp-duotone-solid floppy-disk}
 * @preview ![floppy-disk](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNjQgMCA0NDhsMCAzMiAzMiAwIDM4NCAwIDMyIDAgMC0zMiAwLTI4OCAwLTEzLjMtOS40LTkuNC05Ni05NkwzMzMuMyAzMiAzMjAgMzIgMzIgMzIgMCAzMnpNNjQgOTZsMjU2IDAgMCAxMjhMNjQgMjI0IDY0IDk2ek0yODggMzUyYTY0IDY0IDAgMSAxIC0xMjggMCA2NCA2NCAwIDEgMSAxMjggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIyNCAyODhhNjQgNjQgMCAxIDAgMCAxMjggNjQgNjQgMCAxIDAgMC0xMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const FloppyDisk: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 64 0 448l0 32 32 0 384 0 32 0 0-32 0-288 0-13.3-9.4-9.4-96-96L333.3 32 320 32 32 32 0 32zM64 96l256 0 0 128L64 224 64 96zM288 352a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
            <path d="M224 288a64 64 0 1 0 0 128 64 64 0 1 0 0-128z" />
    </Icon>
);

export default FloppyDisk;