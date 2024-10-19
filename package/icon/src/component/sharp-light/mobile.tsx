
import { Icon } from "../../index";

/**
 * A component that renders the `mobile` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile?s=sharp-light mobile}
 * @preview ![mobile](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgMzJsMCA0NDggMjU2IDAgMC00NDhMNjQgMzJ6TTMyIDBMNjQgMCAzMjAgMGwzMiAwIDAgMzIgMCA0NDggMCAzMi0zMiAwTDY0IDUxMmwtMzIgMCAwLTMyTDMyIDMyIDMyIDB6TTE2MCA0MDBsNjQgMCAxNiAwIDAgMzItMTYgMC02NCAwLTE2IDAgMC0zMiAxNiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Mobile: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 32l0 448 256 0 0-448L64 32zM32 0L64 0 320 0l32 0 0 32 0 448 0 32-32 0L64 512l-32 0 0-32L32 32 32 0zM160 400l64 0 16 0 0 32-16 0-64 0-16 0 0-32 16 0z" />
    </Icon>
);

export default Mobile;