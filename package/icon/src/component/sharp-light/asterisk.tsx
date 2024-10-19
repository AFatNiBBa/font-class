
import { Icon } from "../../index";

/**
 * A component that renders the `asterisk` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/asterisk?s=sharp-light asterisk}
 * @preview ![asterisk](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjA4IDMybDAgMTYgMCAxNzguOSAxNTEuNC05Ni40IDE3LjIgMjdMMjIxLjggMjU2bDE1NC44IDk4LjUtMTcuMiAyN0wyMDggMjg1LjEgMjA4IDQ2NGwwIDE2LTMyIDAgMC0xNiAwLTE3OC45TDI0LjYgMzgxLjVsLTE3LjItMjdMMTYyLjIgMjU2IDcuNCAxNTcuNWwxNy4yLTI3TDE3NiAyMjYuOSAxNzYgNDhsMC0xNiAzMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Asterisk: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M208 32l0 16 0 178.9 151.4-96.4 17.2 27L221.8 256l154.8 98.5-17.2 27L208 285.1 208 464l0 16-32 0 0-16 0-178.9L24.6 381.5l-17.2-27L162.2 256 7.4 157.5l17.2-27L176 226.9 176 48l0-16 32 0z" />
    </Icon>
);

export default Asterisk;