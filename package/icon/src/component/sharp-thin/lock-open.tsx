
import { Icon } from "../../index";

/**
 * A component that renders the `lock-open` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-open?s=sharp-thin lock-open}
 * @preview ![lock-open](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzM2IDEyOGMwLTYxLjkgNTAuMS0xMTIgMTEyLTExMnMxMTIgNTAuMSAxMTIgMTEybDAgODggMCA4IDE2IDAgMC04IDAtODhDNTc2IDU3LjMgNTE4LjcgMCA0NDggMFMzMjAgNTcuMyAzMjAgMTI4bDAgNjRMMTYgMTkyIDAgMTkybDAgMTZMMCA0OTZsMCAxNiAxNiAwIDQxNiAwIDE2IDAgMC0xNiAwLTI4OCAwLTE2LTE2IDAtOTYgMCAwLTY0em0tMTYgODBsMTYgMCA5NiAwIDAgMjg4TDE2IDQ5NmwwLTI4OCAzMDQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const LockOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M336 128c0-61.9 50.1-112 112-112s112 50.1 112 112l0 88 0 8 16 0 0-8 0-88C576 57.3 518.7 0 448 0S320 57.3 320 128l0 64L16 192 0 192l0 16L0 496l0 16 16 0 416 0 16 0 0-16 0-288 0-16-16 0-96 0 0-64zm-16 80l16 0 96 0 0 288L16 496l0-288 304 0z" />
    </Icon>
);

export default LockOpen;