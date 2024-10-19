
import { Icon, generic } from "../../index";

/**
 * A component that renders the `id-card` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/id-card?s=sharp-duotone-solid id-card}
 * @preview ![id-card](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDEyOEwwIDQ4MGw1NzYgMCAwLTM1MkwwIDEyOHpNNjQgNDE2bDMyLTY0IDE2MCAwIDMyIDY0TDY0IDQxNnpNMjQwIDI1NmE2NCA2NCAwIDEgMSAtMTI4IDAgNjQgNjQgMCAxIDEgMTI4IDB6bTExMi02NGwxNiAwIDEyOCAwIDE2IDAgMCAzMi0xNiAwLTEyOCAwLTE2IDAgMC0zMnptMCA2NGwxNiAwIDEyOCAwIDE2IDAgMCAzMi0xNiAwLTEyOCAwLTE2IDAgMC0zMnptMCA2NGwxNiAwIDEyOCAwIDE2IDAgMCAzMi0xNiAwLTEyOCAwLTE2IDAgMC0zMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTU3NiAzMkwwIDMybDAgOTYgNTc2IDAgMC05NnpNMjQwIDI1NmE2NCA2NCAwIDEgMCAtMTI4IDAgNjQgNjQgMCAxIDAgMTI4IDB6bTE2IDk2TDk2IDM1MiA2NCA0MTZsMjI0IDAtMzItNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const IdCard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 128L0 480l576 0 0-352L0 128zM64 416l32-64 160 0 32 64L64 416zM240 256a64 64 0 1 1 -128 0 64 64 0 1 1 128 0zm112-64l16 0 128 0 16 0 0 32-16 0-128 0-16 0 0-32zm0 64l16 0 128 0 16 0 0 32-16 0-128 0-16 0 0-32zm0 64l16 0 128 0 16 0 0 32-16 0-128 0-16 0 0-32z" />
            <path d="M576 32L0 32l0 96 576 0 0-96zM240 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm16 96L96 352 64 416l224 0-32-64z" />
    </Icon>
);

export default IdCard;