
import { Icon } from "../../index";

/**
 * A component that renders the `tick` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tick?s=sharp-solid tick}
 * @preview ![tick](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgMjg4TDMyIDMySDE2MEwxMjggMjg4SDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Tick: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M64 288L32 32H160L128 288H64z" />
    </Icon>
);

export default Tick;