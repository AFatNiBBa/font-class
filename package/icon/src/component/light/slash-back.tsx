
import { Icon } from "../../index";

/**
 * A component that renders the `slash-back` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slash-back?s=light slash-back}
 * @preview ![slash-back](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNy44IDIuM2MtNy42IDQuNS0xMCAxNC40LTUuNSAyMmwyODggNDgwYzQuNSA3LjYgMTQuNCAxMCAyMiA1LjVzMTAtMTQuNCA1LjUtMjEuOUwyOS43IDcuOGMtNC41LTcuNi0xNC40LTEwLTIyLTUuNXoiLz48L3N2Zz4=|width=32|height=32)
 */
const SlashBack: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M7.8 2.3c-7.6 4.5-10 14.4-5.5 22l288 480c4.5 7.6 14.4 10 22 5.5s10-14.4 5.5-21.9L29.7 7.8c-4.5-7.6-14.4-10-22-5.5z" />
    </Icon>
);

export default SlashBack;