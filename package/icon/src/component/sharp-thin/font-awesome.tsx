
import { Icon } from "../../index";

/**
 * A component that renders the `font-awesome` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/font-awesome?s=sharp-thin font-awesome}
 * @preview ![font-awesome](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTAyLjggNTZBMzguOCAzOC44IDAgMSAwIDI1LjIgNTZhMzguOCAzOC44IDAgMSAwIDc3LjUgMHpNNjQgMTEyczAgMCAwIDBzMCAwIDAgMGwtMTYgMCAwIDMyMCA0MzIgMCAwLTEyLjZMNDE3LjQgMjc4LjVsLTIuOS02LjUgMi45LTYuNUw0ODAgMTI0LjZsMC0xMi42TDY0IDExMnpNMzIgMTAyQzE3LjUgOTEuOCA4IDc1IDggNTZDOCAyNS4xIDMzLjEgMCA2NCAwczU2IDI1LjEgNTYgNTZjMCAxNS43LTYuNCAyOS44LTE2LjggNDBMNDgwIDk2bDE2IDAgMCAxNiAwIDE2TDQzMiAyNzJsNjQgMTQ0IDAgMTYgMCAxNi0xNiAwTDQ4IDQ0OGwwIDY0LTE2IDAgMC02NCAwLTE2IDAtMzIwIDAtMTB6Ii8+PC9zdmc+|width=32|height=32)
 */
const FontAwesome: typeof Icon = x => (
    <Icon {...x}>
        <path d="M102.8 56A38.8 38.8 0 1 0 25.2 56a38.8 38.8 0 1 0 77.5 0zM64 112s0 0 0 0s0 0 0 0l-16 0 0 320 432 0 0-12.6L417.4 278.5l-2.9-6.5 2.9-6.5L480 124.6l0-12.6L64 112zM32 102C17.5 91.8 8 75 8 56C8 25.1 33.1 0 64 0s56 25.1 56 56c0 15.7-6.4 29.8-16.8 40L480 96l16 0 0 16 0 16L432 272l64 144 0 16 0 16-16 0L48 448l0 64-16 0 0-64 0-16 0-320 0-10z" />
    </Icon>
);

export default FontAwesome;