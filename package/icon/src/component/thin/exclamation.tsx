
import { Icon } from "../../index";

/**
 * A component that renders the `exclamation` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/exclamation?s=thin exclamation}
 * @preview ![exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNzIgNDBjMC00LjQtMy42LTgtOC04cy04IDMuNi04IDhsMCAzMjhjMCA0LjQgMy42IDggOCA4czgtMy42IDgtOEw3MiA0MHpNNjQgNDY0YTE2IDE2IDAgMSAwIDAtMzIgMTYgMTYgMCAxIDAgMCAzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Exclamation: typeof Icon = x => (
    <Icon viewBox="0 0 128 512" {...x}>
        <path d="M72 40c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 328c0 4.4 3.6 8 8 8s8-3.6 8-8L72 40zM64 464a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Exclamation;