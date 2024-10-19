
import { Icon } from "../../index";

/**
 * A component that renders the `info` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/info?s=sharp-light info}
 * @preview ![info](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTI4IDMybDAgNjRMNjQgOTZsMC02NCA2NCAwek0xNiAxNjBsMTYgMCA2NCAwIDE2IDAgMCAxNiAwIDI3MiA2NCAwIDE2IDAgMCAzMi0xNiAwTDE2IDQ4MCAwIDQ4MGwwLTMyIDE2IDAgNjQgMCAwLTI1Ni00OCAwLTE2IDAgMC0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Info: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M128 32l0 64L64 96l0-64 64 0zM16 160l16 0 64 0 16 0 0 16 0 272 64 0 16 0 0 32-16 0L16 480 0 480l0-32 16 0 64 0 0-256-48 0-16 0 0-32z" />
    </Icon>
);

export default Info;