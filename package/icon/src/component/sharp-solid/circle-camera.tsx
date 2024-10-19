
import { Icon } from "../../index";

/**
 * A component that renders the `circle-camera` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-camera?s=sharp-solid circle-camera}
 * @preview ![circle-camera](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDUxMkEyNTYgMjU2IDAgMSAwIDI1NiAwYTI1NiAyNTYgMCAxIDAgMCA1MTJ6TTE5NiAxNjBsMTItMzIgOTYgMCAxMiAzMiA2OCAwIDAgMTkyLTI1NiAwIDAtMTkyIDY4IDB6bTEwOCA5NmE0OCA0OCAwIDEgMCAtOTYgMCA0OCA0OCAwIDEgMCA5NiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleCamera: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM196 160l12-32 96 0 12 32 68 0 0 192-256 0 0-192 68 0zm108 96a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default CircleCamera;