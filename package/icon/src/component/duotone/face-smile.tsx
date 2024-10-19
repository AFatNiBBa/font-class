
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-smile` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-smile?s=duotone face-smile}
 * @preview ![face-smile](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTEzOS45IDkwLjVjLTUuOC02LjctNS4xLTE2LjggMS42LTIyLjZzMTYuOC01LjEgMjIuNiAxLjZDMTgyIDM0Ni4yIDIxMi42IDM2OCAyNTYgMzY4czc0LTIxLjggOTEuOS00Mi41YzUuOC02LjcgMTUuOS03LjQgMjIuNi0xLjZzNy40IDE1LjkgMS42IDIyLjZDMzQ5LjggMzcyLjEgMzExLjEgNDAwIDI1NiA0MDBzLTkzLjgtMjcuOS0xMTYuMS01My41ek0yMDguNCAyMDhhMzIgMzIgMCAxIDEgLTY0IDAgMzIgMzIgMCAxIDEgNjQgMHptMTYwIDBhMzIgMzIgMCAxIDEgLTY0IDAgMzIgMzIgMCAxIDEgNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE3Ni40IDI0MGEzMiAzMiAwIDEgMCAwLTY0IDMyIDMyIDAgMSAwIDAgNjR6bTE2MCAwYTMyIDMyIDAgMSAwIDAtNjQgMzIgMzIgMCAxIDAgMCA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const FaceSmile: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm139.9 90.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5zM208.4 208a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm160 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
            <path d="M176.4 240a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm160 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default FaceSmile;