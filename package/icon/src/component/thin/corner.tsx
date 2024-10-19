
import { Icon } from "../../index";

/**
 * A component that renders the `corner` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/corner?s=thin corner}
 * @preview ![corner](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAxODRjMC00LjQgMy42LTggOC04bDQwOCAwYzE3LjcgMCAzMiAxNC4zIDMyIDMybDAgMTY4YzAgNC40LTMuNiA4LTggOHMtOC0zLjYtOC04bDAtMTY4YzAtOC44LTcuMi0xNi0xNi0xNkw4IDE5MmMtNC40IDAtOC0zLjYtOC04eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Corner: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 184c0-4.4 3.6-8 8-8l408 0c17.7 0 32 14.3 32 32l0 168c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-168c0-8.8-7.2-16-16-16L8 192c-4.4 0-8-3.6-8-8z" />
    </Icon>
);

export default Corner;