
import { Icon } from "../../index";

/**
 * A component that renders the `person-booth` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-booth?s=thin person-booth}
 * @preview ![person-booth](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjY0IDE2Yy0xMy4zIDAtMjQgMTAuNy0yNCAyNGwwIDE1Mi0xNiAwIDAtMTUyYzAtMjIuMSAxNy45LTQwIDQwLTQwbDI0IDBMNTM2IDBjMjIuMSAwIDQwIDE3LjkgNDAgNDBsMCAzNTIgMCAxMTJjMCA0LjQtMy42IDgtOCA4cy04LTMuNi04LThsMC03Mi44Yy0xMC4yIDEwLjQtMjQuMyAxNi44LTQwIDE2LjhzLTI5LjgtNi40LTQwLTE2LjhjLTEwLjIgMTAuNC0yNC4zIDE2LjgtNDAgMTYuOHMtMjkuOC02LjQtNDAtMTYuOGMtMTAuMiAxMC40LTI0LjMgMTYuOC00MCAxNi44Yy0zMC45IDAtNTYtMjUuMS01Ni01NmwwLTdjMC02LjcgLjktMTMuMyAyLjgtMTkuOGwyOS0xMDEuNEwyODEuNiAxNiAyNjQgMTZ6bTMzLjkgMGw1My45IDI0Ni4zYy4zIDEuMyAuMiAyLjYtLjEgMy45TDMyMi4yIDM2OS42Yy0xLjQgNS0yLjIgMTAuMi0yLjIgMTUuNGwwIDdjMCAyMi4xIDE3LjkgNDAgNDAgNDBjMTMuOSAwIDI2LjItNy4xIDMzLjMtMTcuOWMxLjUtMi4yIDQtMy42IDYuNy0zLjZzNS4yIDEuMyA2LjcgMy42YzcuMiAxMC44IDE5LjQgMTcuOSAzMy4zIDE3LjlzMjYuMi03LjEgMzMuMy0xNy45YzEuNS0yLjIgNC0zLjYgNi43LTMuNnM1LjIgMS4zIDYuNyAzLjZjNy4yIDEwLjggMTkuNCAxNy45IDMzLjMgMTcuOWMyMi4xIDAgNDAtMTcuOSA0MC00MGwwLTM1MmMwLTEzLjMtMTAuNy0yNC0yNC0yNEwyOTcuOSAxNnpNMjQwIDMyMGwwIDE4NGMwIDQuNC0zLjYgOC04IDhzLTgtMy42LTgtOGwwLTE4NCAxNiAwek05OS4yIDM1MC45Yy0yLjEtMi44LTMuMi02LjEtMy4yLTkuNmwwLTcyLjFjMC02LjUgMy45LTEyLjMgOS45LTE0LjhzMTIuOS0xLjEgMTcuNCAzLjVsNC43IDQuN2M2IDYgMTQuMSA5LjQgMjIuNiA5LjRsNzMuNCAwYzguOCAwIDE2LTcuMiAxNi0xNnMtNy4yLTE2LTE2LTE2bC02Ni43IDBjLTQuMiAwLTguMy0xLjctMTEuMy00LjdsLTQxLjYtNDEuNkM5MyAxODIuNCA3Ny42IDE3NiA2MS42IDE3NkMzNi40IDE3NiAxNiAxOTYuNCAxNiAyMjEuNmwwIDU1LjcgMCAuOSAwIC4xTDE2IDQ4MGMwIDguOCA3LjIgMTYgMTYgMTZzMTYtNy4yIDE2LTE2bDAtOTZjMC02LjkgNC40LTEzIDEwLjktMTUuMnMxMy43IC4xIDE3LjkgNS42bDMyIDQyLjdjMi4xIDIuOCAzLjIgNi4xIDMuMiA5LjZsMCA1My4zYzAgOC44IDcuMiAxNiAxNiAxNnMxNi03LjIgMTYtMTZsMC01OC43YzAtNi45LTIuMi0xMy43LTYuNC0xOS4yTDk5LjIgMzUwLjl6TTAgMjc3LjNsMC01NS43YzAtMzQgMjcuNi02MS42IDYxLjYtNjEuNmMyMC4zIDAgMzkuNyA4LjEgNTQgMjIuNEwxNTcuMyAyMjRsNjYuNyAwYzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMybC03My40IDBjLTggMC0xNS43LTItMjIuNi01LjdjLTQuMS0yLjItNy45LTUtMTEuMy04LjRsLTQuNy00LjcgMCA5LjQgMCAxMi40IDAgNTAuMyAzOC40IDUxLjJjNi4yIDguMyA5LjYgMTguNCA5LjYgMjguOGwwIDU4LjdjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJsMC01My4zTDgwIDQwNS4zIDY0IDM4NGwwIDI2LjdMNjQgNDgwYzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMyTDAgMjc4LjNsMC0uOXpNNjQgMTEyYTMyIDMyIDAgMSAwIDAtNjQgMzIgMzIgMCAxIDAgMCA2NHpNMTYgODBhNDggNDggMCAxIDEgOTYgMEE0OCA0OCAwIDEgMSAxNiA4MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const PersonBooth: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M264 16c-13.3 0-24 10.7-24 24l0 152-16 0 0-152c0-22.1 17.9-40 40-40l24 0L536 0c22.1 0 40 17.9 40 40l0 352 0 112c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-72.8c-10.2 10.4-24.3 16.8-40 16.8s-29.8-6.4-40-16.8c-10.2 10.4-24.3 16.8-40 16.8s-29.8-6.4-40-16.8c-10.2 10.4-24.3 16.8-40 16.8c-30.9 0-56-25.1-56-56l0-7c0-6.7 .9-13.3 2.8-19.8l29-101.4L281.6 16 264 16zm33.9 0l53.9 246.3c.3 1.3 .2 2.6-.1 3.9L322.2 369.6c-1.4 5-2.2 10.2-2.2 15.4l0 7c0 22.1 17.9 40 40 40c13.9 0 26.2-7.1 33.3-17.9c1.5-2.2 4-3.6 6.7-3.6s5.2 1.3 6.7 3.6c7.2 10.8 19.4 17.9 33.3 17.9s26.2-7.1 33.3-17.9c1.5-2.2 4-3.6 6.7-3.6s5.2 1.3 6.7 3.6c7.2 10.8 19.4 17.9 33.3 17.9c22.1 0 40-17.9 40-40l0-352c0-13.3-10.7-24-24-24L297.9 16zM240 320l0 184c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-184 16 0zM99.2 350.9c-2.1-2.8-3.2-6.1-3.2-9.6l0-72.1c0-6.5 3.9-12.3 9.9-14.8s12.9-1.1 17.4 3.5l4.7 4.7c6 6 14.1 9.4 22.6 9.4l73.4 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-66.7 0c-4.2 0-8.3-1.7-11.3-4.7l-41.6-41.6C93 182.4 77.6 176 61.6 176C36.4 176 16 196.4 16 221.6l0 55.7 0 .9 0 .1L16 480c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96c0-6.9 4.4-13 10.9-15.2s13.7 .1 17.9 5.6l32 42.7c2.1 2.8 3.2 6.1 3.2 9.6l0 53.3c0 8.8 7.2 16 16 16s16-7.2 16-16l0-58.7c0-6.9-2.2-13.7-6.4-19.2L99.2 350.9zM0 277.3l0-55.7c0-34 27.6-61.6 61.6-61.6c20.3 0 39.7 8.1 54 22.4L157.3 224l66.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-73.4 0c-8 0-15.7-2-22.6-5.7c-4.1-2.2-7.9-5-11.3-8.4l-4.7-4.7 0 9.4 0 12.4 0 50.3 38.4 51.2c6.2 8.3 9.6 18.4 9.6 28.8l0 58.7c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-53.3L80 405.3 64 384l0 26.7L64 480c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 278.3l0-.9zM64 112a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM16 80a48 48 0 1 1 96 0A48 48 0 1 1 16 80z" />
    </Icon>
);

export default PersonBooth;