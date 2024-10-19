
import { Icon } from "../../index";

/**
 * A component that renders the `sun` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sun?s=sharp-solid sun}
 * @preview ![sun](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDczLjFMMTUwIDAgMTI2LjcgMTI2LjcgMCAxNTAgNzMuMSAyNTYgMCAzNjJsMTI2LjcgMjMuM0wxNTAgNTEybDEwNi03My4xTDM2MiA1MTJsMjMuMy0xMjYuN0w1MTIgMzYyIDQzOC45IDI1NiA1MTIgMTUwIDM4NS4zIDEyNi43IDM2MiAwIDI1NiA3My4xek0zNTIgMjU2YTk2IDk2IDAgMSAwIC0xOTIgMCA5NiA5NiAwIDEgMCAxOTIgMHptLTIyNCAwYTEyOCAxMjggMCAxIDEgMjU2IDAgMTI4IDEyOCAwIDEgMSAtMjU2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Sun: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 73.1L150 0 126.7 126.7 0 150 73.1 256 0 362l126.7 23.3L150 512l106-73.1L362 512l23.3-126.7L512 362 438.9 256 512 150 385.3 126.7 362 0 256 73.1zM352 256a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zm-224 0a128 128 0 1 1 256 0 128 128 0 1 1 -256 0z" />
    </Icon>
);

export default Sun;