
import { Icon } from "../../index";

/**
 * A component that renders the `sailboat` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sailboat?s=sharp-regular sailboat}
 * @preview ![sailboat](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDMyMGwyNzIgMEwyNTYgMGwwIDMyMHpNNTYgMzUyTDAgMzUybDI4LjggNDhMOTYgNTEybDM4NCAwIDY3LjItMTEyTDU3NiAzNTJsLTU2IDBMNTYgMzUyem0yOC44IDQ4bDQwNi40IDAtMzguNCA2NC0zMjkuNiAwTDg0LjggNDAwek0yMjQgNjRMNDggMzIwbDE3NiAwIDAtMjU2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Sailboat: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M256 320l272 0L256 0l0 320zM56 352L0 352l28.8 48L96 512l384 0 67.2-112L576 352l-56 0L56 352zm28.8 48l406.4 0-38.4 64-329.6 0L84.8 400zM224 64L48 320l176 0 0-256z" />
    </Icon>
);

export default Sailboat;