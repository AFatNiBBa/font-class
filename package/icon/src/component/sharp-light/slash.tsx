
import { Icon } from "../../index";

/**
 * A component that renders the `slash` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slash?s=sharp-light slash}
 * @preview ![slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTkuOSAuMUwzMi41IDEwIDYyNy41IDQ3Ny4xbDEyLjYgOS45LTE5LjggMjUuMi0xMi42LTkuOUwxMi43IDM1LjIgLjEgMjUuMyAxOS45IC4xeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Slash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M19.9 .1L32.5 10 627.5 477.1l12.6 9.9-19.8 25.2-12.6-9.9L12.7 35.2 .1 25.3 19.9 .1z" />
    </Icon>
);

export default Slash;