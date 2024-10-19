
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-circle-xmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-circle-xmark?s=sharp-duotone-solid house-circle-xmark}
 * @preview ![house-circle-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI0MGwwIDQ3LjYgNjQuMSAwIDAgMjI0LjRMMjI0IDUxMmwwLTE2MCA5Ni43IDBjOC4xLTg5LjcgODMuNS0xNjAgMTc1LjMtMTYwYzguMyAwIDE2LjUgLjYgMjQuNSAxLjdMMjg4LjQgMCAwIDI0MHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM1MiAzNjhhMTQ0IDE0NCAwIDEgMSAyODggMCAxNDQgMTQ0IDAgMSAxIC0yODggMHptMjE0LjYtNDhMNTQ0IDI5Ny40bC0xMS4zIDExLjNMNDk2IDM0NS40bC0zNi43LTM2LjdMNDQ4IDI5Ny40IDQyNS40IDMyMGwxMS4zIDExLjNMNDczLjQgMzY4bC0zNi43IDM2LjdMNDI1LjQgNDE2IDQ0OCA0MzguNmwxMS4zLTExLjNMNDk2IDM5MC42bDM2LjcgMzYuN0w1NDQgNDM4LjYgNTY2LjYgNDE2bC0xMS4zLTExLjNMNTE4LjYgMzY4bDM2LjctMzYuN0w1NjYuNiAzMjB6Ii8+PC9zdmc+|width=32|height=32)
 */
const HouseCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 240l0 47.6 64.1 0 0 224.4L224 512l0-160 96.7 0c8.1-89.7 83.5-160 175.3-160c8.3 0 16.5 .6 24.5 1.7L288.4 0 0 240z" />
            <path d="M352 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm214.6-48L544 297.4l-11.3 11.3L496 345.4l-36.7-36.7L448 297.4 425.4 320l11.3 11.3L473.4 368l-36.7 36.7L425.4 416 448 438.6l11.3-11.3L496 390.6l36.7 36.7L544 438.6 566.6 416l-11.3-11.3L518.6 368l36.7-36.7L566.6 320z" />
    </Icon>
);

export default HouseCircleXmark;