
import { Icon } from "../../index";

/**
 * A component that renders the `xmark` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/xmark?s=sharp-regular xmark}
 * @preview ![xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzQ1IDEzN2wxNy0xN0wzMjggODYuMWwtMTcgMTctMTE5IDExOUw3MyAxMDNsLTE3LTE3TDIyLjEgMTIwbDE3IDE3IDExOSAxMTlMMzkgMzc1bC0xNyAxN0w1NiA0MjUuOWwxNy0xNyAxMTktMTE5TDMxMSA0MDlsMTcgMTdMMzYxLjkgMzkybC0xNy0xNy0xMTktMTE5TDM0NSAxMzd6Ii8+PC9zdmc+|width=32|height=32)
 */
const Xmark: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M345 137l17-17L328 86.1l-17 17-119 119L73 103l-17-17L22.1 120l17 17 119 119L39 375l-17 17L56 425.9l17-17 119-119L311 409l17 17L361.9 392l-17-17-119-119L345 137z" />
    </Icon>
);

export default Xmark;