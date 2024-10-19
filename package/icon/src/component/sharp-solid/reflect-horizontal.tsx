
import { Icon } from "../../index";

/**
 * A component that renders the `reflect-horizontal` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reflect-horizontal?s=sharp-solid reflect-horizontal}
 * @preview ![reflect-horizontal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjgwIDBMMjMyIDBsMCAyNCAwIDQ2NCAwIDI0IDQ4IDAgMC0yNCAwLTQ2NCAwLTI0ek0zMiA0MTZMMTkyIDI1NiAzMiA5NiAwIDk2IDAgNDE2bDMyIDB6TTMyMCAyNTZMNDgwIDQxNmwzMiAwIDAtMzIwLTMyIDBMMzIwIDI1NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const ReflectHorizontal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 0L232 0l0 24 0 464 0 24 48 0 0-24 0-464 0-24zM32 416L192 256 32 96 0 96 0 416l32 0zM320 256L480 416l32 0 0-320-32 0L320 256z" />
    </Icon>
);

export default ReflectHorizontal;