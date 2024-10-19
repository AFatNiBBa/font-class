
import { Icon } from "../../index";

/**
 * A component that renders the `wand` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wand?s=sharp-solid wand}
 * @preview ![wand](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNODAgNTEyTDAgNDMyIDEyOCAzMTYuOGwwLTYwLjggNjcuNiAwTDQ4MCAwbDMyIDMyTDQxNiAxMzguN2wwIDUzLjMtNDggMEw4MCA1MTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Wand: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80 512L0 432 128 316.8l0-60.8 67.6 0L480 0l32 32L416 138.7l0 53.3-48 0L80 512z" />
    </Icon>
);

export default Wand;