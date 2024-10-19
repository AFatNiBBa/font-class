
import { Icon } from "../../index";

/**
 * A component that renders the `tick` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tick?s=thin tick}
 * @preview ![tick](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDggOTZjMC0yNi41IDIxLjUtNDggNDgtNDhzNDggMjEuNSA0OCA0OGwwIDcuOWMwIDQuMi0uNSA4LjMtMS40IDEyLjRMMTA5LjcgMjYxLjFjLTEuNSA2LjQtNy4xIDEwLjktMTMuNyAxMC45cy0xMi4zLTQuNS0xMy43LTEwLjlMNDkuNCAxMTYuM2MtLjktNC4xLTEuNC04LjItMS40LTEyLjRMNDggOTZ6TTMyIDk2bDAgNy45YzAgNS40IC42IDEwLjcgMS44IDE1LjlMNjYuNyAyNjQuNkM2OS44IDI3OC4zIDgyIDI4OCA5NiAyODhzMjYuMi05LjcgMjkuMy0yMy40bDMyLjktMTQ0LjdjMS4yLTUuMiAxLjgtMTAuNiAxLjgtMTUuOWwwLTcuOWMwLTM1LjMtMjguNy02NC02NC02NFMzMiA2MC43IDMyIDk2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Tick: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M48 96c0-26.5 21.5-48 48-48s48 21.5 48 48l0 7.9c0 4.2-.5 8.3-1.4 12.4L109.7 261.1c-1.5 6.4-7.1 10.9-13.7 10.9s-12.3-4.5-13.7-10.9L49.4 116.3c-.9-4.1-1.4-8.2-1.4-12.4L48 96zM32 96l0 7.9c0 5.4 .6 10.7 1.8 15.9L66.7 264.6C69.8 278.3 82 288 96 288s26.2-9.7 29.3-23.4l32.9-144.7c1.2-5.2 1.8-10.6 1.8-15.9l0-7.9c0-35.3-28.7-64-64-64S32 60.7 32 96z" />
    </Icon>
);

export default Tick;