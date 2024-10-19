
import { Icon } from "../../index";

/**
 * A component that renders the `stop` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stop?s=sharp-thin stop}
 * @preview ![stop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzY4IDgwbDAgMzUyTDE2IDQzMiAxNiA4MGwzNTIgMHpNMTYgNjRMMCA2NCAwIDgwIDAgNDMybDAgMTYgMTYgMCAzNTIgMCAxNiAwIDAtMTYgMC0zNTIgMC0xNi0xNiAwTDE2IDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Stop: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M368 80l0 352L16 432 16 80l352 0zM16 64L0 64 0 80 0 432l0 16 16 0 352 0 16 0 0-16 0-352 0-16-16 0L16 64z" />
    </Icon>
);

export default Stop;