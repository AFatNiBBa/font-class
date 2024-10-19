
import { Icon } from "../../index";

/**
 * A component that renders the `tick` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tick?s=sharp-thin tick}
 * @preview ![tick](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDggMTEwLjJMODQuOCAyNzJsMjIuNSAwTDE0NCAxMTAuMiAxNDQgNDggNDggNDhsMCA2Mi4yek0xNDQgMzJsMTYgMCAwIDE2IDAgNjRMMTIwIDI4OGwtNDggMEwzMiAxMTJsMC02NCAwLTE2IDE2IDAgOTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Tick: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M48 110.2L84.8 272l22.5 0L144 110.2 144 48 48 48l0 62.2zM144 32l16 0 0 16 0 64L120 288l-48 0L32 112l0-64 0-16 16 0 96 0z" />
    </Icon>
);

export default Tick;