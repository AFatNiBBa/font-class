
import { Icon } from "../../index";

/**
 * A component that renders the `mountain-sun` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountain-sun?s=sharp-solid mountain-sun}
 * @preview ![mountain-sun](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTYwIDBhODAgODAgMCAxIDEgMCAxNjBBODAgODAgMCAxIDEgNTYwIDB6TTAgNDQ4TDI1NiA2NCA0MTIuOSAyOTkuNCA0ODAgMTkyIDY0MCA0NDhsMCA2NC0xMjggMC0xOTIgMEwwIDUxMmwwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const MountainSun: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M560 0a80 80 0 1 1 0 160A80 80 0 1 1 560 0zM0 448L256 64 412.9 299.4 480 192 640 448l0 64-128 0-192 0L0 512l0-64z" />
    </Icon>
);

export default MountainSun;