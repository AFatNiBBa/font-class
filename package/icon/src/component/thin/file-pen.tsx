
import { Icon } from "../../index";

/**
 * A component that renders the `file-pen` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-pen?s=thin file-pen}
 * @preview ![file-pen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgNDk2bDE5MiAwYzAgNS41IC45IDEwLjkgMi43IDE2TDY0IDUxMmMtMzUuMyAwLTY0LTI4LjctNjQtNjRMMCA2NEMwIDI4LjcgMjguNyAwIDY0IDBMMjA0LjEgMGMxMi43IDAgMjQuOSA1LjEgMzMuOSAxNC4xTDM2OS45IDE0NS45YzkgOSAxNC4xIDIxLjIgMTQuMSAzMy45bDAgMTA1LjgtMTYgMTYgMC0xMjEuOGMwLTEuMy0uMS0yLjYtLjItMy45TDI0OCAxNzZjLTIyLjEgMC00MC0xNy45LTQwLTQwbDAtMTE5LjhjLTEuMy0uMi0yLjYtLjItMy45LS4yTDY0IDE2QzM3LjUgMTYgMTYgMzcuNSAxNiA2NGwwIDM4NGMwIDI2LjUgMjEuNSA0OCA0OCA0OHpNMzYxLjEgMTYwYy0uOC0xLTEuNi0xLjktMi40LTIuN0wyMjYuNyAyNS40Yy0uOS0uOS0xLjgtMS43LTIuNy0yLjRMMjI0IDEzNmMwIDEzLjMgMTAuNyAyNCAyNCAyNGwxMTMuMSAwek0yOTIuNyA1MDcuMmMtNC00LTUuNi05LjctNC4yLTE1LjJsMTUtNjAuMWMxLjQtNS42IDQuMy0xMC44IDguNC0xNC45TDQ5My4yIDIzNS43YzE1LjYtMTUuNiA0MC45LTE1LjYgNTYuNiAwbDE0LjQgMTQuNGMxNS42IDE1LjYgMTUuNiA0MC45IDAgNTYuNkwzODIuOSA0ODcuOWMtNC4xIDQuMS05LjIgNy0xNC45IDguNGwtMy40LTEzLjYgMy40IDEzLjYtNjAuMSAxNWMtNS41IDEuNC0xMS4yLS4yLTE1LjItNC4yem0xNS43LTI4LjlMMzA0IDQ5NS44bDE3LjYtNC40IDQyLjUtMTAuNmMyLjgtLjcgNS40LTIuMiA3LjQtNC4yTDUxNC40IDMzMy43bC00OC4zLTQ4LjNMMzIzLjIgNDI4LjNjLTIgMi4xLTMuNSA0LjYtNC4yIDcuNGwtMTAuNiA0Mi41ek01NTIuOCAyOTUuNGM5LjQtOS40IDkuNC0yNC42IDAtMzMuOUw1MzguNCAyNDdjLTkuNC05LjQtMjQuNi05LjQtMzMuOSAwbC0yNy4xIDI3LjEgNDguMyA0OC4zIDI3LjEtMjcuMXoiLz48L3N2Zz4=|width=32|height=32)
 */
const FilePen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 496l192 0c0 5.5 .9 10.9 2.7 16L64 512c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L204.1 0c12.7 0 24.9 5.1 33.9 14.1L369.9 145.9c9 9 14.1 21.2 14.1 33.9l0 105.8-16 16 0-121.8c0-1.3-.1-2.6-.2-3.9L248 176c-22.1 0-40-17.9-40-40l0-119.8c-1.3-.2-2.6-.2-3.9-.2L64 16C37.5 16 16 37.5 16 64l0 384c0 26.5 21.5 48 48 48zM361.1 160c-.8-1-1.6-1.9-2.4-2.7L226.7 25.4c-.9-.9-1.8-1.7-2.7-2.4L224 136c0 13.3 10.7 24 24 24l113.1 0zM292.7 507.2c-4-4-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9L493.2 235.7c15.6-15.6 40.9-15.6 56.6 0l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6L382.9 487.9c-4.1 4.1-9.2 7-14.9 8.4l-3.4-13.6 3.4 13.6-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2zm15.7-28.9L304 495.8l17.6-4.4 42.5-10.6c2.8-.7 5.4-2.2 7.4-4.2L514.4 333.7l-48.3-48.3L323.2 428.3c-2 2.1-3.5 4.6-4.2 7.4l-10.6 42.5zM552.8 295.4c9.4-9.4 9.4-24.6 0-33.9L538.4 247c-9.4-9.4-24.6-9.4-33.9 0l-27.1 27.1 48.3 48.3 27.1-27.1z" />
    </Icon>
);

export default FilePen;