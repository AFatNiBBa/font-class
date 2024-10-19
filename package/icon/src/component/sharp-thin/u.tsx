
import { Icon } from "../../index";

/**
 * A component that renders the `u` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/u?s=sharp-thin u}
 * @preview ![u](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYgMzJsMCA4IDAgMjQ4YzAgOTcuMiA3OC44IDE3NiAxNzYgMTc2czE3Ni03OC44IDE3Ni0xNzZsMC0yNDggMC04IDE2IDAgMCA4IDAgMjQ4YzAgMTA2LTg2IDE5Mi0xOTIgMTkyUzAgMzk0IDAgMjg4TDAgNDBsMC04IDE2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const U: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 32l0 8 0 248c0 97.2 78.8 176 176 176s176-78.8 176-176l0-248 0-8 16 0 0 8 0 248c0 106-86 192-192 192S0 394 0 288L0 40l0-8 16 0z" />
    </Icon>
);

export default U;