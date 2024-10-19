
import { Icon } from "../../index";

/**
 * A component that renders the `hammer` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hammer?s=regular hammer}
 * @preview ![hammer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDMyLjggMjA0LjljLTkuMS05LjEtMjEuNS0xNC4yLTM0LjQtMTQuMWMtMTEuMyAuMS0yMi40LTQuMS0zMS0xMi43TDMyOS4zIDE0MGMtNS45LTUuOS05LjMtMTQtOS4zLTIyLjRsMC0xMi4xYzAtMTcuNi05LjYtMzMuNy0yNS00Mi4xTDI3My4zIDUxLjVjOC40LTIuMyAxNy4xLTMuNSAyNS44LTMuNWwxOC4xIDBjMjQuNSAwIDQ4IDkuMyA2NS44IDI2LjFsNDQuNiA0MmM5LjcgOS4xIDE0LjMgMjEuNyAxMy41IDM0LjFjLS44IDEzLjcgNC4zIDI3LjEgMTQgMzYuOGwzNyAzN0w0NzIgMjQ0LjFsLTM5LjItMzkuMnpNMjE2LjcgNzUuM2wuMyAuMiA1NSAzMCAwIDEyLjFjMCAyMS4xIDguNCA0MS40IDIzLjMgNTYuM2wzOC4xIDM4LjFjMTguMSAxOC4xIDQxLjggMjYuOSA2NS40IDI2LjdsMzkuMiAzOS4yIDEgMS0xNiAxNmMtOS40IDkuNC05LjQgMjQuNiAwIDMzLjlzMjQuNiA5LjQgMzMuOSAwTDU2OSAyMTdjOS40LTkuNCA5LjQtMjQuNiAwLTMzLjlzLTI0LjYtOS40LTMzLjkgMGwtOCA4LTEtMS0zNy0zN2MxLjYtMjYuMS04LTUyLjctMjguNS03MmwtNDQuNi00MkMzODkuMiAxNCAzNTMuOSAwIDMxNy4yIDBMMjk5LjIgMEMyNzkgMCAyNTkuMSA0LjIgMjQwLjcgMTIuNEwyMTkuMSAyMmwtLjMgLjEtNi4yIDIuOC0xOS4xIDguNWMtNS42IDIuNS05LjIgNy45LTkuNSAxNHMzIDExLjggOC4zIDE0LjdsMTguNCAxMCA2IDMuM3ptNDQuMiAxMDcuM0wyNy40IDM3Ny4xQzEwLjEgMzkxLjYgMCA0MTMuMSAwIDQzNS43QzAgNDc3LjggMzQuMSA1MTIgNzYuMyA1MTJjMjIuNiAwIDQ0LjEtMTAuMSA1OC42LTI3LjRMMzMwIDI1MC40Yy02LjgtNC41LTEzLjItOS43LTE5LjItMTUuN2wtMzguMS0zOC4xYy00LjMtNC4zLTguMy05LTExLjgtMTR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Hammer: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M432.8 204.9c-9.1-9.1-21.5-14.2-34.4-14.1c-11.3 .1-22.4-4.1-31-12.7L329.3 140c-5.9-5.9-9.3-14-9.3-22.4l0-12.1c0-17.6-9.6-33.7-25-42.1L273.3 51.5c8.4-2.3 17.1-3.5 25.8-3.5l18.1 0c24.5 0 48 9.3 65.8 26.1l44.6 42c9.7 9.1 14.3 21.7 13.5 34.1c-.8 13.7 4.3 27.1 14 36.8l37 37L472 244.1l-39.2-39.2zM216.7 75.3l.3 .2 55 30 0 12.1c0 21.1 8.4 41.4 23.3 56.3l38.1 38.1c18.1 18.1 41.8 26.9 65.4 26.7l39.2 39.2 1 1-16 16c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L569 217c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-8 8-1-1-37-37c1.6-26.1-8-52.7-28.5-72l-44.6-42C389.2 14 353.9 0 317.2 0L299.2 0C279 0 259.1 4.2 240.7 12.4L219.1 22l-.3 .1-6.2 2.8-19.1 8.5c-5.6 2.5-9.2 7.9-9.5 14s3 11.8 8.3 14.7l18.4 10 6 3.3zm44.2 107.3L27.4 377.1C10.1 391.6 0 413.1 0 435.7C0 477.8 34.1 512 76.3 512c22.6 0 44.1-10.1 58.6-27.4L330 250.4c-6.8-4.5-13.2-9.7-19.2-15.7l-38.1-38.1c-4.3-4.3-8.3-9-11.8-14z" />
    </Icon>
);

export default Hammer;