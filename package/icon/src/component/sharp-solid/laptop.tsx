
import { Icon } from "../../index";

/**
 * A component that renders the `laptop` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop?s=sharp-solid laptop}
 * @preview ![laptop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNOTYgMzJMNjQgMzJsMCAzMiAwIDI4OCA2NCAwIDAtMjU2IDM4NCAwIDAgMjU2IDY0IDAgMC0yODggMC0zMi0zMiAwTDk2IDMyek0wIDM4NGwwIDQ4IDQ4IDQ4IDU0NCAwIDQ4LTQ4IDAtNDhMMCAzODR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Laptop: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 32L64 32l0 32 0 288 64 0 0-256 384 0 0 256 64 0 0-288 0-32-32 0L96 32zM0 384l0 48 48 48 544 0 48-48 0-48L0 384z" />
    </Icon>
);

export default Laptop;