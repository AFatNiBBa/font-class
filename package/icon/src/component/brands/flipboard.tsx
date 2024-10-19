
import { Icon } from "../../index";

/**
 * A component that renders the `flipboard` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flipboard?s=brands flipboard}
 * @preview ![flipboard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAzMnY0NDhoNDQ4VjMySDB6bTM1OC40IDE3OS4yaC04OS42djg5LjZoLTg5LjZ2ODkuNkg4OS42VjEyMS42aDI2OC44djg5LjZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Flipboard: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32v448h448V32H0zm358.4 179.2h-89.6v89.6h-89.6v89.6H89.6V121.6h268.8v89.6z" />
    </Icon>
);

export default Flipboard;