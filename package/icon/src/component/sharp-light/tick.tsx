
import { Icon } from "../../index";

/**
 * A component that renders the `tick` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tick?s=sharp-light tick}
 * @preview ![tick](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTYgMTE2LjJMODkuMyAyNTZsMTMuNCAwTDEzNiAxMTYuMiAxMzYgNjQgNTYgNjRsMCA1Mi4yek0xMzYgMzJsMzIgMCAwIDMyIDAgNTZMMTI4IDI4OGwtNjQgMEwyNCAxMjBsMC01NiAwLTMyIDMyIDAgODAgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Tick: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M56 116.2L89.3 256l13.4 0L136 116.2 136 64 56 64l0 52.2zM136 32l32 0 0 32 0 56L128 288l-64 0L24 120l0-56 0-32 32 0 80 0z" />
    </Icon>
);

export default Tick;