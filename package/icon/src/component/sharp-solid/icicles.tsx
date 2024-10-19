
import { Icon } from "../../index";

/**
 * A component that renders the `icicles` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/icicles?s=sharp-solid icicles}
 * @preview ![icicles](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNOTYgMzUyTDAgMEg1MTJMNDE2IDUxMiAzMzYgMTYwIDI4OCAzNTIgMjQwIDE5MiAxOTIgNDE2IDE0NCAxOTIgOTYgMzUyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Icicles: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 352L0 0H512L416 512 336 160 288 352 240 192 192 416 144 192 96 352z" />
    </Icon>
);

export default Icicles;